"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Frame, WBtn, Field } from "@/components/ui";

export default function Signup() {
  const router = useRouter();
  return (
    <div style={{ padding: "40px 20px" }}>
      <Frame url="/signup" gray narrow>
        <div style={{ padding: "36px 40px" }}>
          <div className="appbar-brand" style={{ justifyContent: "center", marginBottom: 6 }}><i>V</i>VentureKart</div>
          <h2 style={{ textAlign: "center", color: "var(--navy)", fontSize: 22, margin: "8px 0 4px" }}>Create your investor account</h2>
          <p style={{ textAlign: "center", color: "var(--muted)", fontSize: 13, margin: "0 0 22px" }}>Start investing in Indian startups from ₹500</p>
          <div className="col" style={{ gap: 14 }}>
            <Field label="Full name (as per PAN)" placeholder="Ravi Sharma" />
            <Field label="Email address" placeholder="ravi@email.com" type="email" />
            <Field label="Phone number" placeholder="+91 98765 43210" />
            <div className="row" style={{ gap: 12 }}><Field label="Password" placeholder="••••••••" type="password" /><Field label="Confirm password" placeholder="••••••••" type="password" /></div>
            <label className="row center" style={{ gap: 9, fontSize: 12.5, color: "var(--ink-soft)" }}>
              <span style={{ width: 18, height: 18, border: "1px solid var(--line-strong)", borderRadius: 4, flex: "none" }} /> I agree to the Terms of Use & Privacy Policy
            </label>
            <WBtn kind="primary" full onClick={() => router.push("/kyc")}>Create Investor Account</WBtn>
            <div className="row center" style={{ gap: 10, color: "var(--faint)", fontSize: 12 }}><hr className="sep" style={{ flex: 1 }} />or<hr className="sep" style={{ flex: 1 }} /></div>
            <WBtn kind="secondary" full onClick={() => router.push("/kyc")}>Continue with Google</WBtn>
            <div style={{ textAlign: "center", fontSize: 12.5, color: "var(--muted)", marginTop: 4 }}>Already have an account? <Link href="/login" style={{ color: "var(--navy)", fontWeight: 600 }}>Login</Link></div>
          </div>
        </div>
      </Frame>
    </div>
  );
}
