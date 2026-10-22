"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { AdminShell, AdmPill } from "@/components/AdminShell";

export default function AdminUsers() {
  const router = useRouter();
  const [tab, setTab] = useState<"inv" | "fnd">("inv");
  const rows: [string, string, string, "ok" | "amber" | "risk"][] = [
    ["Ravi Sharma", "ravi@email.com", "+91 ••43210", "ok"],
    ["Aisha Kumar", "aisha@email.com", "+91 ••88210", "amber"],
    ["Mark Thomas", "mark@email.com", "+91 ••12110", "ok"],
    ["Sara Nair", "sara@email.com", "+91 ••55410", "risk"],
    ["Priya Gupta", "priya@email.com", "+91 ••77810", "ok"],
  ];
  return (
    <AdminShell title="User management">
      <div className="row between center" style={{ marginBottom: 8, flexWrap: "wrap", gap: 12 }}>
        <div className="adm-tabs" style={{ marginBottom: 0, border: "none" }}>
          <button className={tab === "inv" ? "active" : ""} onClick={() => setTab("inv")}>Investors · 12,480</button>
          <button className={tab === "fnd" ? "active" : ""} onClick={() => setTab("fnd")}>Founders · 311</button>
        </div>
        <div className="row" style={{ gap: 8 }}><span className="adm-field" style={{ width: 130 }}>KYC status ▾</span><span className="adm-field" style={{ width: 110 }}>City ▾</span></div>
      </div>
      <div className="adm-card" style={{ padding: 0, overflow: "hidden" }}>
        <div style={{ overflowX: "auto" }}>
          <table className="adm-tbl"><thead><tr><th>Name</th><th>Email</th><th>Phone</th><th>KYC</th><th>Joined</th><th>Actions</th></tr></thead>
            <tbody>{rows.map((r, i) => <tr key={i}><td><b style={{ color: "#fff" }}>{r[0]}</b></td><td>{r[1]}</td><td>{r[2]}</td><td><AdmPill tone={r[3]}>{r[3] === "ok" ? "Verified" : r[3] === "amber" ? "Pending" : "Rejected"}</AdmPill></td><td>Mar 2026</td><td><div className="row" style={{ gap: 8 }}><a style={{ color: "#6fa8e0", cursor: "pointer" }} onClick={() => router.push("/admin/kyc")}>View</a><a style={{ color: "#ee9078", cursor: "pointer" }}>Suspend</a></div></td></tr>)}</tbody></table>
        </div>
      </div>
    </AdminShell>
  );
}
