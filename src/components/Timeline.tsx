import React from "react";

type Item = { title: string; time: string; desc?: string };
export default function Timeline({ items }: { items: Item[] }) {
  return (
    <ol className="relative border-l border-zinc-700 pl-6 space-y-4">
      {items.map((it, idx) => (
        <li key={idx}>
          <div className="absolute -left-1.5 w-3 h-3 rounded-full bg-[var(--accent)] border border-zinc-800" />
          <h4 className="font-semibold">{it.title} <span className="text-[var(--muted)] font-normal">— {it.time}</span></h4>
          {it.desc && <p className="text-[var(--muted)] text-sm mt-1">{it.desc}</p>}
        </li>
      ))}
    </ol>
  );
}
