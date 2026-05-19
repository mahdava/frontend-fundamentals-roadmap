import { useState } from "react";
import type { Topic } from "../data/roadmapData";

export interface UseTopicFrameResult {
  activeTopic: Topic | null;
  activeKey: string | null;
  frameVisible: boolean;
  frameHint: string;
  setButtonRef: (key: string, node: HTMLButtonElement | null) => void;
  toggleTopic: (key: string, topic: Topic) => void;
  setFrameOpen: (open: boolean) => void;
}

export function useTopicFrame(): UseTopicFrameResult {
  const [activeTopic, setActiveTopic] = useState<Topic | null>(null);
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const [frameVisible, setFrameVisible] = useState(false);

  const frameHint = activeKey
    ? "Open · Click the card again or press Esc to close"
    : "Click a card to open it · Esc to close";

  const setButtonRef = (_key: string, _node: HTMLButtonElement | null) => {
    // kept for the existing card API shape, no-op now that the UI uses a proper modal
  };

  const clearFrame = () => {
    setFrameVisible(false);
    setActiveTopic(null);
    setActiveKey(null);
  };

  const showTopic = (key: string, topic: Topic) => {
    setActiveKey(key);
    setActiveTopic(topic);
    setFrameVisible(true);
  };

  const toggleTopic = (key: string, topic: Topic) => {
    if (activeKey === key) {
      clearFrame();
      return;
    }

    showTopic(key, topic);
  };

  const setFrameOpen = (open: boolean) => {
    if (!open) {
      clearFrame();
      return;
    }

    setFrameVisible(true);
  };

  return {
    activeTopic,
    activeKey,
    frameVisible,
    frameHint,
    setButtonRef,
    toggleTopic,
    setFrameOpen,
  };
}
