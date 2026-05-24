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
 desc: "A short *translation layer* for developers coming from Vue. The goal is not to relearn frontend, but to remap familiar instincts: how React handles rendering, state, effects, and composition, and where its mental model diverges in ways that matter day to day.",
 topics: [
 {
 title: "Template thinking vs component functions",
 hint: "Templates versus JSX",
 sub: "Vue separates template and script more explicitly, while React leans on JavaScript as the view language.",
 sections: [
 { h: "What matters here", items: [
 "Vue templates are declarative HTML-like syntax with directives, while **React uses JSX (JavaScript XML) inside component functions**",
 "In React, control flow and rendering logic live in JavaScript rather than special template syntax",
 "**JSX** is not a template layer bolted on top, it **is the primary rendering model**",
 "In React, **rendering is just JavaScript returning UI**, not a separate template language with extra rules",
 "JSX *looks* like HTML, but it behaves like JavaScript expressions stitched into a component function"
 ]},
 { h: "Things worth asking", items: [
 "What feels clearer in JSX than in templates?",
 "Where does Vue's directive model reduce friction, and where does React's JS-first model feel more direct?",
 "What kinds of UI logic become simpler when conditionals and loops are just JavaScript?",
 "What do you lose when there is no dedicated template syntax guiding structure?"
 ]},
 { h: "Further reading", isResources: true, items: [
 "React docs - Writing markup with JSX (https://react.dev/learn/writing-markup-with-jsx)",
 "React docs - JavaScript in JSX with Curly Braces (https://react.dev/learn/javascript-in-jsx-with-curly-braces)",
 "React docs - Conditional Rendering (https://react.dev/learn/conditional-rendering)",
 "React docs - Rendering Lists (https://react.dev/learn/rendering-lists)",
 "Vue docs - Template syntax (https://vuejs.org/guide/essentials/template-syntax.html)"
 ]}
 ]
 },
 {
 title: "Reactivity vs re-rendering",
 hint: "Fine-grained tracking versus state-driven renders",
 sub: "Vue's reactivity system tracks dependencies differently from React's render cycle and state updates.",
 sections: [
 { h: "What matters here", items: [
 "Vue tracks reactive dependencies and updates consumers automatically",
 "**React re-renders components when state or props change**, then reconciles the UI from that new tree",
 "React's model makes render purity and immutability more central to day-to-day work",
 "React does not watch individual properties in the Vue sense, it **re-runs components and compares results**",
 "A render in React is cheap and expected, not automatically a sign that something went wrong",
 "**The key discipline in React is not tracking dependencies manually**, but keeping renders pure and state immutable"
 ]},
 { h: "Things worth asking", items: [
 "Why does direct mutation feel more tolerated in Vue than in React?",
 "What does React gain by rebuilding UI from state rather than tracking dependencies more implicitly?",
 "Why is re-render not the same thing as rewrite the whole DOM?",
 "Why does React treat immutable updates as a feature rather than a workaround?"
 ]},
 { h: "Further reading", isResources: true, items: [
 "React docs - State as a snapshot (https://react.dev/learn/state-as-a-snapshot)",
 "React docs - Render and Commit (https://react.dev/learn/render-and-commit)",
 "React docs - Keeping Components Pure (https://react.dev/learn/keeping-components-pure)",
 "Vue docs - Reactivity in depth (https://vuejs.org/guide/extras/reactivity-in-depth.html)",
 "Vue docs - Rendering Mechanism (https://vuejs.org/guide/extras/rendering-mechanism.html)"
 ]}
 ]
 },
 {
 title: "Computed and watchers vs derived state and effects",
 hint: "Different tools, similar problems",
 sub: "A lot of Vue experience transfers, but the React equivalents live in different places and have different constraints.",
 sections: [
 { h: "What matters here", items: [
 "Vue computed values often become plain derived values in React, and only sometimes need memoization",
 "**Vue watchers map loosely to useEffect**, but useEffect is not a generic reaction tool for everything",
 "In React, if something can be derived during render, it usually should be",
 "In React, many values that would become computed in Vue are just ordinary variables derived during render",
 "Effects are mainly for syncing with things outside React",
 "If you use an effect too early, the code often gets harder to reason about"
 ]},
 { h: "Things worth asking", items: [
 "When is useMemo actually needed, and when is it premature?",
 "Why do React teams often warn against unnecessary effects?",
 "What belongs in render, what belongs in an event handler, and what truly belongs in an effect?",
 "When does useMemo help readability, not just performance?"
 ]},
 { h: "Further reading", isResources: true, items: [
 "React docs - You might not need an effect (https://react.dev/learn/you-might-not-need-an-effect)",
 "React docs - Synchronizing with Effects (https://react.dev/learn/synchronizing-with-effects)",
 "React docs - Removing Effect Dependencies (https://react.dev/learn/removing-effect-dependencies)",
 "Oh No - Performance optimization with useMemo (https://www.oh-no.ooo/articles/performance-optimization-with-usememo)",
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
 { h: "What matters here", items: [
 "**Vue slots and React children solve similar composition problems** with different ergonomics",
 "React often prefers composition through children, props, and plain JavaScript patterns over framework-specific template features",
 "Understanding this shift makes React component APIs feel much less arbitrary",
 "**React component APIs often feel more like function design** rather than template design",
 "Named slots in Vue often become explicit props that accept JSX or components in React",
 "React composition tends to be more flexible, but also asks you to design cleaner APIs yourself"
 ]},
 { h: "Things worth asking", items: [
 "When does a slot map neatly to children, and when does it need a different API shape?",
 "Why does React lean so heavily on composition instead of specialized template features?",
 "When should a component accept children, and when should it accept render props or explicit component props?",
 "What makes a React component API feel elegant instead of over-engineered?"
 ]},
 { h: "Further reading", isResources: true, items: [
 "React docs - Passing JSX as children (https://react.dev/learn/passing-props-to-a-component#passing-jsx-as-children)",
 "React docs - Passing Props to a Component (https://react.dev/learn/passing-props-to-a-component)",
 "React docs - Composition vs Inheritance (https://legacy.reactjs.org/docs/composition-vs-inheritance.html)",
 "Patterns.dev - Compound Pattern (https://www.patterns.dev/react/compound-pattern/)",
 "Vue docs - Slots (https://vuejs.org/guide/components/slots.html)",
 "Vue docs - Fallthrough Attributes (https://vuejs.org/guide/components/attrs.html)"
 ]}
 ]
 },
 {
 title: "Single-file components vs composition through modules",
 hint: "SFC ergonomics versus JS-native composition",
 sub: "Vue gives you a strong file format convention, while React tends to compose through plain modules and conventions around them.",
 sections: [
 { h: "What matters here", items: [
 "Vue SFCs bundle template, script, and style into one unit",
 "React projects often split or combine files based on team preference, since the model is more convention-driven",
 "The React ecosystem rewards comfort with JavaScript modules more than comfort with framework-specific file structure",
 "React gives you fewer file-shape opinions, so *team conventions* matter more",
 "Reuse in React often happens through functions, hooks, and modules rather than framework-specific file primitives",
 "The absence of SFCs is not a missing feature so much as a different tradeoff"
 ]},
 { h: "Things worth asking", items: [
 "What do you lose and gain when the framework is less opinionated about file shape?",
 "How should a team keep React structure coherent without an SFC-style default?",
 "Which Vue conveniences from SFCs are truly essential, and which are mostly habit?",
 "What conventions help a React codebase feel coherent without becoming rigid?"
 ]},
 { h: "Further reading", isResources: true, items: [
 "Vue docs - Single-file components (https://vuejs.org/guide/scaling-up/sfc.html)",
 "Vue docs - <script setup> (https://vuejs.org/api/sfc-script-setup.html)",
 "React docs - Your First Component (https://react.dev/learn/your-first-component)",
 "React docs - Importing and exporting components (https://react.dev/learn/importing-and-exporting-components)",
 "How Does React Tell a Class from a Function? - Dan Abramov (https://overreacted.io/how-does-react-tell-a-class-from-a-function/)"
 ]}
 ]
 }
 ]
 },
 {
 id: 1, anchor: "stage-1", tag: "Stage 1",
 title: "Functional programming foundations",
 desc: "Modern React makes much more sense once these ideas stop feeling abstract. This stage is less a theory detour and more a practical introduction to the patterns React leans on every day.",
 topics: [
 {
 title: "Pure functions",
 hint: "Same input, same output",
 sub: "The atom of functional programming, and the shape of every React component.",
 sections: [
 { h: "What matters here", items: [
 "A pure function has **no side effects**, meaning that with the same input you get the same output",
 "Pure functions are easier to test and easier to trust",
 "**React components are mostly pure functions of their props**"
 ]},
 { h: "Things worth asking", items: [
 "What counts as a side effect?",
 "Why does React rely on component purity for its rendering model?",
 "Where do impurities have to live?"
 ]},
 { h: "Signs it’s clicking", items: [
 "You spot side effects in code instinctively",
 "You isolate them rather than letting them spread"
 ]},
 { h: "Further reading", isResources: true, items: [
 "React docs - Keeping Components Pure (https://react.dev/learn/keeping-components-pure)",
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
 { h: "What matters here", items: [
 "Simple values like strings and numbers are **copied by value**",
 "**Objects and arrays are compared by reference**",
 "Two objects can look the same and still be different values to React",
 "**React often checks whether something is the same object, not whether it has the same contents**"
 ]},
 { h: "Things worth asking", items: [
 "Why can two arrays with the same contents still behave differently in React updates?",
 "What kinds of bugs come from assuming object equality means reference equality?"
 ]},
 { h: "Further reading", isResources: true, items: [
 "javascript.info - Object references and copying (https://javascript.info/object-copy)",
 "MDN - Equality comparisons and sameness (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)",
 "React docs - Updating Objects in State (https://react.dev/learn/updating-objects-in-state)"
 ]}
 ]
 },
 {
 title: "Immutability",
 hint: "Copy, don't mutate",
 sub: "Why React appears not to notice when you change state directly.",
 sections: [
 { h: "What matters here", items: [
 "Mutation changes a value in place, **immutability creates a new value**",
 "**Spread**, **Array.map**, **Array.filter**, and **Object.assign** are everyday tools",
 "React checks references, not deep equality, so **mutated values often look unchanged to React**",
 "This is why creating a new value matters when you update state"
 ]},
 { h: "Things worth asking", items: [
 "Why does state.push(x); setState(state) often appear to do nothing?",
 "What does structural sharing mean, and why is it efficient?"
 ]},
 { h: "Signs it’s clicking", items: [
 "You reach for map, filter, and spread instead of push or splice automatically"
 ]},
 { h: "Further reading", isResources: true, items: [
 "React docs - Updating Objects in State (https://react.dev/learn/updating-objects-in-state)",
 "React docs - Updating Arrays in State (https://react.dev/learn/updating-arrays-in-state)",
 "React docs - State as a Snapshot (https://react.dev/learn/state-as-a-snapshot)"
 ]}
 ]
 },
 {
 title: "Higher-order functions",
 hint: "Functions as values",
 sub: "This is mostly about understanding why callbacks and array transforms feel so natural in React code.",
 sections: [
 { h: "What matters here", items: [
 "**Functions in JavaScript can be treated like values**",
 "That means you can pass them around, return them, and reuse them in different places",
 "This is why callbacks are everywhere in React",
 "Methods like **map** and **filter** help you transform data without messy loops"
 ]},
 { h: "Things worth asking", items: [
 "Why does React code rely so heavily on callbacks?",
 "When do array methods make code clearer than a manual loop?"
 ]},
 { h: "Signs it’s clicking", items: [
 "You start seeing callbacks and array transforms as normal building blocks, not special tricks"
 ]},
 { h: "Further reading", isResources: true, items: [
 "Eloquent JavaScript - Higher-order functions (https://eloquentjavascript.net/05_higher_order.html)",
 "MDN - Array.prototype.map() (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)",
 "MDN - Array.prototype.filter() (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)",
 "React docs - Rendering Lists (https://react.dev/learn/rendering-lists)"
 ]}
 ]
 },
 {
 title: "Closures",
 hint: "Functions remember scope",
 sub: "How hooks remember state, and the cause of a surprising number of React bugs.",
 sections: [
 { h: "What matters here", items: [
 "**A closure is a function plus the variables it captured when it was created**",
 "Every render creates new function values that close over that render's values",
 "**The stale closure problem appears when a callback sees older values than you expected**"
 ]},
 { h: "Things worth asking", items: [
 "Why does a setTimeout inside a component often log old state?",
 "What does the dependency array of useEffect actually control?"
 ]},
 { h: "Signs it’s clicking", items: [
 "You can usually tell when a callback is reading stale values"
 ]},
 { h: "Further reading", isResources: true, items: [
 "javascript.info - Variable scope, closure (https://javascript.info/closure)",
 "React docs - Synchronizing with Effects (https://react.dev/learn/synchronizing-with-effects)",
 "Dan Abramov - A Complete Guide to useEffect (https://overreacted.io/a-complete-guide-to-useeffect/)",
 "Oh No - Common useEffect mistakes (https://www.oh-no.ooo/articles/common-useeffect-mistakes)"
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
 sub: "These are the JavaScript features you keep seeing in modern React code, often to the point where older syntax starts to feel out of place.",
 sections: [
 { h: "What matters here", items: [
 "**Destructuring** often looks like `const { title } = props` or `const [count, setCount] = useState(0)`",
 "**Spread syntax** often looks like `setUser({ ...user, name: 'Lucia' })` or `setItems([...items, nextItem])`",
 "**Optional chaining** often looks like `user?.profile?.name` when some data may still be missing",
 "**Nullish coalescing** often looks like `label ?? 'Untitled'` when you want a fallback only for `null` or `undefined`"
 ]},
 { h: "Things worth asking", items: [
 "When does nullish coalescing differ from logical OR?",
 "When does destructuring make code clearer, and when does it make it harder to scan?"
 ]},
 { h: "Further reading", isResources: true, items: [
 "javascript.info - Destructuring assignment (https://javascript.info/destructuring-assignment)",
 "MDN - Spread syntax (...) (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)",
 "MDN - Optional chaining (?.) (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)",
 "MDN - Nullish coalescing operator (??) (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)"
 ]}
 ]
 },
 {
 title: "Async patterns",
 hint: "Promises and async/await",
 sub: "Asynchrony is part of everyday frontend work. Data fetching, form submissions, loading states, and error handling all get easier once the model feels clear.",
 sections: [
 { h: "What matters here", items: [
 "A **promise** represents a value that will arrive later",
 "**async** and **await** make asynchronous code easier to read, but they do not change how promises work",
 "A lot of frontend bugs come from not being clear about what is running in sequence and what can run in parallel",
 "Good async code also means deciding where loading states and errors should surface"
 ]},
 { h: "Things worth asking", items: [
 "How do you fetch two things in parallel without awaiting them one after the other?",
 "Where should you catch errors, close to the request or at a broader boundary?"
 ]},
 { h: "Further reading", isResources: true, items: [
 "javascript.info - Promises, async/await (https://javascript.info/async)",
 "MDN - Using promises (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)",
 "MDN - async function (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)",
 "MDN - Promise.all() (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)",
 "Async JavaScript: From Callbacks to Promises to Async/Await - Tyler McGinnis (https://ui.dev/async-javascript-from-callbacks-to-promises-to-async-await)"
 ]}
 ]
 },
 {
 title: "ES modules",
 hint: "import and export",
 sub: "How files connect, and why modern tooling can reason about your code before it runs.",
 sections: [
 { h: "What matters here", items: [
 "Named exports and default exports solve slightly different problems",
 "Dynamic import enables code splitting",
 "Modules are statically analyzable, which is what makes tree shaking possible"
 ]},
 { h: "Things worth asking", items: [
 "When do circular imports become a real problem?",
 "How does code splitting change what users actually download?"
 ]},
 { h: "Further reading", isResources: true, items: [
 "MDN - JavaScript modules (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)",
 "ES Modules: A Cartoon Deep-Dive - Lin Clark (https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/)"
 ]}
 ]
 },
 {
 title: "TypeScript essentials",
 hint: "Types, narrowing, generics",
 sub: "Not a separate language so much as JavaScript plus a type system that pays for itself quickly.",
 sections: [
 { h: "What matters here", items: [
 "Unions, intersections, literal types, and object types",
 "Type narrowing through control flow",
 "Generics as types that take parameters",
 "Utility types like Partial, Pick, Omit, and Record"
 ]},
 { h: "Things worth asking", items: [
 "When is unknown better than any?",
 "How does TypeScript infer the return type of a generic function?"
 ]},
 { h: "Signs it’s clicking", items: [
 "You start reading TypeScript errors as useful information instead of noise"
 ]},
 { h: "Further reading", isResources: true, items: [
 "TypeScript Handbook (https://www.typescriptlang.org/docs/handbook/intro.html)",
 "Total TypeScript - Beginners tutorial (https://www.totaltypescript.com/tutorials/beginners-typescript)",
 "React TypeScript Cheatsheet (https://react-typescript-cheatsheet.netlify.app/)"
 ]}
 ]
 },
 {
 title: "Discriminated unions in practice",
 hint: "Modeling real UI states",
 sub: "One of the first TypeScript ideas that genuinely changes how you model interfaces, async flows, and forms.",
 sections: [
 { h: "What matters here", items: [
 "A shared discriminant field lets TypeScript narrow safely across cases",
 "Loading, success, and error states become clearer when modeled explicitly",
 "This is often cleaner than optional properties everywhere"
 ]},
 { h: "Things worth asking", items: [
 "Why is a union of named states often better than a bag of maybe-null fields?",
 "How does a discriminant make impossible states harder to represent?"
 ]},
 { h: "Further reading", isResources: true, items: [
 "TypeScript Handbook - Narrowing (https://www.typescriptlang.org/docs/handbook/2/narrowing.html)",
 "TypeScript Handbook - Unions and intersections (https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html)",
 "Making Impossible States Impossible - Richard Feldman (https://www.youtube.com/watch?v=IcgmSRJHu_8)"
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
 title: "The best React roadmap",
 hint: "A practical companion",
 sub: "If you want a broader map alongside this one, roadmap.sh is a strong companion.",
 sections: [
 { h: "What matters here", items: [
 "roadmap.sh already does a great job mapping the territory, and I am trying to help by highlighting other important topics too"
 ]},
 { h: "Further reading", isResources: true, items: [
 "roadmap.sh - React roadmap (https://roadmap.sh/react)"
 ]}
 ]
 },
 {
 title: "Components are functions",
 hint: "JSX returns a description",
 sub: "This is the shift that makes React start to feel coherent: components are not templates, they are functions that describe UI.",
 sections: [
 { h: "What matters here", items: [
 "**A React component is a function that takes inputs and returns a UI description**",
 "**JSX is not HTML**, it is a JavaScript syntax for describing what you want the UI tree to look like",
 "When React renders, it calls your component and gets back that description",
 "**React** then compares the new description with the previous one and **updates only what changed in the DOM**"
 ]},
 { h: "Things worth asking", items: [
 "What is the difference between writing `<Foo />` and calling `Foo()` directly?",
 "Why does it matter that a component is describing UI rather than building it by hand?"
 ]},
 { h: "Further reading", isResources: true, items: [
 "React docs - Describing the UI (https://react.dev/learn/describing-the-ui)",
 "React docs - Your First Component (https://react.dev/learn/your-first-component)",
 "React docs - Writing Markup with JSX (https://react.dev/learn/writing-markup-with-jsx)"
 ]}
 ]
 },
 {
 title: "Props, state, and events",
 hint: "Data flows down, events flow up",
 sub: "The baseline mental model React keeps returning to.",
 sections: [
 { h: "What matters here", items: [
 "**Props are read-only inputs**",
 "**State is local memory managed by hooks**",
 "**Children notify parents through callbacks passed as props**",
 "State updates are batched and asynchronous from the render's point of view"
 ]},
 { h: "Things worth asking", items: [
 "Why is state described as a snapshot?",
 "What changes when several updates happen in one event?"
 ]},
 { h: "Further reading", isResources: true, items: [
 "React docs - State as a Snapshot (https://react.dev/learn/state-as-a-snapshot)",
 "React docs - Queueing a Series of State Updates (https://react.dev/learn/queueing-a-series-of-state-updates)",
 "React docs - Responding to Events (https://react.dev/learn/responding-to-events)"
 ]}
 ]
 },
 {
 title: "The rendering model",
 hint: "Render, then commit",
 sub: "Knowing what re-renders and why is the line between guessing and understanding.",
 sections: [
 { h: "What matters here", items: [
 "**A state change triggers React to render the component again**",
 "Render means calling the component and producing a new description",
 "Commit means applying the necessary changes to the DOM",
 "**React updates only the parts of the tree that changed**"
 ]},
 { h: "Things worth asking", items: [
 "What actually triggers a re-render?",
 "Why does moving state lower in the tree sometimes improve performance and clarity at once?"
 ]},
 { h: "Signs it’s clicking", items: [
 "You can predict what re-renders before opening DevTools"
 ]},
 { h: "Further reading", isResources: true, items: [
 "React docs - Render and Commit (https://react.dev/learn/render-and-commit)",
 "React docs - Preserving and Resetting State (https://react.dev/learn/preserving-and-resetting-state)",
 "React docs - Keeping Components Pure (https://react.dev/learn/keeping-components-pure)"
 ]}
 ]
 },
 {
 title: "useEffect, done right",
 hint: "Synchronizing, not reacting",
 sub: "Most effects are written when they should not be. Learn the cases that genuinely need one.",
 sections: [
 { h: "What matters here", items: [
 "**Effects are for syncing your component with something outside React**",
 "They run after render and can return a cleanup function",
 "The dependency array tells React when to run the effect again",
 "A lot of things people write in `useEffect` should usually live in render logic or event handlers instead"
 ]},
 { h: "Things worth asking", items: [
 "When should you not use useEffect?",
 "What does the cleanup function actually clean up, and when does it run?"
 ]},
 { h: "Signs it’s clicking", items: [
 "You write fewer effects over time, not more"
 ]},
 { h: "Further reading", isResources: true, items: [
 "React docs - Synchronizing with Effects (https://react.dev/learn/synchronizing-with-effects)",
 "React docs - You Might Not Need an Effect (https://react.dev/learn/you-might-not-need-an-effect)",
 "React docs - Removing Effect Dependencies (https://react.dev/learn/removing-effect-dependencies)",
 "Dan Abramov - A Complete Guide to useEffect (https://overreacted.io/a-complete-guide-to-useeffect/)",
 "Oh No - Common useEffect mistakes (https://www.oh-no.ooo/articles/common-useeffect-mistakes)"
 ]}
 ]
 },
 {
 title: "Refs",
 hint: "Mutable values without re-renders",
 sub: "Refs are one of React's escape hatches. They are useful precisely because they let you hold onto values without treating them as state.",
 sections: [
 { h: "What matters here", items: [
 "`useRef` stores a value that survives across renders without causing a new render when it changes",
 "Refs are often used for DOM access, focus management, timers, or storing mutable values that are not part of the UI",
 "If changing a value should update what the user sees, it probably belongs in state, not in a ref"
 ]},
 { h: "Things worth asking", items: [
 "When is a ref the right tool instead of state?",
 "What kinds of bugs happen when you put UI-driving data in a ref?"
 ]},
 { h: "Further reading", isResources: true, items: [
 "React docs - Referencing Values with Refs (https://react.dev/learn/referencing-values-with-refs)",
 "React docs - Manipulating the DOM with Refs (https://react.dev/learn/manipulating-the-dom-with-refs)"
 ]}
 ]
 },
 {
 title: "Memoization",
 hint: "Useful when you have a real reason",
 sub: "Memoization tools can help, but they are easy to overuse. They make the most sense once you already understand rendering and can point to an actual problem.",
 sections: [
 { h: "What matters here", items: [
 "`useMemo` caches a computed value",
 "`useCallback` caches a function identity",
 "`React.memo` can skip a re-render when props have not meaningfully changed",
 "These tools help only when the tradeoff is real, not just because the API exists"
 ]},
 { h: "Things worth asking", items: [
 "When does memoization actually pay for itself?",
 "Why does premature memoization often make code harder to maintain?"
 ]},
 { h: "Signs it’s clicking", items: [
 "You reach for memoization because you measured a problem, not because you feel obliged to optimize"
 ]},
 { h: "Further reading", isResources: true, items: [
 "React docs - `useMemo` (https://react.dev/reference/react/useMemo)",
 "React docs - `useCallback` (https://react.dev/reference/react/useCallback)",
 "React docs - `memo` (https://react.dev/reference/react/memo)",
 "Dan Abramov - Before You memo() (https://overreacted.io/before-you-memo/)"
 ]}
 ]
 },
 {
 title: "Custom hooks",
 hint: "Reusable stateful logic",
 sub: "The reuse mechanism React actually wants you to use.",
 sections: [
 { h: "What matters here", items: [
 "**A custom hook is a function that calls other hooks**",
 "Hooks compose cleanly into larger abstractions",
 "**Custom hooks reuse logic, not UI**",
 "**Two components can use the same hook without sharing state**"
 ]},
 { h: "Things worth asking", items: [
 "When does logic deserve to become a custom hook?",
 "What makes a hook abstraction feel helpful rather than too clever?"
 ]},
 { h: "Further reading", isResources: true, items: [
 "React docs - Reusing Logic with Custom Hooks (https://react.dev/learn/reusing-logic-with-custom-hooks)",
 "React docs - Rules of Hooks (https://react.dev/reference/rules/rules-of-hooks)"
 ]}
 ]
 }
 ]
 },
 {
 id: 4, anchor: "stage-4", tag: "Stage 4",
 title: "React architecture patterns",
 desc: "Once a React app grows past a handful of components, small decisions start having architectural consequences. This stage is about state placement, composition, context, forms, and the patterns that help a codebase stay clear and flexible as it grows.",
 topics: [
 {
 title: "Composition over configuration",
 hint: "Children over props soup",
 sub: "One of React's cleanest answers to growing complexity.",
 sections: [
 { h: "What matters here", items: [
 "**Components can take other components as children or props**",
 "Composition often scales better than adding more configuration props",
 "Children, render props, and components that provide logic without forcing a fixed UI all live in this family"
 ]},
 { h: "Things worth asking", items: [
 "When does a component become hard to use because it has too many props?",
 "How can composition replace that?"
 ]},
 { h: "Further reading", isResources: true, items: [
 "React docs - Passing JSX as children (https://react.dev/learn/passing-props-to-a-component#passing-jsx-as-children)"
 ]}
 ]
 },
 {
 title: "State colocation",
 hint: "Keep state near where it's used",
 sub: "The default habit that prevents a surprising number of architecture mistakes.",
 sections: [
 { h: "What matters here", items: [
 "**Keep state as close as possible to the components that need it**",
 "Lift state only when several components genuinely need to share it",
 "**Global state is sometimes necessary**, but it should not be the first instinct"
 ]},
 { h: "Things worth asking", items: [
 "How do you decide where a piece of state should live?",
 "What happens when you lift state too high?"
 ]},
 { h: "Further reading", isResources: true, items: [
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
 { h: "What matters here", items: [
 "**Context broadcasts a value to a subtree**",
 "Every consumer re-renders when the context value changes",
 "It works best for low-frequency or stable values like theme, auth, or locale",
 "**When everything goes into Context, performance and clarity both tend to suffer**"
 ]},
 { h: "Things worth asking", items: [
 "When is Context the right tool, and when is it not?",
 "Why does putting high-frequency state in Context create friction?"
 ]},
 { h: "Further reading", isResources: true, items: [
 "React docs - Passing Data Deeply with Context (https://react.dev/learn/passing-data-deeply-with-context)"
 ]}
 ]
 },
 {
 title: "Forms",
 hint: "Controlled, uncontrolled, and libraries",
 sub: "Forms expose every weak spot in your state model.",
 sections: [
 { h: "What matters here", items: [
 "**Controlled inputs keep the value in React state**",
 "**Uncontrolled inputs let the DOM keep the value until you need it**",
 "Validation can be eager, lazy, or hybrid",
 "**Libraries like react-hook-form earn their keep once forms become genuinely non-trivial**"
 ]},
 { h: "Things worth asking", items: [
 "When is uncontrolled good enough?",
 "Why can per-keystroke state updates become a performance trap?"
 ]},
 { h: "Further reading", isResources: true, items: [
 "React docs - input component (https://react.dev/reference/react-dom/components/input)",
 "react-hook-form (https://react-hook-form.com/)",
 "Improve the Performance of your React Forms - Epic React (https://www.epicreact.dev/improve-the-performance-of-your-react-forms)",
 "How to Build an Accessible React Form - Epic React (https://www.epicreact.dev/how-to-build-an-accessible-react-form)"
 ]}
 ]
 },
 {
 title: "Reducers and custom state models",
 hint: "When useState stops being enough",
 sub: "Some state is simple local memory. Some state is a little state machine. Learn the difference.",
 sections: [
 { h: "What matters here", items: [
 "useReducer helps when several updates belong to one coherent model",
 "Reducers make transitions explicit and easier to test",
 "This can be a better fit than stacking many related useState calls"
 ]},
 { h: "Things worth asking", items: [
 "What kinds of state benefit from reducer-style updates?",
 "When does a reducer clarify the model, and when is it ceremony?"
 ]},
 { h: "Further reading", isResources: true, items: [
 "React docs - Extracting State Logic into a Reducer (https://react.dev/learn/extracting-state-logic-into-a-reducer)",
 "Redux Style Guide (https://redux.js.org/style-guide/)",
 "Redux docs - Prerequisite Reducer Concepts (https://redux.js.org/usage/structuring-reducers/prerequisite-concepts)"
 ]}
 ]
 },
 {
 title: "Error and loading states",
 hint: "Boundaries that keep async UI livable",
 sub: "These are not edge concerns. They are part of the interface.",
 sections: [
 { h: "What matters here", items: [
 "**Error boundaries catch rendering errors in a subtree**",
 "**Suspense lets a subtree wait and show a fallback**",
 "Good async UI depends on deciding where waiting and failure should surface"
 ]},
 { h: "Things worth asking", items: [
 "What does an error boundary not catch?",
 "Where should Suspense boundaries live in a real app?"
 ]},
 { h: "Further reading", isResources: true, items: [
 "React docs - Suspense (https://react.dev/reference/react/Suspense)",
 "Developer Way - React Suspense (https://www.developerway.com/posts/react-suspense)"
 ]}
 ]
 }
 ]
 },
 {
 id: 5, anchor: "stage-5", tag: "Stage 5",
 title: "Client vs server components",
 desc: "This is one of the biggest conceptual shifts in modern React. It is not just a feature to learn, but a different way of thinking about where code runs, what gets sent to the browser, and how responsibility is split across the app.",
 topics: [
 {
 title: "Why the split exists",
 hint: "Smaller bundles, less waterfall",
 sub: "Before learning the API shape, understand the problem it is solving.",
 sections: [
 { h: "What matters here", items: [
 "Traditional React often ships large amounts of client JavaScript before the app feels ready",
 "**Server components keep more work on the server and send less JavaScript to the browser**",
 "**The result can be a simpler client and a smaller performance bill**"
 ]},
 { h: "Things worth asking", items: [
 "What was expensive about the all-client model?",
 "What changes for the user when more of the tree stays server-side?"
 ]},
 { h: "Further reading", isResources: true, items: [
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
 { h: "What matters here", items: [
 "**Server components can access backend resources directly but cannot use state, effects, or browser APIs**",
 "**Client components can use interactivity, browser APIs, and event handlers**",
 "The split is about putting code in the environment where it makes the most sense"
 ]},
 { h: "Things worth asking", items: [
 "Why can a server component fetch directly from the database but not attach an onClick handler?",
 "How do client and server components compose together in one tree?"
 ]},
 { h: "Further reading", isResources: true, items: [
 "Next.js - Server and Client composition patterns (https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns)",
 "Lee Robinson - Common mistakes with the Next.js App Router and how to fix them (https://vercel.com/blog/common-mistakes-with-the-next-js-app-router-and-how-to-fix-them)"
 ]}
 ]
 },
 {
 title: "The use client directive",
 hint: "Marking the boundary",
 sub: "A small line with big consequences.",
 sections: [
 { h: "What matters here", items: [
 "**use client** marks a file and its imports as client-side code",
 "Moving the boundary too high pushes more code into the browser than you need",
 "Keeping the boundary low preserves the benefits of server-first rendering"
 ]},
 { h: "Things worth asking", items: [
 "What gets shipped when you add use client near the root of the tree?",
 "How do you isolate interactivity without converting whole sections unnecessarily?"
 ]},
 { h: "Further reading", isResources: true, items: [
 "Next.js - Client Components (https://nextjs.org/docs/app/building-your-application/rendering/client-components)",
 "Understanding React Server Components - Josh Comeau (https://www.joshwcomeau.com/react/server-components/)"
 ]}
 ]
 },
 {
 title: "Server actions",
 hint: "Mutations without the old ceremony",
 sub: "A new way to think about form submissions and server-side mutations.",
 sections: [
 { h: "What matters here", items: [
 "Server actions are server-only functions invoked through the framework",
 "They reduce the need for some fetch-to-API-route boilerplate",
 "Validation, authorization, and side effects still need deliberate design"
 ]},
 { h: "Things worth asking", items: [
 "When is a server action simpler than a route handler?",
 "What logic still belongs in explicit APIs or services?"
 ]},
 { h: "Further reading", isResources: true, items: [
 "Next.js - Server Actions and Mutations (https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations)",
 "Vercel - Common mistakes with Server Actions (https://vercel.com/blog/common-mistakes-with-the-next-js-app-router-and-how-to-fix-them#using-server-actions-without-considering-cache-behavior)"
 ]}
 ]
 },
 {
 title: "Streaming and Suspense",
 hint: "Do not make every part of the page wait for the slowest part",
 sub: "One of the most practical benefits of the new model.",
 sections: [
 { h: "What matters here", items: [
 "**The server can stream HTML in chunks instead of waiting for everything**",
 "Suspense boundaries define what can wait and what should render now",
 "Good boundary placement changes perceived performance more than many micro-optimizations"
 ]},
 { h: "Things worth asking", items: [
 "How does streaming improve perceived performance?",
 "Where should Suspense boundaries live in the tree?"
 ]},
 { h: "Further reading", isResources: true, items: [
 "Next.js - Loading UI and Streaming (https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming)",
 "Developer Way - React Suspense (https://www.developerway.com/posts/react-suspense)"
 ]}
 ]
 }
 ]
 },
 {
 id: 6, anchor: "stage-6", tag: "Stage 6",
 title: "Next.js",
 desc: "For many developers, this is where React starts to feel like a full application stack. Focus on the App Router, understand the full-stack model it introduces, and learn just enough of the Pages Router to stay oriented in older codebases.",
 topics: [
 {
 title: "App Router vs Pages Router",
 hint: "Two routers, two mental models",
 sub: "Know both exist, learn the App Router first, and recognize older Pages Router patterns when you see them.",
 sections: [
 { h: "What matters here", items: [
 "**The App Router is the modern default**",
 "The **Pages Router** still appears in many older codebases",
 "**They overlap in purpose, but not in mental model**",
 "The **App Router** is built around layouts, nested routing, server components, and streaming",
 "The **Pages Router** is more page-based and client-oriented in how many developers first learned Next.js",
 "One of the biggest benefits of the **App Router** is that data fetching, layouts, and server-first rendering fit together more naturally",
 "Learning the **App Router** first gives you a better foundation for modern Next.js, even if you still need to recognize older Pages Router patterns"
 ]},
 { h: "Further reading", isResources: true, items: [
 "Next.js docs (https://nextjs.org/docs)",
 "Next.js - Pages Router docs (https://nextjs.org/docs/pages)",
 "Lee Robinson - Common mistakes with the Next.js App Router and how to fix them (https://vercel.com/blog/common-mistakes-with-the-next-js-app-router-and-how-to-fix-them)"
 ]}
 ]
 },
 {
 title: "File-based routing",
 hint: "Folders become routes",
 sub: "The filesystem is part of the framework API.",
 sections: [
 { h: "What matters here", items: [
 "**page.tsx** creates a route",
 "**layout.tsx**, **loading.tsx**, **error.tsx**, and **not-found.tsx** add structure and behavior",
 "**Dynamic and catch-all segments shape URLs directly**"
 ]},
 { h: "Things worth asking", items: [
 "How do nested layouts persist across navigations?",
 "What do route groups and parallel routes buy you?"
 ]},
 { h: "Further reading", isResources: true, items: [
 "Next.js - Routing fundamentals (https://nextjs.org/docs/app/building-your-application/routing)",
 "Leerob - The App Router Patterns I Wish I Knew Earlier (https://www.youtube.com/@leerob)"
 ]}
 ]
 },
 {
 title: "Data fetching",
 hint: "Fetch where the work belongs",
 sub: "In modern Next.js, data fetching is no longer a separate concern bolted onto the app. It is part of the rendering model.",
 sections: [
 { h: "What matters here", items: [
 "Server components often make server-side fetching the default answer",
 "Next.js extends **fetch** with caching and revalidation behavior, so data fetching also becomes a rendering decision",
 "**Client-side fetching still matters for interactive or constantly changing data**",
 "The important question is not just where you *can* fetch, but where the data belongs and how fresh it needs to be"
 ]},
 { h: "Things worth asking", items: [
 "When should data be fetched on the server rather than the client?",
 "When should you opt out of caching?"
 ]},
 { h: "Further reading", isResources: true, items: [
 "Next.js - Data fetching, caching, and revalidating (https://nextjs.org/docs/app/building-your-application/data-fetching)",
 "Lee Robinson - Common mistakes with the Next.js App Router and how to fix them (https://vercel.com/blog/common-mistakes-with-the-next-js-app-router-and-how-to-fix-them#using-server-and-client-components-together)",
 "Vercel - Understanding caching in the App Router (https://vercel.com/blog/common-mistakes-with-the-next-js-app-router-and-how-to-fix-them#assuming-fetch-is-never-cached)"
 ]}
 ]
 },
 {
 title: "Rendering modes",
 hint: "Static, dynamic, and in between",
 sub: "The important thing is not memorizing acronyms, but understanding the tradeoffs between speed, freshness, and cacheability.",
 sections: [
 { h: "What matters here", items: [
 "**Static rendering is fast and cache-friendly** because the result can be prepared ahead of time",
 "Dynamic rendering trades cacheability for request-time freshness",
 "**ISR sits in the middle with controlled revalidation**",
 "The real question is how fresh the page needs to be, and what performance tradeoff you are willing to make"
 ]},
 { h: "Things worth asking", items: [
 "What makes a route dynamic rather than static?",
 "When is ISR a better tradeoff than full SSR?"
 ]},
 { h: "Further reading", isResources: true, items: [
 "Next.js - Rendering (https://nextjs.org/docs/app/building-your-application/rendering)",
 "Lee Robinson - Static vs Dynamic Rendering in the App Router (https://vercel.com/blog/common-mistakes-with-the-next-js-app-router-and-how-to-fix-them#misunderstanding-static-and-dynamic-rendering)",
 "web.dev - Rendering on the Web (https://web.dev/rendering-on-the-web/)"
 ]}
 ]
 },
 {
 title: "Route handlers and middleware",
 hint: "Two escape hatches, different jobs",
 sub: "Useful precisely because they are not the same thing.",
 sections: [
 { h: "What matters here", items: [
 "Route handlers are API endpoints inside the app router",
 "**Middleware runs before routing and can redirect, rewrite, or gate access**",
 "Middleware is not a general place for business logic, it is for work that needs to happen before the request reaches the route",
 "Choosing the wrong one usually means using the framework at the wrong layer"
 ]},
 { h: "Things worth asking", items: [
 "When is a route handler the right answer instead of a server action?",
 "What can middleware do that a layout cannot?"
 ]},
 { h: "Further reading", isResources: true, items: [
 "Next.js - Middleware (https://nextjs.org/docs/app/building-your-application/routing/middleware)",
 "Next.js - Route Handlers (https://nextjs.org/docs/app/building-your-application/routing/route-handlers)",
 "Lee Robinson - Common mistakes with the Next.js App Router and how to fix them (https://vercel.com/blog/common-mistakes-with-the-next-js-app-router-and-how-to-fix-them)"
 ]}
 ]
 },
 {
 title: "Metadata, images, and fonts",
 hint: "Built-in optimizations worth understanding",
 sub: "These are smaller parts of the framework, but they have a surprisingly large effect on performance, polish, and SEO.",
 sections: [
 { h: "What matters here", items: [
 "Metadata APIs handle page-level SEO data",
 "**next/image** helps with responsive image performance",
 "**next/font** reduces layout shift and removes external font hosting friction",
 "These features matter because they solve common production problems without asking you to build the plumbing yourself"
 ]},
 { h: "Further reading", isResources: true, items: [
 "Next.js - Metadata and OG images (https://nextjs.org/docs/app/building-your-application/optimizing/metadata)",
 "Next.js - Image Optimization (https://nextjs.org/docs/app/building-your-application/optimizing/images)",
 "Next.js - Font Optimization (https://nextjs.org/docs/app/building-your-application/optimizing/fonts)",
 "Next.js - Optimizing (https://nextjs.org/docs/app/building-your-application/optimizing)",
 "Vercel - Common mistakes with built-in Next.js features (https://vercel.com/blog/common-mistakes-with-the-next-js-app-router-and-how-to-fix-them#misusing-built-in-next-js-features)"
 ]}
 ]
 }
 ]
 },
 {
 id: 7, anchor: "stage-7", tag: "Stage 7",
 title: "Adjacent essentials",
 desc: "These are the tools and practices that shape day-to-day frontend work: styling, accessibility, testing, client-side data fetching, and developer tooling. They are adjacent only in the sense that React does not own them, not because they matter less.",
 topics: [
 {
 title: "Tailwind and CSS fundamentals",
 hint: "Utility classes still need a CSS brain",
 sub: "Tailwind can make styling faster and more consistent, but it does not replace understanding how CSS works.",
 sections: [
 { h: "What matters here", items: [
 "You still need a CSS mental model even when using utility classes",
 "**Tailwind optimizes speed and consistency, but it is not a substitute for understanding layout, specificity, and the cascade**",
 "Design tokens and naming discipline matter no matter which styling approach you pick"
 ]},
 { h: "Things worth asking", items: [
 "What does Tailwind make easier, and what does it not solve?",
 "How do you keep styling choices coherent across a growing codebase?"
 ]},
 { h: "Further reading", isResources: true, items: [
 "Tailwind CSS docs (https://tailwindcss.com/docs)",
 "Tailwind CSS - Utility-first fundamentals (https://tailwindcss.com/docs/styling-with-utility-classes)",
 "MDN - CSS first steps (https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps)",
 "MDN - Specificity (https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_cascade/Specificity)",
 "Josh Comeau - CSS for JavaScript Developers (https://www.joshwcomeau.com/)",
 "Refactoring UI (https://www.refactoringui.com/)"
 ]}
 ]
 },
 {
 title: "Client-side data fetching",
 hint: "Caching, revalidation, and mutations",
 sub: "When server components are not the answer, client-side fetching tools can handle caching, refreshes, and mutations much more cleanly than ad-hoc effect code.",
 sections: [
 { h: "What matters here", items: [
 "These tools maintain a client-side cache keyed by request identity",
 "They handle revalidation, background refreshes, and mutation flows far better than ad-hoc effect code",
 "They are often the right answer for interactive dashboards, optimistic UI, and user-driven refreshes"
 ]},
 { h: "Further reading", isResources: true, items: [
 "SWR docs (https://swr.vercel.app/)",
 "RTK Query docs - Overview (https://redux-toolkit.js.org/rtk-query/overview)",
 "RTK Query docs - Queries (https://redux-toolkit.js.org/rtk-query/usage/queries)",
 "RTK Query docs - Mutations (https://redux-toolkit.js.org/rtk-query/usage/mutations)"
 ]}
 ]
 },
 {
 title: "Accessibility basics",
 hint: "Semantic HTML first",
 sub: "Not an optional polish pass. A baseline for building interfaces responsibly.",
 sections: [
 { h: "What matters here", items: [
 "Semantic HTML solves more accessibility problems than many people realize",
 "ARIA fills gaps, but it does not replace good structure",
 "Keyboard navigation, focus management, labels, and contrast are part of the core frontend skill set"
 ]},
 { h: "Further reading", isResources: true, items: [
 "MDN - Accessibility (https://developer.mozilla.org/en-US/docs/Learn/Accessibility)",
 "web.dev - Learn Accessibility (https://web.dev/learn/accessibility)",
 "WebAIM articles (https://webaim.org/articles/)",
 "WAI-ARIA Authoring Practices Guide (https://www.w3.org/WAI/ARIA/apg/)",
 "A11Y Project - Checklist (https://www.a11yproject.com/checklist/)",
 "Adrian Roselli (https://adrianroselli.com/)"
 ]}
 ]
 },
 {
 title: "Testing essentials",
 hint: "Behavior over implementation",
 sub: "Tests worth keeping are tests that survive refactors.",
 sections: [
 { h: "What matters here", items: [
 "React Testing Library encourages testing the UI the way a user experiences it",
 "**Jest** is a common choice for unit and integration tests in JavaScript projects",
 "Mock at the network boundary rather than inside component internals whenever possible",
 "**Playwright** is a strong choice for end-to-end coverage of critical user flows"
 ]},
 { h: "Things worth asking", items: [
 "What counts as implementation-detail testing, and why does it become brittle?",
 "Which parts of an app deserve end-to-end coverage?"
 ]},
 { h: "Further reading", isResources: true, items: [
 "Testing Library docs (https://testing-library.com/docs/)",
 "Jest docs (https://jestjs.io/docs/getting-started)",
 "Playwright docs (https://playwright.dev/docs/intro)",
 "Kent C. Dodds - The Testing Trophy (https://kentcdodds.com/blog/the-testing-trophy-and-testing-classifications)",
 "MSW docs (https://mswjs.io/docs)"
 ]}
 ]
 },
 {
 title: "Chrome DevTools",
 hint: "Learn to inspect before you guess",
 sub: "You do not need to master every panel, but you should be comfortable using the browser inspector to understand what your app is doing.",
 sections: [
 { h: "What matters here", items: [
 "**Chrome DevTools** is one of the most important debugging tools in frontend work",
 "The browser inspector helps you understand layout, styles, network activity, performance, and runtime behavior"
 ]},
 { h: "Further reading", isResources: true, items: [
 "Chrome DevTools docs (https://developer.chrome.com/docs/devtools/)",
 "Chrome DevTools - Inspect CSS grid and flexbox (https://developer.chrome.com/docs/devtools/css/grid)",
 "Chrome DevTools - JavaScript debugging (https://developer.chrome.com/docs/devtools/javascript/)",
 "Chrome DevTools - Network panel (https://developer.chrome.com/docs/devtools/network/)",
 "Chrome DevTools - Performance panel (https://developer.chrome.com/docs/devtools/performance/)",
 "Addy Osmani - Performance tooling and modern debugging (https://addyosmani.com/blog/performance-tools/)"
 ]}
 ]
 },
 {
 title: "Linting and formatting",
 hint: "Feedback before bugs spread",
 sub: "Linting and formatting are part of the everyday feedback loop. They help keep code readable, consistent, and easier to review.",
 sections: [
 { h: "What matters here", items: [
 "**ESLint** helps catch mistakes and enforce code quality rules",
 "Formatters like **Prettier** reduce style debates and keep code consistent",
 "These tools work best when they are part of the normal workflow, not an afterthought"
 ]},
 { h: "Further reading", isResources: true, items: [
 "ESLint docs (https://eslint.org/docs/latest/)",
 "Prettier docs (https://prettier.io/docs/)",
 "Why Prettier? (https://prettier.io/docs/why-prettier)"
 ]}
 ]
 },
 {
 title: "AI as a learning and coding assistant",
 hint: "Use it to accelerate, not to outsource understanding",
 sub: "AI can help across every stage of this roadmap, but it is most useful when you use it to clarify concepts, inspect unfamiliar code, and practice better questions rather than blindly generating answers.",
 sections: [
 { h: "What matters here", items: [
 "AI can help explain unfamiliar syntax, React patterns, and framework concepts in simpler language",
 "It is useful for turning error messages, type errors, and confusing code paths into something easier to reason about",
 "It can help you compare approaches, draft examples, and generate small experiments when you are learning a new concept",
 "It becomes much more valuable when you already know enough to question the answer, verify it, and ask for something more precise"
 ]},
 { h: "Things worth asking", items: [
 "How do you use AI to understand a concept instead of just copying a solution?",
 "What kinds of mistakes should you expect AI to make in React, Next.js, TypeScript, or accessibility work?",
 "How can AI help you debug, write tests, or inspect performance without becoming a crutch?"
 ]},
 { h: "Further reading", isResources: true, items: [
 "OpenAI - Prompting guide (https://platform.openai.com/docs/guides/prompt-engineering)",
 "Anthropic - Prompt engineering overview (https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview)",
 "Simon Willison - Things we learned about LLMs in 2024 (https://simonwillison.net/2024/Dec/31/llms-in-2024/)",
 "Simon Willison - Prompt injection and data exfiltration in LLM-powered applications (https://simonwillison.net/2024/Jun/6/prompt-injection/)",
 "Ethan Mollick - Centaurs and Cyborgs on the Jagged Frontier (https://www.oneusefulthing.org/p/centaurs-and-cyborgs-on-the-jagged)",
 "Ethan Mollick - My approach to using AI (https://www.oneusefulthing.org/p/my-ai-skeptic-friends-are-all-nuts)"
 ]}
 ]
 },
 {
 title: "People to follow",
 hint: "Good teachers shorten the learning curve",
 sub: "A few strong voices can make the frontend world feel much less noisy. The goal is not to follow everyone, but to find teachers whose explanations make difficult ideas click.",
 sections: [
 { h: "What matters here", items: [
 "Different people are useful for different things: React mental models, CSS, TypeScript, performance, accessibility, or keeping up with the ecosystem",
 "Following a few thoughtful educators is often more useful than trying to consume everything at once",
 "Good teachers do more than share tips, they help you build taste, vocabulary, and better instincts"
 ]},
 { h: "Further reading", isResources: true, items: [
 "Fireship (https://www.youtube.com/@Fireship)",
 "Web Dev Simplified (https://www.youtube.com/@WebDevSimplified)",
 "Kent C. Dodds (https://kentcdodds.com/)",
 "Dan Abramov (https://overreacted.io/)",
 "Josh W. Comeau (https://www.joshwcomeau.com/)",
 "TkDodo (https://tkdodo.eu/blog)",
 "Mark Erikson (https://blog.isquaredsoftware.com/)",
 "Adrian Roselli (https://adrianroselli.com/)",
 "Lee Robinson (https://leerob.io/)"
 ]}
 ]
 }
 ]
 }
];
