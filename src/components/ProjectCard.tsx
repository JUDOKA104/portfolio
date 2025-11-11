import React from "react";

type Props = {
  title: string;
  tags: string[];
  description: string;
  highlights?: string[];
  link?: string;
  repo?: string;
};

export default function ProjectCard({ title, tags, description, highlights = [], link, repo }: Props) {
  return (
    <article className="asus-rog-card flexcol rog-hyper">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm text-[var(--muted)] mt-1">{description}</p>

      <div className="mt-3 flex flex-wrap gap-2">
        {tags.map((t) => (<span key={t} className="badge">{t}</span>))}
      </div>

      {highlights.length > 0 && (
        <ul className="mt-4 space-y-1.5 text-sm text-[var(--muted)]">
          {highlights.slice(0, 3).map((h, i) => (
            <li key={i} className="flex items-start gap-2">
              <svg className="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M20 6 9 17l-5-5" />
              </svg>
              <span>{h}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="card-actions mt-5 flex gap-3">
        {link && <a className="btn-primary" href={link} target="_blank" rel="noreferrer">Voir la démo</a>}
        {repo && <a className="btn-primary" href={repo} target="_blank" rel="noreferrer">Voir le projet</a>}
      </div>
    </article>
  );
}

