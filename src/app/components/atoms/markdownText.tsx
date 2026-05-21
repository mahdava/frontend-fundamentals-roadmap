import ReactMarkdown from "react-markdown";

export interface MarkdownTextProps {
  content: string;
}

export const MarkdownText = ({ content }: MarkdownTextProps) => {
  return (
    <ReactMarkdown
      allowedElements={["strong", "em", "code", "text"]}
      unwrapDisallowed
      components={{
        strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
        em: ({ children }) => <em className="italic">{children}</em>,
        code: ({ children }) => (
          <code className="rounded bg-accent-soft px-1.5 py-0.5 font-mono text-[0.95em] text-foreground">{children}</code>
        ),
        p: ({ children }) => <>{children}</>,
      }}
    >
      {content}
    </ReactMarkdown>
  );
};
