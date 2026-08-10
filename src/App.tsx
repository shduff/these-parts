import { useEffect, useMemo, useState } from "react";
import { places, type BeenThere, type Place } from "./place-data";

const ALL = "All";

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
      <a className="index-link" href="#places">
        Index <span aria-hidden="true">↓</span>
      </a>
    </header>
  );
}

function PlaceCard({ place, index }: { place: Place; index: number }) {
  return (
    <article className="place-card">
      <a className="place-card__link" href={`#/place/${place.slug}`}>
        <div className="place-card__image">
          <img
            src={place.image}
            alt={`Cut-paper portrait of ${place.name}`}
            loading={index < 2 ? "eager" : "lazy"}
            decoding="async"
          />
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
  const [area, setArea] = useState(ALL);
  const [beenThere, setBeenThere] = useState<BeenThere | null>(null);

  const areas = useMemo(
    () => [ALL, ...Array.from(new Set(places.map((place) => place.area)))],
    [],
  );
  const visiblePlaces = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    return places.filter((place) => {
      const matchesSearch =
        !normalized ||
        [
          place.name,
          place.what,
          place.why,
          place.area,
          place.address,
        ].some((value) => value.toLowerCase().includes(normalized));

      return (
        matchesSearch &&
        (area === ALL || place.area === area) &&
        (beenThere === null || place.beenThere === beenThere)
      );
    });
  }, [area, beenThere, query]);

  const hasFilters = query !== "" || area !== ALL || beenThere !== null;

  function clearFilters() {
    setQuery("");
    setArea(ALL);
    setBeenThere(null);
  }

  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero">
          <img
            className="hero__art"
            src="./art/these-parts-hero.png"
            alt=""
            aria-hidden="true"
            fetchPriority="high"
          />
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
          <a className="hero__jump" href="#places">
            Look around <span aria-hidden="true">↓</span>
          </a>
        </section>

        <section className="index" id="places" aria-labelledby="places-heading">
          <div className="index-heading">
            <div>
              <p className="kicker">The index</p>
              <h2 id="places-heading">Where to next?</h2>
            </div>
            <p className="count" aria-live="polite">
              {visiblePlaces.length} of {places.length}
            </p>
          </div>

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
            <label>
              <span>Area</span>
              <select
                value={area}
                onChange={(event) => setArea(event.target.value)}
              >
                {areas.map((option) => (
                  <option key={option} value={option}>
                    {option === ALL ? "Everywhere" : option}
                  </option>
                ))}
              </select>
            </label>
            <fieldset className="been-there-filter">
              <legend>Been there?</legend>
              <div>
                {(["Done that.", "Not yet."] as BeenThere[]).map((option) => (
                  <button
                    key={option}
                    type="button"
                    aria-pressed={beenThere === option}
                    onClick={() =>
                      setBeenThere((current) =>
                        current === option ? null : option,
                      )
                    }
                  >
                    {option}
                  </button>
                ))}
              </div>
            </fieldset>
            {hasFilters && (
              <button type="button" className="clear" onClick={clearFilters}>
                Clear
              </button>
            )}
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

        <figure className="detail__art">
          <img src={place.image} alt={`Cut-paper portrait of ${place.name}`} />
        </figure>

        <header className="detail__heading">
          <p className="detail__number">
            <span>Been there?</span>
            <strong>{place.beenThere}</strong>
          </p>
          <h1>{place.name}</h1>
        </header>

        <div className="detail__fields">
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
          <section>
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
      : "These Parts — Places worth noticing";
  }, [place]);

  return place ? <PlacePage place={place} /> : <HomePage />;
}
