import type { MouseEvent } from "react";
import type { Topic } from "../../data/roadmapData";
import { Button } from "../atoms/button";

export interface TopicCardProps {
  topic: Topic;
  topicKey: string;
  isPinned: boolean;
  setButtonRef: (key: string, node: HTMLButtonElement | null) => void;
  onPinToggle: (key: string, topic: Topic) => void;
}

export const TopicCard = ({ topic, topicKey, isPinned, setButtonRef, onPinToggle }: TopicCardProps) => {
  const setRef = (node: HTMLButtonElement | null) => {
    setButtonRef(topicKey, node);
  };

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onPinToggle(topicKey, topic);
  };

  return (
    <Button isPinned={isPinned} setRef={setRef} onClick={handleClick}>
      <span className="block text-base font-semibold">{topic.title}</span>
      <span className="mt-0.5 block text-sm text-muted">{topic.hint}</span>
    </Button>
  );
};
