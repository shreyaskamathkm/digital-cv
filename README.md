# Digital CV - Shreyas Kamath

A modern, responsive digital CV/portfolio built with React, Vite, and Framer Motion. This project showcases professional experience, skills, publications, and research interests with a clean, Apple-inspired design.

## Features

- **Modern Layout**: Responsive "Side-by-Side" design with sticky section headers.
- **Animations**: Smooth scroll reveal animations using Framer Motion.
- **Interactive Elements**: Hover effects, bento grid for skills, and dynamic components.
- **Dark Mode Aesthetic**: Custom refined dark theme with "Deep Aurora" animated background.

## Tech Stack

- **React 18**: UI Library
- **Vite**: Build Tool
- **Framer Motion**: Animations
- **Lucide React**: Icons
- **CSS Modules/Variables**: Styling

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/shreyaskamathkm/digital-cv.git
   cd digital-cv
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run development server:
   ```bash
   npm run dev
   ```

## Building for Production

To create a production build:

```bash
npm run build
```

The output will be in the `dist/` folder.

## Deployment (GitHub Pages)

This project is configured for deployment to GitHub Pages.

1. Ensure your changes are committed:
   ```bash
   git add .
   git commit -m "Update CV"
   ```

2. Run the deploy script:
   ```bash
   npm run deploy
   ```

This command builds the project and pushes the `dist` folder to the `gh-pages` branch. The site will be available at: https://shreyaskamathkm.github.io/digital-cv/
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).
## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Google Analytics Setup

This project uses `react-ga4` for Google Analytics tracking. To enable it, you need to provide your Measurement ID.

### 1. Get your Measurement ID
1. Go to [Google Analytics](https://analytics.google.com/).
2. Create a new property or use an existing one.
3. Find your **Measurement ID** (format: `G-XXXXXXXXXX`) in Admin > Data Streams.

### 2. Local Development
1. Create a `.env` file in the root directory (you can use `.env.example` as a template):
   ```bash
   cp .env.example .env
   ```
2. Add your Measurement ID to the `.env` file:
   ```env
   VITE_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
   ```

### 3. Production (GitHub Pages)
To enable analytics on your deployed site, you must add the Measurement ID as a GitHub Secret.

1. Go to your repository on GitHub.
2. Navigate to **Settings** > **Secrets and variables** > **Actions**.
3. Click **New repository secret**.
4. Name: `GOOGLE_ANALYTICS_ID`
5. Value: Your Measurement ID (e.g., `G-XXXXXXXXXX`).
6. Click **Add secret**.

When you next deploy (push to main), the workflow will automatically inject this ID into the build.
