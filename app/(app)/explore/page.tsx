"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Card, Badge, Progress, Ph, Chip, Gate, WBtn, Field } from "@/components/ui";
import { STARTUPS, SECTORS } from "@/lib/data";

export default function Explore() {
  const router = useRouter();
  const [sector, setSector] = useState("All");
  const [q, setQ] = useState("");

  const filtered = STARTUPS.filter(s =>
    (sector === "All" || s.sector === sector) &&
    (q === "" || s.name.toLowerCase().includes(q.toLowerCase()) || s.blurb.toLowerCase().includes(q.toLowerCase())));

  return (
    <div className="page">
      <Gate tag="🔒 KYC" title="Browse freely — invest after KYC">
        You can explore every round. Placing a bid unlocks once your KYC is verified.{" "}
        <Link href="/kyc" style={{ color: "var(--navy)", fontWeight: 600 }}>Complete KYC →</Link>
      </Gate>

      <div className="row between center" style={{ margin: "18px 0 14px", gap: 12, flexWrap: "wrap" }}>
        <Field placeholder="🔍 Search startups…" w={260} value={q} onChange={setQ} />
        <Field placeholder="Sort: % funded ▾" w={150} />
      </div>

      <div className="row wrap" style={{ gap: 8, marginBottom: 18 }}>
        {SECTORS.map(s => <Chip key={s} active={sector === s} onClick={() => setSector(s)}>{s}</Chip>)}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }} className="grid-3">
        {filtered.map(s =>
          <Card key={s.id} hover onClick={() => router.push(`/explore/${s.id}`)} style={{ padding: 16 }}>
            <div className="row center between">
              <div className="row center" style={{ gap: 9 }}><Ph w={34} h={34} r={7} label="" /><b style={{ color: "var(--navy)" }}>{s.name}</b></div>
              <Badge tone={s.tone}>{s.sector}</Badge>
            </div>
            <div style={{ fontSize: 13, color: "var(--ink-soft)", margin: "11px 0 12px", lineHeight: 1.4 }}>{s.blurb}</div>
            <Progress pct={s.pct} />
            <div className="row between" style={{ margin: "9px 0 13px", fontSize: 11.5, color: "var(--muted)" }}>
              <span><b style={{ color: "var(--navy)" }}>{s.pct}%</b> of {s.ask}</span><span>Val {s.valuation}</span>
            </div>
            <div className="row between center">
              <Badge tone="amber">Min ₹500</Badge>
              <WBtn kind="secondary" sm onClick={(e) => { e.stopPropagation(); router.push(`/explore/${s.id}`); }}>View details</WBtn>
            </div>
          </Card>)}
      </div>
      {filtered.length === 0 && <div style={{ textAlign: "center", padding: 50, color: "var(--muted)" }}>No startups match your filters.</div>}
    </div>
  );
}
