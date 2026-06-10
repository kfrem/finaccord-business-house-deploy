# Finaccord Business Assistant

A simple business-by-business work assistant for DataAnnotation, Mercor,
finance applications, and future work platforms.

## Features

- Plain daily task list ordered by urgency
- Separate card for every business or work platform
- Direct links back to each work website
- Clear completed, outstanding, next-action and health-check information
- Dated progress history
- Safe login-email display without publishing passwords
- Local progress-note entry

## Run locally

Serve this directory with any static web server:

```powershell
python -m http.server 4173
```

Locally entered history notes are stored in the browser's `localStorage`.
Canonical business status is maintained in the source data and can be updated
and republished by the Codex assistant.

## Deployment

The private development repository is mirrored to a public deployment-only
repository. Hostinger pulls the `main` branch into `public_html`.
