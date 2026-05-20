import type { Stage, Topic } from "../../data/roadmapData";
import { Badge } from "../atoms/badge";
import { Typography } from "../atoms/typography";
import { TopicCard } from "../molecules/topicCard";

export interface StageSectionProps {
  stage: Stage;
  activeKey: string | null;
  onPinToggle: (key: string, topic: Topic) => void;
}

export const StageSection = ({ stage, activeKey, onPinToggle }: StageSectionProps) => {
  const { id, anchor, tag, title, desc, topics } = stage;

  return (
    <section id={anchor} aria-labelledby={`${anchor}-title`} className="mb-11">
      <div className="mb-4 flex flex-wrap items-baseline gap-3 border-b-2 border-card-border pb-2.5">
        <Badge label={tag} tone={id} />
        <Typography component="h2" id={`${anchor}-title`} variant="headingMd">
          {title}
        </Typography>
      </div>
      <Typography className="mb-4 max-w-[70ch]" variant="body" tone="muted">
        {desc}
      </Typography>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(232px,1fr))] gap-3">
        {topics.map((topic) => {
          const topicKey = `${id}-${topic.title}`;
          return (
            <TopicCard key={topicKey} topic={topic} topicKey={topicKey} isPinned={activeKey === topicKey} onPinToggle={onPinToggle} />
          );
        })}
      </div>
    </section>
  );
};
