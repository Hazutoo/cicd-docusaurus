# Dulewicz Docs — historical IT learning project (2023)

> **Status: retired / historical reference only.** This repository was built for learning system administration, DevOps, documentation-as-code, and container deployment in 2023. It has not been actively used or maintained for years. It is preserved as a record of that learning period, **not** as a current production deployment or a recommended configuration.

## What this repository contains

- `my-website/` — a Docusaurus 2 documentation site with notes about Linux, networking, containers, Kubernetes, CI/CD tools, and homelab topics.
- `all.Dockerfile` — an illustrative two-stage build (Node.js build stage, Nginx static hosting).
- `argocd-k8s/` — sample Kubernetes Deployment and Service manifests used in the learning setup.

The name `cicd-docusaurus` reflects the original learning exercise. **No maintained CI/CD pipeline definition is included** in this repository.

## Historical build example

```bash
docker build -f all.Dockerfile -t docusaurus-legacy .
docker run --rm -p 8080:80 docusaurus-legacy
```

These commands are provided for reference **only**; the build has not been re-tested as part of the 2026 cleanup. The original dependency versions, base images, infrastructure details, and some tutorials are old. Do not assume they still work or follow current security guidance.

## Retirement cleanup (November 2026)

- Removed tracked TeamCity agent runtime/configuration artifacts that do not belong in a documentation repository.
- Removed obsolete split Dockerfile fragments; `all.Dockerfile` is the single illustrative Docker build definition.
- Removed an unused root-level lockfile and added ignore rules for local runtime files and generated artifacts.
- Simplified the Docker build steps and marked the documentation as historical.

**Credential note:** The `authorizationToken` fields in the two tracked TeamCity agent property files were blank when reviewed. This does **not** prove that all historical credentials have expired or been revoked. The deleted files remain accessible in earlier Git commits unless history is rewritten. Do not reuse any historical credentials or internal endpoint settings.

## Known limitations

- Many notes are incomplete (`WIP`), contain old commands, or use Obsidian-style links/images that may not render in Docusaurus.
- The Docusaurus/React dependencies and container base images have not been updated or security-audited for current use.
- No current deployment, end-to-end build validation, or comprehensive secret scan is claimed.

**Maintenance policy:** No new features are planned. This repository is intended to be archived (read-only) after the retirement PR is reviewed and merged.
