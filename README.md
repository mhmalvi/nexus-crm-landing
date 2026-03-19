# Nexus CRM Landing

The marketing and landing page application for the **Nexus CRM** microservices platform. Built with Next.js 14 and TypeScript, this site serves as the public-facing entry point, showcasing product features, pricing plans, and company information.

## Features

- **Responsive Landing Page** — Modern, mobile-first design with smooth animations and carousel components
- **Pricing Plans** — Interactive pricing page with tiered plan comparison
- **About Us** — Company story, team profiles, and mission statement
- **Contact Us** — Contact form with backend integration for lead capture
- **Support Portal** — Help resources and support request submission
- **SEO Optimized** — Server-side rendering with Next.js for optimal search engine indexing
- **Component Library** — Flowbite React components for rapid, consistent UI development

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| UI Components | Flowbite React, Ant Design 5 |
| Styling | Tailwind CSS 3 |
| HTTP Client | Axios |
| Icons | React Icons |
| Carousel | React Slick |
| Linting | ESLint (Next.js config) |

## Prerequisites

- Node.js >= 18
- npm or Yarn

## Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/mhmalvi/nexus-crm-landing.git
   cd nexus-crm-landing
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:3000`.

4. **Build for production**

   ```bash
   npm run build
   npm start
   ```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Create optimized production build |
| `npm start` | Serve the production build |
| `npm run lint` | Run ESLint checks |

## Project Structure

```
app/
├── Components/       # Shared UI components
├── about-us/         # About page
├── contact-us/       # Contact form page
├── pricing/          # Pricing plans page
├── support/          # Support portal page
├── layout.tsx        # Root layout with metadata
├── page.tsx          # Homepage
└── globals.css       # Global styles
public/               # Static assets and images
```

## Microservices Integration

This landing site is the public entry point for the Nexus CRM ecosystem. It connects to:

| Service | Purpose |
|---------|---------|
| nexus-crm-portal | Redirects authenticated users to the CRM portal |
| nexus-crm-users | Handles registration and authentication flows |
| nexus-crm-payments | Displays pricing data and initiates subscription flows |

## License

This project is proprietary software. All rights reserved.
