import { useRef, useState } from "react";
import type { Topic } from "../data/roadmapData";

export interface SelectedTopic {
  key: string;
  topic: Topic;
}

export interface UseTopicDialogResult {
  selectedTopic: SelectedTopic | null;
  activeKey: string | null;
  setButtonRef: (key: string, node: HTMLButtonElement | null) => void;
  toggleTopic: (key: string, topic: Topic) => void;
  closeDialog: () => void;
  restoreFocusToTrigger: (event: Event) => void;
}

export function useTopicDialog(): UseTopicDialogResult {
  const [selectedTopic, setSelectedTopic] = useState<SelectedTopic | null>(null);
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const setButtonRef = (key: string, node: HTMLButtonElement | null) => {
    buttonRefs.current[key] = node;
  };

  const closeDialog = () => {
    setSelectedTopic(null);
  };

  const restoreFocusToTrigger = (event: Event) => {
    const activeButton = selectedTopic ? buttonRefs.current[selectedTopic.key] : null;

    if (!activeButton) return;

    event.preventDefault();
    activeButton.focus();
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
    setButtonRef,
    toggleTopic,
    closeDialog,
    restoreFocusToTrigger,
  };
}
