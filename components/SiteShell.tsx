import Link from "next/link";
import type { ReactNode } from "react";
import SiteHeader from "@/components/SiteHeader";

export default function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="site-shell">
      <SiteHeader />
      {children}
      <footer className="site-footer">
        <Link className="footer-signature" href="/">
          Harshvardhan Patil
        </Link>
        <span>Electrical Engineering · IIT Bombay</span>
        <Link href="/contact">Get in touch <span aria-hidden="true">↗</span></Link>
      </footer>
    </div>
  );
}
