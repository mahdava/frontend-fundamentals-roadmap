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
    "fixed z-[100] max-h-[calc(100vh-32px)] w-[min(420px,calc(100vw-32px))] overflow-auto rounded-[22px] border border-card-border bg-card/96 px-5 pb-4 pt-5 shadow-card-lg ring-1 ring-black/4 backdrop-blur-sm transition-all duration-150 ease-out motion-reduce:transition-none",
    frameVisible && activeTopic ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-1 opacity-0",
    mobile && "bottom-4 left-4 right-4 top-auto w-auto max-w-none",
  );

  const pointerEvents = isPinned ? "auto" : undefined;

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
      style={{ ...style, pointerEvents }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {activeTopic && (
        <>
          <div className="mb-3 flex items-start justify-between gap-3 border-b border-card-border/80 pb-3">
            <div>
              <Typography component="h3" id="frame-title" variant="headingSm" tone="accent" className="mb-1">
                {activeTopic.title}
              </Typography>
              <Typography variant="label" tone="muted" className="italic">
                {activeTopic.sub}
              </Typography>
            </div>
            <span className="rounded-full bg-accent-soft px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-accent">
              {isPinned ? "Pinned" : "Preview"}
            </span>
          </div>
          <TopicSections topic={activeTopic} />
          <Typography variant="caption" tone="muted" className="mt-4 border-t border-card-border/80 pt-3">
            {pinHint}
          </Typography>
        </>
      )}
    </aside>
  );
};
