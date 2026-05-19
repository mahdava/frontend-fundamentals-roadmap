import type { Stage } from "../../data/roadmapData";
import { Typography } from "../atoms/typography";
import { StageNav } from "../molecules/stageNav";

export interface RoadmapHeaderProps {
  stages: Stage[];
}

export const RoadmapHeader = ({ stages }: RoadmapHeaderProps) => {
  return (
    <header className="mx-auto max-w-[980px] px-6 pb-8 pt-12">
      <div className="rounded-[20px] border border-card-border/80 bg-card/90 px-6 py-7 shadow-card backdrop-blur-sm sm:px-8">
        <Typography component="p" variant="eyebrow" tone="accent" className="mb-3">
          Learning path
        </Typography>
        <Typography component="h1" variant="display" className="max-w-[12ch]">
          Frontend Onboarding Roadmap
        </Typography>
        <Typography className="mt-3 max-w-[66ch]" variant="bodyLg" tone="muted">
          A structured path for getting comfortable with modern frontend work, from fundamentals and React thinking to
          Next.js patterns and adjacent tooling.
        </Typography>
        <Typography className="mt-3 max-w-[62ch]" variant="bodySm" tone="muted">
          Use the stages as a map, then open topics for the concepts, questions, and resources worth spending real time
          on.
        </Typography>
        <StageNav stages={stages} />
      </div>
    </header>
  );
};
