"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Frame, WBtn, Field } from "@/components/ui";

export default function FounderGateway() {
  const router = useRouter();
  return (
    <div style={{ padding: "30px 20px" }}>
      <Frame url="/founder">
        <div className="fgate">
          <div className="fgate-left">
            <Link href="/" className="appbar-brand" style={{ color: "#fff" }}><i>V</i>VentureKart</Link>
            <h2 style={{ fontSize: 30, color: "#fff", margin: "22px 0 8px", lineHeight: 1.15 }}>Raise from thousands<br />of everyday Indians.</h2>
            <p style={{ color: "#9fb2cc", fontSize: 14, margin: 0 }}>List your startup, receive bids from ₹500, get funded.</p>
            {[["₹", "Raise from a wide retail base, not just VCs"], ["✓", "We handle KYC, escrow & compliance"], ["📊", "Live bid tracking & investor reporting tools"]].map((b, i) =>
              <div className="fbenefit" key={i}><i>{b[0]}</i><span style={{ fontSize: 13.5, color: "#cdd6e3" }}>{b[1]}</span></div>)}
          </div>
          <div style={{ padding: "48px 44px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <h3 style={{ color: "var(--navy)", fontSize: 20, margin: "0 0 18px" }}>Founder login</h3>
            <div className="col" style={{ gap: 14 }}>
              <Field label="Work email" placeholder="founder@startup.in" type="email" />
              <Field label="Password" placeholder="••••••••" type="password" />
              <WBtn kind="primary" full onClick={() => router.push("/founder/home")}>Login</WBtn>
              <div className="row center" style={{ gap: 10, color: "var(--faint)", fontSize: 12 }}><hr className="sep" style={{ flex: 1 }} />new founder?<hr className="sep" style={{ flex: 1 }} /></div>
              <WBtn kind="secondary" full onClick={() => router.push("/founder/signup")}>Register your startup</WBtn>
            </div>
          </div>
        </div>
      </Frame>
    </div>
  );
}
