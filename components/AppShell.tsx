"use client";
import { usePathname } from "next/navigation";
import { Frame } from "./ui";
import { AppBar } from "./AppBar";

// Maps a route to the URL shown in the frame's address bar.
function urlFor(path: string) {
  if (path === "/home") return "/home";
  return path;
}

export function AppShell({ children, gray = true }: { children: React.ReactNode; gray?: boolean }) {
  const path = usePathname();
  return (
    <div style={{ padding: "24px 20px 60px" }}>
      <Frame url={urlFor(path)} gray={gray}>
        <AppBar />
        {children}
      </Frame>
    </div>
  );
}
