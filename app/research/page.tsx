import type { Metadata } from "next";
import Link from "next/link";
import PageIntro from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Research interests in inference-time computation, architecture, circuits, and digital communications.",
};

const interests = [
  {
    number: "01",
    title: "Inference-time computation",
    description:
      "How should a language model spend additional computation while solving a problem? Interested in the trade-offs between self-consistency, verification, search, and adaptive allocation.",
    project: "/projects/reasoninglab",
    projectLabel: "ReasoningLab",
  },
  {
    number: "02",
    title: "Computer architecture",
    description:
      "How do instruction behavior and cache policy interact? Exploring instruction-aware replacement in a processor simulation environment.",
    project: "/projects/instruction-rrip",
    projectLabel: "Instruction-RRIP",
  },
  {
    number: "03",
    title: "Circuits and physical design",
    description:
      "The relationship between transistor-level choices, timing behavior, and the practical constraints of digital standard cells.",
    project: "/projects/sky130-standard-cell-design",
    projectLabel: "Sky130 standard-cell design",
  },
  {
    number: "04",
    title: "Measurement and communications",
    description:
      "Turning physical signals into useful observations through automated instrumentation, and exploring digital communications with GNU Radio.",
    project: "/projects/automated-bode-plot-measurement",
    projectLabel: "Automated Bode measurement",
  },
];

export default function ResearchPage() {
  return (
    <main className="page-shell">
      <PageIntro eyebrow="03 / QUESTIONS IN PROGRESS" title="Research, as a verb.">
        I am interested in systems where a small design choice changes what can
        be measured, computed, or built. These are the questions behind the
        projects here.
      </PageIntro>

      <div className="interest-list">
        {interests.map((interest) => (
          <section className="interest-row" key={interest.number}>
            <span className="project-number">{interest.number}</span>
            <div>
              <h2>{interest.title}</h2>
              <p>{interest.description}</p>
            </div>
            <Link className="text-link" href={interest.project}>
              Related work <span aria-hidden="true">↗</span>
            </Link>
          </section>
        ))}
      </div>
    </main>
  );
}
