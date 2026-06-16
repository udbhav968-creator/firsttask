# CIPL Studio Website

A six-page React website built with Vite, featuring responsive navigation, modern green-themed styling, and a functional contact form.

## Overview

This repository now contains a full React-based website for CIPL Studio. The site includes Home, About, Services, Portfolio, Blog, and Contact pages with client-side routing powered by `react-router-dom`.

## Features

- Six-page responsive website
- React Router navigation between pages
- Clean green-themed UI and layout
- Functional contact form with local submit feedback
- Production-ready Vite build

## Tech Stack

- React 18
- Vite
- React Router Dom
- JavaScript (ESM)
- CSS styling

## Setup

```bash
npm install
npm run dev
```

Open the URL shown in the terminal after Vite starts.

## Project Structure

- `index.html` — application entry point
- `package.json` — project metadata and scripts
- `src/main.jsx` — React application bootstrap
- `src/App.jsx` — site routing and layout
- `src/styles.css` — shared website styling
- `src/pages/` — individual page components for each route

## Pages

- `Home` — hero introduction and features
- `About` — studio mission and values
- `Services` — service offerings overview
- `Portfolio` — sample project concepts
- `Blog` — article summaries and guidance
- `Contact` — contact form and contact details

## Deployment

The website is ready for deployment via any static hosting provider that supports Vite builds.

```bash
npm run build
```

## License

This project is released under the MIT License.
