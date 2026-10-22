"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Frame, Avatar } from "./ui";

const ADM_NAV: [string, string][] = [
  ["/admin/dashboard", "▦ Dashboard"], ["/admin/users", "👥 Users"], ["/admin/kyc", "🪪 KYC review"],
  ["/admin/startups-review", "🔍 Startup review"], ["/admin/bids", "💱 Bids & txns"],
  ["/admin/all-startups", "🏢 All startups"], ["/admin/analytics", "📈 Analytics"], ["/admin/tickets", "🎧 Support"],
];

export function AdmPill({ tone = "grey", children }: { tone?: "grey" | "amber" | "ok" | "risk"; children: React.ReactNode }) {
  return <span className={"adm-pill " + tone}>{children}</span>;
}

export function AdminShell({ title, children }: { title: string; children: React.ReactNode }) {
  const path = usePathname();
  return (
    <div style={{ padding: "24px 20px 60px" }}>
      <Frame url="/admin">
        <div className="adm">
          <div className="adm-nav">
            <Link href="/admin/dashboard" className="adm-brand"><i>V</i>VentureKart</Link>
            <div className="adm-tag">Admin console</div>
            {ADM_NAV.map(([href, l]) => <Link key={href} href={href} className={path === href ? "active" : ""}>{l}</Link>)}
          </div>
          <div style={{ display: "flex", flexDirection: "column", minWidth: 0 }}>
            <div className="adm-topbar">
              <b style={{ color: "#fff", fontSize: 15 }}>{title}</b>
              <div className="row center" style={{ gap: 14 }}><span className="adm-field" style={{ width: 200 }}>🔍 Search…</span><Avatar s={32} label="AD" /></div>
            </div>
            <div className="adm-main">{children}</div>
          </div>
        </div>
      </Frame>
    </div>
  );
}
