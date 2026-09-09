# Avidhilda project images

Place the project header photo here as `cover.webp` (PNG and JPEG are also supported).
Place interface screenshots in `screenshots/`.

Suggested screenshots: homepage, CMS editor, user management, model approvals,
and events. Use clear images without private user information.

Import each image in `src/data/projects.ts`. Set the cover as `caseStudy.headerPhoto`
and add screenshots to `caseStudy.screenshots` with `src`, descriptive `alt`, and
an optional `caption`. Only reference files once they exist. The gallery stays
hidden while the screenshot list is empty.
