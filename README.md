# S & E Handyman

Next.js website for S & E Handyman, deployed on Vercel. GitHub is used for source control and triggers deployments through Vercel's Git integration.

## Local development

```bash
npm install
npm run dev -- --port 3001
```

## Deploy on Vercel

1. In Vercel, create a new project and import `kristhelsimon/sehandymanllc` from GitHub.
2. Keep the detected **Next.js** framework preset and the repository root as the root directory.
3. Use Vercel's default install and build commands.
4. Deploy. Pushes to `main` will create production deployments after the Git integration is connected.

## GoHighLevel lead capture

The existing styled forms submit through `/api/leads` to GHL's Contacts API.
Configure these private environment variables in Vercel for Production and Preview:

```text
GHL_PRIVATE_INTEGRATION_TOKEN=your-private-integration-token
GHL_LOCATION_ID=your-sub-account-location-id
```

The private integration needs the `contacts.write` scope. Never place its token in
frontend code or commit it to this repository.

Do not enable GitHub Pages for this repository; the live website is served by Vercel.
