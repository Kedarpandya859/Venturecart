"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Frame, Avatar } from "./ui";

const NAV: [string, string][] = [
  ["/founder/home", "Dashboard"], ["/founder/listing", "My Listing"], ["/founder/bids", "Bids Received"],
  ["/founder/documents", "Documents"], ["/founder/reports", "Reports"],
];

export function FounderBar() {
  const path = usePathname();
  const router = useRouter();
  return <div className="appbar">
    <Link href="/founder/home" className="appbar-brand"><i>V</i>VentureKart <span style={{ fontSize: 11, fontWeight: 600, color: "var(--amber)", marginLeft: 4 }}>FOUNDERS</span></Link>
    <div className="appnav">{NAV.map(([href, l]) => <Link key={href} href={href} className={path === href ? "active" : ""}>{l}</Link>)}</div>
    <div className="appbar-right"><button className="iconbtn">🔔<span className="dotn" /></button><button onClick={() => router.push("/founder/home")} style={{ border: "none", background: "transparent", padding: 0 }}><Avatar s={34} label="AR" /></button></div>
  </div>;
}

export function FounderShell({ children, url, gray = true }: { children: React.ReactNode; url: string; gray?: boolean }) {
  return (
    <div style={{ padding: "24px 20px 60px" }}>
      <Frame url={url} gray={gray}>
        <FounderBar />
        {children}
      </Frame>
    </div>
  );
}
