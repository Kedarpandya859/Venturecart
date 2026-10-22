"use client";
import { useRouter } from "next/navigation";
import { AdminShell } from "@/components/AdminShell";
import { WBtn } from "@/components/ui";

export default function AdminDash() {
  const router = useRouter();
  return (
    <AdminShell title="Dashboard">
      <div className="kpi" style={{ gridTemplateColumns: "repeat(3,1fr)", gap: 14, marginBottom: 16 }}>
        {[["Total investors", "12,480"], ["Total founders", "311"], ["Active campaigns", "42"], ["Total deployed", "₹84 Cr"], ["Pending KYC", "37"], ["Pending reviews", "9"]].map((k, i) =>
          <div className="adm-kpicard" key={i}><div className="k-label">{k[0]}</div><div className="k-val">{k[1]}</div></div>)}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 14 }} className="grid-2">
        <div className="adm-card"><div className="adm-h">Recent platform activity</div>{[["New startup submitted: VoltGo", "5m"], ["KYC approved: 4 investors", "22m"], ["Bid ₹5,000 · StackQ", "31m"], ["Ticket #4821 escalated", "1h"], ["FarmLink round closed at 102%", "2h"]].map((a, i) => <div key={i} className="row between center" style={{ padding: "9px 0", borderBottom: i < 4 ? "1px solid #163357" : "none", fontSize: 13 }}><span className="row center" style={{ gap: 9 }}><span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--amber)" }} />{a[0]}</span><span style={{ color: "#7e93b0", fontSize: 11.5 }}>{a[1]} ago</span></div>)}</div>
        <div className="adm-card"><div className="adm-h">Quick actions</div><div className="col" style={{ gap: 10 }}><WBtn kind="primary" full onClick={() => router.push("/admin/kyc")}>Review KYC (37)</WBtn><WBtn kind="secondary" full style={{ color: "#fff", borderColor: "#2b4a72" }} onClick={() => router.push("/admin/startups-review")}>Review startups (9)</WBtn><WBtn kind="secondary" full style={{ color: "#fff", borderColor: "#2b4a72" }} onClick={() => router.push("/admin/tickets")}>Open tickets (14)</WBtn></div></div>
      </div>
    </AdminShell>
  );
}
