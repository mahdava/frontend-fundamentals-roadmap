import ReactMarkdown from "react-markdown";

export interface MarkdownTextProps {
  content: string;
}

export const MarkdownText = ({ content }: MarkdownTextProps) => {
  return (
    <ReactMarkdown
      allowedElements={["strong", "em", "text"]}
      unwrapDisallowed
      components={{
        strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
        em: ({ children }) => <em className="italic">{children}</em>,
        p: ({ children }) => <>{children}</>,
      }}
    >
      {content}
    </ReactMarkdown>
  );
};
