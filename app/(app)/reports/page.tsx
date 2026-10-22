"use client";
import { Card, Badge, WBtn, Field } from "@/components/ui";
import { STARTUPS } from "@/lib/data";

export default function Reports() {
  const invested = [2000, 5000, 1000, 3500, 800];
  const current = [2240, 5600, 980, 3900, 910];
  return (
    <div className="page">
      <h2 style={{ margin: "0 0 14px", color: "var(--navy)", fontSize: 21 }}>Investment reports</h2>
      <div className="row wrap" style={{ gap: 10, marginBottom: 16 }}><Field placeholder="Date range ▾" w={150} /><Field placeholder="Startup ▾" w={150} /><Field placeholder="Status ▾" w={130} /></div>
      <div className="kpi" style={{ gridTemplateColumns: "repeat(3,1fr)", marginBottom: 18 }}>
        {[["Total invested", "₹84,500"], ["Current value", "₹95,700"], ["Net gain", "+13.2%"]].map((k, i) => <div className="kpi-card" key={i}><div className="k-label">{k[0]}</div><div className="k-val">{k[1]}</div></div>)}
      </div>
      <Card style={{ padding: 0, overflow: "hidden" }}>
        <div style={{ overflowX: "auto" }}>
          <table className="tbl"><thead><tr><th>Startup</th><th>Invested</th><th>Date</th><th>Current value</th><th>Status</th><th>Report</th></tr></thead>
            <tbody>{STARTUPS.slice(0, 5).map((s, i) => <tr key={s.id}><td><b style={{ color: "var(--navy)" }}>{s.name}</b></td><td>₹{invested[i].toLocaleString("en-IN")}</td><td>12 Mar 2026</td><td style={{ color: "var(--ok)" }}>₹{current[i].toLocaleString("en-IN")}</td><td><Badge tone={i === 1 ? "amber" : "ok"}>{i === 1 ? "Pending" : "Active"}</Badge></td><td><WBtn kind="ghost" sm>⬇ PDF</WBtn></td></tr>)}</tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
