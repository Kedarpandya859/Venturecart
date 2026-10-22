"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FounderShell } from "@/components/FounderShell";
import { WBtn, Card, Lines } from "@/components/ui";

const CLAUSES = ["1. Equity dilution agreement", "2. Reporting obligations (every 3 / 4 / 6 months)", "3. Funds transfer timeline (T+7 from close)", "4. Dispute resolution", "5. Platform fee acknowledgement", "6. Investor communication norms", "7. Data & confidentiality", "8. Termination & delisting"];

export default function FounderTnC() {
  const router = useRouter();
  const [bottom, setBottom] = useState(false);
  const [checked, setChecked] = useState(false);
  return (
    <FounderShell url="/founder/terms">
      <div style={{ padding: "28px 40px", maxWidth: 720, margin: "0 auto" }}>
        <h2 style={{ color: "var(--navy)", fontSize: 20, margin: "0 0 6px" }}>Founder agreement</h2>
        <p style={{ color: "var(--muted)", fontSize: 13, margin: "0 0 16px" }}>Scroll to the bottom to enable acceptance.</p>
        <Card style={{ padding: 0 }}>
          <div onScroll={(e) => { const el = e.currentTarget; if (el.scrollTop + el.clientHeight >= el.scrollHeight - 12) setBottom(true); }} style={{ maxHeight: 300, overflowY: "auto", padding: 20 }}>
            {CLAUSES.map((h, i) => <div key={i} style={{ marginBottom: 18 }}><b style={{ color: "var(--navy)", fontSize: 13.5 }}>{h}</b><div style={{ marginTop: 8 }}><Lines n={3} last="70%" /></div></div>)}
            <div style={{ textAlign: "center", fontSize: 11, color: "var(--faint)", padding: "8px 0" }}>— end of agreement —</div>
          </div>
        </Card>
        <div className="row between center" style={{ marginTop: 16, flexWrap: "wrap", gap: 12 }}>
          <label className="row" style={{ gap: 9, fontSize: 12.5, color: bottom ? "var(--ink)" : "var(--faint)", cursor: bottom ? "pointer" : "not-allowed" }} onClick={() => bottom && setChecked(c => !c)}>
            <span style={{ width: 18, height: 18, border: "1px solid " + (bottom ? "var(--navy)" : "var(--line)"), borderRadius: 4, flex: "none", background: checked ? "var(--navy)" : "transparent", color: "#fff", display: "grid", placeItems: "center", fontSize: 12 }}>{checked ? "✓" : ""}</span>
            I have read and accept the agreement
          </label>
          <WBtn kind="primary" disabled={!bottom || !checked} onClick={() => router.push("/founder/setup")}>I Accept</WBtn>
        </div>
        {!bottom && <div style={{ marginTop: 10, fontSize: 12, color: "var(--muted)" }}>↑ "I Accept" stays disabled until you scroll to the bottom of the agreement.</div>}
      </div>
    </FounderShell>
  );
}
