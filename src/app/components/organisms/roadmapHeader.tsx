import type { Stage } from "../../data/roadmapData";
import { Typography } from "../atoms/typography";
import { StageNav } from "../molecules/stageNav";

export interface RoadmapHeaderProps {
  stages: Stage[];
}

export const RoadmapHeader = ({ stages }: RoadmapHeaderProps) => {
  return (
    <header className="mx-auto max-w-[980px] px-6 pb-6 pt-12">
      <Typography component="h1" variant="display">
        Frontend Onboarding Roadmap
      </Typography>
      <Typography className="mt-1 max-w-[70ch]" variant="bodyLg" tone="muted">
        The purpose of this roadmap is to have at hand all the things that are needed to get comfortable with coding in
        our company.
      </Typography>
      <Typography className="mt-3" variant="bodySm" tone="muted">
        There are some links and resources that I have personally liked and that I hope could bring you some help.
      </Typography>
      <StageNav stages={stages} />
    </header>
  );
};
