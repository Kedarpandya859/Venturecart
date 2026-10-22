"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Frame, WBtn, Field } from "@/components/ui";

export default function FounderSignup() {
  const router = useRouter();
  return (
    <div style={{ padding: "36px 20px" }}>
      <Frame url="/founder/signup" gray narrow>
        <div style={{ padding: "36px 40px" }}>
          <div className="appbar-brand" style={{ justifyContent: "center", marginBottom: 6 }}><i>V</i>VentureKart</div>
          <h2 style={{ textAlign: "center", color: "var(--navy)", fontSize: 21, margin: "8px 0 20px" }}>Register your startup</h2>
          <div className="col" style={{ gap: 14 }}>
            <Field label="Your name" placeholder="Ananya Rao" />
            <Field label="Work email" placeholder="ananya@paytrail.in" type="email" />
            <Field label="Phone number" placeholder="+91 98765 43210" />
            <Field label="Startup name" placeholder="Paytrail" />
            <Field label="Password" placeholder="••••••••" type="password" />
            <label className="row" style={{ gap: 9, fontSize: 12.5, color: "var(--ink-soft)" }}><span style={{ width: 18, height: 18, border: "1px solid var(--line-strong)", borderRadius: 4, flex: "none", marginTop: 1 }} /><span>I agree to the Founder Terms & Conditions</span></label>
            <WBtn kind="primary" full onClick={() => router.push("/founder/kyc")}>Create founder account</WBtn>
            <div style={{ textAlign: "center", fontSize: 12.5, color: "var(--muted)" }}>Already registered? <Link href="/founder" style={{ color: "var(--navy)", fontWeight: 600 }}>Login</Link></div>
          </div>
        </div>
      </Frame>
    </div>
  );
}
