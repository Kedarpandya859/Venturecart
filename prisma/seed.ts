import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

const CR = 10_000_000;
const L = 100_000;

const STARTUPS = [
  { slug: "paytrail", name: "Paytrail", sector: "Fintech", tone: "navy", blurb: "UPI-native lending for gig workers", city: "Bengaluru", founded: 2023, askRupees: 1.2 * CR, valuationRupees: 24 * CR, equityPct: 5.0, raisedRupees: 62 * L },
  { slug: "curecart", name: "CureCart", sector: "Healthtech", tone: "ok", blurb: "Same-day medicine delivery, tier-2 India", city: "Hyderabad", founded: 2022, askRupees: 80 * L, valuationRupees: 16 * CR, equityPct: 4.2, raisedRupees: 62 * L },
  { slug: "farmlink", name: "FarmLink", sector: "Agritech", tone: "ok", blurb: "Direct farm-to-retail produce marketplace", city: "Pune", founded: 2023, askRupees: 60 * L, valuationRupees: 9 * CR, equityPct: 6.5, raisedRupees: 19 * L },
  { slug: "lernie", name: "Lernie", sector: "Edtech", tone: "amber", blurb: "Vernacular upskilling for Bharat", city: "Jaipur", founded: 2022, askRupees: 95 * L, valuationRupees: 14 * CR, equityPct: 5.5, raisedRupees: 61 * L },
  { slug: "stackq", name: "StackQ", sector: "SaaS", tone: "navy", blurb: "Compliance automation for SMBs", city: "Bengaluru", founded: 2021, askRupees: 1.5 * CR, valuationRupees: 30 * CR, equityPct: 5.0, raisedRupees: 1.3 * CR },
  { slug: "voltgo", name: "VoltGo", sector: "EV", tone: "ok", blurb: "Battery-swap network for 2-wheelers", city: "Delhi", founded: 2024, askRupees: 2 * CR, valuationRupees: 40 * CR, equityPct: 5.0, raisedRupees: 38 * L, status: "IN_REVIEW" },
];

async function main() {
  // wipe (dev only)
  await prisma.investment.deleteMany();
  await prisma.walletTxn.deleteMany();
  await prisma.report.deleteMany();
  await prisma.ticket.deleteMany();
  await prisma.startup.deleteMany();
  await prisma.user.deleteMany();

  const hash = await bcrypt.hash("password123", 10);

  const admin = await prisma.user.create({
    data: { email: "admin@venturekart.in", passwordHash: hash, name: "Admin", role: "ADMIN", kycStatus: "VERIFIED" },
  });

  const ravi = await prisma.user.create({
    data: { email: "ravi@email.com", passwordHash: hash, name: "Ravi Sharma", phone: "+91 98765 43210", role: "INVESTOR", kycStatus: "VERIFIED", city: "Mumbai", walletBalance: 6300 },
  });

  const ananya = await prisma.user.create({
    data: { email: "ananya@paytrail.in", passwordHash: hash, name: "Ananya Rao", phone: "+91 91234 56780", role: "FOUNDER", kycStatus: "VERIFIED", city: "Bengaluru" },
  });

  const startups = [];
  for (const s of STARTUPS) {
    const created = await prisma.startup.create({
      data: {
        slug: s.slug, name: s.name, sector: s.sector, tone: s.tone, blurb: s.blurb, city: s.city, founded: s.founded,
        askRupees: Math.round(s.askRupees), valuationRupees: Math.round(s.valuationRupees), equityPct: s.equityPct,
        raisedRupees: Math.round(s.raisedRupees), status: (s as any).status ?? "LIVE",
        closesAt: new Date(Date.now() + 6 * 864e5),
        founderId: s.slug === "paytrail" ? ananya.id : undefined,
      },
    });
    startups.push(created);
  }

  // a couple of investments for Ravi
  const paytrail = startups.find(s => s.slug === "paytrail")!;
  const stackq = startups.find(s => s.slug === "stackq")!;
  await prisma.investment.create({ data: { investorId: ravi.id, startupId: stackq.id, amountRupees: 2000, feeRupees: 40, equityPct: 0.0083, status: "CONFIRMED", method: "WALLET" } });
  await prisma.investment.create({ data: { investorId: ravi.id, startupId: paytrail.id, amountRupees: 1000, feeRupees: 20, equityPct: 0.004, status: "PENDING", method: "UPI" } });

  await prisma.walletTxn.createMany({
    data: [
      { userId: ravi.id, type: "DEBIT", amountRupees: 2000, description: "Bid · StackQ", status: "DONE" },
      { userId: ravi.id, type: "CREDIT", amountRupees: 5000, description: "Added via UPI", status: "DONE" },
      { userId: ravi.id, type: "DEBIT", amountRupees: 1000, description: "Bid · FarmLink", status: "PENDING" },
      { userId: ravi.id, type: "CREDIT", amountRupees: 1200, description: "Returns · CureCart", status: "DONE" },
    ],
  });

  await prisma.report.createMany({
    data: [
      { startupId: paytrail.id, title: "Funding summary", dueDate: "Jul 2026", uploaded: true },
      { startupId: paytrail.id, title: "6-month report 1", dueDate: "Jan 2027", uploaded: false },
    ],
  });

  await prisma.ticket.create({ data: { userId: ravi.id, subject: "Withdrawal delay", status: "IN_PROGRESS", assignee: "Neha" } });

  console.log("Seeded:", { admin: admin.email, investor: ravi.email, founder: ananya.email, startups: startups.length });
}

main().then(() => prisma.$disconnect()).catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1); });
