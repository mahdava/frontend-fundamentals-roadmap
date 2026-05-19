"use client";

import { RoadmapHeader } from "./components/organisms/roadmapHeader";
import { StageSection } from "./components/organisms/stageSection";
import { TopicFrame } from "./components/organisms/topicFrame";
import { stages } from "./data/roadmapData";
import { useTopicFrame } from "./hooks/useTopicFrame";
import { focusClass } from "./lib/focusClass";

const Home = () => {
  const {
    activeTopic,
    activeKey,
    frameVisible,
    framePos,
    frameRef,
    frameHint,
    setButtonRef,
    toggleTopic,
  } = useTopicFrame();

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
      </main>

      <TopicFrame
        frameRef={frameRef}
        activeTopic={activeTopic}
        frameVisible={frameVisible}
        framePos={framePos}
        frameHint={frameHint}
      />
    </div>
  );
};

export default Home;
