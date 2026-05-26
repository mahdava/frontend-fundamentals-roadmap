"use client";

import { RoadmapHeader } from "./components/organisms/roadmapHeader";
import { StageSection } from "./components/organisms/stageSection";
import { TopicDetailsDialog } from "./components/molecules/topicDetailsDialog";
import { Link } from "./components/atoms/link";
import { stages } from "./data/roadmapData";
import { useTopicDialog } from "./hooks/useTopicDialog";
import { focusClass } from "./lib/focusClass";

const Home = () => {
  const { selectedTopic, activeKey, setButtonRef, toggleTopic, closeDialog, restoreFocusToTrigger } = useTopicDialog();

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <a
        href="#main"
        className={`absolute left-[-9999px] top-auto z-[1000] rounded-md bg-accent px-4 py-2.5 font-semibold text-accent-foreground no-underline focus:left-4 focus:top-4 ${focusClass}`}
      >
        Skip to roadmap
      </a>

      <RoadmapHeader stages={stages} />

      <main id="main" className="mx-auto max-w-[980px] px-6 pb-20 pt-4">
        {stages.map((stage) => (
          <StageSection
            key={stage.id}
            stage={stage}
            activeKey={activeKey}
            setButtonRef={setButtonRef}
            onPinToggle={toggleTopic}
          />
        ))}

        <footer className="border-t border-card-border/70 pt-6 text-center text-sm text-muted">
          <p>
            Made with{" "}
            <span role="img" aria-label="love">
              ❤️
            </span>
            {" "}and AI vibes ©{" "}
            <Link href="https://oh-no.ooo" target="_blank" rel="noreferrer" aria-label="oh-no.ooo (opens in a new tab)">
              oh-no.ooo
            </Link>
          </p>
        </footer>
      </main>

      {selectedTopic ? (
        <TopicDetailsDialog
          topic={selectedTopic.topic}
          open
          onOpenChange={(open) => !open && closeDialog()}
          onCloseAutoFocus={restoreFocusToTrigger}
        />
      ) : null}
    </div>
  );
};

export default Home;
