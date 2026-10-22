"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Frame, WBtn } from "@/components/ui";

const TIPS = [
  { t: "Welcome to VentureKart", b: "Your Home shows portfolio health, KPIs and trending rounds at a glance." },
  { t: "Explore startups", b: "Browse vetted live rounds, filter by sector and ticket size, invest from ₹500." },
  { t: "Your Portfolio", b: "Track every investment, equity held and report due dates in one place." },
  { t: "Reports", b: "Download milestone reports founders share with you every 6 months." },
  { t: "India Startup Index", b: "Track sector performance across the ecosystem — a VentureKart exclusive." },
  { t: "Wallet", b: "Add money, withdraw and review every transaction. Bids are held in escrow." },
];

export default function Tour() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const tip = TIPS[step];
  return (
    <div style={{ padding: "30px 20px", position: "relative" }}>
      <Frame url="/home" gray>
        <div style={{ minHeight: 460, display: "grid", placeItems: "center", background: "rgba(10,35,66,.45)", padding: 24 }}>
          <div style={{ background: "var(--card)", borderRadius: 14, padding: 24, width: 360, maxWidth: "100%", boxShadow: "0 30px 70px -25px rgba(0,0,0,.6)" }}>
            <div style={{ fontSize: 11, color: "var(--amber)", fontWeight: 700 }}>STEP {step + 1} / {TIPS.length}</div>
            <div style={{ fontWeight: 700, color: "var(--navy)", fontSize: 18, margin: "7px 0 8px" }}>{tip.t}</div>
            <div style={{ fontSize: 13.5, color: "var(--ink-soft)", lineHeight: 1.55 }}>{tip.b}</div>
            <div className="row between center" style={{ marginTop: 18 }}>
              <div className="row" style={{ gap: 5 }}>{TIPS.map((_, i) => <span key={i} style={{ width: 7, height: 7, borderRadius: "50%", background: i === step ? "var(--amber)" : "var(--line)" }} />)}</div>
              <div className="row" style={{ gap: 6 }}>
                <WBtn kind="ghost" sm onClick={() => router.push("/home")}>Skip</WBtn>
                <WBtn kind="primary" sm onClick={() => step < TIPS.length - 1 ? setStep(step + 1) : router.push("/home")}>{step < TIPS.length - 1 ? "Next" : "Done"}</WBtn>
              </div>
            </div>
          </div>
        </div>
      </Frame>
    </div>
  );
}
