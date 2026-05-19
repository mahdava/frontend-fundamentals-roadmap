"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { twMerge } from "tailwind-merge";
import type { Topic } from "../../data/roadmapData";
import { Typography } from "../atoms/typography";
import { TopicSections } from "../molecules/topicSections";

export interface TopicFrameProps {
  activeTopic: Topic | null;
  frameVisible: boolean;
  frameHint: string;
  onOpenChange: (open: boolean) => void;
}

export const TopicFrame = ({
  activeTopic,
  frameVisible,
  frameHint,
  onOpenChange,
}: TopicFrameProps) => {
  return (
    <Dialog.Root open={frameVisible} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[120] bg-black/40 backdrop-blur-[2px] data-[state=open]:animate-in data-[state=closed]:animate-out" />
        <Dialog.Content
          className={twMerge(
            "fixed z-[130] flex max-h-[min(85vh,720px)] w-[min(680px,calc(100vw-32px))] flex-col overflow-hidden rounded-[22px] border border-card-border bg-card shadow-card-lg outline-none",
            "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
            "data-[state=open]:animate-in data-[state=closed]:animate-out duration-150",
            "sm:max-h-[min(80vh,760px)]",
            "max-sm:inset-x-0 max-sm:bottom-0 max-sm:top-auto max-sm:w-full max-sm:max-w-none max-sm:translate-x-0 max-sm:translate-y-0 max-sm:rounded-b-none max-sm:rounded-t-[24px]",
          )}
        >
          {activeTopic && (
            <>
              <div className="flex items-start justify-between gap-4 border-b border-card-border/80 px-5 pb-4 pt-5 sm:px-6">
                <div className="min-w-0">
                  <Dialog.Title asChild>
                    <Typography component="h3" variant="headingSm" tone="accent" className="mb-1">
                      {activeTopic.title}
                    </Typography>
                  </Dialog.Title>
                  <Dialog.Description asChild>
                    <Typography variant="label" tone="muted" className="italic">
                      {activeTopic.sub}
                    </Typography>
                  </Dialog.Description>
                </div>
                <Dialog.Close asChild>
                  <button
                    type="button"
                    className="shrink-0 rounded-full border border-card-border px-3 py-1.5 text-sm text-muted transition-colors hover:border-accent/45 hover:text-foreground"
                    aria-label="Close topic details"
                  >
                    Close
                  </button>
                </Dialog.Close>
              </div>

              <div className="overflow-y-auto px-5 pb-5 pt-1 sm:px-6 sm:pb-6">
                <TopicSections topic={activeTopic} />
                <Typography variant="caption" tone="muted" className="mt-4 border-t border-card-border/80 pt-3">
                  {frameHint}
                </Typography>
              </div>
            </>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
