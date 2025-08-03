# Payload CMS Marketing Site

This is the marketing site for Payload CMS, designed to showcase the platform and drive users to the main application.

## Features

- **Modern Design**: Clean, responsive design built with Tailwind CSS
- **No Authentication**: Public-facing site with no login required
- **Shared Components**: Can access shared components from the main project
- **Cross-Site Navigation**: Links to the main Payload CMS application

## Pages

- **Home** (`/`): Landing page with hero section and features overview
- **About** (`/about`): Information about Payload CMS and its mission
- **Features** (`/features`): Detailed feature showcase
- **Contact** (`/contact`): Contact form and information

## Development

### Running the Marketing Site Only

```bash
# From the root directory
pnpm dev:marketing
```

### Running Both Sites

```bash
# From the root directory
pnpm dev
```

This will start:
- Main Payload CMS site on http://localhost:3000
- Marketing site on http://localhost:3001

### Building

```bash
# Build marketing site only
pnpm build:marketing

# Build both sites
pnpm build
```

## Structure

```
marketing/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   ├── about/page.tsx      # About page
│   │   ├── features/page.tsx   # Features page
│   │   ├── contact/page.tsx    # Contact page
│   │   └── globals.css         # Global styles
│   └── components/             # Marketing-specific components
├── public/                     # Static assets
├── package.json                # Dependencies and scripts
├── next.config.js             # Next.js configuration
├── tailwind.config.js         # Tailwind CSS configuration
└── tsconfig.json              # TypeScript configuration
```

## Shared Components

The marketing site can access shared components from the main project using the `@shared` alias:

```typescript
import { Header, Footer } from '@shared/components'
```

## Navigation

The marketing site includes navigation links to the main Payload CMS application running on port 3000. Users can easily transition from the marketing site to the full application.

## Styling

The marketing site uses the same design system as the main application:
- Tailwind CSS for styling
- Consistent color scheme and typography
- Responsive design for all screen sizes
- Modern UI components and animations 