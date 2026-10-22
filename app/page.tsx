"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { PublicNav } from "@/components/PublicNav";
import { Frame, WBtn, Card, Badge, Progress, Ph, SectionH, Ticker } from "@/components/ui";
import { STARTUPS, INDEX_TICKER } from "@/lib/data";

export default function Landing() {
  const router = useRouter();
  const live = STARTUPS[0];
  return (
    <div style={{ padding: "28px 20px 60px" }}>
      <Frame url="/">
        <PublicNav />

        {/* hero — split + live card */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "center", padding: "56px 44px" }} className="hero-grid">
          <div>
            <Badge tone="amber">★ Start from just ₹500</Badge>
            <h1 style={{ fontSize: 44, lineHeight: 1.08, color: "var(--navy)", margin: "16px 0 14px", fontWeight: 700 }}>
              Invest in India's<br />next big thing.
            </h1>
            <p style={{ fontSize: 15, color: "var(--ink-soft)", lineHeight: 1.6, maxWidth: 420 }}>
              Own equity in vetted Indian startups. Browse live funding rounds, invest from ₹500, and track your portfolio — all in one place.
            </p>
            <div className="row wrap" style={{ gap: 12, marginTop: 26 }}>
              <Link href="/signup"><WBtn kind="primary">Invest as an Individual</WBtn></Link>
              <Link href="/founder"><WBtn kind="secondary">I'm a Founder →</WBtn></Link>
            </div>
            <div style={{ marginTop: 20, fontSize: 12, color: "var(--muted)" }}>🔒 SEBI-aligned · Funds held in escrow · KYC verified</div>
          </div>

          <Card style={{ padding: 0, overflow: "hidden" }}>
            <div style={{ padding: 16, borderBottom: "1px solid var(--line)" }} className="row center between">
              <div className="row center" style={{ gap: 10 }}>
                <Ph w={38} h={38} r={8} label="logo" />
                <div><b style={{ color: "var(--navy)" }}>{live.name}</b><div style={{ fontSize: 11.5, color: "var(--muted)" }}>{live.blurb}</div></div>
              </div>
              <Badge tone="navy">{live.sector}</Badge>
            </div>
            <div style={{ padding: 16 }}>
              <div className="row between" style={{ fontSize: 12, color: "var(--muted)", marginBottom: 6 }}>
                <span>{live.raised} of {live.ask} raised</span><b style={{ color: "var(--navy)" }}>{live.pct}%</b>
              </div>
              <Progress pct={live.pct} />
              <div className="row between" style={{ marginTop: 16 }}>
                <div><div style={{ fontSize: 11, color: "var(--muted)" }}>Min invest</div><b style={{ color: "var(--navy)" }}>₹500</b></div>
                <div><div style={{ fontSize: 11, color: "var(--muted)" }}>Valuation</div><b style={{ color: "var(--navy)" }}>{live.valuation}</b></div>
                <div><div style={{ fontSize: 11, color: "var(--muted)" }}>Closes in</div><b style={{ color: "var(--risk)" }}>{live.closesIn}</b></div>
              </div>
              <WBtn kind="primary" full style={{ marginTop: 16 }} onClick={() => router.push(`/explore/${live.id}`)}>View live round</WBtn>
            </div>
          </Card>
        </div>

        <hr className="sep" />

        {/* how it works */}
        <div id="how" style={{ padding: "44px" }}>
          <h2 style={{ textAlign: "center", color: "var(--navy)", fontSize: 24, margin: "0 0 28px" }}>How it works</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }} className="grid-3">
            {[["1", "Sign up & verify", "Quick KYC — PAN + Aadhaar"], ["2", "Browse curated rounds", "Vetted startups, full disclosures"], ["3", "Invest from ₹500", "Track returns & reports"]].map(s =>
              <Card key={s[0]} style={{ textAlign: "center" }}>
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: "var(--amber-soft)", color: "var(--navy)", display: "grid", placeItems: "center", margin: "0 auto 12px", fontWeight: 700 }}>{s[0]}</div>
                <div style={{ fontWeight: 600, color: "var(--navy)" }}>{s[1]}</div>
                <div style={{ fontSize: 12.5, color: "var(--muted)", marginTop: 6 }}>{s[2]}</div>
              </Card>)}
          </div>
        </div>

        {/* live rounds */}
        <div style={{ padding: "8px 44px 44px" }}>
          <SectionH action={<Link href="/explore"><WBtn kind="ghost" sm>See all →</WBtn></Link>}>Live funding rounds</SectionH>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }} className="grid-3">
            {STARTUPS.slice(0, 3).map(s =>
              <Card key={s.id} hover onClick={() => router.push(`/explore/${s.id}`)}>
                <div className="row center between">
                  <div className="row center" style={{ gap: 9 }}><Ph w={34} h={34} r={7} label="" /><b style={{ color: "var(--navy)" }}>{s.name}</b></div>
                  <Badge tone={s.tone}>{s.sector}</Badge>
                </div>
                <div style={{ margin: "12px 0 8px", fontSize: 13, color: "var(--ink-soft)" }}>{s.blurb}</div>
                <Progress pct={s.pct} />
                <div className="row between" style={{ marginTop: 8, fontSize: 12, color: "var(--muted)" }}><span>{s.pct}% funded</span><span>Min ₹500</span></div>
              </Card>)}
          </div>
        </div>

        {/* index ticker */}
        <div style={{ padding: "0 44px 36px" }}>
          <Ticker items={INDEX_TICKER.slice(0, 5)} />
        </div>

        {/* footer */}
        <div style={{ background: "var(--navy)", color: "#aab8cc", padding: "36px 44px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 24 }} className="grid-foot">
            <div>
              <div className="appbar-brand" style={{ color: "#fff" }}><i>V</i>VentureKart</div>
              <p style={{ marginTop: 12, fontSize: 13, lineHeight: 1.6, maxWidth: 240 }}>Democratising startup investing for every Indian. Invest from ₹500.</p>
            </div>
            {[["Platform", ["Explore", "How it works", "India Startup Index", "Pricing"]],
              ["Company", ["About", "Careers", "Press", "Contact"]],
              ["Legal", ["Terms of Use", "Privacy Policy", "Risk Disclosure", "SEBI Compliance"]]].map(([c, items]) =>
              <div key={c as string}>
                <div style={{ color: "#fff", fontWeight: 600, marginBottom: 12, fontSize: 13 }}>{c as string}</div>
                <div className="col" style={{ gap: 9 }}>{(items as string[]).map(it => <a key={it} style={{ fontSize: 12.5, color: "#aab8cc" }}>{it}</a>)}</div>
              </div>)}
          </div>
          <div style={{ borderTop: "1px solid #14345a", marginTop: 24, paddingTop: 16, fontSize: 11, lineHeight: 1.6 }}>
            Investments in startups are subject to risks including loss of capital. VentureKart is not a SEBI-registered investment adviser. Read all disclosures before investing.
          </div>
        </div>
      </Frame>
    </div>
  );
}
