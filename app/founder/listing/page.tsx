"use client";
import { useRouter } from "next/navigation";
import { FounderShell } from "@/components/FounderShell";
import { Card, Badge, Progress, WBtn, Ph } from "@/components/ui";
import { getStartup } from "@/lib/data";

export default function FounderListing() {
  const router = useRouter();
  const s = getStartup("paytrail")!;
  return (
    <FounderShell url="/founder/listing">
      <div className="page">
        <div className="row between center" style={{ marginBottom: 14, flexWrap: "wrap", gap: 12 }}><div><h2 style={{ margin: 0, color: "var(--navy)", fontSize: 21 }}>My listing</h2><p style={{ margin: "4px 0 0", color: "var(--muted)", fontSize: 13 }}>How investors see your round.</p></div><div className="row center" style={{ gap: 10 }}><Badge tone="ok">● Live</Badge><WBtn kind="secondary" sm onClick={() => router.push("/founder/setup")}>Edit listing</WBtn></div></div>
        <Card style={{ padding: 0, overflow: "hidden" }}>
          <div style={{ background: "var(--paper)", padding: "8px 14px", fontSize: 11, color: "var(--muted)", borderBottom: "1px solid var(--line)" }}>◉ LIVE PREVIEW · investor view</div>
          <div style={{ padding: 22 }}>
            <div className="row center" style={{ gap: 16, flexWrap: "wrap" }}>
              <Ph w={56} h={56} r={12} label="logo" />
              <div style={{ flex: 1, minWidth: 200 }}><div className="row center" style={{ gap: 10, flexWrap: "wrap" }}><h3 style={{ margin: 0, color: "var(--navy)", fontSize: 20 }}>{s.name}</h3><Badge tone={s.tone}>{s.sector}</Badge><Badge tone="ok">✓ Vetted</Badge></div><div style={{ fontSize: 13, color: "var(--muted)", marginTop: 5 }}>{s.city} · Founded {s.founded} · {s.blurb}</div></div>
            </div>
            <Card style={{ marginTop: 18, background: "var(--navy)", color: "#fff", border: "none" }}>
              <div className="row between" style={{ marginBottom: 12, flexWrap: "wrap", gap: 8 }}>{[["Ask", s.ask], ["Valuation", s.valuation], ["Equity", s.equity], ["Closes in", s.closesIn]].map((k, i) => <div key={i}><div style={{ fontSize: 11, color: "#9fb2cc" }}>{k[0]}</div><div style={{ fontSize: 17, fontWeight: 700 }}>{k[1]}</div></div>)}</div>
              <div className="row between" style={{ fontSize: 12, marginBottom: 6, color: "#cdd6e3" }}><span>{s.raised} raised</span><b>{s.pct}%</b></div><Progress pct={s.pct} />
            </Card>
            <div style={{ marginTop: 18, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }} className="grid-3">{[["Pitch deck", "/founder/documents"], ["Key numbers", "/founder/setup"], ["Team", "/founder/setup"]].map((c, i) => <Card key={i} style={{ padding: 12 }}><div className="row between center"><b style={{ fontSize: 12.5, color: "var(--navy)" }}>{c[0]}</b><WBtn kind="ghost" sm onClick={() => router.push(c[1])}>Edit</WBtn></div></Card>)}</div>
          </div>
        </Card>
      </div>
    </FounderShell>
  );
}
