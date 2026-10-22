// Shared demo/seed data for VentureKart. The DB seed mirrors this set.

export type Tone = "navy" | "ok" | "amber";

export interface Startup {
  id: string;
  name: string;
  sector: string;
  tone: "navy" | "ok" | "amber";
  pct: number;            // % funded
  blurb: string;
  raised: string;         // human raised, e.g. "₹62 L"
  ask: string;            // human ask, e.g. "₹1.2 Cr"
  valuation: string;      // e.g. "₹24 Cr"
  equity: string;         // e.g. "5.0%"
  closesIn: string;       // e.g. "6 days"
  investors: number;
  city: string;
  founded: number;
}

export const SECTORS = ["All", "Fintech", "Healthtech", "Edtech", "Agritech", "SaaS", "D2C", "Deeptech", "EV"];

export const STARTUPS: Startup[] = [
  { id: "paytrail", name: "Paytrail", sector: "Fintech", tone: "navy", pct: 52, blurb: "UPI-native lending for gig workers", raised: "₹62 L", ask: "₹1.2 Cr", valuation: "₹24 Cr", equity: "5.0%", closesIn: "6 days", investors: 312, city: "Bengaluru", founded: 2023 },
  { id: "curecart", name: "CureCart", sector: "Healthtech", tone: "ok", pct: 78, blurb: "Same-day medicine delivery, tier-2 India", raised: "₹62 L", ask: "₹80 L", valuation: "₹16 Cr", equity: "4.2%", closesIn: "11 days", investors: 248, city: "Hyderabad", founded: 2022 },
  { id: "farmlink", name: "FarmLink", sector: "Agritech", tone: "ok", pct: 31, blurb: "Direct farm-to-retail produce marketplace", raised: "₹19 L", ask: "₹60 L", valuation: "₹9 Cr", equity: "6.5%", closesIn: "18 days", investors: 96, city: "Pune", founded: 2023 },
  { id: "lernie", name: "Lernie", sector: "Edtech", tone: "amber", pct: 64, blurb: "Vernacular upskilling for Bharat", raised: "₹61 L", ask: "₹95 L", valuation: "₹14 Cr", equity: "5.5%", closesIn: "9 days", investors: 173, city: "Jaipur", founded: 2022 },
  { id: "stackq", name: "StackQ", sector: "SaaS", tone: "navy", pct: 88, blurb: "Compliance automation for SMBs", raised: "₹1.3 Cr", ask: "₹1.5 Cr", valuation: "₹30 Cr", equity: "5.0%", closesIn: "4 days", investors: 401, city: "Bengaluru", founded: 2021 },
  { id: "voltgo", name: "VoltGo", sector: "EV", tone: "ok", pct: 19, blurb: "Battery-swap network for 2-wheelers", raised: "₹38 L", ask: "₹2 Cr", valuation: "₹40 Cr", equity: "5.0%", closesIn: "22 days", investors: 64, city: "Delhi", founded: 2024 },
];

export function getStartup(id: string) {
  return STARTUPS.find(s => s.id === id);
}

export const INDEX_TICKER: [string, string, "up" | "down"][] = [
  ["VKTECH", "+2.3%", "up"], ["VKHEALTH", "−0.8%", "down"], ["VKAGRI", "+1.1%", "up"],
  ["VKFIN", "+0.6%", "up"], ["VKEV", "+3.4%", "up"], ["VKD2C", "−1.2%", "down"],
];
