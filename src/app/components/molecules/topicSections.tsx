import type { Topic } from "../../data/roadmapData";
import { Link } from "../atoms/link";
import { MarkdownText } from "../atoms/markdownText";
import { Typography } from "../atoms/typography";

export interface TopicSectionsProps {
  topic: Topic;
}

const renderResourceItem = (item: string) => {
  const match = item.match(/^(.*)\((https?:\/\/[^\s)]+)\)$/);

  if (!match) return <MarkdownText content={item} />;

  const [, label, href] = match;
  const accessibleLabel = `${label.trim().replace(/[*_-]/g, "")} (opens in a new tab)`;

  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={accessibleLabel}
      className="underline decoration-accent/45 underline-offset-2 hover:text-accent"
    >
      <MarkdownText content={label.trim().replace(/[-–—:]\s*$/, "")} />
      <span className="sr-only"> (opens in a new tab)</span>
    </Link>
  );
};

export const TopicSections = ({ topic: { title, sections } }: TopicSectionsProps) => {
  return (
    <div className="text-sm [&_li]:mb-1 [&_ul]:m-0 [&_ul]:pl-5">
      {sections.map((section) => (
        <section key={`${title}-${section.h}`}>
          <Typography component="h4" variant="eyebrow" tone="muted" className="mb-1 mt-4">
            {section.h}
          </Typography>
          <ul className={section.isResources ? "resources list-disc marker:text-accent" : "list-disc marker:text-accent"}>
            {section.items.map((item) => (
              <li key={item}>{section.isResources ? renderResourceItem(item) : <MarkdownText content={item} />}</li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
};
