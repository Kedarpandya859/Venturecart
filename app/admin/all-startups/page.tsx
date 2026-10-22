"use client";
import { AdminShell, AdmPill } from "@/components/AdminShell";

export default function AdminAllStartups() {
  const rows: [string, string, string, string, number, "ok" | "amber" | "grey"][] = [
    ["Paytrail", "A. Rao", "₹1.2 Cr", "₹62 L", 52, "ok"],
    ["StackQ", "K. Menon", "₹1.5 Cr", "₹1.3 Cr", 88, "ok"],
    ["CureCart", "D. Bose", "₹80 L", "₹62 L", 78, "ok"],
    ["VoltGo", "N. Shah", "₹2 Cr", "—", 0, "amber"],
    ["FarmLink", "G. Patel", "₹60 L", "₹61 L", 102, "grey"],
  ];
  return (
    <AdminShell title="All startups">
      <div className="adm-card" style={{ padding: 0, overflow: "hidden" }}>
        <div style={{ overflowX: "auto" }}>
          <table className="adm-tbl"><thead><tr><th>Startup</th><th>Founder</th><th>Ask</th><th>Raised</th><th>% funded</th><th>Status</th><th>Go-live</th><th></th></tr></thead>
            <tbody>{rows.map((r, i) => <tr key={i}><td><b style={{ color: "#fff" }}>{r[0]}</b></td><td>{r[1]}</td><td>{r[2]}</td><td>{r[3]}</td><td>{r[4]}%</td><td><AdmPill tone={r[5]}>{r[5] === "ok" ? "Live" : r[5] === "amber" ? "In review" : "Funded"}</AdmPill></td><td>Jun 2026</td><td><a style={{ color: "#6fa8e0", cursor: "pointer" }}>Manage</a></td></tr>)}</tbody></table>
        </div>
      </div>
    </AdminShell>
  );
}
