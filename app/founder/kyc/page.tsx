"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FounderShell } from "@/components/FounderShell";
import { WBtn, Field, Gate, Stepper, Card, Ph, Avatar, Badge } from "@/components/ui";

export default function FounderKYC() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const steps = ["Founder ID", "Company", "Directors", "Review"];
  const bodies = [
    <div className="row wrap" style={{ gap: 14 }} key="0"><Field label="PAN (personal)" placeholder="ABCDE1234F" w="calc(50% - 7px)" /><Field label="Aadhaar" placeholder="XXXX XXXX 4321" w="calc(50% - 7px)" /><Ph h={92} label="⬆ Founder ID proof" /></div>,
    <div className="col" style={{ gap: 14 }} key="1">
      <Gate tag="🔒 KYB" title="Company verification">Required to disburse funds to a verified corporate account.</Gate>
      <div className="row wrap" style={{ gap: 14 }}><Field label="Company CIN" placeholder="U72900KA2023PTC..." w="calc(50% - 7px)" /><Field label="GST number" placeholder="29ABCDE..." w="calc(50% - 7px)" /><Field label="Registered entity name" placeholder="Paytrail Technologies Pvt Ltd" /></div>
      <Ph h={92} label="⬆ Certificate of Incorporation" />
    </div>,
    <div className="col" style={{ gap: 12 }} key="2">{[0, 1].map(i => <Card key={i} style={{ padding: 14 }}><div className="row between center"><div className="row center" style={{ gap: 10 }}><Avatar s={36} label={`D${i + 1}`} /><div><b style={{ fontSize: 13 }}>Director {i + 1}</b><div style={{ fontSize: 11.5, color: "var(--muted)" }}>DIN + ID proof</div></div></div><Badge tone={i === 0 ? "ok" : "amber"}>{i === 0 ? "✓ Verified" : "Pending"}</Badge></div></Card>)}<WBtn kind="secondary" sm>+ Add director</WBtn></div>,
    <div className="col" style={{ gap: 12 }} key="3">{[["Founder ID", "PAN ✓ · Aadhaar ••••4321 ✓"], ["Company", "CIN ✓ · GST ✓ · Incorp cert ✓"], ["Directors", "2 added · 1 pending"]].map((r, i) => <Card key={i} style={{ padding: "12px 16px" }}><div className="row between center"><div><div style={{ fontSize: 11, color: "var(--muted)", textTransform: "uppercase", letterSpacing: ".06em" }}>{r[0]}</div><div style={{ fontSize: 13, marginTop: 3 }}>{r[1]}</div></div><WBtn kind="ghost" sm onClick={() => setStep(i)}>Edit</WBtn></div></Card>)}</div>,
  ];
  return (
    <FounderShell url="/founder/kyc">
      <div style={{ padding: "28px 40px", maxWidth: 720, margin: "0 auto" }}>
        <h2 style={{ color: "var(--navy)", fontSize: 20, margin: "0 0 18px" }}>Company KYC / KYB</h2>
        <Stepper steps={steps} active={step} />
        <Card style={{ marginTop: 22 }}><h3 style={{ margin: "0 0 16px", fontSize: 15, color: "var(--navy)" }}>{step + 1}. {steps[step]}</h3>{bodies[step]}</Card>
        <div className="row between" style={{ marginTop: 18 }}><WBtn kind="ghost" onClick={() => step === 0 ? router.push("/founder/signup") : setStep(step - 1)}>← Back</WBtn>{step < 3 ? <WBtn kind="primary" onClick={() => setStep(step + 1)}>Next →</WBtn> : <WBtn kind="primary" onClick={() => router.push("/founder/terms")}>Submit & continue</WBtn>}</div>
      </div>
    </FounderShell>
  );
}
