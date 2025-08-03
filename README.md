# Payload CMS Dual-Site Setup

This project contains both a Payload CMS application and a marketing site, allowing you to run them independently or together.

## 🏗️ Project Structure

```
payload-dual/
├── src/                          # Main Payload CMS application
│   ├── app/
│   │   ├── (payload)/           # Admin interface (port 3000)
│   │   └── (frontend)/          # Public-facing site (port 3000)
│   ├── components/               # Shared components
│   ├── collections/              # Payload collections
│   └── ...
├── marketing/                    # Marketing site (port 3001)
│   ├── src/app/                 # Marketing pages
│   ├── package.json             # Marketing dependencies
│   └── ...
└── package.json                 # Root package.json with dual-site scripts
```

## 🚀 Quick Start

### Running Both Sites

```bash
# Install dependencies
pnpm install

# Run both sites simultaneously
pnpm dev
```

This will start:
- **Main Payload CMS site**: http://localhost:3000
- **Marketing site**: http://localhost:3001

### Running Individual Sites

```bash
# Run only the main Payload CMS site
pnpm dev:main

# Run only the marketing site
pnpm dev:marketing
```

## 📱 Sites Overview

### Main Payload CMS Site (Port 3000)
- **Admin Interface**: `/admin` - Full Payload CMS admin panel
- **Public Site**: `/` - Content-driven public-facing site
- **Features**: Authentication, content management, API endpoints
- **Use Case**: Your main application with full CMS functionality

### Marketing Site (Port 3001)
- **Public Site**: `/` - Marketing landing page
- **Features**: No authentication, static pages, modern design
- **Use Case**: Lead generation and product showcase
- **Navigation**: Links to main site for conversion

## 🛠️ Development

### Scripts

```bash
# Development
pnpm dev                    # Run both sites
pnpm dev:main              # Run main site only
pnpm dev:marketing         # Run marketing site only

# Building
pnpm build                 # Build main site
pnpm build:marketing       # Build marketing site

# Production
pnpm start:main           # Start main site in production
pnpm start:marketing      # Start marketing site in production
```

### Shared Components

Both sites can use shared components from the main project:

```typescript
// In marketing site
import { Button, Logo } from '@shared/components'

// In main site
import { Button, Logo } from '@/components'
```

### Cross-Site Navigation

The marketing site includes navigation to the main application:
- "Go to App" buttons link to http://localhost:3000
- Users can seamlessly transition from marketing to main app

## 🎨 Design System

Both sites share the same design system:
- **Tailwind CSS** for styling
- **Consistent color scheme** and typography
- **Responsive design** for all screen sizes
- **Modern UI components** and animations

## 📄 Marketing Site Pages

- **Home** (`/`): Landing page with hero and features
- **About** (`/about`): Company and product information
- **Features** (`/features`): Detailed feature showcase
- **Contact** (`/contact`): Contact form and information

## 🔧 Configuration

### Main Site Configuration
- **Next.js** with Payload CMS integration
- **PostgreSQL** database
- **TypeScript** throughout
- **Authentication** and authorization

### Marketing Site Configuration
- **Next.js** standalone application
- **No database** required
- **TypeScript** support
- **Shared component** access

## 🚀 Deployment

### Main Site
- Deploy to your preferred platform (Vercel, Netlify, etc.)
- Configure database and environment variables
- Set up Payload CMS admin

### Marketing Site
- Deploy independently
- No database configuration needed
- Can be deployed to static hosting

## 📦 Dependencies

### Main Site
- Payload CMS and related packages
- Next.js with full-stack capabilities
- Database and authentication libraries

### Marketing Site
- Lightweight Next.js setup
- UI component libraries
- No CMS dependencies

## 🔗 Cross-Site Integration

The marketing site is designed to drive traffic to the main application:
- Clear call-to-action buttons
- Seamless navigation between sites
- Consistent branding and messaging
- Lead generation focused

## 🛡️ Security

- **Main site**: Full authentication and authorization
- **Marketing site**: Public access, no sensitive data
- **Shared components**: Safe to use across both sites
- **Environment variables**: Properly configured for each site

## 📈 Benefits

1. **Separation of Concerns**: Marketing and application logic are separate
2. **Independent Deployment**: Deploy sites separately as needed
3. **Shared Resources**: Reuse components and styling
4. **Flexible Scaling**: Scale each site independently
5. **Better Performance**: Marketing site is lightweight and fast
6. **Lead Generation**: Dedicated marketing site for conversions

## 🤝 Contributing

When adding new features:
1. **Shared components**: Add to `/src/components/`
2. **Main site features**: Add to `/src/` structure
3. **Marketing features**: Add to `/marketing/src/`
4. **Cross-site navigation**: Update links between sites

## 📝 Notes

- The marketing site runs on port 3001 to avoid conflicts
- Both sites can be run simultaneously using `concurrently`
- Shared components are accessible via the `@shared` alias in marketing
- The setup maintains clean separation while enabling code reuse
