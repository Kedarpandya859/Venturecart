"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Frame, WBtn, Field, Badge, Chip, Card, Avatar, Ph, SectionH } from "@/components/ui";

const SECTORS = ["Fintech", "Healthtech", "Edtech", "Agritech", "SaaS", "D2C", "Deeptech", "EV", "Others"];

export default function ProfileCreate() {
  const router = useRouter();
  const [sel, setSel] = useState<string[]>(["Fintech", "SaaS"]);
  const toggle = (s: string) => setSel(p => p.includes(s) ? p.filter(x => x !== s) : [...p, s]);
  return (
    <div style={{ padding: "30px 20px" }}>
      <Frame url="/profile/setup" gray>
        <div style={{ padding: "30px 40px", maxWidth: 720, margin: "0 auto" }}>
          <Badge tone="ok">✓ KYC approved</Badge>
          <h2 style={{ color: "var(--navy)", fontSize: 22, margin: "12px 0 4px" }}>Set up your investor profile</h2>
          <p style={{ color: "var(--muted)", fontSize: 13, margin: "0 0 22px" }}>Helps us surface the right rounds for you.</p>
          <Card style={{ marginBottom: 16 }}>
            <SectionH>Investment interests</SectionH>
            <div className="row wrap" style={{ gap: 9 }}>{SECTORS.map(s => <Chip key={s} amber active={sel.includes(s)} onClick={() => toggle(s)}>{s}</Chip>)}</div>
          </Card>
          <Card style={{ marginBottom: 16 }}>
            <SectionH>Investment limit per round</SectionH>
            <div className="row center" style={{ gap: 14, flexWrap: "wrap" }}>
              <Field placeholder="₹500" w={120} /><span className="muted">to</span><Field placeholder="₹2,00,000" w={140} />
            </div>
          </Card>
          <Card style={{ marginBottom: 16 }}>
            <SectionH>Experience & bio</SectionH>
            <Field label="Investing experience" placeholder="First-time investor ▾" />
            <div style={{ height: 12 }} /><Field label="Short bio (optional)" placeholder="Tell founders a little about you…" area />
          </Card>
          <Card style={{ marginBottom: 18 }}>
            <SectionH>Profile photo</SectionH>
            <div className="row center" style={{ gap: 16 }}><Avatar s={56} label="+" /><Ph h={64} label="⬆ Upload profile photo" style={{ flex: 1 }} /></div>
          </Card>
          <WBtn kind="primary" full onClick={() => router.push("/tour")}>Finish & start the tour</WBtn>
        </div>
      </Frame>
    </div>
  );
}
