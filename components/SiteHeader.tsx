import Link from "next/link";

const navigation = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/research", label: "Research" },
  { href: "/tech-stack", label: "Tech stack" },
  { href: "/resume", label: "Résumé" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  return (
    <header className="site-header">
      <Link aria-label="Harshvardhan Patil — home" className="site-mark" href="/">
        HP<span>.</span>
      </Link>
      <nav aria-label="Main navigation" className="site-nav">
        {navigation.map((item) => (
          <Link className="site-nav-link" href={item.href} key={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
