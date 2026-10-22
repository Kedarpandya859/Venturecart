"use client";
import { useRouter } from "next/navigation";
import { Card, Badge, Progress, Ph, WBtn, SectionH } from "@/components/ui";
import { STARTUPS } from "@/lib/data";

export default function DashboardHome() {
  const router = useRouter();

  const KPIs = <div className="kpi" style={{ marginBottom: 22 }}>
    {[["Total invested", "₹84,500", "+₹4,500 this mo"], ["Active investments", "7", "2 reports due"], ["Returns earned", "₹11,200", "+13.2%"], ["Wallet balance", "₹6,300", "Add money"]].map((k, i) =>
      <div className="kpi-card" key={i}><div className="k-label">{k[0]}</div><div className="k-val">{k[1]}</div><div className="k-sub">{k[2]}</div></div>)}
  </div>;

  const trending = <Card>
    <SectionH action={<WBtn kind="ghost" sm onClick={() => router.push("/explore")}>Explore all →</WBtn>}>Trending rounds</SectionH>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14 }} className="grid-3">
      {STARTUPS.slice(0, 3).map(s =>
        <Card key={s.id} hover onClick={() => router.push(`/explore/${s.id}`)} style={{ padding: 14 }}>
          <div className="row center between"><div className="row center" style={{ gap: 8 }}><Ph w={30} h={30} r={6} label="" /><b style={{ fontSize: 13, color: "var(--navy)" }}>{s.name}</b></div><Badge tone={s.tone}>{s.sector}</Badge></div>
          <div style={{ margin: "10px 0 7px" }}><Progress pct={s.pct} /></div>
          <div className="row between" style={{ fontSize: 11.5, color: "var(--muted)" }}><span>{s.pct}% funded</span><span>Min ₹500</span></div>
        </Card>)}
    </div>
  </Card>;

  const activity = <Card>
    <SectionH>Recent activity</SectionH>
    <div className="col">
      {[["Invested ₹2,000 in StackQ", "2h ago"], ["CureCart shared a 6-mo report", "1d ago"], ["KYC verified", "3d ago"], ["Wallet credited ₹5,000", "4d ago"]].map((a, i) =>
        <div key={i} className="row between center" style={{ padding: "11px 0", borderBottom: i < 3 ? "1px solid var(--paper-2)" : "none" }}>
          <div className="row center" style={{ gap: 10 }}><span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--amber)" }} /><span style={{ fontSize: 13 }}>{a[0]}</span></div>
          <span style={{ fontSize: 11.5, color: "var(--muted)" }}>{a[1]}</span>
        </div>)}
    </div>
  </Card>;

  const indexWidget = <Card>
    <SectionH action={<WBtn kind="ghost" sm onClick={() => router.push("/index")}>Open →</WBtn>}>India Startup Index</SectionH>
    <div className="row center between">
      <div><div style={{ fontSize: 26, fontWeight: 700, color: "var(--navy)" }}>4,182</div><div style={{ fontSize: 12, color: "var(--ok)" }}>▲ +1.4% today</div></div>
      <div className="barchart" style={{ height: 60, width: 130 }}>{[40, 55, 35, 70, 50, 80].map((h, i) => <div key={i} className="bar" style={{ height: h + "%" }} />)}</div>
    </div>
  </Card>;

  return (
    <div className="page">
      <div className="row between center" style={{ marginBottom: 18, flexWrap: "wrap", gap: 12 }}>
        <div><h2 style={{ margin: 0, color: "var(--navy)", fontSize: 21 }}>Good morning, Ravi 👋</h2><p style={{ margin: "4px 0 0", color: "var(--muted)", fontSize: 13 }}>Your portfolio is up 13.2% this quarter.</p></div>
        <WBtn kind="primary" onClick={() => router.push("/explore")}>Find a round →</WBtn>
      </div>
      {KPIs}
      <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 16 }} className="grid-2">{trending}<div className="col" style={{ gap: 16 }}>{activity}{indexWidget}</div></div>
    </div>
  );
}
