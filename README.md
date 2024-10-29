# Craft & Graft Frontend

> ~~is end at front~~ A React frontend for Craft & Graft project.

## Code Specs

- React with TypeScript support (JavaScript allowed)
- Uses ES6 module syntax (`import` instead of `require`)
- Designed to work with an Express backend
- Built with Vite for fast development and optimized production builds
- Can be run without compiling using `nodemon` and `tsx`

## Setup

- Step 1: Install dependencies:

```zsh
	npm install
```

- Step 2: Start the development server:

```zsh
	npm run dev
```

- Step 3: Build for production:

```zsh
	npm run build
```

- Step 4: Run without compiling (using `nodemon` and `tsx`):

```zsh
	npm run start:dev
```

## Project Structure

```src
PRO04 Front/
├── src/
│ ├── components/
│ ├── pages/
│ ├── App.tsx
│ ├── main.tsx
│ └── vite-env.d.ts
├── public/
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```

## Scripts

- `dev`: Run the development server
- `build`: Build for production
- `start:dev`: Run without compiling using `nodemon` and `tsx`
- `preview`: Preview the production build locally

## Dependencies

- React
- React DOM
- TypeScript
- Vite
- Nodemon
- TSX

For a complete list of dependencies, please refer to the `package.json` file.
