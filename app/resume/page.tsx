import { existsSync } from "node:fs";
import { join } from "node:path";
import type { Metadata } from "next";
import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import ResumeActions from "@/components/ResumeActions";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Résumé",
  description: "A concise, printable engineering résumé.",
};

const resumePdfPath = "/Harshvardhan-Patil-Resume.pdf";
const hasResumePdf = existsSync(
  join(process.cwd(), "public", resumePdfPath.slice(1))
);

export default function ResumePage() {
  return (
    <main className="page-shell resume-page">
      <div className="resume-topline">
        <PageIntro eyebrow="05 / RÉSUMÉ" title="Harshvardhan Patil">
          Electrical Engineering · IIT Bombay
        </PageIntro>
        <div className="resume-actions">
          <ResumeActions />
          {hasResumePdf && (
            <a className="text-link" download href={resumePdfPath}>
              Download PDF <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </div>

      <section className="resume-section">
        <p className="eyebrow">Education</p>
        <div className="resume-entry">
          <div>
            <h2>Indian Institute of Technology Bombay</h2>
            <p>Electrical Engineering</p>
          </div>
          <span>India</span>
        </div>
      </section>

      <section className="resume-section">
        <p className="eyebrow">Selected engineering work</p>
        {projects.slice(0, 4).map((project) => (
          <div className="resume-entry" key={project.slug}>
            <div>
              <h2>
                <Link href={`/projects/${project.slug}`}>{project.title}</Link>
              </h2>
              <p>{project.summary}</p>
            </div>
            <span>{project.discipline}</span>
          </div>
        ))}
      </section>

      <section className="resume-section">
        <p className="eyebrow">Technical areas</p>
        <p className="resume-focus">
          Instrumentation and measurement · Computer architecture · VLSI ·
          Inference-time computation · Digital communications
        </p>
      </section>

      <p className="resume-note">
        {hasResumePdf
          ? "A PDF copy is available above. This page is also formatted for printing."
          : "A PDF résumé was not included with the supplied project files. This page is formatted for printing; use your browser's print dialog to save a copy."}
      </p>
    </main>
  );
}
