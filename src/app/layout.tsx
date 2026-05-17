import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Frontend Fundamentals Roadmap",
  description:
    "A learning roadmap for engineers returning to frontend, covering functional programming, modern JavaScript and TypeScript, React, server and client components, and Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground font-sans">{children}</body>
    </html>
  );
}
