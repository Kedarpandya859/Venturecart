"use client";
import { useState } from "react";
import { Card, SectionH, WBtn, Field, Badge, Lines } from "@/components/ui";

const FAQS = ["What is the minimum investment?", "How is my money protected?", "When do I get returns?", "How do I complete KYC?", "Can I withdraw a bid?", "What are platform fees?"];

export default function Support() {
  const [open, setOpen] = useState(0);
  return (
    <div className="page">
      <h2 style={{ margin: "0 0 16px", color: "var(--navy)", fontSize: 21 }}>Support</h2>
      <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 16 }} className="grid-2">
        <Card><SectionH>Frequently asked</SectionH>
          {FAQS.map((q, i) => <div key={i} style={{ borderBottom: "1px solid var(--paper-2)" }}>
            <button onClick={() => setOpen(open === i ? -1 : i)} className="row between center" style={{ width: "100%", background: "none", border: "none", padding: "13px 0", textAlign: "left", fontSize: 13.5, fontWeight: 500, color: "var(--ink)" }}>{q}<span style={{ color: "var(--muted)" }}>{open === i ? "−" : "+"}</span></button>
            {open === i && <div style={{ paddingBottom: 13 }}><Lines n={2} last="70%" /></div>}
          </div>)}
        </Card>
        <div className="col" style={{ gap: 16 }}>
          <Card><SectionH>Contact us</SectionH><div className="col" style={{ gap: 12 }}><Field label="Subject" placeholder="Choose a topic ▾" /><Field label="Message" placeholder="How can we help?" area /><WBtn kind="primary" full>Send message</WBtn></div></Card>
          <Card style={{ background: "var(--ok-soft)", border: "1px solid #bcd6c0" }}><div className="row center" style={{ gap: 10 }}><span style={{ fontSize: 22 }}>💬</span><div><b style={{ color: "var(--ok)" }}>Chat on WhatsApp</b><div style={{ fontSize: 12, color: "var(--ink-soft)" }}>Avg reply: under 10 min</div></div></div></Card>
          <Card><SectionH>Your open tickets</SectionH><div className="row between center" style={{ fontSize: 13 }}><span>#4821 · Withdrawal delay</span><Badge tone="amber">Open</Badge></div></Card>
        </div>
      </div>
    </div>
  );
}
