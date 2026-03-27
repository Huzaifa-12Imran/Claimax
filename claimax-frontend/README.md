# Claimax Frontend

React 18 + Vite + Tailwind CSS — the marketing & contact site for Claimax Solutions.

## Stack
- **React 18** · **Vite 5** · **Tailwind CSS 3**
- **Framer Motion** — animations
- **Lucide React** — icons
- **Axios** — API calls

## Quick Start

### 1. Install
```bash
cd claimax-frontend
npm install
```

### 2. Environment
```bash
cp .env.example .env
```

The only variable needed for dev is:
```
VITE_API_URL=http://localhost:5000
```

### 3. Run (with backend running)
```bash
npm run dev
```
Opens at **http://localhost:5173**

### 4. Build for production
```bash
npm run build
npm run preview
```

## Project Structure
```
src/
├── components/       # All 12 page sections
├── hooks/
│   ├── useCounterAnimation.js   # rAF counter, fires on viewport entry
│   └── useScrollReveal.js       # IntersectionObserver reveal
├── lib/
│   └── api.js                   # Axios instance + contact endpoint
├── App.jsx           # Layout + section assembly
├── main.jsx          # React root
└── index.css         # Global styles, design tokens, animations
```

## Pages / Sections
| Component | Section |
|-----------|---------|
| `Navbar` | Sticky frosted-glass nav |
| `Hero` | Full-viewport hero + dashboard mockup |
| `TrustBar` | Stats strip + marquee logo ticker |
| `Services` | Bento grid of 7 services |
| `KPIMetrics` | Animated counters |
| `HowItWorks` | 6-step timeline |
| `AIFeatures` | Feature list + live AI terminal |
| `Specialties` | 4×3 specialty grid |
| `Testimonials` | Auto-advancing carousel |
| `CTABlock` | Full-width CTA |
| `ContactForm` | Validated form + success state |
| `Footer` | Newsletter + links |

## Design System
Custom Tailwind tokens defined in `tailwind.config.js`:
- **Primary:** `#0A84FF` (electric blue)
- **Secondary:** `#00D4AA` (AI teal)
- **Dark:** `#060B18` (deep navy-black)
- **Surface:** `#0D1526` (card background)
- **Fonts:** Syne (display) · DM Sans (body) · JetBrains Mono (data)
