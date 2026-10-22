"use client";
import React from "react";

type Tone = "grey" | "amber" | "navy" | "ok" | "risk";

/* ---------- placeholders / skeletons ---------- */
export function Ph({ label = "image", h = 120, w, r, style, src }:
  { label?: string; h?: number | string; w?: number | string; r?: number; style?: React.CSSProperties; src?: string }) {
  return <div className="ph" style={{ height: h, width: w || "100%", borderRadius: r, ...style }}>
    {src ? <img src={src} alt={label} /> : <span>{label}</span>}
  </div>;
}
export function Avatar({ s = 40, label = "" }: { s?: number; label?: string }) {
  return <div className="avatar" style={{ width: s, height: s, fontSize: Math.max(10, s * 0.36) }}>{label}</div>;
}
export function TL({ w = "100%", strong, style }: { w?: number | string; strong?: boolean; style?: React.CSSProperties }) {
  return <div style={{ height: strong ? 11 : 9, borderRadius: 5, background: strong ? "#cdc9bd" : "#e0ddd3", width: w, ...style }} />;
}
export function Lines({ n = 3, last = "62%", gap = 8 }: { n?: number; last?: string; gap?: number }) {
  return <div className="col" style={{ gap }}>
    {Array.from({ length: n }).map((_, i) => <TL key={i} w={i === n - 1 ? last : "100%"} />)}
  </div>;
}

/* ---------- controls ---------- */
type BtnKind = "primary" | "secondary" | "ghost" | "dark" | "danger";
export function WBtn({ children, kind = "primary", onClick, full, sm, style, type = "button", disabled }:
  { children: React.ReactNode; kind?: BtnKind; onClick?: (e: React.MouseEvent) => void; full?: boolean; sm?: boolean;
    style?: React.CSSProperties; type?: "button" | "submit"; disabled?: boolean }) {
  return <button type={type} disabled={disabled}
    className={`wbtn wbtn-${kind}${full ? " wbtn-full" : ""}${sm ? " wbtn-sm" : ""}`}
    onClick={onClick} style={style}>{children}</button>;
}

export function Field({ label, placeholder = "", area, w, value, onChange, type = "text", name }:
  { label?: string; placeholder?: string; area?: boolean; w?: number | string; value?: string;
    onChange?: (v: string) => void; type?: string; name?: string }) {
  return <label className="wfield" style={{ width: w }}>
    {label && <span className="wfield-label">{label}</span>}
    {area
      ? <textarea placeholder={placeholder} value={value} name={name} onChange={e => onChange?.(e.target.value)} />
      : <input type={type} placeholder={placeholder} value={value} name={name} onChange={e => onChange?.(e.target.value)} />}
  </label>;
}

export function Badge({ children, tone = "grey" }: { children: React.ReactNode; tone?: Tone }) {
  return <span className={`badge badge-${tone}`}>{children}</span>;
}
export function Chip({ children, active, amber, onClick }:
  { children: React.ReactNode; active?: boolean; amber?: boolean; onClick?: () => void }) {
  return <button className={`chip${active ? " active" : ""}${amber ? " amber" : ""}`} onClick={onClick}>{children}</button>;
}
export function Card({ children, hover, onClick, style }:
  { children: React.ReactNode; hover?: boolean; onClick?: () => void; style?: React.CSSProperties }) {
  return <div className={"wcard" + (hover ? " hover" : "")} onClick={onClick} style={style}>{children}</div>;
}
export function Progress({ pct = 50 }: { pct?: number }) {
  return <div className="pbar"><div className="pbar-fill" style={{ width: Math.min(100, pct) + "%" }} /></div>;
}

/* ---------- compliance gate ---------- */
export function Gate({ title, children, risk, tag }:
  { title?: string; children: React.ReactNode; risk?: boolean; tag?: string }) {
  return <div className={"gate" + (risk ? " risk" : "")}>
    <span className="gate-tag">{tag || (risk ? "⚠ RISK" : "🔒 GATE")}</span>
    {title && <div className="gate-title">{title}</div>}
    <div className="gate-body">{children}</div>
  </div>;
}

/* ---------- stepper ---------- */
export function Stepper({ steps, active }: { steps: string[]; active: number }) {
  return <div className="stepper">
    {steps.map((s, i) => {
      const state = i < active ? "done" : i === active ? "active" : "";
      return <React.Fragment key={i}>
        {i > 0 && <div className={"step " + (i <= active ? "done" : "")}><span className="step-bar" /></div>}
        <div className={"step " + state}>
          <span className="step-dot">{i < active ? "✓" : i + 1}</span>
          <span className="step-label">{s}</span>
        </div>
      </React.Fragment>;
    })}
  </div>;
}

export function SectionH({ children, action }: { children: React.ReactNode; action?: React.ReactNode }) {
  return <div className="section-h">{children}{action}</div>;
}

/* ---------- desktop frame ---------- */
export function Frame({ url, children, gray, narrow }:
  { url?: string; children: React.ReactNode; gray?: boolean; narrow?: boolean }) {
  return <div className={"frame" + (narrow ? " narrow" : "")}>
    <div className="frame-bar">
      <div className="frame-dots"><i /><i /><i /></div>
      <div className="frame-url">venturekart.in<b>{url || ""}</b></div>
    </div>
    <div className={"frame-body" + (gray ? " gray" : "")}>{children}</div>
  </div>;
}

/* ---------- ticker ---------- */
export function Ticker({ items }: { items: [string, string, "up" | "down"][] }) {
  return <div className="ticker">
    {items.map((t, i) => <div className="ticker-item" key={i}><b>{t[0]}</b><span className={t[2]}>{t[1]}</span></div>)}
  </div>;
}
