"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Frame, WBtn, Field } from "@/components/ui";

export default function Login() {
  const router = useRouter();
  return (
    <div style={{ padding: "44px 20px" }}>
      <Frame url="/login" gray narrow>
        <div style={{ padding: "44px 40px" }}>
          <div className="appbar-brand" style={{ justifyContent: "center", marginBottom: 8 }}><i>V</i>VentureKart</div>
          <h2 style={{ textAlign: "center", color: "var(--navy)", fontSize: 22, margin: "8px 0 22px" }}>Welcome back</h2>
          <div className="col" style={{ gap: 14 }}>
            <Field label="Email address" placeholder="ravi@email.com" type="email" />
            <Field label="Password" placeholder="••••••••" type="password" />
            <div style={{ textAlign: "right", fontSize: 12.5 }}><a style={{ color: "var(--navy)", cursor: "pointer" }}>Forgot password?</a></div>
            <WBtn kind="primary" full onClick={() => router.push("/home")}>Login to your account</WBtn>
            <div style={{ textAlign: "center", fontSize: 12.5, color: "var(--muted)" }}>New here? <Link href="/signup" style={{ color: "var(--navy)", fontWeight: 600 }}>Create account</Link></div>
          </div>
        </div>
      </Frame>
    </div>
  );
}
