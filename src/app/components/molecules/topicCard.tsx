import type { MouseEvent } from "react";
import type { Topic } from "../../data/roadmapData";
import { Button } from "../atoms/button";

export interface TopicCardProps {
  topic: Topic;
  topicKey: string;
  isPinned: boolean;
  onPinToggle: (key: string, topic: Topic) => void;
}

export const TopicCard = ({ topic, topicKey, isPinned, onPinToggle }: TopicCardProps) => {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onPinToggle(topicKey, topic);
  };

  return (
    <Button isPinned={isPinned} onClick={handleClick}>
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <span className="block text-base font-semibold">{topic.title}</span>
          <span className="mt-0.5 block text-sm text-muted">{topic.hint}</span>
        </div>
        {isPinned && (
          <span className="shrink-0 rounded-full bg-accent-soft px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-accent">
            Open
          </span>
        )}
      </div>
    </Button>
  );
};
