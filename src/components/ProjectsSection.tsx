import { categoryLabel, projects, type ProjectCategory } from '../data';

const THUMB_GRADIENT: Record<ProjectCategory, string> = {
  production:
    'linear-gradient(135deg, #1a0a2e 0%, #2d1b4e 45%, #16213e 100%)',
  fullstack:
    'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)',
  ai: 'linear-gradient(135deg, #2d1b69 0%, #11998e 100%)',
  analytics:
    'linear-gradient(135deg, #134e5e 0%, #71b280 100%)',
  cv: 'linear-gradient(135deg, #3e2723 0%, #6d4c41 50%, #5d4037 100%)',
};

const TITLE_SPLIT = /\s*[—\u2013\u2014]\s*/;

/** Short title for thumb (before em dash); max width via CSS */
function thumbTitleLine(full: string): string {
  const main = full.split(TITLE_SPLIT)[0].trim();
  return main || full;
}

function initials(title: string): string {
  const main = title.split(TITLE_SPLIT)[0].trim();
  const words = main.split(/\s+/).filter((w) => /[A-Za-z0-9]/.test(w));
  if (words.length === 0) return '?';
  if (words.length === 1) {
    const w = words[0];
    if (w.length <= 4) return w.toUpperCase();
    return w.slice(0, 3).toUpperCase();
  }
  return (words[0][0] + words[1][0]).toUpperCase();
}

function ProjectThumb({
  title,
  category,
}: {
  title: string;
  category: ProjectCategory;
}) {
  const line = thumbTitleLine(title);
  const ini = initials(title);
  return (
    <div
      className="project-thumb-visual"
      style={{ background: THUMB_GRADIENT[category] }}
      aria-hidden
    >
      <div className="project-thumb-pattern" />
      <span className="project-thumb-initials">{ini}</span>
      <span className="project-thumb-title">{line}</span>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <p className="projects-lead">
        Selected work — production platforms, full-stack apps, analytics, and ML projects.
      </p>
      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="project-thumb-link"
              >
                <ProjectThumb title={project.title} category={project.category} />
              </a>
            ) : (
              <ProjectThumb title={project.title} category={project.category} />
            )}
            <div className="project-card-body">
              <span className="project-meta-chip">
                {categoryLabel[project.category]}
                {!project.link && ' · Private repo'}
              </span>
              {project.link ? (
                <a href={project.link} target="_blank" rel="noreferrer" className="project-title-link">
                  <h2>{project.title}</h2>
                </a>
              ) : (
                <h2>{project.title}</h2>
              )}
              <p>{project.description}</p>
              <ul className="project-tag-row" aria-label="Technologies">
                {project.tags.slice(0, 5).map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
