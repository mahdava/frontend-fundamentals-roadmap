import type { Stage } from "../../data/roadmapData";
import { Link } from "../atoms/link";

export interface StageNavProps {
  stages: Stage[];
}

export const StageNav = ({ stages }: StageNavProps) => {
  return (
    <nav aria-label="Learning stages" className="mt-6 flex flex-wrap gap-2">
      {stages.map((stage) => (
        <Link
          key={stage.id}
          href={`#${stage.anchor}`}
          className="inline-flex items-center gap-2 rounded-full border border-card-border bg-background/70 px-3.5 py-2 text-sm text-foreground no-underline transition-colors hover:border-accent/45 hover:bg-background/70 hover:text-accent"
        >
          <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-accent-soft px-1.5 text-xs font-semibold text-accent">
            {stage.id}
          </span>
          <span>{stage.title}</span>
        </Link>
      ))}
    </nav>
  );
};
