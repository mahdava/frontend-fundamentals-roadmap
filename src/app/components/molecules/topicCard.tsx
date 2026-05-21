import type { MouseEvent } from "react";
import type { Topic } from "../../data/roadmapData";
import { CardButton } from "./cardButton";

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
    <CardButton isPinned={isPinned} onClick={handleClick}>
      {isPinned && (
        <span className="absolute right-4 top-4 rounded-full bg-accent-soft px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-accent">
          Open
        </span>
      )}
      <div className="min-w-0">
        <span className="block text-base font-semibold">{topic.title}</span>
        <span className="mt-0.5 block text-sm text-muted">{topic.hint}</span>
      </div>
    </CardButton>
  );
};
