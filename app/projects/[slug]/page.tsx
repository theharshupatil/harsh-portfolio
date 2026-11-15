import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="page-shell case-study">
      <Link className="back-link" href="/projects">
        <span aria-hidden="true">←</span> All projects
      </Link>
      <header className="case-heading">
        <p className="eyebrow">
          {project.number} / {project.discipline}
        </p>
        <h1 className="page-title">{project.title}</h1>
        <p className="page-lead">{project.summary}</p>
      </header>

      <div className="case-layout">
        <div className="case-sections">
          <section>
            <p className="eyebrow">01 — The question</p>
            <h2>Problem</h2>
            <p>{project.problem}</p>
          </section>
          <section>
            <p className="eyebrow">02 — The work</p>
            <h2>What was built</h2>
            <p>{project.build}</p>
          </section>
          <section>
            <p className="eyebrow">03 — Under the hood</p>
            <h2>Implementation</h2>
            <p>{project.implementation}</p>
          </section>
          <section>
            <p className="eyebrow">04 — Engineering notes</p>
            <h2>Decisions &amp; challenges</h2>
            <p>{project.engineeringNotes}</p>
          </section>
          <section>
            <p className="eyebrow">05 — Evidence</p>
            <h2>Outcome</h2>
            <p>{project.verifiedOutcome}</p>
          </section>
        </div>

        <aside className="case-aside">
          <div>
            <p className="eyebrow">Tools &amp; concepts</p>
            <ul className="case-tags">
              {project.technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">Source</p>
            {project.repository ? (
              <a
                className="text-link"
                href={project.repository}
                rel="noreferrer"
                target="_blank"
              >
                Project repository <span aria-hidden="true">↗</span>
              </a>
            ) : (
              <p className="muted-copy">
                A repository link was not included with the supplied project
                material.
              </p>
            )}
          </div>
        </aside>
      </div>

      <nav aria-label="Project navigation" className="case-bottom-nav">
        <Link className="text-link" href="/projects">
          ← All projects
        </Link>
        <Link className="text-link" href="/contact">
          Start a conversation <span aria-hidden="true">↗</span>
        </Link>
      </nav>
    </main>
  );
}
