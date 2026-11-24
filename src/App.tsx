import { useEffect, useMemo, useState } from "react";
import { places, type Place } from "./place-data";

const colors = ["#CE9757","#B77570","#829B79","#8C8DAE","#C8B965","#729C9E"];
function paper(place: Place) { return colors[places.indexOf(place) % colors.length] || colors[0]; }
function normalize(s: string) { return s.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase(); }
function close(a: string,b: string) { if(a===b || b.includes(a)) return true; if(a.length<4) return false; let row=Array.from({length:b.length+1},(_,i)=>i); for(let i=1;i<=a.length;i++){let next=[i]; for(let j=1;j<=b.length;j++) next[j]=Math.min(next[j-1]+1,row[j]+1,row[j-1]+(a[i-1]===b[j-1]?0:1)); row=next;} return row[b.length]<= (a.length>7?2:1); }
function Photo({place}: {place: Place}) { return <div className="photo-paper" style={{backgroundColor:paper(place)}} aria-label={place.name} />; }

function getSlugFromHash() {
  const match = window.location.hash.match(/^#\/place\/([^/]+)$/);
  return match ? decodeURIComponent(match[1]) : null;
}

function SiteHeader() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#/" aria-label="These Parts home">
        These Parts
      </a>
      <nav className="site-nav" aria-label="Main">
        <a className="index-link" href="./plan/index.html">Plan your day</a>
        <a className="index-link" href="#places">
          Index <span aria-hidden="true">↓</span>
        </a>
      </nav>
    </header>
  );
}

function PlaceCard({ place, index }: { place: Place; index: number }) {
  return (
    <article className="place-card">
      <a className="place-card__link" href={`#/place/${place.slug}`}>
        <div className="place-card__image">
          <Photo place={place} />
        </div>
        <div className="place-card__content">
          <div className="place-card__meta">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <span>{place.beenThere}</span>
            <span>{place.area}</span>
          </div>
          <h3>{place.name}</h3>
          <div className="card-copy">
            <p>{place.what}</p>
          </div>
          <div className="place-card__foot">
            <span aria-hidden="true">Enter ↗</span>
          </div>
        </div>
      </a>
    </article>
  );
}

function HomePage() {
  const [query, setQuery] = useState("");
  const visiblePlaces = useMemo(() => { const terms=normalize(query).trim().split(/\s+/).filter(Boolean); return places.filter(place=>{const words=normalize([place.name,place.what,place.why,place.area,place.address,place.goodToKnow||"",place.beenThere].join(" ")).split(/[^a-z0-9]+/); return terms.every(term=>words.some(word=>close(term,word)));}); },[query]);
  function clearFilters(){setQuery("");}

  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero">
          <div className="hero-collage">{places.slice(0,4).map(place=><a key={place.slug} href={`#/place/${place.slug}`} aria-label={place.name}><Photo place={place}/></a>)}</div>
          <div className="hero__title">
            <p className="kicker">Other worlds, same bus line</p>
            <h1>
              These
              <br />
              Parts
            </h1>
            <p className="hero__intro">
              A guide to getting lost without leaving these parts.
            </p>
          </div>
          
        </section>

        <section className="index" id="places" aria-label="Index">
          <div className="filters" aria-label="Find and filter places">
            <label className="search">
              <span>Find</span>
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search these parts"
              />
            </label>
            
          </div>

          {visiblePlaces.length ? (
            <div className="place-grid">
              {visiblePlaces.map((place, index) => (
                <PlaceCard key={place.slug} place={place} index={index} />
              ))}
            </div>
          ) : (
            <div className="empty">
              <p>Nothing in these parts matches that combination.</p>
              <button type="button" onClick={clearFilters}>
                Start over
              </button>
            </div>
          )}
        </section>
      </main>
      <footer className="site-footer">
        <p>These Parts</p>
        <p>Take the long way home.</p>
      </footer>
    </>
  );
}

function PlacePage({ place }: { place: Place }) {
  const [copied, setCopied] = useState(false);

  async function sharePlace() {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.prompt("Copy this link:", url);
    }
  }

  return (
    <>
      <SiteHeader />
      <main className="detail">
        <div className="detail__topline">
          <a href="#/">← Back to the index</a>
          <button type="button" onClick={sharePlace}>
            {copied ? "Copied!" : "Share this place"}
          </button>
        </div>



        <header className="detail__heading">
          <p className="detail__number">
            <span>Been there?</span>
            <strong>{place.beenThere}</strong>
          </p>
          <h1>{place.name}</h1>
        </header>

        <div className="detail__fields"><div className="detail-practical">
          <section>
            <p className="field-label">What</p>
            <p>{place.what}</p>
          </section>

          <section>
            <p className="field-label">Where</p>
            <p>
              {place.area}
              <br />
              {place.address}
            </p>
            <a
              className="map-link"
              href={place.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
            >
              Open the map ↗
            </a>
          </section>
          {place.goodToKnow && (
            <section>
              <p className="field-label">Good to know</p>
              <p>{place.goodToKnow}</p>
            </section>
          )}
          </div><figure className="detail__art"><Photo place={place}/></figure>
          <section className="detail-why">
            <p className="field-label">Why</p>
            <p>{place.why}</p>
          </section>
        </div>

        <nav className="detail__next" aria-label="Other places">
          <p className="field-label">Elsewhere in the index</p>
          <div>
            {places
              .filter((candidate) => candidate.slug !== place.slug)
              .slice(0, 3)
              .map((candidate) => (
                <a key={candidate.slug} href={`#/place/${candidate.slug}`}>
                  {candidate.name} <span aria-hidden="true">↗</span>
                </a>
              ))}
          </div>
        </nav>
      </main>
      <footer className="site-footer">
        <p>These Parts</p>
        <p>When you want to go somewhere without going away.</p>
      </footer>
    </>
  );
}

export default function App() {
  const [slug, setSlug] = useState(getSlugFromHash);

  useEffect(() => {
    const onHashChange = () => {
      setSlug(getSlugFromHash());
      window.scrollTo({ top: 0, behavior: "instant" });
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const place = slug ? places.find((candidate) => candidate.slug === slug) : null;

  useEffect(() => {
    document.title = place
      ? `${place.name} — These Parts`
      : "These Parts — A personal map of home";
  }, [place]);

  return place ? <PlacePage place={place} /> : <HomePage />;
}
