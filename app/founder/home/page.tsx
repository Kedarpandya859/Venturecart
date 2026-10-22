"use client";
import { useRouter } from "next/navigation";
import { FounderShell } from "@/components/FounderShell";
import { Card, Badge, Progress, WBtn, SectionH } from "@/components/ui";

export default function FounderHome() {
  const router = useRouter();
  return (
    <FounderShell url="/founder/home">
      <div className="page">
        <div className="row between center" style={{ marginBottom: 16, flexWrap: "wrap", gap: 12 }}><div><h2 style={{ margin: 0, color: "var(--navy)", fontSize: 21 }}>Paytrail · Founder dashboard</h2><p style={{ margin: "4px 0 0", color: "var(--muted)", fontSize: 13 }}>Your round is live and raising.</p></div><Badge tone="ok">● Live</Badge></div>
        <div className="kpi" style={{ marginBottom: 20 }}>{[["Raised so far", "₹62 L", "of ₹1.2 Cr"], ["Bids received", "312", "+18 today"], ["% of goal", "52%", "on track"], ["Closes in", "6 days", "—"]].map((k, i) => <div className="kpi-card" key={i}><div className="k-label">{k[0]}</div><div className="k-val">{k[1]}</div><div className="k-sub" style={{ color: "var(--muted)" }}>{k[2]}</div></div>)}</div>
        <Card style={{ marginBottom: 16 }}><div className="row between center" style={{ marginBottom: 10 }}><b style={{ color: "var(--navy)" }}>Round progress</b><span style={{ fontSize: 13, color: "var(--muted)" }}>₹62 L / ₹1.2 Cr</span></div><Progress pct={52} /></Card>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="grid-2">
          <Card><SectionH action={<WBtn kind="ghost" sm onClick={() => router.push("/founder/bids")}>All bids →</WBtn>}>Latest bids</SectionH>{[["R. S.", "Mumbai", "₹2,000"], ["A. K.", "Pune", "₹500"], ["M. T.", "Delhi", "₹5,000"]].map((b, i) => <div key={i} className="row between center" style={{ padding: "9px 0", borderBottom: i < 2 ? "1px solid var(--paper-2)" : "none", fontSize: 13 }}><span>{b[0]} · {b[1]}</span><b style={{ color: "var(--navy)" }}>{b[2]}</b></div>)}</Card>
          <Card><SectionH>Action items</SectionH>{([["📄 Upload Q2 progress report", "amber"], ["✓ Profile approved & live", "ok"], ["⏳ 1 director KYC pending", "amber"]] as [string, "amber" | "ok"][]).map((a, i) => <div key={i} className="row center" style={{ gap: 9, padding: "9px 0", borderBottom: i < 2 ? "1px solid var(--paper-2)" : "none", fontSize: 13 }}><Badge tone={a[1]}>{a[1] === "ok" ? "Done" : "Todo"}</Badge>{a[0]}</div>)}</Card>
        </div>
      </div>
    </FounderShell>
  );
}
