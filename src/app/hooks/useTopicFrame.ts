import { useEffect, useRef, useState } from "react";
import type { Topic } from "../data/roadmapData";

export interface TopicFramePosition {
  left?: number;
  top?: number;
  mobile?: boolean;
}

export interface UseTopicFrameResult {
  activeTopic: Topic | null;
  activeKey: string | null;
  frameVisible: boolean;
  framePos: TopicFramePosition;
  frameRef: React.RefObject<HTMLElement | null>;
  frameHint: string;
  setButtonRef: (key: string, node: HTMLButtonElement | null) => void;
  toggleTopic: (key: string, topic: Topic) => void;
  hideTopic: () => void;
}

export function useTopicFrame(): UseTopicFrameResult {
  const [activeTopic, setActiveTopic] = useState<Topic | null>(null);
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const [frameVisible, setFrameVisible] = useState(false);
  const [framePos, setFramePos] = useState<TopicFramePosition>({});

  const frameRef = useRef<HTMLElement | null>(null);
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const activeButtonRef = useRef<HTMLButtonElement | null>(null);

  const frameHint = activeKey
    ? "Open · Click the card again or press Esc to close"
    : "Click a card to open it · Esc to close";

  const setButtonRef = (key: string, node: HTMLButtonElement | null) => {
    buttonRefs.current[key] = node;
  };

  const clearFrame = () => {
    setFrameVisible(false);
    setActiveTopic(null);
    setActiveKey(null);
    activeButtonRef.current = null;
  };

  const positionFrame = (button: HTMLButtonElement | null) => {
    const frame = frameRef.current;
    if (!button || !frame) return;

    if (window.innerWidth <= 600) {
      setFramePos({ mobile: true });
      return;
    }

    frame.style.visibility = "hidden";
    frame.style.opacity = "1";
    frame.style.pointerEvents = "auto";
    frame.style.transform = "translateY(0)";

    const { offsetWidth: frameWidth, offsetHeight: frameHeight } = frame;

    frame.style.visibility = "";
    frame.style.opacity = "";
    frame.style.pointerEvents = "";
    frame.style.transform = "";

    const { right, top: buttonTop, left: buttonLeft, bottom } = button.getBoundingClientRect();
    const margin = 12;
    let left = right + margin;
    let top = buttonTop;

    if (left + frameWidth > window.innerWidth - margin) left = buttonLeft - frameWidth - margin;
    if (left < margin) {
      left = Math.max(margin, buttonLeft);
      top = bottom + margin;
    }
    if (top + frameHeight > window.innerHeight - margin) top = Math.max(margin, window.innerHeight - frameHeight - margin);
    if (top < margin) top = margin;

    setFramePos({ left, top, mobile: false });
  };

  const showTopic = (key: string, topic: Topic) => {
    const button = buttonRefs.current[key];
    if (!button) return;

    activeButtonRef.current = button;
    setActiveKey(key);
    setActiveTopic(topic);
    setFrameVisible(true);
    requestAnimationFrame(() => positionFrame(button));
  };

  const hideTopic = () => {
    clearFrame();
  };

  const toggleTopic = (key: string, topic: Topic) => {
    if (activeKey === key) {
      clearFrame();
      return;
    }

    showTopic(key, topic);
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      if (activeKey) {
        const button = buttonRefs.current[activeKey];
        clearFrame();
        button?.focus();
        return;
      }
      if (frameVisible) {
        clearFrame();
      }
    };

    const onResize = () => {
      if (frameVisible && activeButtonRef.current) positionFrame(activeButtonRef.current);
    };

    const onDocumentClick = ({ target }: MouseEvent) => {
      if (!activeKey) return;

      const frame = frameRef.current;
      const button = buttonRefs.current[activeKey];
      const node = target as Node | null;

      if (frame?.contains(node) || button?.contains(node)) return;

      clearFrame();
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    document.addEventListener("click", onDocumentClick);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("click", onDocumentClick);
    };
  }, [activeKey, frameVisible]);

  return {
    activeTopic,
    activeKey,
    frameVisible,
    framePos,
    frameRef,
    frameHint,
    setButtonRef,
    toggleTopic,
    hideTopic,
  };
}
