"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, WBtn, Field, Chip, Gate, Stepper, Ph } from "./ui";
import type { Startup } from "@/lib/data";

const FEE_RATE = 0.02;

export function InvestModal({ startup, onClose }: { startup: Startup; onClose: () => void }) {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [amount, setAmount] = useState("2000");
  const [accepted, setAccepted] = useState(false);
  const [method, setMethod] = useState(0);
  const steps = ["Amount", "Confirm", "Payment", "Done"];

  const amt = parseInt(amount.replace(/[^0-9]/g, "")) || 0;
  const fee = Math.round(amt * FEE_RATE);
  const total = amt + fee;
  // crude equity estimate from valuation (parse "₹24 Cr")
  const valNum = parseValuation(startup.valuation);
  const equityPct = valNum ? ((amt / valNum) * 100).toFixed(4) : "—";

  const amountValid = amt >= 500 && amt % 100 === 0;

  const next = () => setStep(s => s + 1);

  const amountPane = <div className="col" style={{ gap: 16 }}>
    <div>
      <div className="wfield-label" style={{ marginBottom: 6 }}>Investment amount (min ₹500, ₹100 steps)</div>
      <Field placeholder="₹ 2,000" value={amount} onChange={setAmount} />
      {!amountValid && amount !== "" && <div style={{ fontSize: 11.5, color: "var(--risk)", marginTop: 6 }}>Enter a multiple of ₹100, minimum ₹500.</div>}
    </div>
    <div className="row wrap" style={{ gap: 8 }}>{["500", "1000", "5000", "10000"].map(a => <Chip key={a} amber active={amount === a} onClick={() => setAmount(a)}>₹{Number(a).toLocaleString("en-IN")}</Chip>)}</div>
    <Card style={{ background: "var(--amber-soft)", border: "1px solid #eccf8e" }}>
      <div className="row between center"><span style={{ fontSize: 13 }}>Equity you'll receive</span><b style={{ color: "var(--navy)", fontSize: 17 }}>≈ {equityPct}%</b></div>
    </Card>
  </div>;

  const confirmPane = <div className="col" style={{ gap: 12 }}>
    {[["Startup", startup.name], ["Amount", `₹${amt.toLocaleString("en-IN")}`], ["Equity", `≈ ${equityPct}%`], ["Platform fee", `₹${fee} (2%)`]].map((r, i) =>
      <div key={i} className="row between" style={{ padding: "9px 0", borderBottom: "1px solid var(--paper-2)", fontSize: 13.5 }}><span className="muted">{r[0]}</span><b style={{ color: "var(--navy)" }}>{r[1]}</b></div>)}
    <Gate risk tag="⚠ REQUIRED" title="I understand the risk">
      <label className="row" style={{ gap: 9, cursor: "pointer" }} onClick={() => setAccepted(a => !a)}>
        <span style={{ width: 18, height: 18, border: "1px solid var(--risk)", borderRadius: 4, flex: "none", marginTop: 1, background: accepted ? "var(--risk)" : "transparent", color: "#fff", display: "grid", placeItems: "center", fontSize: 12 }}>{accepted ? "✓" : ""}</span>
        <span>I accept the shareholders' agreement and understand I may lose my entire investment.</span>
      </label>
    </Gate>
  </div>;

  const paymentPane = <div className="col" style={{ gap: 12 }}>
    {[["💳", "Wallet balance", "₹6,300 available"], ["🏦", "UPI", "GPay / PhonePe / Paytm"], ["🏛", "Net banking", "All major banks"]].map((p, i) =>
      <Card key={i} hover style={{ padding: 14 }} onClick={() => setMethod(i)}>
        <div className="row center" style={{ gap: 12 }}>
          <span style={{ fontSize: 20 }}>{p[0]}</span>
          <div style={{ flex: 1 }}><b style={{ fontSize: 13.5, color: "var(--navy)" }}>{p[1]}</b><div style={{ fontSize: 11.5, color: "var(--muted)" }}>{p[2]}</div></div>
          <span style={{ width: 18, height: 18, borderRadius: "50%", border: "2px solid " + (i === method ? "var(--amber)" : "var(--line-strong)"), background: i === method ? "var(--amber)" : "transparent" }} />
        </div>
      </Card>)}
  </div>;

  const donePane = <div style={{ textAlign: "center", padding: "10px 0" }}>
    <div style={{ width: 56, height: 56, borderRadius: "50%", background: "var(--ok-soft)", color: "var(--ok)", display: "grid", placeItems: "center", fontSize: 28, margin: "0 auto 16px" }}>✓</div>
    <h3 style={{ margin: "0 0 8px", color: "var(--navy)" }}>Bid of ₹{amt.toLocaleString("en-IN")} submitted</h3>
    <p style={{ fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.6, maxWidth: 360, margin: "0 auto" }}>
      Confirmation will be sent within <b>2 business days</b>. If successful, funds transfer to {startup.name} within <b>7 business days</b>. Track it in your Portfolio.
    </p>
    <div className="row" style={{ gap: 10, justifyContent: "center", marginTop: 20 }}>
      <WBtn kind="secondary" onClick={() => { onClose(); router.push("/portfolio"); }}>View portfolio</WBtn>
      <WBtn kind="primary" onClick={() => { onClose(); router.push("/explore"); }}>Browse more</WBtn>
    </div>
  </div>;

  const panes = [amountPane, confirmPane, paymentPane, donePane];
  const canContinue = step === 0 ? amountValid : step === 1 ? accepted : true;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <div className="row between center" style={{ padding: "16px 20px", borderBottom: "1px solid var(--line)" }}>
          <div className="row center" style={{ gap: 10 }}><Ph w={30} h={30} r={7} label="" /><b style={{ color: "var(--navy)" }}>Invest in {startup.name}</b></div>
          <button onClick={onClose} style={{ border: "none", background: "none", fontSize: 20, color: "var(--muted)" }}>×</button>
        </div>
        <div style={{ padding: 20 }}>
          {step < 3 && <div style={{ marginBottom: 18 }}><Stepper steps={steps.slice(0, 3)} active={step} /></div>}
          {panes[step]}
          {step < 3 && <div className="row between" style={{ marginTop: 20 }}>
            <WBtn kind="ghost" onClick={() => step === 0 ? onClose() : setStep(step - 1)}>{step === 0 ? "Cancel" : "← Back"}</WBtn>
            <WBtn kind="primary" disabled={!canContinue} onClick={next}>{step === 2 ? `Pay ₹${total.toLocaleString("en-IN")}` : "Continue"}</WBtn>
          </div>}
        </div>
      </div>
    </div>
  );
}

function parseValuation(v: string): number | null {
  // "₹24 Cr" -> 240000000 ; "₹80 L" -> 8000000
  const m = v.match(/([\d.]+)\s*(Cr|L)/i);
  if (!m) return null;
  const n = parseFloat(m[1]);
  return m[2].toLowerCase() === "cr" ? n * 1e7 : n * 1e5;
}
