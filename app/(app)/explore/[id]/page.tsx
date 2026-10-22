"use client";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Card, Badge, Progress, Ph, WBtn, SectionH, Gate, Avatar, Lines } from "@/components/ui";
import { getStartup } from "@/lib/data";
import { InvestModal } from "@/components/InvestModal";

export default function StartupDetail() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const s = getStartup(id);
  const [invest, setInvest] = useState(false);

  if (!s) return <div className="page"><Card>Startup not found. <WBtn kind="ghost" sm onClick={() => router.push("/explore")}>← Back to Explore</WBtn></Card></div>;

  return (
    <div>
      <div style={{ padding: "22px 26px 0" }}>
        {/* deal header */}
        <div className="row center" style={{ gap: 16, flexWrap: "wrap" }}>
          <Ph w={64} h={64} r={12} label="logo" />
          <div style={{ flex: 1, minWidth: 200 }}>
            <div className="row center" style={{ gap: 10, flexWrap: "wrap" }}>
              <h2 style={{ margin: 0, color: "var(--navy)", fontSize: 24 }}>{s.name}</h2>
              <Badge tone={s.tone}>{s.sector}</Badge><Badge tone="ok">✓ Vetted</Badge>
            </div>
            <div style={{ fontSize: 13, color: "var(--muted)", marginTop: 6 }}>{s.city} · Founded {s.founded} · {s.blurb}</div>
          </div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 22, padding: "20px 26px 0", alignItems: "start" }} className="detail-grid">
        <div className="col" style={{ gap: 22 }}>
          {/* pitch deck */}
          <div><SectionH action={<WBtn kind="ghost" sm>⬇ Download</WBtn>}>Pitch deck</SectionH><Ph h={220} label="📄 Pitch deck — PDF viewer" /></div>

          {/* key numbers */}
          <div><SectionH>Key numbers</SectionH>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12 }} className="grid-3">
              {[["Revenue (ARR)", "₹3.2 Cr"], ["MoM growth", "+14%"], ["Active users", "48,000"], ["Monthly burn", "₹22 L"], ["Runway", "16 mo"], ["Market size", "₹40,000 Cr"]].map((m, i) =>
                <Card key={i} style={{ padding: 14 }}><div style={{ fontSize: 11.5, color: "var(--muted)" }}>{m[0]}</div><div style={{ fontSize: 20, fontWeight: 700, color: "var(--navy)", marginTop: 4 }}>{m[1]}</div></Card>)}
            </div>
          </div>

          {/* team */}
          <div><SectionH>Founding team</SectionH>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12 }} className="grid-3">
              {[["Ananya Rao", "CEO"], ["Vikram Iyer", "CTO"], ["Sara Khan", "Head of Risk"]].map((m, i) =>
                <Card key={i} style={{ textAlign: "center", padding: 14 }}>
                  <div style={{ display: "grid", placeItems: "center" }}><Avatar s={52} label={m[0].split(" ").map(x => x[0]).join("")} /></div>
                  <div style={{ fontWeight: 600, color: "var(--navy)", marginTop: 9, fontSize: 13.5 }}>{m[0]}</div>
                  <div style={{ fontSize: 11.5, color: "var(--muted)" }}>{m[1]}</div>
                  <div className="row" style={{ gap: 8, justifyContent: "center", marginTop: 8, color: "var(--muted)" }}><span>in</span><span>✉</span></div>
                </Card>)}
            </div>
          </div>

          {/* reporting timeline */}
          <div><SectionH>Reporting timeline</SectionH>
            <Card>
              <div style={{ fontSize: 12.5, color: "var(--ink-soft)", marginBottom: 16 }}>Founder commits to investor reports <b>every 6 months</b> from funding date.</div>
              <div className="row between" style={{ position: "relative" }}>
                <div style={{ position: "absolute", top: 9, left: 10, right: 10, height: 2, background: "var(--line)" }} />
                {[["Fund", "Jul '26", true], ["Report 1", "Jan '27", false], ["Report 2", "Jul '27", false], ["Report 3", "Jan '28", false]].map((t, i) =>
                  <div key={i} style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
                    <span style={{ width: 20, height: 20, borderRadius: "50%", background: t[2] ? "var(--ok)" : "var(--card)", border: "2px solid " + (t[2] ? "var(--ok)" : "var(--line-strong)"), display: "block", margin: "0 auto" }} />
                    <div style={{ fontSize: 11.5, fontWeight: 600, marginTop: 7, color: "var(--navy)" }}>{t[0]}</div>
                    <div style={{ fontSize: 10.5, color: "var(--muted)" }}>{t[1]}</div>
                  </div>)}
              </div>
            </Card>
          </div>

          {/* shareholding */}
          <div><SectionH>Current shareholding</SectionH>
            <Card><div className="row center" style={{ gap: 24, flexWrap: "wrap" }}>
              <div className="donut" style={{ background: "conic-gradient(var(--navy) 0 62%, var(--amber) 62% 87%, var(--line-strong) 87% 100%)" }} />
              <div className="col" style={{ gap: 12, flex: 1, minWidth: 200 }}>
                {[["Founders", "62%", "var(--navy)"], ["Existing investors", "25%", "var(--amber)"], ["Reserved this round", "13%", "var(--line-strong)"]].map((r, i) =>
                  <div key={i} className="row center between"><div className="row center" style={{ gap: 9 }}><span style={{ width: 12, height: 12, borderRadius: 3, background: r[2] }} /><span style={{ fontSize: 13 }}>{r[0]}</span></div><b style={{ color: "var(--navy)" }}>{r[1]}</b></div>)}
              </div>
            </div></Card>
          </div>

          {/* why / future */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="grid-2">
            <Card><SectionH>Why invest</SectionH>{["Profitable unit economics at scale", "₹40,000 Cr underserved market", "2.4× revenue growth YoY", "Experienced ex-fintech founding team"].map((t, i) => <div key={i} className="row" style={{ gap: 9, padding: "7px 0", fontSize: 13 }}><span style={{ color: "var(--ok)" }}>✓</span><span>{t}</span></div>)}</Card>
            <Card><SectionH>Future vision</SectionH><Lines n={5} last="55%" gap={10} /><div style={{ marginTop: 14, fontSize: 12, color: "var(--muted)" }}>Roadmap: credit cards → insurance → wealth, FY27–29.</div></Card>
          </div>

          {/* risk disclosure */}
          <Gate risk title="Investment risk disclosure" tag="⚠ SEBI / RISK">
            Startup investments are illiquid and high-risk — you may lose your entire capital. VentureKart is not a SEBI-registered investment adviser; this is not investment advice. Returns are not guaranteed. Read the full risk disclosure & shareholders' agreement before investing.
          </Gate>
        </div>

        {/* sticky ask panel */}
        <div style={{ position: "sticky", top: 76 }} className="ask-side">
          <Card style={{ background: "var(--navy)", color: "#fff", border: "none" }}>
            <div className="row between" style={{ marginBottom: 14, flexWrap: "wrap", gap: 8 }}>
              {[["Ask", s.ask], ["Valuation", s.valuation], ["Equity", s.equity], ["Closes in", s.closesIn]].map((k, i) =>
                <div key={i}><div style={{ fontSize: 11, color: "#9fb2cc" }}>{k[0]}</div><div style={{ fontSize: 18, fontWeight: 700, color: "#fff" }}>{k[1]}</div></div>)}
            </div>
            <div className="row between" style={{ fontSize: 12, marginBottom: 6, color: "#cdd6e3" }}><span>{s.raised} raised</span><b style={{ color: "#fff" }}>{s.pct}%</b></div>
            <Progress pct={s.pct} />
            <div className="row between center" style={{ marginTop: 8, fontSize: 11.5, color: "#9fb2cc" }}><span>{s.investors} investors</span><span>Min ₹500</span></div>
            <WBtn kind="primary" full style={{ marginTop: 16 }} onClick={() => setInvest(true)}>Invest in {s.name}</WBtn>
          </Card>
        </div>
      </div>

      {/* sticky invest bar */}
      <div className="row between center invest-bar" style={{ position: "sticky", bottom: 0, background: "var(--card)", borderTop: "1px solid var(--line)", padding: "14px 26px", boxShadow: "0 -8px 24px -16px rgba(0,0,0,.3)", zIndex: 8, marginTop: 20 }}>
        <div className="row center" style={{ gap: 16 }}>
          <div><div style={{ fontSize: 11, color: "var(--muted)" }}>Min investment</div><b style={{ color: "var(--navy)", fontSize: 17 }}>₹500</b></div>
          <div style={{ width: 1, height: 30, background: "var(--line)" }} />
          <div style={{ fontSize: 12, color: "var(--muted)" }}>Round closes in <b style={{ color: "var(--risk)" }}>{s.closesIn}</b></div>
        </div>
        <WBtn kind="primary" onClick={() => setInvest(true)}>Invest in {s.name} →</WBtn>
      </div>

      {invest && <InvestModal startup={s} onClose={() => setInvest(false)} />}
    </div>
  );
}
