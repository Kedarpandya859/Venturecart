"use client";
import { Card, SectionH, Ticker, Lines, Ph } from "@/components/ui";
import { INDEX_TICKER } from "@/lib/data";

export default function IndexPage() {
  return (
    <div className="page">
      <h2 style={{ margin: "0 0 14px", color: "var(--navy)", fontSize: 21 }}>India Startup Index</h2>
      <div style={{ marginBottom: 18, overflowX: "auto" }}><Ticker items={INDEX_TICKER} /></div>
      <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 16 }} className="grid-2">
        <Card><SectionH>Sector performance — today</SectionH>
          <div className="barchart" style={{ marginBottom: 24 }}>{([["Tech", 80, "up"], ["Health", 40, "down"], ["Agri", 60, "up"], ["Fin", 55, "up"], ["EV", 90, "up"], ["D2C", 35, "down"], ["Edu", 50, "up"]] as [string, number, string][]).map((b, i) => <div key={i} className={"bar " + b[2]} style={{ height: b[1] + "%" }}><span>{b[0]}</span></div>)}</div>
        </Card>
        <Card><SectionH>Ecosystem news</SectionH><div className="col" style={{ gap: 12 }}>{[0, 1, 2, 3].map(i => <div key={i} className="row" style={{ gap: 10 }}><Ph w={52} h={42} label="" /><div style={{ flex: 1 }}><Lines n={2} last="55%" /><div style={{ fontSize: 10.5, color: "var(--muted)", marginTop: 6 }}>VCCircle · 3h ago</div></div></div>)}</div></Card>
      </div>
      <Card style={{ marginTop: 16, padding: 0, overflow: "hidden" }}><div style={{ padding: 18, paddingBottom: 0 }}><SectionH>Weekly / monthly sector trend</SectionH></div>
        <div style={{ overflowX: "auto", padding: "0 18px 18px" }}>
          <table className="tbl"><thead><tr><th>Sector</th><th>1W</th><th>1M</th><th>3M</th><th>Rounds live</th></tr></thead>
            <tbody>{([["Fintech", "+0.6%", "+4.2%", "+11%", 28], ["Healthtech", "−0.8%", "+2.1%", "+9%", 19], ["Agritech", "+1.1%", "+3.4%", "+6%", 12], ["EV", "+3.4%", "+8.0%", "+22%", 9]] as [string, string, string, string, number][]).map((r, i) => <tr key={i}><td><b style={{ color: "var(--navy)" }}>{r[0]}</b></td><td style={{ color: r[1][0] === "−" ? "var(--risk)" : "var(--ok)" }}>{r[1]}</td><td style={{ color: "var(--ok)" }}>{r[2]}</td><td style={{ color: "var(--ok)" }}>{r[3]}</td><td>{r[4]}</td></tr>)}</tbody></table>
        </div>
      </Card>
      <div style={{ fontSize: 11.5, color: "var(--muted)", marginTop: 12 }}>Indices are platform-curated and indicative only — not tradeable instruments.</div>
    </div>
  );
}
