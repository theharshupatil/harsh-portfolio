import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "About",
  description: "Background, interests, and engineering philosophy.",
};

export default function AboutPage() {
  return (
    <main className="page-shell about-page">
      <PageIntro eyebrow="01 / ABOUT" title="Curiosity, made tangible.">
        I am Harshvardhan Patil, an Electrical Engineering student at IIT
        Bombay, interested in how computation takes shape in the physical
        world.
      </PageIntro>

      <div className="about-body">
        <p className="about-statement">
          I move between the abstractions of software and the details of
          hardware: measuring a circuit, reasoning about a cache, or asking how
          a model should spend its computation.
        </p>
        <div className="about-notes">
          <section>
            <p className="eyebrow">01 — What holds my attention</p>
            <p>
              Instrumentation and signals. Computer architecture. VLSI design.
              Machine reasoning. Different scales of the same question:
              what is a system doing, and why?
            </p>
          </section>
          <section>
            <p className="eyebrow">02 — How I like to work</p>
            <p>
              Start with the behavior that needs explaining. Make the system
              observable. Then connect each design decision to evidence rather
              than intuition alone.
            </p>
          </section>
          <section>
            <p className="eyebrow">03 — The through-line</p>
            <p>
              I am drawn to engineering at the boundary between disciplines:
              code that operates instruments, architecture that shapes
              computation, and circuits that turn logic into a physical
              object.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
