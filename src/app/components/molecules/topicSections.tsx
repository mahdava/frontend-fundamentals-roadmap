import type { Topic } from "../../data/roadmapData";
import { Typography } from "../atoms/typography";

export interface TopicSectionsProps {
  topic: Topic;
}

export const TopicSections = ({ topic: { title, sections } }: TopicSectionsProps) => {
  return (
    <div className="text-sm [&_li]:mb-1 [&_ul]:m-0 [&_ul]:pl-5">
      {sections.map((section) => (
        <section key={`${title}-${section.h}`}>
          <Typography component="h4" variant="eyebrow" tone="muted" className="mb-1 mt-4">
            {section.h}
          </Typography>
          <ul className={section.isResources ? "resources" : undefined}>
            {section.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
};
