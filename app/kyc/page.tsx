"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Frame, WBtn, Field, Gate, Stepper, Card, Ph } from "@/components/ui";

export default function KYC() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const steps = ["Personal", "Identity", "Bank", "Review"];

  const bodies = [
    <div className="row wrap" style={{ gap: 14 }} key="0">
      <Field label="Date of birth" placeholder="DD / MM / YYYY" w="calc(50% - 7px)" />
      <Field label="Gender" placeholder="Select ▾" w="calc(50% - 7px)" />
      <Field label="Address line" placeholder="Flat / street" w="100%" />
      <Field label="City" placeholder="Mumbai" w="calc(33% - 10px)" />
      <Field label="State" placeholder="Maharashtra ▾" w="calc(33% - 10px)" />
      <Field label="PIN code" placeholder="400001" w="calc(33% - 10px)" />
    </div>,
    <div className="col" style={{ gap: 16 }} key="1">
      <Gate title="🔒 Why we need this" tag="🔒 KYC">PAN & Aadhaar are mandatory under SEBI / PMLA rules before any investment can be placed.</Gate>
      <Ph h={92} label="⬆ Drag & drop PAN card  (JPG / PNG / PDF)" style={{ background: "var(--paper)" }} />
      <Field label="Aadhaar number" placeholder="XXXX XXXX 4321" />
      <div className="row" style={{ gap: 14 }}><Ph h={92} label="⬆ Aadhaar front" /><Ph h={92} label="⬆ Aadhaar back" /></div>
    </div>,
    <div className="row wrap" style={{ gap: 14 }} key="2">
      <Field label="Bank name" placeholder="HDFC Bank ▾" w="calc(50% - 7px)" />
      <Field label="Account number" placeholder="50100xxxxxx" w="calc(50% - 7px)" />
      <Field label="IFSC code" placeholder="HDFC0001234" w="calc(50% - 7px)" />
      <Field label="Account holder" placeholder="Ravi Sharma" w="calc(50% - 7px)" />
      <Ph h={92} label="⬆ Cancelled cheque / passbook" />
    </div>,
    <div className="col" style={{ gap: 12 }} key="3">
      {[["Personal", "Ravi Sharma · 14 Mar 1994 · Mumbai 400001"], ["Identity", "PAN ✓ · Aadhaar ••••4321 ✓"], ["Bank", "HDFC Bank ••••6789 ✓"]].map((r, i) =>
        <Card key={i} style={{ padding: "12px 16px" }}><div className="row between center"><div><div style={{ fontSize: 11, color: "var(--muted)", textTransform: "uppercase", letterSpacing: ".06em" }}>{r[0]}</div><div style={{ fontSize: 13, marginTop: 3 }}>{r[1]}</div></div><WBtn kind="ghost" sm onClick={() => setStep(i)}>Edit</WBtn></div></Card>)}
      <Gate risk title="Declaration & risk acknowledgement" tag="⚠ REQUIRED">
        <label className="row" style={{ gap: 9 }}><span style={{ width: 18, height: 18, border: "1px solid var(--risk)", borderRadius: 4, flex: "none", marginTop: 1 }} /><span>I confirm the information is accurate and understand that startup investments carry risk of total capital loss.</span></label>
      </Gate>
    </div>,
  ];

  return (
    <div style={{ padding: "30px 20px" }}>
      <Frame url="/kyc" gray>
        <div style={{ padding: "30px 40px", maxWidth: 720, margin: "0 auto" }}>
          <h2 style={{ color: "var(--navy)", fontSize: 20, margin: "0 0 18px" }}>Complete your KYC</h2>
          <Stepper steps={steps} active={step} />
          <Card style={{ marginTop: 22 }}>
            <h3 style={{ margin: "0 0 16px", fontSize: 15, color: "var(--navy)" }}>{step + 1}. {steps[step]} details</h3>
            {bodies[step]}
          </Card>
          <div className="row between" style={{ marginTop: 18 }}>
            <WBtn kind="ghost" onClick={() => step === 0 ? router.push("/signup") : setStep(step - 1)}>← Back</WBtn>
            {step < 3
              ? <WBtn kind="primary" onClick={() => setStep(step + 1)}>Next: {steps[step + 1]} →</WBtn>
              : <WBtn kind="primary" onClick={() => router.push("/kyc-processing")}>Submit for verification</WBtn>}
          </div>
        </div>
      </Frame>
    </div>
  );
}
