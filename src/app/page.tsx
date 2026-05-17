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
    pinnedKey,
    frameVisible,
    framePos,
    frameRef,
    pinHint,
    setButtonRef,
    showTopic,
    hideTopicSoon,
    togglePinnedTopic,
    setHoverInside,
    hideTopic,
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
            pinnedKey={pinnedKey}
            setButtonRef={setButtonRef}
            onShow={showTopic}
            onHideSoon={hideTopicSoon}
            onPinToggle={togglePinnedTopic}
          />
        ))}
      </main>

      <TopicFrame
        frameRef={frameRef}
        activeTopic={activeTopic}
        frameVisible={frameVisible}
        framePos={framePos}
        pinHint={pinHint}
        isPinned={Boolean(pinnedKey)}
        onMouseEnter={() => setHoverInside(true)}
        onMouseLeave={() => {
          setHoverInside(false);
          if (!pinnedKey) hideTopic();
        }}
      />
    </div>
  );
};

export default Home;
