"use client";
import { FounderShell } from "@/components/FounderShell";
import { Card, Badge, Progress, Gate } from "@/components/ui";

export default function FounderBids() {
  const rows: [string, string, string, string, "amber" | "ok"][] = [
    ["R. Sharma", "Mumbai", "₹2,000", "14 Jun · 10:32", "amber"],
    ["A. Kumar", "Pune", "₹500", "14 Jun · 09:58", "ok"],
    ["M. Thomas", "Delhi", "₹5,000", "13 Jun · 18:11", "ok"],
    ["S. Nair", "Kochi", "₹1,000", "13 Jun · 16:40", "ok"],
    ["P. Gupta", "Jaipur", "₹3,500", "13 Jun · 12:05", "ok"],
  ];
  return (
    <FounderShell url="/founder/bids">
      <div className="page">
        <h2 style={{ margin: "0 0 14px", color: "var(--navy)", fontSize: 21 }}>Bids received</h2>
        <div className="kpi" style={{ gridTemplateColumns: "repeat(3,1fr)", marginBottom: 16 }}>{[["Total bids", "312"], ["Amount raised", "₹62,00,000"], ["% of goal", "52%"]].map((k, i) => <div className="kpi-card" key={i}><div className="k-label">{k[0]}</div><div className="k-val">{k[1]}</div></div>)}</div>
        <Card style={{ marginBottom: 16 }}><div className="row between center" style={{ marginBottom: 10 }}><b style={{ color: "var(--navy)" }}>Toward ₹1.2 Cr goal</b><Badge tone="ok">● Live · 6 days left</Badge></div><Progress pct={52} /></Card>
        <Gate tag="ℹ PAYOUT" title="When you get funded">Funds will be credited to your verified account within <b>7 business days</b> of campaign close, after platform reconciliation.</Gate>
        <Card style={{ marginTop: 16, padding: 0, overflow: "hidden" }}>
          <div style={{ overflowX: "auto" }}>
            <table className="tbl"><thead><tr><th>Investor</th><th>City</th><th>Amount</th><th>Date & time</th><th>Status</th></tr></thead>
              <tbody>{rows.map((r, i) => <tr key={i}><td><b style={{ color: "var(--navy)" }}>{r[0]}</b></td><td>{r[1]}</td><td>{r[2]}</td><td>{r[3]}</td><td><Badge tone={r[4]}>{r[4] === "ok" ? "Confirmed" : "Pending"}</Badge></td></tr>)}</tbody></table>
          </div>
        </Card>
        <div style={{ fontSize: 11.5, color: "var(--muted)", marginTop: 12 }}>Privacy: founders see truncated names + city + amount only — never investor phone/email.</div>
      </div>
    </FounderShell>
  );
}
