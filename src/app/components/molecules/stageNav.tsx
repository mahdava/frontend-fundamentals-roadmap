import type { Stage } from "../../data/roadmapData";
import { Link } from "../atoms/link";

export interface StageNavProps {
  stages: Stage[];
}

export const StageNav = ({ stages }: StageNavProps) => {
  return (
    <nav aria-label="Learning stages" className="mt-5 flex flex-wrap gap-1.5">
      {stages.map((stage) => (
        <Link
          key={stage.id}
          href={`#${stage.anchor}`}
          className="rounded-full border border-card-border bg-card px-3 py-1 text-sm text-foreground no-underline transition-colors hover:border-accent hover:text-accent"
        >
          {stage.id} · {stage.title}
        </Link>
      ))}
    </nav>
  );
};
