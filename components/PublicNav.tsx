"use client";
import Link from "next/link";
import { WBtn } from "./ui";

export function PublicNav() {
  return <div className="appbar">
    <Link href="/" className="appbar-brand"><i>V</i>VentureKart</Link>
    <div className="appnav" style={{ marginLeft: 18 }}>
      <Link href="/#how">How it works</Link>
      <Link href="/founder">For Startups</Link>
      <Link href="/explore">For Investors</Link>
    </div>
    <div className="appbar-right">
      <Link href="/login"><WBtn kind="ghost" sm>Login</WBtn></Link>
      <Link href="/signup"><WBtn kind="primary" sm>Start Investing</WBtn></Link>
    </div>
  </div>;
}
