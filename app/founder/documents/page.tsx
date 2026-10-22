"use client";
import { FounderShell } from "@/components/FounderShell";
import { Card, Badge, WBtn, Ph } from "@/components/ui";

export default function FounderDocs() {
  const docs: [string, string, string][] = [
    ["Pitch deck v3", "PDF · 4.2 MB", "ok"], ["Financials FY25", "XLSX · 0.8 MB", "ok"],
    ["Incorp certificate", "PDF · 1.1 MB", "ok"], ["Cap table", "PDF · 0.3 MB", "ok"],
    ["Investor letters", "12 generated", "grey"], ["Add document", "", "add"],
  ];
  return (
    <FounderShell url="/founder/documents">
      <div className="page">
        <div className="row between center" style={{ marginBottom: 14, flexWrap: "wrap", gap: 12 }}><h2 style={{ margin: 0, color: "var(--navy)", fontSize: 21 }}>Documents</h2><WBtn kind="primary" sm>⬆ Upload document</WBtn></div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14 }} className="grid-3">
          {docs.map((d, i) => d[2] === "add"
            ? <Ph key={i} h={96} label="⬆ Drag & drop" />
            : <Card key={i}><div className="row between center"><span style={{ fontSize: 22 }}>📄</span><Badge tone={d[2] === "grey" ? "grey" : "ok"}>{d[2] === "grey" ? "Auto" : "✓"}</Badge></div><div style={{ fontWeight: 600, color: "var(--navy)", marginTop: 10, fontSize: 13.5 }}>{d[0]}</div><div style={{ fontSize: 11.5, color: "var(--muted)" }}>{d[1]}</div></Card>)}
        </div>
      </div>
    </FounderShell>
  );
}
