"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Avatar } from "./ui";

const NAV: [string, string][] = [
  ["/home", "Home"], ["/explore", "Explore"], ["/portfolio", "Portfolio"],
  ["/reports", "Reports"], ["/index", "Index"], ["/wallet", "Wallet"],
];

export function AppBar() {
  const path = usePathname();
  const router = useRouter();
  const isActive = (href: string) => path === href || path.startsWith(href + "/");
  return <div className="appbar">
    <Link href="/home" className="appbar-brand"><i>V</i>VentureKart</Link>
    <div className="appnav">
      {NAV.map(([href, label]) =>
        <Link key={href} href={href} className={isActive(href) ? "active" : ""}>{label}</Link>)}
    </div>
    <div className="appbar-right">
      <button className="iconbtn" onClick={() => router.push("/notifications")}>🔔<span className="dotn" /></button>
      <button className="iconbtn" onClick={() => router.push("/support")}>?</button>
      <button className="iconbtn" onClick={() => router.push("/settings")}>⚙</button>
      <button onClick={() => router.push("/profile")} style={{ border: "none", background: "transparent", padding: 0 }}>
        <Avatar s={34} label="RS" />
      </button>
    </div>
  </div>;
}
