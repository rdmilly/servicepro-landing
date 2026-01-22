# ServicePro Landing

Dynamic, personalized landing pages for service businesses. Built by [RevenueFirst.AI](https://revenuefirst.ai).

## Overview

A Next.js 14 application that creates dynamic, personalized landing pages for service business prospects. Each page adapts to the prospect's industry (HVAC, plumbing, electrical, moving, landscaping) with industry-specific:

- Headlines and pain points
- Calculator defaults
- Testimonials
- Color schemes and icons

## Features

### Two Personalization Modes

**Mode 1: URL Parameters (No Database Required)**
```
/welcome?name=John&company=Acme%20HVAC&industry=hvac
```
Works immediately, no database required.

**Mode 2: Database Slugs (Full Tracking)**
```
/welcome/john-acme-hvac-a3b4
```
Enables visit tracking, event logging, and prospect management.

### 6 Industry Variations

| Industry | Key | Color | Icon |
|----------|-----|-------|------|
| HVAC | `hvac` | Blue | ❄️ |
| Plumbing | `plumbing` | Teal | 🔧 |
| Electrical | `electrical` | Amber | ⚡ |
| Moving | `moving` | Purple | 📦 |
| Landscaping | `landscaping` | Green | 🌳 |
| Default | `default` | Emerald | 🏢 |

### Components

1. **Hero** - Personalized greeting with animated elements
2. **PainPoints** - Industry-specific pain points with icons
3. **VideoSection** - YouTube/direct video embed support
4. **RevenueCalculator** - Interactive calculator with sliders
5. **SocialProof** - Features list + testimonial
6. **BookingCTA** - TidyCal integration
7. **Footer** - Branded footer

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Database:** PostgreSQL (optional)
- **Deployment:** Coolify / Docker

## Quick Start

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Visit: http://localhost:3000

### Environment Variables

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://demo.revenuefirst.ai
NEXT_PUBLIC_SITE_NAME=RevenueFirst.AI

# Booking Integration
NEXT_PUBLIC_TIDYCAL_URL=https://tidycal.com/revenuefirst/discovery

# Database (PostgreSQL - optional, enables database mode)
DATABASE_URL=postgresql://user:password@localhost:5432/servicepro
```

### URL Parameters

| Parameter | Description | Example |
|-----------|-------------|--------|
| `name` or `first_name` | Prospect's first name | John |
| `company` or `company_name` | Business name | Acme HVAC |
| `industry` | Industry key | hvac, plumbing, electrical, moving, landscaping, default |
| `pain` or `pain_point` | Custom pain point | "we're losing calls" |
| `video` or `video_url` | Personal video URL | YouTube or direct URL |

## Deployment

### Via Coolify

1. Go to https://coolify.millyweb.com
2. Create New Resource → Application
3. Select GitHub → rdmilly/servicepro-landing
4. Build Pack: Nixpacks (auto-detected)
5. Add Environment Variables
6. Set Domain: demo.revenuefirst.ai
7. Deploy!

### Via Docker

```bash
# Build
docker build -t servicepro-landing .

# Run
docker run -p 3000:3000 servicepro-landing
```

## Project Structure

```
servicepro-landing/
├── app/
│   ├── globals.css
│   ├── layout.js
│   ├── page.js
│   ├── not-found.js
│   └── welcome/
│       ├── page.jsx
│       └── [slug]/
│           └── page.jsx
├── components/
│   ├── Hero.jsx
│   ├── PainPoints.jsx
│   ├── VideoSection.jsx
│   ├── RevenueCalculator.jsx
│   ├── SocialProof.jsx
│   ├── BookingCTA.jsx
│   └── Footer.jsx
├── lib/
│   ├── database.js
│   └── industry-content.js
├── package.json
├── tailwind.config.js
├── next.config.js
└── README.md
```

## License

Proprietary - RevenueFirst.AI

---

Built by [RevenueFirst.AI](https://revenuefirst.ai) | Powered by [Millyweb Development](https://millyweb.com)