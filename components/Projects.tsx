import Link from "next/link";
import { projects } from "@/lib/projects";

export default function Projects() {
  return (
    <div className="project-list">
      {projects.map((project) => (
        <article className="project-row" key={project.slug}>
          <span className="project-number">{project.number}</span>
          <div className="project-copy">
            <p className="eyebrow">{project.discipline}</p>
            <h2>{project.title}</h2>
            <p>{project.summary}</p>
            <ul aria-label={`${project.title} technologies`} className="tag-list">
              {project.technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </div>
          <Link className="project-open" href={`/projects/${project.slug}`}>
            Read case study <span aria-hidden="true">↗</span>
          </Link>
        </article>
      ))}
    </div>
  );
}
