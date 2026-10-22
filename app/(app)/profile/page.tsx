"use client";
import { useRouter } from "next/navigation";
import { Card, SectionH, WBtn, Badge, Avatar } from "@/components/ui";

export default function ProfileDetails() {
  const router = useRouter();
  return (
    <div className="page">
      <Card style={{ marginBottom: 16 }}>
        <div className="row center" style={{ gap: 18, flexWrap: "wrap" }}>
          <Avatar s={72} label="RS" />
          <div style={{ flex: 1, minWidth: 200 }}><div className="row center" style={{ gap: 10, flexWrap: "wrap" }}><h2 style={{ margin: 0, color: "var(--navy)", fontSize: 22 }}>Ravi Sharma</h2><Badge tone="ok">✓ Verified Investor</Badge></div><div style={{ fontSize: 13, color: "var(--muted)", marginTop: 4 }}>Mumbai, Maharashtra · Member since Mar 2026</div></div>
          <WBtn kind="secondary" onClick={() => router.push("/settings")}>Edit profile</WBtn>
        </div>
      </Card>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="grid-2">
        <Card><SectionH>Personal information</SectionH>
          {([["Email", "ravi@email.com"], ["Phone", "+91 ••••• 43210"], ["PAN", "••••• ✓"], ["KYC status", "Verified"], ["Linked bank", "HDFC ••••6789"]] as [string, string][]).map((r, i) => <div key={i} className="row between" style={{ padding: "10px 0", borderBottom: i < 4 ? "1px solid var(--paper-2)" : "none", fontSize: 13 }}><span className="muted">{r[0]}</span><b style={{ color: i === 3 ? "var(--ok)" : "var(--ink)" }}>{r[1]}</b></div>)}
        </Card>
        <Card><SectionH>Investment preferences</SectionH>
          <div style={{ fontSize: 12, color: "var(--muted)", marginBottom: 8 }}>Interested sectors</div>
          <div className="row wrap" style={{ gap: 8, marginBottom: 16 }}>{["Fintech", "SaaS", "Healthtech"].map(s => <Badge key={s} tone="navy">{s}</Badge>)}</div>
          <div className="row between" style={{ fontSize: 13, padding: "8px 0", borderTop: "1px solid var(--paper-2)" }}><span className="muted">Ticket range</span><b>₹500 – ₹2,00,000</b></div>
          <div className="row between" style={{ fontSize: 13, padding: "8px 0" }}><span className="muted">Experience</span><b>1–3 years</b></div>
        </Card>
      </div>
    </div>
  );
}
