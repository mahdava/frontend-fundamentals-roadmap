"use client";

import type { Topic } from "../../data/roadmapData";
import { Dialog } from "../atoms/dialog";
import { Typography } from "../atoms/typography";
import { TopicSections } from "./topicSections";

export interface TopicDetailsDialogProps {
  topic: Topic;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onCloseAutoFocus?: (event: Event) => void;
}

export const TopicDetailsDialog = ({ topic, open, onOpenChange, onCloseAutoFocus }: TopicDetailsDialogProps) => {
  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
      closeLabel="Close topic details"
      onCloseAutoFocus={onCloseAutoFocus}
      title={
        <Typography component="h3" variant="headingSm" tone="accent" className="mb-1">
          {topic.title}
        </Typography>
      }
      description={
        <Typography variant="label" tone="muted" className="italic">
          {topic.sub}
        </Typography>
      }
    >
      <TopicSections topic={topic} />
    </Dialog>
  );
};
