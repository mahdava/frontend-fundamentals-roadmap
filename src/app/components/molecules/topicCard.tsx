import type { FocusEvent, MouseEvent } from "react";
import type { Topic } from "../../data/roadmapData";
import { Button } from "../atoms/button";

export interface TopicCardProps {
  topic: Topic;
  topicKey: string;
  isPinned: boolean;
  isInteractionLocked: boolean;
  setButtonRef: (key: string, node: HTMLButtonElement | null) => void;
  onShow: (key: string, topic: Topic) => void;
  onHideSoon: () => void;
  onPinToggle: (key: string, topic: Topic) => void;
}

export const TopicCard = ({
  topic,
  topicKey,
  isPinned,
  isInteractionLocked,
  setButtonRef,
  onShow,
  onHideSoon,
  onPinToggle,
}: TopicCardProps) => {
  const setRef = (node: HTMLButtonElement | null) => {
    setButtonRef(topicKey, node);
  };

  const showTopic = () => {
    onShow(topicKey, topic);
  };

  const handleMouseEnter = () => {
    if (isInteractionLocked) return;
    showTopic();
  };

  const handleMouseLeave = () => {
    if (isInteractionLocked) return;
    onHideSoon();
  };

  const handleFocus = () => {
    if (isInteractionLocked && !isPinned) return;
    showTopic();
  };

  const handleBlur = ({ relatedTarget }: FocusEvent<HTMLButtonElement>) => {
    if (isInteractionLocked) return;
    if (relatedTarget instanceof HTMLButtonElement) return;

    onHideSoon();
  };

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onPinToggle(topicKey, topic);
  };

  return (
    <Button
      isPinned={isPinned}
      setRef={setRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onClick={handleClick}
    >
      <span className="block text-base font-semibold">{topic.title}</span>
      <span className="mt-0.5 block text-sm text-muted">{topic.hint}</span>
    </Button>
  );
};
