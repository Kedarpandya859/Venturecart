"use client";
import { useState } from "react";
import { Card, WBtn, Badge } from "@/components/ui";

export default function Wallet() {
  const [showAdd, setShowAdd] = useState(false);
  return (
    <div className="page">
      <h2 style={{ margin: "0 0 16px", color: "var(--navy)", fontSize: 21 }}>Wallet</h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 16 }} className="grid-2">
        <Card style={{ background: "var(--navy)", color: "#fff", border: "none" }}>
          <div style={{ fontSize: 12, color: "#9fb2cc" }}>Available balance</div>
          <div style={{ fontSize: 34, fontWeight: 700, margin: "6px 0 16px" }}>₹6,300</div>
          <div className="row" style={{ gap: 10, flexWrap: "wrap" }}><WBtn kind="primary" onClick={() => setShowAdd(true)}>Add money</WBtn><WBtn kind="secondary" style={{ color: "#fff", borderColor: "#fff" }}>Withdraw</WBtn></div>
          <div style={{ marginTop: 16, fontSize: 11.5, color: "#9fb2cc" }}>Pending in bids: ₹2,000</div>
        </Card>
        <Card style={{ padding: 0, overflow: "hidden" }}>
          <div style={{ padding: "14px 18px", borderBottom: "1px solid var(--line)" }}><b style={{ color: "var(--navy)" }}>Transaction history</b></div>
          <div style={{ overflowX: "auto" }}>
            <table className="tbl"><thead><tr><th>Date</th><th>Type</th><th>Amount</th><th>Description</th><th>Status</th></tr></thead>
              <tbody>{([["12 Jun", "Debit", "−₹2,000", "Bid · StackQ", "ok"], ["10 Jun", "Credit", "+₹5,000", "Added via UPI", "ok"], ["02 Jun", "Debit", "−₹1,000", "Bid · FarmLink", "amber"], ["28 May", "Credit", "+₹1,200", "Returns · CureCart", "ok"]] as [string, string, string, string, "ok" | "amber"][]).map((r, i) => <tr key={i}><td>{r[0]}</td><td>{r[1]}</td><td style={{ color: r[1] === "Credit" ? "var(--ok)" : "var(--ink)" }}>{r[2]}</td><td>{r[3]}</td><td><Badge tone={r[4]}>{r[4] === "ok" ? "Done" : "Pending"}</Badge></td></tr>)}</tbody></table>
          </div>
        </Card>
      </div>

      {showAdd && <div className="modal-overlay" onClick={() => setShowAdd(false)}>
        <div className="modal" onClick={e => e.stopPropagation()}>
          <div className="row between center" style={{ padding: "16px 20px", borderBottom: "1px solid var(--line)" }}><b style={{ color: "var(--navy)" }}>Add money to wallet</b><button onClick={() => setShowAdd(false)} style={{ border: "none", background: "none", fontSize: 20, color: "var(--muted)" }}>×</button></div>
          <div style={{ padding: 20 }} className="col">
            <div className="col" style={{ gap: 10 }}>{["💳 UPI — GPay / PhonePe / Paytm", "🏛 Net banking", "💳 Debit card"].map((m, i) => <Card key={i} hover style={{ padding: 14 }}><div className="row between center"><span style={{ fontSize: 13.5 }}>{m}</span><span style={{ width: 18, height: 18, borderRadius: "50%", border: "2px solid " + (i === 0 ? "var(--amber)" : "var(--line-strong)"), background: i === 0 ? "var(--amber)" : "transparent" }} /></div></Card>)}</div>
            <WBtn kind="primary" full style={{ marginTop: 16 }} onClick={() => setShowAdd(false)}>Add ₹5,000</WBtn>
          </div>
        </div>
      </div>}
    </div>
  );
}
