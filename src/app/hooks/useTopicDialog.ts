import { useState } from "react";
import type { Topic } from "../data/roadmapData";

export interface UseTopicDialogResult {
  activeTopic: Topic | null;
  activeKey: string | null;
  isOpen: boolean;
  dialogHint: string;
  setButtonRef: (key: string, node: HTMLButtonElement | null) => void;
  toggleTopic: (key: string, topic: Topic) => void;
  setDialogOpen: (open: boolean) => void;
}

export function useTopicDialog(): UseTopicDialogResult {
  const [activeTopic, setActiveTopic] = useState<Topic | null>(null);
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const [isOpen, setFrameVisible] = useState(false);

  const dialogHint = activeKey
    ? "Open · Click the card again or press Esc to close"
    : "Click a card to open it · Esc to close";

  const setButtonRef = (_key: string, _node: HTMLButtonElement | null) => {
    // kept for the existing card API shape, no-op now that the UI uses a proper modal
  };

  const closeDialog = () => {
    setFrameVisible(false);
    setActiveTopic(null);
    setActiveKey(null);
  };

  const openTopic = (key: string, topic: Topic) => {
    setActiveKey(key);
    setActiveTopic(topic);
    setFrameVisible(true);
  };

  const toggleTopic = (key: string, topic: Topic) => {
    if (activeKey === key) {
      closeDialog();
      return;
    }

    openTopic(key, topic);
  };

  const setDialogOpen = (open: boolean) => {
    if (!open) {
      closeDialog();
      return;
    }

    setFrameVisible(true);
  };

  return {
    activeTopic,
    activeKey,
    isOpen,
    dialogHint,
    setButtonRef,
    toggleTopic,
    setDialogOpen,
  };
}
