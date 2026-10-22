"use client";
import { AdminShell, AdmPill } from "@/components/AdminShell";
import { WBtn } from "@/components/ui";

export default function AdminKyc() {
  return (
    <AdminShell title="KYC review queue">
      <div style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: 14 }} className="grid-2">
        <div className="adm-card" style={{ padding: 8 }}>{["Aisha Kumar", "Rahul Verma", "Neha Singh", "Imran Shaikh"].map((n, i) => <button key={i} style={{ display: "block", width: "100%", textAlign: "left", background: i === 0 ? "#13345a" : "none", border: "none", color: i === 0 ? "#fff" : "#9fb2cc", padding: "11px 12px", borderRadius: 8, fontSize: 13, marginBottom: 2, cursor: "pointer" }}>{n}<div style={{ fontSize: 11, color: "#7e93b0" }}>submitted {i + 1}h ago</div></button>)}</div>
        <div className="adm-card">
          <div className="row between center" style={{ marginBottom: 14, flexWrap: "wrap", gap: 10 }}><div><b style={{ color: "#fff", fontSize: 15 }}>Aisha Kumar</b><div style={{ fontSize: 12, color: "#7e93b0" }}>aisha@email.com · Pune · DOB 12 Aug 1992</div></div><AdmPill tone="amber">Pending</AdmPill></div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10, marginBottom: 16 }} className="grid-3">{["PAN card", "Aadhaar", "Bank proof"].map((d, i) => <div key={i}><div style={{ fontSize: 11, color: "#7e93b0", marginBottom: 6 }}>{d}</div><div className="adm-ph" style={{ height: 110 }}>document scan</div></div>)}</div>
          <div className="row" style={{ gap: 10, flexWrap: "wrap" }}><WBtn kind="primary">✓ Approve</WBtn><WBtn kind="danger">✕ Reject</WBtn><span className="adm-field" style={{ flex: 1, minWidth: 180 }}>Rejection reason (sent to user)…</span></div>
          <div style={{ fontSize: 11.5, color: "#637b9c", marginTop: 12 }}>Approving auto-sends confirmation via email + SMS and unlocks investing.</div>
        </div>
      </div>
    </AdminShell>
  );
}
