"use client";
import { useState } from "react";
import { Card, SectionH, WBtn, Field } from "@/components/ui";

function Toggle({ on, onClick }: { on: boolean; onClick?: () => void }) {
  return <button onClick={onClick} style={{ width: 38, height: 22, borderRadius: 999, background: on ? "var(--amber)" : "var(--line)", position: "relative", flex: "none", border: "none", cursor: "pointer" }}>
    <span style={{ position: "absolute", top: 2, left: on ? 18 : 2, width: 18, height: 18, borderRadius: "50%", background: "#fff", transition: ".15s" }} />
  </button>;
}

export default function Settings() {
  const [prefs, setPrefs] = useState([true, true, true, false]);
  const [twoFA, setTwoFA] = useState(true);
  const labels = ["Investment updates", "Platform announcements", "KYC & security alerts", "Marketing emails"];
  const toggle = (i: number) => setPrefs(p => p.map((v, j) => j === i ? !v : v));
  return (
    <div className="page">
      <h2 style={{ margin: "0 0 16px", color: "var(--navy)", fontSize: 21 }}>Settings</h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="grid-2">
        <Card><SectionH>Account security</SectionH>
          <div className="col" style={{ gap: 14 }}><Field label="Change password" placeholder="••••••••" type="password" /><div className="row between center"><div><b style={{ fontSize: 13 }}>Two-factor authentication</b><div style={{ fontSize: 11.5, color: "var(--muted)" }}>OTP on login</div></div><Toggle on={twoFA} onClick={() => setTwoFA(v => !v)} /></div></div>
        </Card>
        <Card><SectionH>Notification preferences</SectionH>
          {labels.map((l, i) => <div key={i} className="row between center" style={{ padding: "9px 0", borderBottom: i < 3 ? "1px solid var(--paper-2)" : "none" }}><span style={{ fontSize: 13 }}>{l}</span><Toggle on={prefs[i]} onClick={() => toggle(i)} /></div>)}
        </Card>
        <Card><SectionH>Bank account</SectionH><div className="row between center"><div><b style={{ fontSize: 13, color: "var(--navy)" }}>HDFC Bank ••••6789</b><div style={{ fontSize: 11.5, color: "var(--ok)" }}>✓ Verified</div></div><WBtn kind="secondary" sm>Manage</WBtn></div></Card>
        <Card style={{ border: "1px solid #e6c3b8", background: "var(--risk-soft)" }}><SectionH><span style={{ color: "var(--risk)" }}>Danger zone</span></SectionH><div className="row between center"><span style={{ fontSize: 12.5, color: "var(--ink-soft)" }}>Permanently delete account & data</span><WBtn kind="danger" sm>Delete account</WBtn></div></Card>
      </div>
    </div>
  );
}
