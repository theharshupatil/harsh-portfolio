import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Tech stack",
  description:
    "Languages, tools, and engineering environments represented in the documented work.",
};

const groups = [
  {
    number: "01",
    title: "Programming",
    items: ["Python", "C++", "TypeScript"],
    note: "Python and C++ appear in the project notes; TypeScript powers this site.",
  },
  {
    number: "02",
    title: "Hardware & circuits",
    items: ["SCPI", "MATLAB", "Sky130", "NGSpice", "Magic"],
    note: "Instrumentation control, circuit simulation, and physical-design tools.",
  },
  {
    number: "03",
    title: "Systems &amp; research",
    items: ["ChampSim", "GNU Radio", "LLM inference"],
    note: "Architecture simulation, digital communications, and model reasoning.",
  },
  {
    number: "04",
    title: "Web",
    items: ["Next.js", "React", "Tailwind CSS"],
    note: "The framework and styling system used to build this portfolio.",
  },
];

export default function TechStackPage() {
  return (
    <main className="page-shell">
      <PageIntro eyebrow="04 / TOOLS & ENVIRONMENTS" title="Tools are a means.">
        A working inventory drawn from documented project notes and the
        software behind this site — not a claim of equal depth across every
        tool.
      </PageIntro>

      <div className="stack-list">
        {groups.map((group) => (
          <section className="stack-row" key={group.number}>
            <span className="project-number">{group.number}</span>
            <div className="stack-main">
              <h2>{group.title}</h2>
              <ul className="stack-items">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <p>{group.note}</p>
          </section>
        ))}
      </div>
    </main>
  );
}
