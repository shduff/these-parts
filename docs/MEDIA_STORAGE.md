# Media Storage Plan

Last reviewed: July 27, 2026

## Recommendation

Use a two-stage approach:

1. **Now:** keep the small approved library in this repository so the project
   remains simple and GitHub Pages deployments remain self-contained. Serve
   compressed web derivatives, not unnecessarily large masters.
2. **Later:** when the image library or revision history starts making the
   repository cumbersome, move master images to a Cloudflare R2 bucket and
   keep only a small manifest plus optimized delivery URLs in the codebase.

## Why this is the right dividing line

GitHub Pages is a good fit for the static site, but its source repository and
published site each have a recommended/maximum scale of roughly 1 GB. GitHub
also recommends keeping repositories small and storing generated assets outside
Git when they become numerous. Git LFS is not an answer here because GitHub
Pages does not support it.

Cloudflare R2 is a sensible future home for image masters and derivatives
because it is S3-compatible, has a free monthly allowance, and does not charge
for direct internet egress. It is still an account and service to maintain, so
adding it before the collection needs it would create needless machinery.

## Proposed asset structure

Each place gets a stable slug:

```text
places/{slug}/master.png
places/{slug}/card.webp
places/{slug}/detail.webp
```

- `master.png`: best full-resolution generated source; archived, not loaded by
  the public site.
- `card.webp`: small grid image, around 900–1200 pixels wide.
- `detail.webp`: larger detail-page image, around 1600–2000 pixels wide.

Keep an asset manifest in the repository:

```ts
{
  slug: "mount-misery",
  card: "https://media.example.com/places/mount-misery/card.webp",
  detail: "https://media.example.com/places/mount-misery/detail.webp"
}
```

## Migration trigger

Move to R2 when any one of these becomes true:

- the repository approaches 500 MB;
- image pushes or site deployments become noticeably slow;
- there are several master revisions per place;
- the site adds contributor uploads;
- separate card/detail sizes become important for performance.

## Near-term media checklist

- Keep generated masters in a separate backed-up archive.
- Add only approved art to the public site.
- Generate WebP derivatives from masters in one reproducible step.
- Add image dimensions to prevent layout shift.
- Lazy-load cards below the first screen.
- Never embed attribution or licensing information only inside the image file;
  keep it in structured data.

## Decision

Do not add a paid media service yet. The planned future solution is Cloudflare
R2 with a custom media domain, but the current repo-first approach is simpler
and should remain free at this scale.

## Current references

- [GitHub Pages limits](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits)
- [GitHub repository limits](https://docs.github.com/en/repositories/creating-and-managing-repositories/repository-limits)
- [Git LFS and GitHub Pages](https://docs.github.com/en/repositories/working-with-files/managing-large-files/about-git-large-file-storage)
- [Cloudflare R2 pricing and free tier](https://developers.cloudflare.com/r2/pricing/)
