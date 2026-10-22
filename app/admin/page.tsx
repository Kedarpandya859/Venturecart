"use client";
import { useRouter } from "next/navigation";
import { Frame, WBtn } from "@/components/ui";

export default function AdminLogin() {
  const router = useRouter();
  return (
    <div style={{ padding: "30px 20px" }}>
      <Frame url="/admin/login">
        <div style={{ background: "var(--adm-bg)", minHeight: 520, display: "grid", placeItems: "center", padding: 40 }}>
          <div style={{ width: 380, maxWidth: "100%" }}>
            <div className="adm-brand" style={{ justifyContent: "center", fontSize: 18, marginBottom: 4 }}><i>V</i>VentureKart</div>
            <div style={{ textAlign: "center", color: "#637b9c", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", marginBottom: 24 }}>Admin console</div>
            <div className="adm-card">
              <div className="col" style={{ gap: 14 }}>
                <div><div style={{ fontSize: 12, fontWeight: 600, color: "#9fb2cc", marginBottom: 6 }}>Email</div><div className="adm-field">admin@venturekart.in</div></div>
                <div><div style={{ fontSize: 12, fontWeight: 600, color: "#9fb2cc", marginBottom: 6 }}>Password</div><div className="adm-field">••••••••</div></div>
                <div><div style={{ fontSize: 12, fontWeight: 600, color: "#9fb2cc", marginBottom: 6 }}>OTP (2FA)</div><div className="row" style={{ gap: 8 }}>{[1, 2, 3, 4, 5, 6].map(i => <span key={i} className="adm-field" style={{ width: 42, justifyContent: "center", color: "#fff" }}>{i <= 2 ? "•" : ""}</span>)}</div></div>
                <WBtn kind="primary" full onClick={() => router.push("/admin/dashboard")}>Verify & sign in</WBtn>
              </div>
            </div>
            <div style={{ textAlign: "center", color: "#52688a", fontSize: 11, marginTop: 16 }}>🔒 Credential-gated · audit-logged · IP-restricted</div>
          </div>
        </div>
      </Frame>
    </div>
  );
}
