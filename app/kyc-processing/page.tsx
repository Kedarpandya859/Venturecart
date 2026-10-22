"use client";
import { useRouter } from "next/navigation";
import { Frame, WBtn, Ph, Badge } from "@/components/ui";

export default function KycProcessing() {
  const router = useRouter();
  return (
    <div style={{ padding: "30px 20px" }}>
      <Frame url="/kyc/processing" gray>
        <div style={{ padding: "70px 40px", textAlign: "center", maxWidth: 520, margin: "0 auto" }}>
          <div style={{ margin: "0 auto 24px", display: "grid", placeItems: "center" }}><div className="spinner" /></div>
          <Ph h={120} w={180} label="document review illustration" style={{ margin: "0 auto 24px" }} />
          <h2 style={{ color: "var(--navy)", fontSize: 22, margin: "0 0 10px" }}>We're verifying your profile</h2>
          <p style={{ color: "var(--ink-soft)", fontSize: 14, lineHeight: 1.6, margin: "0 0 18px" }}>
            Our team will review your KYC documents within <b>4–6 hours</b>. You'll get a confirmation on <b>ra••@email.com</b> and <b>+91 ••••• 43210</b>.
          </p>
          <Badge tone="amber">⏳ Verification in progress</Badge>
          <div style={{ marginTop: 26 }} className="row" >
            <div className="row" style={{ gap: 10, justifyContent: "center", margin: "0 auto" }}>
              <WBtn kind="secondary" onClick={() => router.push("/")}>Go to homepage</WBtn>
              <WBtn kind="primary" onClick={() => router.push("/profile-create")}>Continue (demo) →</WBtn>
            </div>
          </div>
        </div>
      </Frame>
    </div>
  );
}
