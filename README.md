# michael-peng-website

Personal website for Michael Peng, built with React 19 and Vite.

## Development

```bash
npm install
npm run dev       # start the dev server at http://localhost:5173
npm run build     # production build to build/
npm run preview   # serve the production build locally
```

## Editing content

Profile details, projects and links are in `src/data.js`. Project images live in `src/img/`.
The travelling-salesman demo is a standalone page in `public/AI/`.

## Hosting

Deployed with AWS Amplify Hosting. The build output goes to `build/`, the same folder the old Create React App build used.
