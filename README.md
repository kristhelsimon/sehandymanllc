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

Do not enable GitHub Pages for this repository; the live website is served by Vercel.
