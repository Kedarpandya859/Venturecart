"use client";
import { AdminShell, AdmPill } from "@/components/AdminShell";

export default function AdminTickets() {
  const rows: [string, string, string, string, "amber" | "ok" | "risk"][] = [
    ["4821", "R. Sharma", "Withdrawal delay", "Neha", "amber"],
    ["4820", "A. Rao (founder)", "Edit live listing", "Imran", "amber"],
    ["4815", "M. Thomas", "KYC rejected — why?", "Neha", "ok"],
    ["4810", "S. Nair", "Refund request", "—", "risk"],
  ];
  return (
    <AdminShell title="Support tickets">
      <div className="adm-card" style={{ padding: 0, overflow: "hidden" }}>
        <div style={{ overflowX: "auto" }}>
          <table className="adm-tbl"><thead><tr><th>#</th><th>User</th><th>Subject</th><th>Assigned</th><th>Status</th><th></th></tr></thead>
            <tbody>{rows.map((r, i) => <tr key={i}><td>#{r[0]}</td><td>{r[1]}</td><td><b style={{ color: "#fff" }}>{r[2]}</b></td><td>{r[3]}</td><td><AdmPill tone={r[4]}>{r[4] === "ok" ? "Resolved" : r[4] === "amber" ? "In progress" : "Open"}</AdmPill></td><td><a style={{ color: "#6fa8e0", cursor: "pointer" }}>Reply</a></td></tr>)}</tbody></table>
        </div>
      </div>
      <div style={{ marginTop: 14, fontSize: 12, color: "var(--adm-muted)" }}>Admin replies inline · assign to team member · status: Open → In progress → Resolved</div>
    </AdminShell>
  );
}
