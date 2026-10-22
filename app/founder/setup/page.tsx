"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FounderShell } from "@/components/FounderShell";
import { WBtn, Field, Gate, Card, Ph, Avatar } from "@/components/ui";

export default function FounderSetup() {
  const router = useRouter();
  const [tab, setTab] = useState(0);
  const tabs = ["Basic", "Funding", "Team", "Pitch deck", "Key numbers", "Cap table", "Story"];
  const panes = [
    <div className="col" style={{ gap: 14 }} key="0"><div className="row center" style={{ gap: 16 }}><Ph w={64} h={64} r={12} label="logo" /><Ph h={64} label="⬆ Upload company logo" style={{ flex: 1 }} /></div><div className="row wrap" style={{ gap: 14 }}><Field label="Company name" placeholder="Paytrail" w="calc(50% - 7px)" /><Field label="Tagline" placeholder="UPI-native lending" w="calc(50% - 7px)" /><Field label="Sector" placeholder="Fintech ▾" w="calc(33% - 10px)" /><Field label="Sub-sector" placeholder="Lending ▾" w="calc(33% - 10px)" /><Field label="Stage" placeholder="Seed ▾" w="calc(33% - 10px)" /><Field label="City" placeholder="Bengaluru" w="calc(50% - 7px)" /><Field label="Website" placeholder="paytrail.in" w="calc(50% - 7px)" /></div></div>,
    <div className="col" style={{ gap: 14 }} key="1"><Gate tag="ℹ INFO" title="Visible to all investors">These terms appear on your public round page.</Gate><div className="row wrap" style={{ gap: 14 }}><Field label="Ask amount (₹)" placeholder="1,20,00,000" w="calc(50% - 7px)" /><Field label="Valuation (₹)" placeholder="24,00,00,000" w="calc(50% - 7px)" /><Field label="Equity offered (%)" placeholder="5.0" w="calc(33% - 10px)" /><Field label="Min per investor (₹)" placeholder="500" w="calc(33% - 10px)" /><Field label="Funding deadline" placeholder="DD/MM/YYYY" w="calc(33% - 10px)" /></div></div>,
    <div className="col" style={{ gap: 12 }} key="2">{[0, 1, 2].map(i => <Card key={i} style={{ padding: 14 }}><div className="row center" style={{ gap: 12 }}><Avatar s={40} label="" /><div className="row wrap" style={{ gap: 10, flex: 1 }}><Field placeholder="Name" w="calc(50% - 5px)" /><Field placeholder="Role" w="calc(50% - 5px)" /><Field placeholder="LinkedIn" w="calc(50% - 5px)" /><Field placeholder="Email" w="calc(50% - 5px)" /></div></div></Card>)}<WBtn kind="secondary" sm>+ Add team member</WBtn></div>,
    <Ph h={200} label="⬆ Upload pitch deck (PDF)" key="3" />,
    <div className="row wrap" style={{ gap: 14 }} key="4">{["Revenue (ARR)", "MoM growth %", "Total users", "Monthly burn", "Runway (months)", "Target market size"].map((l, i) => <Field key={i} label={l} placeholder="" w="calc(33% - 10px)" />)}</div>,
    <div className="col" style={{ gap: 14 }} key="5"><div className="row wrap" style={{ gap: 14 }}><Field label="Founders %" placeholder="62" w="calc(33% - 10px)" /><Field label="Existing investors %" placeholder="25" w="calc(33% - 10px)" /><Field label="Employee pool %" placeholder="13" w="calc(33% - 10px)" /></div></div>,
    <div className="col" style={{ gap: 14 }} key="6"><Field label="Why invest" placeholder="Make the case to retail investors…" area /><Field label="Future vision" placeholder="Where this goes in 3 years…" area /><Field label="Reporting cadence" placeholder="Every 6 months ▾" w={220} /></div>,
  ];
  return (
    <FounderShell url="/founder/setup">
      <div style={{ padding: "24px 40px", maxWidth: 820, margin: "0 auto" }}>
        <h2 style={{ color: "var(--navy)", fontSize: 20, margin: "0 0 4px" }}>Set up your startup profile</h2>
        <p style={{ color: "var(--muted)", fontSize: 13, margin: "0 0 16px" }}>Goes to admin review before going live.</p>
        <div className="row wrap" style={{ gap: 4, borderBottom: "1px solid var(--line)", marginBottom: 18 }}>{tabs.map((t, i) => <button key={i} onClick={() => setTab(i)} style={{ border: "none", background: "none", padding: "9px 13px", fontSize: 13, fontWeight: tab === i ? 700 : 500, color: tab === i ? "var(--navy)" : "var(--muted)", borderBottom: "2px solid " + (tab === i ? "var(--amber)" : "transparent"), cursor: "pointer" }}>{i + 1}. {t}</button>)}</div>
        <Card>{panes[tab]}</Card>
        <div className="row between" style={{ marginTop: 18 }}>
          <WBtn kind="ghost" onClick={() => tab > 0 && setTab(tab - 1)}>← Back</WBtn>
          {tab < tabs.length - 1 ? <WBtn kind="primary" onClick={() => setTab(tab + 1)}>Next: {tabs[tab + 1]} →</WBtn> : <WBtn kind="primary" onClick={() => router.push("/founder/home")}>Review & submit →</WBtn>}
        </div>
      </div>
    </FounderShell>
  );
}
