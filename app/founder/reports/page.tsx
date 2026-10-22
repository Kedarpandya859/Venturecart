"use client";
import { FounderShell } from "@/components/FounderShell";
import { Card, Badge, WBtn, Gate } from "@/components/ui";

export default function FounderReports() {
  const rows: [string, string, "ok" | "grey", string][] = [
    ["Funding summary", "Jul 2026", "ok", "312"],
    ["6-month report 1", "Jan 2027", "grey", "—"],
    ["6-month report 2", "Jul 2027", "grey", "—"],
  ];
  return (
    <FounderShell url="/founder/reports">
      <div className="page">
        <div className="row between center" style={{ marginBottom: 14, flexWrap: "wrap", gap: 12 }}><h2 style={{ margin: 0, color: "var(--navy)", fontSize: 21 }}>Investor reports</h2><WBtn kind="primary" sm>⬆ Upload report</WBtn></div>
        <Gate tag="🔔 AUTO" title="Investors are notified automatically">When you upload a report, all 312 investors receive an in-app + email notification instantly.</Gate>
        <Card style={{ marginTop: 16, padding: 0, overflow: "hidden" }}>
          <div style={{ overflowX: "auto" }}>
            <table className="tbl"><thead><tr><th>Report</th><th>Due date</th><th>Status</th><th>Investors notified</th><th></th></tr></thead>
              <tbody>{rows.map((r, i) => <tr key={i}><td><b style={{ color: "var(--navy)" }}>{r[0]}</b></td><td>{r[1]}</td><td><Badge tone={r[2] === "ok" ? "ok" : "grey"}>{r[2] === "ok" ? "Uploaded" : "Scheduled"}</Badge></td><td>{r[3]}</td><td>{r[2] === "ok" ? <WBtn kind="ghost" sm>View</WBtn> : <WBtn kind="secondary" sm>Upload</WBtn>}</td></tr>)}</tbody></table>
          </div>
        </Card>
      </div>
    </FounderShell>
  );
}
