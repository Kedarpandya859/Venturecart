"use client";
import { AdminShell, AdmPill } from "@/components/AdminShell";
import { WBtn } from "@/components/ui";

export default function AdminBids() {
  const rows: [string, string, string, string, string, "amber" | "ok" | "risk"][] = [
    ["R. Sharma", "Paytrail", "₹2,000", "14 Jun", "UPI", "amber"],
    ["A. Kumar", "StackQ", "₹5,000", "14 Jun", "Wallet", "ok"],
    ["M. Thomas", "CureCart", "₹1,000", "13 Jun", "Net banking", "ok"],
    ["S. Nair", "FarmLink", "₹3,500", "13 Jun", "UPI", "ok"],
    ["P. Gupta", "VoltGo", "₹800", "12 Jun", "Card", "risk"],
  ];
  return (
    <AdminShell title="Bids & transactions">
      <div className="row between center" style={{ marginBottom: 12, flexWrap: "wrap", gap: 10 }}>
        <div className="row" style={{ gap: 8 }}><span className="adm-field" style={{ width: 130 }}>Startup ▾</span><span className="adm-field" style={{ width: 130 }}>Date range ▾</span><span className="adm-field" style={{ width: 110 }}>Status ▾</span></div>
        <WBtn kind="secondary" sm style={{ color: "#fff", borderColor: "#2b4a72" }}>⬇ Export CSV</WBtn>
      </div>
      <div className="adm-card" style={{ padding: 0, overflow: "hidden" }}>
        <div style={{ overflowX: "auto" }}>
          <table className="adm-tbl"><thead><tr><th>Investor</th><th>Startup</th><th>Amount</th><th>Date</th><th>Method</th><th>Status</th></tr></thead>
            <tbody>{rows.map((r, i) => <tr key={i}><td>{r[0]}</td><td><b style={{ color: "#fff" }}>{r[1]}</b></td><td>{r[2]}</td><td>{r[3]}</td><td>{r[4]}</td><td><AdmPill tone={r[5]}>{r[5] === "ok" ? "Settled" : r[5] === "amber" ? "Pending" : "Failed"}</AdmPill></td></tr>)}</tbody></table>
        </div>
      </div>
      <div className="adm-card" style={{ marginTop: 14 }}><div className="adm-h">Total raised per startup</div><div className="row wrap" style={{ gap: 20 }}>{[["Paytrail", "₹62 L"], ["StackQ", "₹1.3 Cr"], ["CureCart", "₹62 L"], ["FarmLink", "₹61 L"]].map((s, i) => <div key={i}><div style={{ fontSize: 11.5, color: "#7e93b0" }}>{s[0]}</div><b style={{ color: "#fff", fontSize: 18 }}>{s[1]}</b></div>)}</div></div>
    </AdminShell>
  );
}
