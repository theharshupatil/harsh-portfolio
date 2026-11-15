import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import Projects from "@/components/Projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Engineering projects across instrumentation, computer architecture, VLSI, and machine reasoning.",
};

export default function ProjectsPage() {
  return (
    <main className="page-shell">
      <PageIntro eyebrow="02 / SELECTED WORK" title="Built to understand.">
        Projects across instrumentation, architecture, silicon, and machine
        reasoning. Each case study separates what is documented from what still
        needs detail.
      </PageIntro>
      <Projects />
    </main>
  );
}
