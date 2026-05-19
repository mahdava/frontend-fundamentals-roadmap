"use client";

import type { Topic } from "../../data/roadmapData";
import { BaseDialog } from "../atoms/dialog";
import { Typography } from "../atoms/typography";
import { TopicSections } from "./topicSections";

export interface TopicDetailsDialogProps {
  activeTopic: Topic | null;
  open: boolean;
  hint: string;
  onOpenChange: (open: boolean) => void;
}

export const TopicDetailsDialog = ({
  activeTopic,
  open,
  hint,
  onOpenChange,
}: TopicDetailsDialogProps) => {
  return (
    <BaseDialog
      open={open}
      onOpenChange={onOpenChange}
      closeLabel="Close topic details"
      title={
        <Typography component="h3" variant="headingSm" tone="accent" className="mb-1">
          {activeTopic?.title ?? "Topic details"}
        </Typography>
      }
      description={
        activeTopic ? (
          <Typography variant="label" tone="muted" className="italic">
            {activeTopic.sub}
          </Typography>
        ) : undefined
      }
    >
      {activeTopic ? (
        <>
          <TopicSections topic={activeTopic} />
          <Typography variant="caption" tone="muted" className="mt-4 border-t border-card-border/80 pt-3">
            {hint}
          </Typography>
        </>
      ) : null}
    </BaseDialog>
  );
};
