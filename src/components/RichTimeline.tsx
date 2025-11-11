import React from "react";

type Item = {
    date: string;
    title: string;
    place?: string;
    bullets?: string[];
    badges?: string[];
    linkLabel?: string;
    href?: string;
};

export default function RichTimeline({ items }: { items: Item[] }) {
    return (
        <ol className="relative border-l border-[var(--border)] pl-6">
            {items.map((it, i) => (
                <li key={i} className="mb-6 ml-2">
                    {/* Dot */}
                    <span className="absolute -left-[7px] mt-1 inline-flex h-3.5 w-3.5 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)]">
                        <span className="h-2 w-2 rounded-full bg-[var(--accent)]/80" />
                    </span>

                    {/* Header line: date + title */}
                    <div className="flex flex-col md:flex-row md:items-baseline md:gap-3">
                        <span className="text-xs uppercase tracking-wider text-[var(--muted)]/85">
                            {it.date}
                        </span>
                        <h3 className="text-base md:text-lg font-semibold leading-tight">{it.title}</h3>
                    </div>

                    {it.place && (
                        <div className="text-xs text-[var(--muted)] mt-0.5">{it.place}</div>
                    )}

                    {/* Bullets */}
                    {it.bullets && it.bullets.length > 0 && (
                        <ul className="mt-2 space-y-1.5 text-sm text-[var(--muted)]">
                            {it.bullets.map((b, idx) => (
                                <li className="flex items-start gap-2" key={idx}>
                                    <svg className="w-4 h-4 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path d="M20 6 9 17l-5-5" />
                                    </svg>
                                    {b}
                                </li>
                            ))}
                        </ul>
                    )}

                    {/* Badges */}
                    {it.badges && it.badges.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-2">
                            {it.badges.map((tag) => (
                                <span className="badge" key={tag}>{tag}</span>
                            ))}
                        </div>
                    )}

                    {/* Link */}
                    {it.href && it.linkLabel && (
                        <div className="mt-3">
                            <a className="btn" href={it.href}>{it.linkLabel}</a>
                        </div>
                    )}
                </li>
            ))}
        </ol>
    );
}
