"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, Chip, WBtn } from "@/components/ui";

export default function Notifications() {
  const router = useRouter();
  const [f, setF] = useState("All");
  const items: [string, string, string, boolean][] = [
    ["ok", "CureCart shared a 6-month progress report", "1d ago", true],
    ["navy", "New round live: VoltGo (EV) — min ₹500", "2d ago", true],
    ["amber", "Your bid on FarmLink is pending confirmation", "2d ago", false],
    ["ok", "KYC verified successfully", "3d ago", false],
    ["navy", "Platform update: faster withdrawals now live", "5d ago", false],
  ];
  return (
    <div className="page">
      <h2 style={{ margin: "0 0 14px", color: "var(--navy)", fontSize: 21 }}>Notifications</h2>
      <div className="row wrap" style={{ gap: 8, marginBottom: 16 }}>{["All", "Investments", "Announcements", "KYC alerts"].map(t => <Chip key={t} active={f === t} onClick={() => setF(t)}>{t}</Chip>)}</div>
      <Card style={{ padding: 0 }}>
        {items.map((n, i) =>
          <div key={i} className="row center between" style={{ padding: "14px 18px", borderBottom: i < items.length - 1 ? "1px solid var(--paper-2)" : "none", background: n[3] ? "var(--paper)" : "transparent", flexWrap: "wrap", gap: 10 }}>
            <div className="row center" style={{ gap: 12 }}><span style={{ width: 32, height: 32, borderRadius: 8, background: `var(--${n[0]}-soft)`, display: "grid", placeItems: "center", flex: "none", color: `var(--${n[0]})` }}>●</span><div><div style={{ fontSize: 13.5, fontWeight: n[3] ? 600 : 400, color: "var(--ink)" }}>{n[1]}</div><div style={{ fontSize: 11, color: "var(--muted)", marginTop: 3 }}>{n[2]}</div></div></div>
            <div className="row center" style={{ gap: 12 }}>{i === 0 && <WBtn kind="ghost" sm onClick={() => router.push("/reports")}>View</WBtn>}<a style={{ fontSize: 11.5, color: "var(--muted)", cursor: "pointer" }}>Mark read</a></div>
          </div>)}
      </Card>
    </div>
  );
}
