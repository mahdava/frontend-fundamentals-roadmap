export type TopicSection = {
 h: string;
 items: string[];
 isResources?: boolean;
};

export type Topic = {
 title: string;
 hint: string;
 sub: string;
 sections: TopicSection[];
};

export type Stage = {
 id: number;
 anchor: string;
 tag: string;
 title: string;
 desc: string;
 topics: Topic[];
};

export const stages: Stage[] = [
 {
 id: 0, anchor: "stage-0", tag: "Stage 0",
 title: "React in comparison to Vue",
 desc: "A quick orientation layer for people coming from Vue. The point is not to relearn frontend from scratch, but to translate your instincts: how React thinks about components, state, rendering, and composition, and where that differs from the Vue mental model.",
 topics: [
 {
 title: "Template thinking vs component functions",
 hint: "Templates versus JSX",
 sub: "Vue separates template and script more explicitly, while React leans on JavaScript as the view language.",
 sections: [
 { h: "Internalize", items: [
 "Vue templates are declarative HTML-like syntax with directives, while React uses JSX inside component functions",
 "In React, control flow and rendering logic live in JavaScript rather than special template syntax",
 "JSX is not a template layer bolted on top, it is the primary rendering model"
 ]},
 { h: "Questions to answer", items: [
 "What feels clearer in JSX than in templates?",
 "Where does Vue's directive model reduce friction, and where does React's JS-first model feel more direct?"
 ]},
 { h: "Where to learn", isResources: true, items: [
 "React docs - Writing markup with JSX (https://react.dev/learn/writing-markup-with-jsx)",
 "Vue docs - Template syntax (https://vuejs.org/guide/essentials/template-syntax.html)"
 ]}
 ]
 },
 {
 title: "Reactivity vs re-rendering",
 hint: "Fine-grained tracking versus state-driven renders",
 sub: "Vue's reactivity system tracks dependencies differently from React's render cycle and state updates.",
 sections: [
 { h: "Internalize", items: [
 "Vue tracks reactive dependencies and updates consumers automatically",
 "React re-renders components when state or props change, then reconciles the UI from that new tree",
 "React's model makes render purity and immutability more central to day-to-day work"
 ]},
 { h: "Questions to answer", items: [
 "Why does direct mutation feel more tolerated in Vue than in React?",
 "What does React gain by rebuilding UI from state rather than tracking dependencies more implicitly?"
 ]},
 { h: "Where to learn", isResources: true, items: [
 "React docs - State as a snapshot (https://react.dev/learn/state-as-a-snapshot)",
 "Vue docs - Reactivity in depth (https://vuejs.org/guide/extras/reactivity-in-depth.html)"
 ]}
 ]
 },
 {
 title: "Computed and watchers vs derived state and effects",
 hint: "Different tools, similar problems",
 sub: "A lot of Vue experience transfers, but the React equivalents live in different places and have different constraints.",
 sections: [
 { h: "Internalize", items: [
 "Vue computed values map loosely to derived values in React, often just plain expressions or memoized values when needed",
 "Vue watchers map loosely to useEffect, but useEffect is not a generic reaction tool for everything",
 "In React, if something can be derived during render, it usually should be"
 ]},
 { h: "Questions to answer", items: [
 "When is useMemo actually needed, and when is it premature?",
 "Why do React teams often warn against unnecessary effects?"
 ]},
 { h: "Where to learn", isResources: true, items: [
 "React docs - You might not need an effect (https://react.dev/learn/you-might-not-need-an-effect)",
 "Vue docs - Computed properties (https://vuejs.org/guide/essentials/computed.html)",
 "Vue docs - Watchers (https://vuejs.org/guide/essentials/watchers.html)"
 ]}
 ]
 },
 {
 title: "Slots, children, and composition",
 hint: "Different reuse mechanisms",
 sub: "Vue and React both care about composition, but they package it differently. This is where a lot of framework intuition gets translated.",
 sections: [
 { h: "Internalize", items: [
 "Vue slots and React children solve similar composition problems with different ergonomics",
 "React often prefers composition through children, props, and plain JavaScript patterns over framework-specific template features",
 "Understanding this shift makes React component APIs feel much less arbitrary"
 ]},
 { h: "Questions to answer", items: [
 "When does a slot map neatly to children, and when does it need a different API shape?",
 "Why does React lean so heavily on composition instead of specialized template features?"
 ]},
 { h: "Where to learn", isResources: true, items: [
 "React docs - Passing JSX as children (https://react.dev/learn/passing-props-to-a-component#passing-jsx-as-children)",
 "Vue docs - Slots (https://vuejs.org/guide/components/slots.html)"
 ]}
 ]
 },
 {
 title: "Single-file components vs composition through modules",
 hint: "SFC ergonomics versus JS-native composition",
 sub: "Vue gives you a strong file format convention, while React tends to compose through plain modules and conventions around them.",
 sections: [
 { h: "Internalize", items: [
 "Vue SFCs bundle template, script, and style into one unit",
 "React projects often split or combine files based on team preference, since the model is more convention-driven",
 "The React ecosystem rewards comfort with JavaScript modules more than comfort with framework-specific file structure"
 ]},
 { h: "Questions to answer", items: [
 "What do you lose and gain when the framework is less opinionated about file shape?",
 "How should a team keep React structure coherent without an SFC-style default?"
 ]},
 { h: "Where to learn", isResources: true, items: [
 "Vue docs - Single-file components (https://vuejs.org/guide/scaling-up/sfc.html)",
 "React docs - Importing and exporting components (https://react.dev/learn/importing-and-exporting-components)"
 ]}
 ]
 }
 ]
 },
 {
 id: 1, anchor: "stage-1", tag: "Stage 1",
 title: "Functional programming foundations",
 desc: "Modern React makes much more sense once these ideas stop feeling abstract. Immutability, pure functions, composition, and data transformation show up everywhere, so this stage is less a theory detour and more the grammar the rest of the roadmap is written in.",
 topics: [
 {
 title: "Pure functions",
 hint: "Same input, same output",
 sub: "The atom of functional programming, and the shape of every React component.",
 sections: [
 { h: "Internalize", items: [
 "A pure function has no side effects and returns the same output for the same inputs",
 "Pure functions are testable, composable, and easier to reason about",
 "React components are mostly pure functions of their props"
 ]},
 { h: "Questions to answer", items: [
 "What counts as a side effect?",
 "Why does React rely on component purity for its rendering model?",
 "Where do impurities have to live?"
 ]},
 { h: "You're getting it when", items: [
 "You spot side effects in code instinctively",
 "You isolate them rather than letting them spread"
 ]},
 { h: "Where to learn", isResources: true, items: [
 "Mostly Adequate Guide to FP - Ch 1-3 (https://github.com/MostlyAdequate/mostly-adequate-guide)",
 "Composing Software - Eric Elliott (https://medium.com/javascript-scene/composing-software-an-introduction-7f05d2b36d1d)"
 ]}
 ]
 },
 {
 title: "Value vs reference",
 hint: "Why identity matters",
 sub: "A lot of React confusion turns out to be plain JavaScript identity confusion. Learn this early and many later bugs become easier to diagnose.",
 sections: [
 { h: "Internalize", items: [
 "Primitives are copied by value, objects and arrays are passed by reference",
 "Two identical-looking objects are still different references",
 "React often cares about identity, not deep equality"
 ]},
 { h: "Questions to answer", items: [
 "Why can two arrays with the same contents still behave differently in React updates?",
 "What kinds of bugs come from assuming object equality means reference equality?"
 ]},
 { h: "Where to learn", isResources: true, items: [
 "MDN - Working with objects (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects)",
 "javascript.info - Object references and copying (https://javascript.info/object-copy)"
 ]}
 ]
 },
 {
 title: "Immutability",
 hint: "Copy, don't mutate",
 sub: "Why React appears not to notice when you change state directly.",
 sections: [
 { h: "Internalize", items: [
 "Mutation changes a value in place, immutability creates a new value",
 "Spread, Array.map, Array.filter, and Object.assign are everyday tools",
 "React checks references, not deep equality, so mutated values often look unchanged to React"
 ]},
 { h: "Questions to answer", items: [
 "Why does state.push(x); setState(state) often appear to do nothing?",
 "What does structural sharing mean, and why is it efficient?"
 ]},
 { h: "You're getting it when", items: [
 "You reach for map, filter, and spread instead of push or splice automatically"
 ]},
 { h: "Where to learn", isResources: true, items: [
 "React docs - Updating objects in state (https://react.dev/learn/updating-objects-in-state)",
 "React docs - Updating arrays in state (https://react.dev/learn/updating-arrays-in-state)"
 ]}
 ]
 },
 {
 title: "Higher-order functions",
 hint: "Functions as values",
 sub: "Once functions are values, programs become pipelines.",
 sections: [
 { h: "Internalize", items: [
 "Functions can be passed as arguments and returned from other functions",
 "map, filter, and reduce replace a lot of low-level looping",
 "Composition lets you build bigger behavior from smaller units"
 ]},
 { h: "Questions to answer", items: [
 "When is reduce the right answer, and when is it overkill?",
 "What does currying actually buy you?"
 ]},
 { h: "You're getting it when", items: [
 "You write transformations as pipelines instead of loops with mutable accumulators"
 ]},
 { h: "Where to learn", isResources: true, items: [
 "MDN - Array methods (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)",
 "Eloquent JavaScript - Higher-order functions (https://eloquentjavascript.net/05_higher_order.html)"
 ]}
 ]
 },
 {
 title: "Closures",
 hint: "Functions remember scope",
 sub: "How hooks remember state, and the cause of a surprising number of React bugs.",
 sections: [
 { h: "Internalize", items: [
 "A closure is a function plus the variables it captured when it was created",
 "Every render creates new function values that close over that render's values",
 "The stale closure problem appears when a callback sees older values than you expected"
 ]},
 { h: "Questions to answer", items: [
 "Why does a setTimeout inside a component often log old state?",
 "What does the dependency array of useEffect actually control?"
 ]},
 { h: "You're getting it when", items: [
 "Closures stop feeling magical and start feeling predictable"
 ]},
 { h: "Where to learn", isResources: true, items: [
 "javascript.info - Closures (https://javascript.info/closure)",
 "Dan Abramov - A Complete Guide to useEffect (https://overreacted.io/a-complete-guide-to-useeffect/)"
 ]}
 ]
 }
 ]
 },
 {
 id: 2, anchor: "stage-2", tag: "Stage 2",
 title: "Modern JavaScript & TypeScript",
 desc: "If you have not looked closely at JavaScript in a while, this is the moment to catch up. Start with the modern language features React codebases actually use, then layer in TypeScript, which is now part of the everyday working vocabulary of frontend development.",
 topics: [
 {
 title: "Modern ES syntax",
 hint: "Destructuring, spread, optional chaining",
 sub: "The idioms that make modern JavaScript feel like a different language from older codebases.",
 sections: [
 { h: "Internalize", items: [
 "Destructuring for objects and arrays",
 "Spread and rest parameters",
 "Template literals",
 "Optional chaining and nullish coalescing"
 ]},
 { h: "Questions to answer", items: [
 "When does nullish coalescing differ from logical OR?",
 "What kinds of code become clearer with destructuring, and what kinds become harder to read?"
 ]},
 { h: "Where to learn", isResources: true, items: [
 "javascript.info (https://javascript.info/)",
 "MDN JavaScript reference (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)"
 ]}
 ]
 },
 {
 title: "Async patterns",
 hint: "Promises and async/await",
 sub: "Asynchrony is everywhere in frontend. Get the model crisp now and a lot of later framework behavior will feel less mysterious.",
 sections: [
 { h: "Internalize", items: [
 "A promise is a value that becomes available later",
 "async and await are syntax over promise chaining",
 "Errors in async code need explicit boundaries",
 "Promise.all and friends let you model concurrency deliberately"
 ]},
 { h: "Questions to answer", items: [
 "How do you fetch two things in parallel without awaiting them sequentially?",
 "Where should you catch errors, at every await or at a boundary?"
 ]},
 { h: "Where to learn", isResources: true, items: [
 "javascript.info - Async (https://javascript.info/async)",
 "MDN - Asynchronous JavaScript (https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous)"
 ]}
 ]
 },
 {
 title: "ES modules",
 hint: "import and export",
 sub: "How files connect, and why modern tooling can reason about your code before it runs.",
 sections: [
 { h: "Internalize", items: [
 "Named exports and default exports solve slightly different problems",
 "Dynamic import enables code splitting",
 "Modules are statically analyzable, which is what makes tree shaking possible"
 ]},
 { h: "Questions to answer", items: [
 "When do circular imports become a real problem?",
 "How does code splitting change what users actually download?"
 ]},
 { h: "Where to learn", isResources: true, items: [
 "MDN - JavaScript modules (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)"
 ]}
 ]
 },
 {
 title: "TypeScript essentials",
 hint: "Types, narrowing, generics",
 sub: "Not a separate language so much as JavaScript plus a type system that pays for itself quickly.",
 sections: [
 { h: "Internalize", items: [
 "Unions, intersections, literal types, and object types",
 "Type narrowing through control flow",
 "Generics as types that take parameters",
 "Utility types like Partial, Pick, Omit, and Record"
 ]},
 { h: "Questions to answer", items: [
 "When is unknown better than any?",
 "How does TypeScript infer the return type of a generic function?"
 ]},
 { h: "You're getting it when", items: [
 "You start reading TypeScript errors as useful information instead of noise"
 ]},
 { h: "Where to learn", isResources: true, items: [
 "TypeScript Handbook (https://www.typescriptlang.org/docs/handbook/intro.html)",
 "Total TypeScript - Beginners tutorial (https://www.totaltypescript.com/tutorials/beginners-typescript)"
 ]}
 ]
 },
 {
 title: "Discriminated unions in practice",
 hint: "Modeling real UI states",
 sub: "One of the first TypeScript ideas that genuinely changes how you model interfaces, async flows, and forms.",
 sections: [
 { h: "Internalize", items: [
 "A shared discriminant field lets TypeScript narrow safely across cases",
 "Loading, success, and error states become clearer when modeled explicitly",
 "This is often cleaner than optional properties everywhere"
 ]},
 { h: "Questions to answer", items: [
 "Why is a union of named states often better than a bag of maybe-null fields?",
 "How does a discriminant make impossible states harder to represent?"
 ]},
 { h: "Where to learn", isResources: true, items: [
 "TypeScript Handbook - Narrowing (https://www.typescriptlang.org/docs/handbook/2/narrowing.html)",
 "TypeScript Handbook - Unions and intersections (https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html)"
 ]}
 ]
 }
 ]
 },
 {
 id: 3, anchor: "stage-3", tag: "Stage 3",
 title: "React, deeply",
 desc: "This is where React stops being components and hooks and starts feeling coherent. Focus on the rendering model, state snapshots, effects, and the habits that separate code that merely works from code that stays understandable.",
 topics: [
 {
 title: "Components are functions",
 hint: "JSX returns a description",
 sub: "Modern React is function components all the way down.",
 sections: [
 { h: "Internalize", items: [
 "A component is a function from props to a UI description",
 "JSX returns objects, not HTML",
 "React renders the description, then reconciles with the DOM"
 ]},
 { h: "Questions to answer", items: [
 "What is the difference between writing <Foo /> and calling Foo() directly?",
 "Why do lists need stable keys?"
 ]},
 { h: "Where to learn", isResources: true, items: [
 "React docs - Describing the UI (https://react.dev/learn/describing-the-ui)"
 ]}
 ]
 },
 {
 title: "Props, state, and events",
 hint: "Data flows down, events flow up",
 sub: "The baseline mental model React keeps returning to.",
 sections: [
 { h: "Internalize", items: [
 "Props are read-only inputs",
 "State is local memory managed by hooks",
 "Children notify parents through callbacks passed as props",
 "State updates are batched and asynchronous from the render's point of view"
 ]},
 { h: "Questions to answer", items: [
 "Why is state described as a snapshot?",
 "What changes when several updates happen in one event?"
 ]},
 { h: "Where to learn", isResources: true, items: [
 "React docs - State as a snapshot (https://react.dev/learn/state-as-a-snapshot)",
 "React docs - Queueing a series of state updates (https://react.dev/learn/queueing-a-series-of-state-updates)"
 ]}
 ]
 },
 {
 title: "The rendering model",
 hint: "Render, then commit",
 sub: "Knowing what re-renders and why is the line between guessing and understanding.",
 sections: [
 { h: "Internalize", items: [
 "A state change triggers React to render the component again",
 "Render means calling the component and producing a new description",
 "Commit means applying the necessary changes to the DOM",
 "React updates only the parts of the tree that changed"
 ]},
 { h: "Questions to answer", items: [
 "What actually triggers a re-render?",
 "Why does moving state lower in the tree sometimes improve performance and clarity at once?"
 ]},
 { h: "You're getting it when", items: [
 "You can predict what re-renders before opening DevTools"
 ]},
 { h: "Where to learn", isResources: true, items: [
 "React docs - Render and Commit (https://react.dev/learn/render-and-commit)",
 "React docs - Preserving and Resetting State (https://react.dev/learn/preserving-and-resetting-state)"
 ]}
 ]
 },
 {
 title: "useEffect, done right",
 hint: "Synchronizing, not reacting",
 sub: "Most effects are written when they should not be. Learn the cases that genuinely need one.",
 sections: [
 { h: "Internalize", items: [
 "Effects synchronize your component with an external system",
 "They run after commit and can return cleanup",
 "The dependency array controls when the effect re-runs",
 "A surprising number of effects are really derived state or event handlers in disguise"
 ]},
 { h: "Questions to answer", items: [
 "When should you not use useEffect?",
 "What does the cleanup function actually clean up, and when does it run?"
 ]},
 { h: "You're getting it when", items: [
 "You write fewer effects over time, not more"
 ]},
 { h: "Where to learn", isResources: true, items: [
 "React docs - You might not need an effect (https://react.dev/learn/you-might-not-need-an-effect)",
 "Dan Abramov - A Complete Guide to useEffect (https://overreacted.io/a-complete-guide-to-useeffect/)"
 ]}
 ]
 },
 {
 title: "Refs and memoization",
 hint: "Escape hatches with tradeoffs",
 sub: "Useful tools, but not default tools.",
 sections: [
 { h: "Internalize", items: [
 "useRef stores mutable values without causing re-renders",
 "useMemo caches a computed value",
 "useCallback caches a function identity",
 "React.memo only helps when prop identity and render cost make that tradeoff worthwhile"
 ]},
 { h: "Questions to answer", items: [
 "When does memoization actually pay for itself?",
 "Why does premature memoization often make code harder to maintain?"
 ]},
 { h: "You're getting it when", items: [
 "You reach for these because you measured a problem, not because the API exists"
 ]},
 { h: "Where to learn", isResources: true, items: [
 "React docs - useRef (https://react.dev/reference/react/useRef)",
 "Dan Abramov - Before You memo() (https://overreacted.io/before-you-memo/)"
 ]}
 ]
 },
 {
 title: "Custom hooks",
 hint: "Reusable stateful logic",
 sub: "The reuse mechanism React actually wants you to use.",
 sections: [
 { h: "Internalize", items: [
 "A custom hook is a function that calls other hooks",
 "Hooks compose cleanly into larger abstractions",
 "Custom hooks reuse logic, not UI",
 "Two components can use the same hook without sharing state"
 ]},
 { h: "Questions to answer", items: [
 "When does logic deserve to become a custom hook?",
 "What makes a hook abstraction feel helpful rather than too clever?"
 ]},
 { h: "Where to learn", isResources: true, items: [
 "React docs - Reusing Logic with Custom Hooks (https://react.dev/learn/reusing-logic-with-custom-hooks)"
 ]}
 ]
 }
 ]
 },
 {
 id: 4, anchor: "stage-4", tag: "Stage 4",
 title: "React architecture patterns",
 desc: "Once an app grows past a handful of components, local decisions start becoming architectural ones. This stage is about state placement, composition, context, forms, and the patterns that help a React codebase stay flexible instead of quietly turning brittle.",
 topics: [
 {
 title: "Composition over configuration",
 hint: "Children over props soup",
 sub: "One of React's cleanest answers to growing complexity.",
 sections: [
 { h: "Internalize", items: [
 "Components can take other components as children or props",
 "Composition often scales better than adding more configuration props",
 "Children, render props, and headless component patterns all live in this family"
 ]},
 { h: "Questions to answer", items: [
 "When does a component become hard to use because it has too many props?",
 "How can composition replace that?"
 ]},
 { h: "Where to learn", isResources: true, items: [
 "React docs - Passing JSX as children (https://react.dev/learn/passing-props-to-a-component#passing-jsx-as-children)"
 ]}
 ]
 },
 {
 title: "State colocation",
 hint: "Keep state near where it's used",
 sub: "The default habit that prevents a surprising number of architecture mistakes.",
 sections: [
 { h: "Internalize", items: [
 "Keep state as close as possible to the components that need it",
 "Lift state only when several components genuinely need to share it",
 "Global state is sometimes necessary, but it should not be the first instinct"
 ]},
 { h: "Questions to answer", items: [
 "How do you decide where a piece of state should live?",
 "What happens when you lift state too high?"
 ]},
 { h: "Where to learn", isResources: true, items: [
 "React docs - Sharing State Between Components (https://react.dev/learn/sharing-state-between-components)",
 "Kent C. Dodds - Colocation (https://kentcdodds.com/blog/colocation)"
 ]}
 ]
 },
 {
 title: "Context and its limits",
 hint: "Useful, but not a universal state manager",
 sub: "Context solves prop drilling, but it does not magically solve state design.",
 sections: [
 { h: "Internalize", items: [
 "Context broadcasts a value to a subtree",
 "Every consumer re-renders when the context value changes",
 "It works best for low-frequency or stable values like theme, auth, or locale",
 "When everything goes into Context, performance and clarity both tend to suffer"
 ]},
 { h: "Questions to answer", items: [
 "When is Context the right tool, and when is it not?",
 "Why does putting high-frequency state in Context create friction?"
 ]},
 { h: "Where to learn", isResources: true, items: [
 "React docs - Passing Data Deeply with Context (https://react.dev/learn/passing-data-deeply-with-context)"
 ]}
 ]
 },
 {
 title: "Forms",
 hint: "Controlled, uncontrolled, and libraries",
 sub: "Forms expose every weak spot in your state model.",
 sections: [
 { h: "Internalize", items: [
 "Controlled inputs keep the value in React state",
 "Uncontrolled inputs let the DOM keep the value until you need it",
 "Validation can be eager, lazy, or hybrid",
 "Libraries like react-hook-form earn their keep once forms become genuinely non-trivial"
 ]},
 { h: "Questions to answer", items: [
 "When is uncontrolled good enough?",
 "Why can per-keystroke state updates become a performance trap?"
 ]},
 { h: "Where to learn", isResources: true, items: [
 "React docs - input component (https://react.dev/reference/react-dom/components/input)",
 "react-hook-form (https://react-hook-form.com/)"
 ]}
 ]
 },
 {
 title: "Reducers and custom state models",
 hint: "When useState stops being enough",
 sub: "Some state is simple local memory. Some state is a little state machine. Learn the difference.",
 sections: [
 { h: "Internalize", items: [
 "useReducer helps when several updates belong to one coherent model",
 "Reducers make transitions explicit and easier to test",
 "This can be a better fit than stacking many related useState calls"
 ]},
 { h: "Questions to answer", items: [
 "What kinds of state benefit from reducer-style updates?",
 "When does a reducer clarify the model, and when is it ceremony?"
 ]},
 { h: "Where to learn", isResources: true, items: [
 "React docs - Extracting State Logic into a Reducer (https://react.dev/learn/extracting-state-logic-into-a-reducer)"
 ]}
 ]
 },
 {
 title: "Error and loading states",
 hint: "Boundaries that keep async UI livable",
 sub: "These are not edge concerns. They are part of the interface.",
 sections: [
 { h: "Internalize", items: [
 "Error boundaries catch rendering errors in a subtree",
 "Suspense lets a subtree wait and show a fallback",
 "Good async UI depends on deciding where waiting and failure should surface"
 ]},
 { h: "Questions to answer", items: [
 "What does an error boundary not catch?",
 "Where should Suspense boundaries live in a real app?"
 ]},
 { h: "Where to learn", isResources: true, items: [
 "React docs - Suspense (https://react.dev/reference/react/Suspense)"
 ]}
 ]
 }
 ]
 },
 {
 id: 5, anchor: "stage-5", tag: "Stage 5",
 title: "Client vs server components",
 desc: "This is one of the biggest conceptual shifts in the React ecosystem. It is not just a new feature to memorize, but a different way of thinking about where code runs, what gets shipped to the browser, and how responsibility is split across the app.",
 topics: [
 {
 title: "Why the split exists",
 hint: "Smaller bundles, less waterfall",
 sub: "Before learning the API shape, understand the problem it is solving.",
 sections: [
 { h: "Internalize", items: [
 "Traditional React often ships large amounts of client JavaScript before the app feels ready",
 "Server components keep more work on the server and send less JavaScript to the browser",
 "The result can be a simpler client and a smaller performance bill"
 ]},
 { h: "Questions to answer", items: [
 "What was expensive about the all-client model?",
 "What changes for the user when more of the tree stays server-side?"
 ]},
 { h: "Where to learn", isResources: true, items: [
 "React docs - Server Components reference (https://react.dev/reference/rsc/server-components)",
 "How React Server Components work (https://www.plasmic.app/blog/how-react-server-components-work)"
 ]}
 ]
 },
 {
 title: "What each can do",
 hint: "Capabilities and constraints",
 sub: "Server components and client components are not interchangeable, and that is the point.",
 sections: [
 { h: "Internalize", items: [
 "Server components can access backend resources directly but cannot use state, effects, or browser APIs",
 "Client components can use interactivity, browser APIs, and event handlers",
 "The split is about putting code in the environment where it makes the most sense"
 ]},
 { h: "Questions to answer", items: [
 "Why can a server component fetch directly from the database but not attach an onClick handler?",
 "How do client and server components compose together in one tree?"
 ]},
 { h: "Where to learn", isResources: true, items: [
 "Next.js - Server and Client composition patterns (https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns)"
 ]}
 ]
 },
 {
 title: "The use client directive",
 hint: "Marking the boundary",
 sub: "A small line with big consequences.",
 sections: [
 { h: "Internalize", items: [
 "use client marks a file and its imports as client-side code",
 "Moving the boundary too high pushes more code into the browser than you need",
 "Keeping the boundary low preserves the benefits of server-first rendering"
 ]},
 { h: "Questions to answer", items: [
 "What gets shipped when you add use client near the root of the tree?",
 "How do you isolate interactivity without converting whole sections unnecessarily?"
 ]},
 { h: "Where to learn", isResources: true, items: [
 "Next.js - Client Components (https://nextjs.org/docs/app/building-your-application/rendering/client-components)"
 ]}
 ]
 },
 {
 title: "Server actions",
 hint: "Mutations without the old ceremony",
 sub: "A new way to think about form submissions and server-side mutations.",
 sections: [
 { h: "Internalize", items: [
 "Server actions are server-only functions invoked through the framework",
 "They reduce the need for some fetch-to-API-route boilerplate",
 "Validation, authorization, and side effects still need deliberate design"
 ]},
 { h: "Questions to answer", items: [
 "When is a server action simpler than a route handler?",
 "What logic still belongs in explicit APIs or services?"
 ]},
 { h: "Where to learn", isResources: true, items: [
 "Next.js - Server Actions and Mutations (https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations)"
 ]}
 ]
 },
 {
 title: "Streaming and Suspense",
 hint: "Do not make every part of the page wait for the slowest part",
 sub: "One of the most practical benefits of the new model.",
 sections: [
 { h: "Internalize", items: [
 "The server can stream HTML in chunks instead of waiting for everything",
 "Suspense boundaries define what can wait and what should render now",
 "Good boundary placement changes perceived performance more than many micro-optimizations"
 ]},
 { h: "Questions to answer", items: [
 "How does streaming improve perceived performance?",
 "Where should Suspense boundaries live in the tree?"
 ]},
 { h: "Where to learn", isResources: true, items: [
 "Next.js - Loading UI and Streaming (https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming)"
 ]}
 ]
 }
 ]
 },
 {
 id: 6, anchor: "stage-6", tag: "Stage 6",
 title: "Next.js",
 desc: "For many developers, this is where React becomes a real application stack. Prioritize the App Router, understand the full-stack model it introduces, and learn just enough of the Pages Router to stay oriented when older codebases still rely on it.",
 topics: [
 {
 title: "App Router vs Pages Router",
 hint: "Two routers, two mental models",
 sub: "Know both exist, learn the App Router first, and recognize older Pages Router patterns when you see them.",
 sections: [
 { h: "Internalize", items: [
 "The App Router is the modern default",
 "The Pages Router still appears in many older codebases",
 "They overlap in purpose, but not in mental model"
 ]},
 { h: "Where to learn", isResources: true, items: [
 "Next.js docs (https://nextjs.org/docs)",
 "Next.js - Pages Router docs (https://nextjs.org/docs/pages)"
 ]}
 ]
 },
 {
 title: "File-based routing",
 hint: "Folders become routes",
 sub: "The filesystem is part of the framework API.",
 sections: [
 { h: "Internalize", items: [
 "page.tsx creates a route",
 "layout.tsx, loading.tsx, error.tsx, and not-found.tsx add structure and behavior",
 "Dynamic and catch-all segments shape URLs directly"
 ]},
 { h: "Questions to answer", items: [
 "How do nested layouts persist across navigations?",
 "What do route groups and parallel routes buy you?"
 ]},
 { h: "Where to learn", isResources: true, items: [
 "Next.js - Routing fundamentals (https://nextjs.org/docs/app/building-your-application/routing)"
 ]}
 ]
 },
 {
 title: "Data fetching",
 hint: "Fetch where the work belongs",
 sub: "Server components changed the default answer here.",
 sections: [
 { h: "Internalize", items: [
 "Server components can fetch directly",
 "Next.js extends fetch with caching and revalidation behavior",
 "Client-side fetching still matters for interactive or constantly changing data"
 ]},
 { h: "Questions to answer", items: [
 "When should data be fetched on the server rather than the client?",
 "When should you opt out of caching?"
 ]},
 { h: "Where to learn", isResources: true, items: [
 "Next.js - Data fetching, caching, and revalidating (https://nextjs.org/docs/app/building-your-application/data-fetching)"
 ]}
 ]
 },
 {
 title: "Rendering modes",
 hint: "Static, dynamic, and in between",
 sub: "The important thing is not memorizing acronyms, but understanding the tradeoffs.",
 sections: [
 { h: "Internalize", items: [
 "Static rendering is fast and cache-friendly",
 "Dynamic rendering trades cacheability for request-time freshness",
 "ISR sits in the middle with controlled revalidation"
 ]},
 { h: "Questions to answer", items: [
 "What makes a route dynamic rather than static?",
 "When is ISR a better tradeoff than full SSR?"
 ]},
 { h: "Where to learn", isResources: true, items: [
 "Next.js - Rendering (https://nextjs.org/docs/app/building-your-application/rendering)"
 ]}
 ]
 },
 {
 title: "Route handlers and middleware",
 hint: "Two escape hatches, different jobs",
 sub: "Useful precisely because they are not the same thing.",
 sections: [
 { h: "Internalize", items: [
 "Route handlers are API endpoints inside the app router",
 "Middleware runs before routing and can redirect, rewrite, or gate access",
 "Choosing the wrong one usually means using the framework at the wrong layer"
 ]},
 { h: "Questions to answer", items: [
 "When is a route handler the right answer instead of a server action?",
 "What can middleware do that a layout cannot?"
 ]},
 { h: "Where to learn", isResources: true, items: [
 "Next.js - Middleware (https://nextjs.org/docs/app/building-your-application/routing/middleware)",
 "Next.js - Route Handlers (https://nextjs.org/docs/app/building-your-application/routing/route-handlers)"
 ]}
 ]
 },
 {
 title: "Metadata, images, and fonts",
 hint: "Built-in optimizations worth understanding",
 sub: "These are small pieces of the framework that have outsized practical impact.",
 sections: [
 { h: "Internalize", items: [
 "Metadata APIs handle page-level SEO data",
 "next/image helps with responsive image performance",
 "next/font reduces layout shift and removes external font hosting friction"
 ]},
 { h: "Where to learn", isResources: true, items: [
 "Next.js - Optimizing (https://nextjs.org/docs/app/building-your-application/optimizing)"
 ]}
 ]
 }
 ]
 },
 {
 id: 7, anchor: "stage-7", tag: "Stage 7",
 title: "Adjacent essentials",
 desc: "These are the tools and practices that quietly shape day-to-day frontend work: styling, accessibility, testing, client-side data fetching, and developer tooling. They are adjacent only in the sense that React does not own them, not because they are optional.",
 topics: [
 {
 title: "Styling and CSS architecture",
 hint: "Beyond just picking a library",
 sub: "The real question is how styles stay readable, consistent, and scalable as the app grows.",
 sections: [
 { h: "Internalize", items: [
 "You still need a CSS mental model even when using utility classes",
 "Tailwind optimizes speed and consistency, but it is not a substitute for understanding layout, specificity, and the cascade",
 "Design tokens and naming discipline matter no matter which styling approach you pick"
 ]},
 { h: "Questions to answer", items: [
 "What does Tailwind make easier, and what does it not solve?",
 "How do you keep styling choices coherent across a growing codebase?"
 ]},
 { h: "Where to learn", isResources: true, items: [
 "Tailwind CSS docs (https://tailwindcss.com/docs)",
 "Josh Comeau - CSS for JavaScript Developers (https://www.joshwcomeau.com/)",
 "Refactoring UI (https://www.refactoringui.com/)"
 ]}
 ]
 },
 {
 title: "Client-side data fetching",
 hint: "SWR and TanStack Query",
 sub: "When server components are not the answer, these tools usually are.",
 sections: [
 { h: "Internalize", items: [
 "These libraries maintain a client-side cache keyed by request identity",
 "They handle revalidation, background refreshes, and mutation flows far better than ad-hoc effect code",
 "They are often the right answer for interactive dashboards, optimistic UI, and user-driven refreshes"
 ]},
 { h: "Where to learn", isResources: true, items: [
 "SWR docs (https://swr.vercel.app/)",
 "TanStack Query docs (https://tanstack.com/query/latest/docs/framework/react/overview)",
 "TkDodo - Practical React Query (https://tkdodo.eu/blog/practical-react-query)"
 ]}
 ]
 },
 {
 title: "Accessibility basics",
 hint: "Semantic HTML first",
 sub: "Not an optional polish pass. A baseline for building interfaces responsibly.",
 sections: [
 { h: "Internalize", items: [
 "Semantic HTML solves more accessibility problems than many people realize",
 "ARIA fills gaps, but it does not replace good structure",
 "Keyboard navigation, focus management, labels, and contrast are part of the core frontend skill set"
 ]},
 { h: "Where to learn", isResources: true, items: [
 "MDN - Accessibility (https://developer.mozilla.org/en-US/docs/Learn/Accessibility)",
 "WebAIM articles (https://webaim.org/articles/)",
 "web.dev - Learn Accessibility (https://web.dev/learn/accessibility)"
 ]}
 ]
 },
 {
 title: "Testing essentials",
 hint: "Behavior over implementation",
 sub: "Tests worth keeping are tests that survive refactors.",
 sections: [
 { h: "Internalize", items: [
 "React Testing Library encourages testing the UI the way a user experiences it",
 "Mock at the network boundary rather than inside component internals whenever possible",
 "End-to-end tests matter, but only for critical paths"
 ]},
 { h: "Questions to answer", items: [
 "What counts as implementation-detail testing, and why does it become brittle?",
 "Which parts of an app deserve end-to-end coverage?"
 ]},
 { h: "Where to learn", isResources: true, items: [
 "Testing Library docs (https://testing-library.com/docs/)",
 "Kent C. Dodds - The Testing Trophy (https://kentcdodds.com/blog/the-testing-trophy-and-testing-classifications)",
 "MSW docs (https://mswjs.io/docs)"
 ]}
 ]
 },
 {
 title: "Build tooling awareness",
 hint: "Enough to debug, not enough to obsess",
 sub: "You do not need to become a bundler expert, but you should know what the moving pieces are.",
 sections: [
 { h: "Internalize", items: [
 "Bundlers and dev servers prepare browser-ready code",
 "Package managers shape installation, workspace structure, and sometimes team velocity",
 "Linters, formatters, and type checking are part of the feedback loop, not afterthoughts"
 ]},
 { h: "Where to learn", isResources: true, items: [
 "Vite guide (https://vitejs.dev/guide/)",
 "pnpm - Motivation (https://pnpm.io/motivation)",
 "Chrome DevTools docs (https://developer.chrome.com/docs/devtools/)"
 ]}
 ]
 }
 ]
 }
];
