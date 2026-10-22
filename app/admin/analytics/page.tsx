"use client";
import { AdminShell } from "@/components/AdminShell";

export default function AdminAnalytics() {
  return (
    <AdminShell title="Reports & analytics">
      <div className="kpi" style={{ gridTemplateColumns: "repeat(4,1fr)", gap: 14, marginBottom: 16 }}>{[["MAU", "8,210"], ["Bids / day", "184"], ["Avg ticket", "₹4,200"], ["Conversion", "6.4%"]].map((k, i) => <div className="adm-kpicard" key={i}><div className="k-label">{k[0]}</div><div className="k-val">{k[1]}</div></div>)}</div>
      <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 14 }} className="grid-2">
        <div className="adm-card"><div className="adm-h">Bids per day · last 14 days</div><div className="barchart" style={{ height: 140 }}>{[40, 55, 35, 70, 50, 80, 60, 45, 75, 65, 90, 55, 70, 85].map((h, i) => <div key={i} className="bar" style={{ height: h + "%", background: "var(--amber)" }} />)}</div></div>
        <div className="adm-card"><div className="adm-h">Most popular sectors</div>{[["Fintech", 88], ["SaaS", 72], ["Healthtech", 64], ["EV", 51], ["Agritech", 38]].map((s, i) => <div key={i} style={{ marginBottom: 12 }}><div className="row between" style={{ fontSize: 12.5, marginBottom: 5 }}><span>{s[0]}</span><b style={{ color: "#fff" }}>{s[1]}%</b></div><div style={{ height: 7, borderRadius: 99, background: "#16345a" }}><div style={{ height: "100%", width: s[1] + "%", borderRadius: 99, background: "var(--amber)" }} /></div></div>)}</div>
      </div>
    </AdminShell>
  );
}
