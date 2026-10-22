"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, Badge, Ph, Chip } from "@/components/ui";
import { STARTUPS } from "@/lib/data";

export default function Portfolio() {
  const router = useRouter();
  const [f, setF] = useState("Active");
  const amounts = [2000, 5000, 1000, 3500, 800];
  return (
    <div className="page">
      <div className="row between center" style={{ marginBottom: 16, flexWrap: "wrap", gap: 12 }}>
        <h2 style={{ margin: 0, color: "var(--navy)", fontSize: 21 }}>Your portfolio</h2>
        <div className="row" style={{ gap: 8 }}>{["Active", "Pending", "Exited"].map(t => <Chip key={t} active={f === t} onClick={() => setF(t)}>{t}</Chip>)}</div>
      </div>
      <div className="col" style={{ gap: 12 }}>
        {STARTUPS.slice(0, 5).map((s, i) =>
          <Card key={s.id} hover onClick={() => router.push(`/explore/${s.id}`)}>
            <div className="row center between" style={{ flexWrap: "wrap", gap: 12 }}>
              <div className="row center" style={{ gap: 13 }}>
                <Ph w={44} h={44} r={9} label="" />
                <div>
                  <div className="row center" style={{ gap: 8 }}><b style={{ color: "var(--navy)" }}>{s.name}</b><Badge tone={s.tone}>{s.sector}</Badge></div>
                  <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 4 }}>Invested 12 Mar 2026 · Next report 12 Sep 2026</div>
                </div>
              </div>
              <div className="row center" style={{ gap: 34, flexWrap: "wrap" }}>
                <div style={{ textAlign: "right" }}><div style={{ fontSize: 11, color: "var(--muted)" }}>Invested</div><b style={{ color: "var(--navy)" }}>₹{amounts[i].toLocaleString("en-IN")}</b></div>
                <div style={{ textAlign: "right" }}><div style={{ fontSize: 11, color: "var(--muted)" }}>Equity</div><b style={{ color: "var(--navy)" }}>0.0{i + 2}%</b></div>
                <Badge tone={i === 1 ? "amber" : "ok"}>{i === 1 ? "Report due" : "Active"}</Badge>
                <span style={{ color: "var(--muted)" }}>→</span>
              </div>
            </div>
          </Card>)}
      </div>
    </div>
  );
}
