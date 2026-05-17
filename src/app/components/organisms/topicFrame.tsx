import { twMerge } from "tailwind-merge";
import type { CSSProperties, RefObject } from "react";
import type { Topic } from "../../data/roadmapData";
import { Typography } from "../atoms/typography";
import { TopicSections } from "../molecules/topicSections";

export interface TopicFramePosition {
  left?: number;
  top?: number;
  mobile?: boolean;
}

export interface TopicFrameProps {
  frameRef: RefObject<HTMLElement | null>;
  activeTopic: Topic | null;
  frameVisible: boolean;
  framePos: TopicFramePosition;
  pinHint: string;
  isPinned: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export const TopicFrame = ({
  frameRef,
  activeTopic,
  frameVisible,
  framePos,
  pinHint,
  isPinned,
  onMouseEnter,
  onMouseLeave,
}: TopicFrameProps) => {
  const { mobile, left, top } = framePos;
  const style: CSSProperties | undefined = !mobile && typeof left === "number" && typeof top === "number" ? { left, top } : undefined;

  const className = twMerge(
    "fixed z-[100] max-h-[calc(100vh-32px)] w-[min(420px,calc(100vw-32px))] overflow-auto rounded-card border border-accent bg-card px-5 pb-4 pt-5 shadow-card-lg transition-all duration-150 ease-out motion-reduce:transition-none",
    frameVisible && activeTopic ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-1 opacity-0",
    mobile && "bottom-4 left-4 right-4 top-auto w-auto max-w-none",
  );

  return (
    <aside
      id="topic-frame"
      ref={frameRef}
      role="complementary"
      aria-live="polite"
      aria-labelledby="frame-title"
      data-pinned={isPinned}
      tabIndex={-1}
      className={className}
      style={style}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {activeTopic && (
        <>
          <Typography component="h3" id="frame-title" variant="headingSm" tone="accent" className="mb-1">
            {activeTopic.title}
          </Typography>
          <Typography variant="label" tone="muted" className="mb-2 italic">
            {activeTopic.sub}
          </Typography>
          <TopicSections topic={activeTopic} />
          <Typography variant="caption" tone="muted" className="mt-3 border-t border-card-border pt-3">
            {pinHint}
          </Typography>
        </>
      )}
    </aside>
  );
};
