import type { Metadata } from "next";
import Link from "next/link";
import PageIntro from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Harshvardhan Patil.",
};

export default function ContactPage() {
  return (
    <main className="page-shell contact-page">
      <PageIntro eyebrow="06 / CONTACT" title="Good questions welcome.">
        If you are thinking about hardware, systems, research, or a collaboration
        that crosses those boundaries, I would be glad to hear from you.
      </PageIntro>

      <section aria-labelledby="contact-title" className="contact-block">
        <p className="eyebrow">A place to start</p>
        <h2 id="contact-title">Find me on GitHub.</h2>
        <p>
          The project material currently available here does not include a
          public email address or other social profiles. GitHub is the contact
          link available from the source repository.
        </p>
        <Link
          className="contact-link"
          href="https://github.com/TheHarshvardhanPatil"
          rel="noreferrer"
          target="_blank"
        >
          github.com/TheHarshvardhanPatil <span aria-hidden="true">↗</span>
        </Link>
      </section>
      <p className="contact-signoff">Until then, keep following the signal.</p>
    </main>
  );
}
