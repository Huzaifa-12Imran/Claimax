# Claimax Backend

Node.js + Express API for Claimax Solutions — handles contact form submissions with dual branded email notifications.

## Stack
- **Node.js 20+** / **Express 4**
- **Nodemailer** — SMTP email delivery
- **express-validator** — input validation & sanitization
- **express-rate-limit** — 5 req/IP/hour abuse prevention
- **helmet** — security headers
- **cors** — origin whitelist
- **morgan** — request logging

## Quick Start

### 1. Install Dependencies
```bash
cd claimax-backend
npm install
```

### 2. Configure Environment
```bash
cp .env.example .env
```
Edit `.env` with your SMTP credentials (Gmail App Password recommended).

### 3. Run Development Server
```bash
npm run dev
```
Server starts on `http://localhost:5000`

### 4. Production
```bash
npm start
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/health` | Health check |
| POST | `/api/contact` | Submit contact form |

### POST `/api/contact`

**Request body:**
```json
{
  "name": "Dr. Jane Smith",
  "practice": "Smith Medical Group",
  "email": "jane@smithmedical.com",
  "phone": "8005246299",
  "revenue": "150K-500K",
  "message": "We're interested in learning more."
}
```

**Revenue values:** `<50K` | `50K-150K` | `150K-500K` | `500K+`

**Success (200):**
```json
{ "success": true, "message": "Thank you, Dr. Jane Smith! ..." }
```

**Validation error (422):**
```json
{ "errors": { "email": "Please enter a valid email address." } }
```

**Rate limited (429):**
```json
{ "error": "Too many requests from this IP. Please try again after 1 hour." }
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `PORT` | Server port (default: 5000) |
| `FRONTEND_URL` | Allowed CORS origin |
| `SMTP_HOST` | SMTP server host |
| `SMTP_PORT` | SMTP port (587 for TLS) |
| `SMTP_SECURE` | `true` for port 465, `false` for 587 |
| `SMTP_USER` | SMTP username |
| `SMTP_PASS` | SMTP password / app password |
| `FROM_EMAIL` | Sender display name + email |
| `ADMIN_EMAIL` | Where lead notifications are sent |
| `NODE_ENV` | `development` or `production` |

## Gmail Setup
1. Enable 2-Factor Authentication on your Google account
2. Go to **Google Account → Security → App Passwords**
3. Create an app password for "Mail"
4. Use that 16-character password as `SMTP_PASS`
