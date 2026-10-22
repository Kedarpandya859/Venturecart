# VentureKart

Retail equity-crowdfunding platform for Indian startups — built from the VentureKart wireframes.
Three roles: **Investor**, **Founder**, **Admin**. Next.js 14 (App Router) · TypeScript · Prisma · SQLite · Auth.js.

## Run it

```bash
npm install
npx prisma db push      # create the SQLite database
npm run db:seed         # load demo data (6 startups, 3 accounts)
npm run dev             # http://localhost:3000
```

## Demo accounts (password for all: `password123`)

| Role     | Email                   | Entry point        |
|----------|-------------------------|--------------------|
| Investor | ravi@email.com          | `/` → `/login`     |
| Founder  | ananya@paytrail.in      | `/founder`         |
| Admin    | admin@venturekart.in    | `/admin`           |

## Screen map (31 screens)

- **Investor** — `/` landing, `/signup`, `/kyc`, `/kyc-processing`, `/profile-create`, `/tour`,
  `/explore`, `/explore/[id]` (detail + invest modal), `/home`, `/portfolio`, `/reports`,
  `/index`, `/wallet`, `/notifications`, `/support`, `/settings`, `/profile`
- **Founder** — `/founder` gateway, `/founder/signup`, `/founder/kyc`, `/founder/terms`,
  `/founder/setup`, `/founder/home`, `/founder/listing`, `/founder/bids`, `/founder/documents`, `/founder/reports`
- **Admin** — `/admin` login, `/admin/dashboard`, `/admin/users`, `/admin/kyc`,
  `/admin/startups-review`, `/admin/bids`, `/admin/all-startups`, `/admin/analytics`, `/admin/tickets`

## Structure

```
app/                 route segments (one folder per screen)
  (app)/             investor authed shell (AppBar + frame)
  founder/  admin/   role flows
components/          ui.tsx (design-system primitives), shells, nav
lib/                 data.ts (seed data), prisma.ts
prisma/              schema.prisma, seed.ts, dev.db
```

The design system (navy + amber on warm paper, Work Sans / Caveat / JetBrains Mono)
lives in `app/globals.css` and `components/ui.tsx`, ported faithfully from the wireframes.
