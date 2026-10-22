"use client";
import { AdminShell, AdmPill } from "@/components/AdminShell";
import { WBtn } from "@/components/ui";

export default function AdminStartupReview() {
  return (
    <AdminShell title="Startup review queue">
      <div style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: 14 }} className="grid-2">
        <div className="adm-card" style={{ padding: 8 }}>{["VoltGo", "Lernie", "MediNow"].map((n, i) => <button key={i} style={{ display: "block", width: "100%", textAlign: "left", background: i === 0 ? "#13345a" : "none", border: "none", color: i === 0 ? "#fff" : "#9fb2cc", padding: "11px 12px", borderRadius: 8, fontSize: 13, marginBottom: 2, cursor: "pointer" }}>{n}<div style={{ fontSize: 11, color: "#7e93b0" }}>EV · ₹2 Cr ask</div></button>)}</div>
        <div className="adm-card">
          <div className="row between center" style={{ marginBottom: 14, flexWrap: "wrap", gap: 10 }}><div className="row center" style={{ gap: 10 }}><div className="adm-ph" style={{ width: 44, height: 44 }} /><div><b style={{ color: "#fff", fontSize: 15 }}>VoltGo</b><div style={{ fontSize: 12, color: "#7e93b0" }}>EV · Bengaluru · ₹2 Cr @ ₹40 Cr val</div></div></div><AdmPill tone="amber">Awaiting review</AdmPill></div>
          <div style={{ fontSize: 11, color: "#7e93b0", marginBottom: 8 }}>Investor-facing preview</div>
          <div className="adm-ph" style={{ height: 150, marginBottom: 16 }}>full profile preview (as investor sees)</div>
          <div className="row" style={{ gap: 10, flexWrap: "wrap" }}><WBtn kind="primary">✓ Approve & go live</WBtn><WBtn kind="secondary" style={{ color: "#fff", borderColor: "#2b4a72" }}>✎ Request edits</WBtn><WBtn kind="danger">✕ Reject</WBtn></div>
          <div style={{ marginTop: 12 }}><span className="adm-field" style={{ width: "100%" }}>Comments to founder…</span></div>
        </div>
      </div>
    </AdminShell>
  );
}
