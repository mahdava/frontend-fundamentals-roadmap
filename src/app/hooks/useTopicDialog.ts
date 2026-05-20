import { useState } from "react";
import type { Topic } from "../data/roadmapData";

export interface SelectedTopic {
  key: string;
  topic: Topic;
}

export interface UseTopicDialogResult {
  selectedTopic: SelectedTopic | null;
  activeKey: string | null;
  toggleTopic: (key: string, topic: Topic) => void;
  closeDialog: () => void;
}

export function useTopicDialog(): UseTopicDialogResult {
  const [selectedTopic, setSelectedTopic] = useState<SelectedTopic | null>(null);

  const closeDialog = () => {
    setSelectedTopic(null);
  };

  const toggleTopic = (key: string, topic: Topic) => {
    if (selectedTopic?.key === key) {
      closeDialog();
      return;
    }

    setSelectedTopic({ key, topic });
  };

  return {
    selectedTopic,
    activeKey: selectedTopic?.key ?? null,
    toggleTopic,
    closeDialog,
  };
}
