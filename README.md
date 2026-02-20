# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:


## Note — server code removed

This repository has been simplified to a frontend-only project. The previous `server/` folder (Express/API, models, and server package.json) has been removed.

To run the frontend locally:

- Install dependencies (if not already): `npm install`
- Start the dev server: `npm run dev`

If you previously relied on the server for dynamic content or uploads, you'll need to replace those features with a hosted API or static alternatives.


## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
