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
    id: 1, anchor: "stage-1", tag: "Stage 1",
    title: "Functional programming foundations",
    desc: "Modern React is unintelligible without these. Spend real time here — every later stage rests on these ideas.",
    topics: [
      {
        title: "Pure functions",
        hint: "Same input, same output",
        sub: "The atom of functional programming — and the shape of every React component.",
        sections: [
          { h: "Internalize", items: [
            "A pure function has no side effects and returns the same output for the same inputs",
            "Pure functions are trivially testable, cacheable, and composable",
            "React components are mostly pure functions of their props"
          ]},
          { h: "Questions to answer", items: [
            "What counts as a side effect?",
            "Why does React rely on component purity for its rendering model?",
            "Where do impurities have to live? (Hint: the edges of the system.)"
          ]},
          { h: "You're getting it when", items: [
            "You spot side effects in code instinctively",
            "You isolate them rather than letting them spread"
          ]},
          { h: "Where to learn", isResources: true, items: [
            "Mostly Adequate Guide to FP - Ch 1-3 (free) (https://github.com/MostlyAdequate/mostly-adequate-guide)",
            "Composing Software - Eric Elliott (free) (https://medium.com/javascript-scene/composing-software-an-introduction-7f05d2b36d1d)"
          ]}
        ]
      },
      {
        title: "Immutability",
        hint: "Copy, don't mutate",
        sub: "Why React appears not to notice when you change state directly.",
        sections: [
          { h: "Internalize", items: [
            "Mutation changes a value in place; immutability creates a new value",
            "Spread (...), Array.map, Object.assign are your tools",
            "React checks references, not deep equality — a mutated array is the same reference"
          ]},
          { h: "Questions to answer", items: [
            "Why does state.push(x); setState(state) often appear to do nothing?",
            "What does 'structural sharing' mean and why is it efficient?"
          ]},
          { h: "You're getting it when", items: [
            "You reach for .map/.filter/spread instead of .push/.splice automatically"
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
            "map, filter, reduce replace most for-loops",
            "Composition: f(g(x)) — build big functions from small ones"
          ]},
          { h: "Questions to answer", items: [
            "When is reduce the right answer? When is it overkill?",
            "What does currying actually buy you?"
          ]},
          { h: "You're getting it when", items: [
            "You write pipelines, not loops with mutable accumulators"
          ]},
          { h: "Where to learn", isResources: true, items: [
            "MDN - Iterators and array methods (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_generators)",
            "Eloquent JavaScript - Ch 5 (free) (https://eloquentjavascript.net/05_higher_order.html)"
          ]}
        ]
      },
      {
        title: "Closures",
        hint: "Functions remember scope",
        sub: "How hooks 'remember' state — and the cause of half the React bugs you'll write.",
        sections: [
          { h: "Internalize", items: [
            "A closure is a function plus the variables it captured when it was created",
            "Every render creates new function values that close over that render's values",
            "The 'stale closure' problem: a callback sees the values from when it was created, not when it runs"
          ]},
          { h: "Questions to answer", items: [
            "Why does a setTimeout inside a component log the old state?",
            "What does the dependency array of useEffect actually do?"
          ]},
          { h: "You're getting it when", items: [
            "Closures stop being magic — you can predict which values a callback sees"
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
    desc: "JS has moved on since you last looked. Refresh the syntax, then add TypeScript — it's the lingua franca of modern React.",
    topics: [
      {
        title: "Modern ES syntax",
        hint: "Destructuring, spread, ?., ??",
        sub: "The idioms that make modern JS read like a different language.",
        sections: [
          { h: "Internalize", items: [
            "Destructuring (objects and arrays)",
            "Spread (...) and rest parameters",
            "Template literals and tagged templates",
            "Optional chaining (?.) and nullish coalescing (??)"
          ]},
          { h: "Questions to answer", items: [
            "When does ?? differ from ||?",
            "What does const { a: { b } = {} } = obj actually do?"
          ]},
          { h: "Where to learn", isResources: true, items: [
            "javascript.info (the best free JS textbook) (https://javascript.info/)",
            "MDN JavaScript reference (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)"
          ]}
        ]
      },
      {
        title: "Async patterns",
        hint: "Promises and async/await",
        sub: "Asynchrony is everywhere in frontend — get the model crisp.",
        sections: [
          { h: "Internalize", items: [
            "A promise is a value that will be ready later",
            "async/await is sugar over .then",
            "Errors are caught with try/catch in async functions",
            "Promise.all / allSettled / race for concurrency"
          ]},
          { h: "Questions to answer", items: [
            "How do you fetch two things in parallel without awaiting them sequentially?",
            "Where should you catch errors — at every await, or at a boundary?"
          ]},
          { h: "Where to learn", isResources: true, items: [
            "javascript.info - Promises, async/await (https://javascript.info/async)",
            "MDN - Asynchronous JS (https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous)"
          ]}
        ]
      },
      {
        title: "ES modules",
        hint: "import / export",
        sub: "How files connect — and why tree-shaking works.",
        sections: [
          { h: "Internalize", items: [
            "Named exports and default exports — when each is appropriate",
            "Dynamic import() for code splitting",
            "Modules are statically analyzed — that's what enables tree shaking"
          ]},
          { h: "Questions to answer", items: [
            "Why does import * as foo often hurt bundle size?",
            "When does a circular import bite you?"
          ]},
          { h: "Where to learn", isResources: true, items: [
            "MDN - JavaScript modules (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)"
          ]}
        ]
      },
      {
        title: "TypeScript essentials",
        hint: "Types, generics, narrowing",
        sub: "Not a separate language — JS plus a type system that pays for itself fast.",
        sections: [
          { h: "Internalize", items: [
            "Primitives, objects, unions, intersections, literal types",
            "type vs interface — both work; pick one and be consistent",
            "Narrowing: how the compiler refines types through control flow",
            "Generics: types that take parameters",
            "Utility types: Partial, Pick, Omit, Record"
          ]},
          { h: "Questions to answer", items: [
            "When is unknown better than any?",
            "How does TypeScript infer the return type of a generic function?"
          ]},
          { h: "You're getting it when", items: [
            "You read TS errors as helpful information, not noise"
          ]},
          { h: "Where to learn", isResources: true, items: [
            "TypeScript Handbook (official, excellent) (https://www.typescriptlang.org/docs/handbook/intro.html)",
            "Total TypeScript - Beginners tutorial (free) (https://www.totaltypescript.com/tutorials/beginners-typescript)"
          ]}
        ]
      }
    ]
  },
  {
    id: 3, anchor: "stage-3", tag: "Stage 3",
    title: "React, deeply",
    desc: "Beyond 'I've made a few components' — the rendering model, hooks done right, and the patterns that make React feel coherent.",
    topics: [
      {
        title: "Components are functions",
        hint: "JSX returns a description",
        sub: "Drop any class-component mental model — modern React is function components all the way down.",
        sections: [
          { h: "Internalize", items: [
            "A component is a function: (props) → UI description",
            "JSX is sugar for function calls — it returns objects, not HTML",
            "React renders the description; the renderer reconciles with the DOM"
          ]},
          { h: "Questions to answer", items: [
            "What's the difference between &lt;Foo /> and Foo()?",
            "Why do lists need stable keys?"
          ]},
          { h: "Where to learn", isResources: true, items: [
            "react.dev - Describing the UI (https://react.dev/learn/describing-the-ui)"
          ]}
        ]
      },
      {
        title: "Props, state, events",
        hint: "Data flows down, events flow up",
        sub: "The mental model React asks you to adopt.",
        sections: [
          { h: "Internalize", items: [
            "Props are read-only inputs to a component",
            "State is local memory managed by useState",
            "Children notify parents by calling callbacks passed as props",
            "State updates are batched and asynchronous"
          ]},
          { h: "Questions to answer", items: [
            "Why is state a 'snapshot' from the render's perspective?",
            "When does state update synchronously, if ever?"
          ]},
          { h: "Where to learn", isResources: true, items: [
            "react.dev - State as a snapshot (https://react.dev/learn/state-as-a-snapshot)",
            "react.dev - Queueing state updates (https://react.dev/learn/queueing-a-series-of-state-updates)"
          ]}
        ]
      },
      {
        title: "The rendering model",
        hint: "Render, then commit",
        sub: "Knowing what re-renders and why separates beginners from intermediate React.",
        sections: [
          { h: "Internalize", items: [
            "State change → React re-renders the component and its children",
            "Render = call the function, get a description",
            "Commit = apply the necessary DOM changes",
            "React only updates the DOM where the description changed"
          ]},
          { h: "Questions to answer", items: [
            "What triggers a re-render?",
            "Why doesn't moving state down sometimes 'just work'?"
          ]},
          { h: "You're getting it when", items: [
            "You can predict, given a state change, exactly what re-renders"
          ]},
          { h: "Where to learn", isResources: true, items: [
            "react.dev - Render and Commit (https://react.dev/learn/render-and-commit)"
          ]}
        ]
      },
      {
        title: "useEffect, done right",
        hint: "Synchronizing, not reacting",
        sub: "Most useEffects are written when they shouldn't be. Learn the cases that do need it.",
        sections: [
          { h: "Internalize", items: [
            "Effects sync your component with an external system",
            "They run after commit, can return a cleanup function",
            "The dependency array decides when the effect re-runs",
            "Many 'effects' are actually derived state or event handlers in disguise"
          ]},
          { h: "Questions to answer", items: [
            "When should you NOT use useEffect?",
            "What does the cleanup function do, and when does it run?"
          ]},
          { h: "You're getting it when", items: [
            "You write fewer effects over time, not more"
          ]},
          { h: "Where to learn", isResources: true, items: [
            "react.dev - You might not need an Effect (essential) (https://react.dev/learn/you-might-not-need-an-effect)",
            "Dan Abramov - A Complete Guide to useEffect (https://overreacted.io/a-complete-guide-to-useeffect/)"
          ]}
        ]
      },
      {
        title: "Refs & memoization",
        hint: "useRef, useMemo, useCallback",
        sub: "Powerful escape hatches — used incorrectly more often than correctly.",
        sections: [
          { h: "Internalize", items: [
            "useRef: mutable value that doesn't trigger re-renders",
            "useMemo: cache a computed value across renders",
            "useCallback: cache a function identity across renders",
            "React.memo: skip re-render if props are referentially equal"
          ]},
          { h: "Questions to answer", items: [
            "When does memoization actually pay off?",
            "Why does premature memoization make code worse, not faster?"
          ]},
          { h: "You're getting it when", items: [
            "You don't reach for these unless you've measured a problem"
          ]},
          { h: "Where to learn", isResources: true, items: [
            "react.dev - useRef (https://react.dev/reference/react/useRef)",
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
            "Naming with use is enforced by the linter",
            "Hooks compose — small hooks combine into larger ones",
            "Custom hooks reuse logic, not UI"
          ]},
          { h: "Questions to answer", items: [
            "When does logic deserve to become a custom hook?",
            "Why can two components use the same hook without sharing state?"
          ]},
          { h: "Where to learn", isResources: true, items: [
            "react.dev - Reusing Logic with Custom Hooks (https://react.dev/learn/reusing-logic-with-custom-hooks)"
          ]}
        ]
      }
    ]
  },
  {
    id: 4, anchor: "stage-4", tag: "Stage 4",
    title: "React architecture patterns",
    desc: "How to keep components composable as the app grows — state placement, composition, context, forms.",
    topics: [
      {
        title: "Composition over configuration",
        hint: "children > props soup",
        sub: "React's superpower — and the cleanest answer to most 'should I add another prop?' questions.",
        sections: [
          { h: "Internalize", items: [
            "Components can take other components as children or props",
            "Composition almost always scales better than adding more props",
            "Render props and the children-as-slots pattern"
          ]},
          { h: "Questions to answer", items: [
            "When does a component become hard to use because it has too many props?",
            "How can composition replace that?"
          ]},
          { h: "Where to learn", isResources: true, items: [
            "react.dev - Passing JSX as children (https://react.dev/learn/passing-props-to-a-component#passing-jsx-as-children)"
          ]}
        ]
      },
      {
        title: "State colocation",
        hint: "Push state down",
        sub: "The default that prevents most architecture mistakes.",
        sections: [
          { h: "Internalize", items: [
            "Keep state as close to where it's used as possible",
            "Lift state only when multiple components genuinely share it",
            "Global state is a last resort, not a default"
          ]},
          { h: "Questions to answer", items: [
            "How do you decide where a piece of state should live?",
            "What happens if you lift state too high?"
          ]},
          { h: "Where to learn", isResources: true, items: [
            "react.dev - Sharing State Between Components (https://react.dev/learn/sharing-state-between-components)",
            "Kent C. Dodds - Colocation (https://kentcdodds.com/blog/colocation)"
          ]}
        ]
      },
      {
        title: "Context (and its limits)",
        hint: "Global-ish, low-frequency state",
        sub: "Not a state manager — a way to pass values without prop drilling.",
        sections: [
          { h: "Internalize", items: [
            "Context broadcasts a value to a subtree",
            "Every consumer re-renders when the context value changes",
            "Best for low-frequency changes (theme, auth, locale)",
            "For app-wide reactive state, reach for a real state library"
          ]},
          { h: "Questions to answer", items: [
            "Why does putting everything in Context cause performance problems?",
            "When is Context the right tool — and when isn't it?"
          ]},
          { h: "Where to learn", isResources: true, items: [
            "react.dev - Passing Data Deeply with Context (https://react.dev/learn/passing-data-deeply-with-context)"
          ]}
        ]
      },
      {
        title: "Forms",
        hint: "Controlled, uncontrolled, libraries",
        sub: "Forms expose every weak spot in your state model.",
        sections: [
          { h: "Internalize", items: [
            "Controlled: React owns the value via state",
            "Uncontrolled: the DOM owns the value; you read it with a ref",
            "Validation can be eager (on change), lazy (on submit), or hybrid",
            "Libraries (react-hook-form, Formik) earn their keep at non-trivial scale"
          ]},
          { h: "Questions to answer", items: [
            "When is uncontrolled enough?",
            "Why is per-keystroke state often a perf trap?"
          ]},
          { h: "Where to learn", isResources: true, items: [
            "react.dev - input component (https://react.dev/reference/react-dom/components/input)",
            "react-hook-form (https://react-hook-form.com/)"
          ]}
        ]
      },
      {
        title: "Error & loading states",
        hint: "Error boundaries, Suspense",
        sub: "The two boundaries that make async UI livable.",
        sections: [
          { h: "Internalize", items: [
            "Error boundaries catch render errors in a subtree",
            "Suspense lets a subtree 'wait' for async work and show a fallback",
            "Together they replace a lot of ad-hoc {loading ? ... : ...} branching"
          ]},
          { h: "Questions to answer", items: [
            "What does an error boundary not catch?",
            "Where should Suspense boundaries live in the tree?"
          ]},
          { h: "Where to learn", isResources: true, items: [
            "react.dev - Suspense (https://react.dev/reference/react/Suspense)"
          ]}
        ]
      }
    ]
  },
  {
    id: 5, anchor: "stage-5", tag: "Stage 5",
    title: "Client vs server components",
    desc: "The biggest mental shift in modern React. Take your time — this is genuinely a new model, not just a new API.",
    topics: [
      {
        title: "Why the split exists",
        hint: "Smaller bundles, less waterfall",
        sub: "Before you learn the API, understand the problem it solves.",
        sections: [
          { h: "Internalize", items: [
            "Traditional React ships every component as JS, then fetches data from the client",
            "Server components render on the server, ship only HTML for that subtree",
            "Result: less JS sent to the browser, less waterfall, data closer to the source"
          ]},
          { h: "Questions to answer", items: [
            "What was the cost of the old all-client model?",
            "What changes for the user when more components are server-only?"
          ]},
          { h: "Where to learn", isResources: true, items: [
            "react.dev - Server Components reference (https://react.dev/reference/rsc/server-components)",
            "How RSC actually works (deep dive) (https://www.plasmic.app/blog/how-react-server-components-work)"
          ]}
        ]
      },
      {
        title: "What each can do",
        hint: "Capabilities and constraints",
        sub: "Server components and client components have different powers.",
        sections: [
          { h: "Internalize", items: [
            "Server components: can access databases/files directly, can't use state or effects, can't attach event handlers",
            "Client components: can use state, effects, browser APIs, event handlers",
            "Server components can render client components (but not the other way around — a client component can contain server children passed as props/children)"
          ]},
          { h: "Questions to answer", items: [
            "Why can't you use useState in a server component?",
            "Can a client component receive server-rendered children?"
          ]},
          { h: "Where to learn", isResources: true, items: [
            "Next.js - Server & Client composition patterns (https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns)"
          ]}
        ]
      },
      {
        title: "The \"use client\" directive",
        hint: "Marking the boundary",
        sub: "One line of code with big implications.",
        sections: [
          { h: "Internalize", items: [
            "\"use client\" at the top of a file marks it (and its module imports) as client",
            "Everything imported into a client component also becomes client",
            "Put the directive as close to the leaves as possible — keep more of the tree server-side"
          ]},
          { h: "Questions to answer", items: [
            "What gets shipped to the browser when you add 'use client' near the root?",
            "How do you keep an island of interactivity inside an otherwise server tree?"
          ]},
          { h: "Where to learn", isResources: true, items: [
            "Next.js - Client Components (https://nextjs.org/docs/app/building-your-application/rendering/client-components)"
          ]}
        ]
      },
      {
        title: "Server actions",
        hint: "Functions you can call from the client",
        sub: "The new way to mutate server state from a form or a click.",
        sections: [
          { h: "Internalize", items: [
            "An async function marked with \"use server\" runs only on the server",
            "Client components can call it like any function — Next.js handles the RPC",
            "Replaces many fetch-to-API-route patterns; great for forms"
          ]},
          { h: "Questions to answer", items: [
            "When are server actions better than route handlers?",
            "How do you handle validation and authorization inside one?"
          ]},
          { h: "Where to learn", isResources: true, items: [
            "Next.js - Server Actions and Mutations (https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations)"
          ]}
        ]
      },
      {
        title: "Streaming & Suspense",
        hint: "Don't wait for everything",
        sub: "The server can send HTML in chunks — and Suspense decides what waits.",
        sections: [
          { h: "Internalize", items: [
            "The server streams the page; slow parts can arrive later",
            "Suspense boundaries mark 'this part can wait — show this fallback'",
            "loading.tsx in Next.js is a Suspense boundary in disguise"
          ]},
          { h: "Questions to answer", items: [
            "How does streaming improve perceived performance?",
            "Where in the tree should you place Suspense boundaries?"
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
    desc: "The framework most React apps now sit in. Focus on the App Router; recognize the Pages Router when you see it in older code.",
    topics: [
      {
        title: "App Router vs Pages Router",
        hint: "Two routers, one project",
        sub: "Know both exist, learn App Router first, recognize Pages Router patterns.",
        sections: [
          { h: "Internalize", items: [
            "App Router is the modern default (server components, layouts, streaming)",
            "Pages Router still exists in many older codebases (getServerSideProps, _app, file-based routes under pages/)",
            "Different mental models — don't conflate them"
          ]},
          { h: "Where to learn", isResources: true, items: [
            "Next.js docs (App Router default) (https://nextjs.org/docs)",
            "Next.js docs - Pages Router (https://nextjs.org/docs/pages)"
          ]}
        ]
      },
      {
        title: "File-based routing",
        hint: "Folders are routes",
        sub: "Filesystem structure is the URL tree.",
        sections: [
          { h: "Internalize", items: [
            "A folder with page.tsx becomes a route",
            "layout.tsx, loading.tsx, error.tsx, not-found.tsx are conventions",
            "Dynamic segments use [param]; catch-all uses [...slug]",
            "Route groups (group) organize folders without affecting URLs"
          ]},
          { h: "Questions to answer", items: [
            "What's a parallel route, and when would you want one?",
            "How do nested layouts persist across navigations?"
          ]},
          { h: "Where to learn", isResources: true, items: [
            "Next.js - Routing fundamentals (https://nextjs.org/docs/app/building-your-application/routing)"
          ]}
        ]
      },
      {
        title: "Data fetching",
        hint: "fetch in server components",
        sub: "No more getServerSideProps — server components fetch data themselves.",
        sections: [
          { h: "Internalize", items: [
            "Server components can be async and await fetches directly",
            "Next.js extends fetch with caching and revalidation options",
            "cache, revalidate, no-store control behavior",
            "Client-side fetching still exists — use SWR or TanStack Query when needed"
          ]},
          { h: "Questions to answer", items: [
            "What's the default caching behavior of fetch in Next.js?",
            "When should you opt out of caching?"
          ]},
          { h: "Where to learn", isResources: true, items: [
            "Next.js - Data fetching, caching, revalidating (https://nextjs.org/docs/app/building-your-application/data-fetching)"
          ]}
        ]
      },
      {
        title: "Rendering modes",
        hint: "SSG, SSR, ISR",
        sub: "Same code, different cache lifetimes.",
        sections: [
          { h: "Internalize", items: [
            "Static (SSG): rendered at build time, served fast",
            "Dynamic (SSR): rendered per request",
            "ISR: static, but rebuilt on a schedule or on demand",
            "Next.js infers mode from your data fetching choices"
          ]},
          { h: "Questions to answer", items: [
            "What makes a route 'dynamic' rather than static?",
            "When is ISR better than SSR?"
          ]},
          { h: "Where to learn", isResources: true, items: [
            "Next.js - Rendering (https://nextjs.org/docs/app/building-your-application/rendering)"
          ]}
        ]
      },
      {
        title: "Middleware & route handlers",
        hint: "Edge logic and APIs",
        sub: "Two escape hatches with different purposes.",
        sections: [
          { h: "Internalize", items: [
            "Middleware runs before a request is matched — auth gates, redirects, A/B routing",
            "Route handlers (route.ts) are API endpoints inside the app router",
            "Both run in edge or node runtime depending on config"
          ]},
          { h: "Questions to answer", items: [
            "When is a route handler the right answer instead of a server action?",
            "What can middleware do that a layout can't?"
          ]},
          { h: "Where to learn", isResources: true, items: [
            "Next.js - Middleware (https://nextjs.org/docs/app/building-your-application/routing/middleware)",
            "Next.js - Route Handlers (https://nextjs.org/docs/app/building-your-application/routing/route-handlers)"
          ]}
        ]
      },
      {
        title: "Metadata, images, fonts",
        hint: "The built-in optimizations",
        sub: "Things Next.js does for you that you used to have to wire up yourself.",
        sections: [
          { h: "Internalize", items: [
            "generateMetadata for per-route SEO tags",
            "next/image for responsive, lazy, optimized images",
            "next/font for self-hosted, layout-shift-free fonts"
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
    desc: "The supporting tech you'll touch almost every day — styling, client-side data, accessibility, testing, tooling.",
    topics: [
      {
        title: "Tailwind CSS",
        hint: "Utility-first styling",
        sub: "Painful for ten minutes, then fast forever.",
        sections: [
          { h: "Internalize", items: [
            "Classes correspond directly to CSS properties",
            "Configuration is the source of truth for tokens (colors, spacing, fonts)",
            "Composition via clsx / tailwind-merge for conditional classes",
            "Most pushback against Tailwind dissolves with a week of real use"
          ]},
          { h: "Where to learn", isResources: true, items: [
            "tailwindcss.com docs (https://tailwindcss.com/docs)",
            "Refactoring UI (book by Tailwind's author) (https://www.refactoringui.com/)"
          ]}
        ]
      },
      {
        title: "Client-side data fetching",
        hint: "SWR / TanStack Query",
        sub: "When server components can't, these libraries fill the gap on the client.",
        sections: [
          { h: "Internalize", items: [
            "Both libraries maintain a keyed cache of requests",
            "Automatic revalidation on focus, reconnect, interval",
            "Mutations + cache invalidation patterns",
            "Beats writing useEffect + fetch for anything non-trivial"
          ]},
          { h: "Where to learn", isResources: true, items: [
            "SWR docs (https://swr.vercel.app/)",
            "TanStack Query docs (https://tanstack.com/query/latest/docs/framework/react/overview)",
            "TkDodo - Practical React Query series (https://tkdodo.eu/blog/practical-react-query)"
          ]}
        ]
      },
      {
        title: "Accessibility basics",
        hint: "Semantic HTML first",
        sub: "Not a checklist — a baseline.",
        sections: [
          { h: "Internalize", items: [
            "Semantic HTML wins most a11y battles for free",
            "ARIA fills gaps when semantics aren't enough — not a substitute",
            "Keyboard navigation, focus management, color contrast",
            "Headless primitive libraries (Radix UI) give you a11y behavior out of the box"
          ]},
          { h: "Where to learn", isResources: true, items: [
            "web.dev - Learn Accessibility (https://web.dev/learn/accessibility)",
            "Radix UI primitives (https://www.radix-ui.com/)"
          ]}
        ]
      },
      {
        title: "Testing essentials",
        hint: "Behavior, not implementation",
        sub: "Tests that survive refactors are tests worth having.",
        sections: [
          { h: "Internalize", items: [
            "Jest or Vitest as the test runner",
            "React Testing Library: query as a user would (by role, label, text)",
            "Mock at the network boundary (MSW), not internal modules",
            "Playwright/Cypress for E2E on critical paths only"
          ]},
          { h: "Questions to answer", items: [
            "What is 'implementation detail testing' and why is it harmful?"
          ]},
          { h: "Where to learn", isResources: true, items: [
            "Testing Library docs (https://testing-library.com/docs/)",
            "Kent C. Dodds - The Testing Trophy (https://kentcdodds.com/blog/the-testing-trophy-and-testing-classifications)"
          ]}
        ]
      },
      {
        title: "Build tooling awareness",
        hint: "You don't configure it, but you should understand it",
        sub: "Enough to debug, not enough to obsess.",
        sections: [
          { h: "Internalize", items: [
            "Bundlers: Vite, Webpack, Turbopack, esbuild — they all produce browser-ready JS",
            "Package managers: npm, pnpm, yarn — pnpm is the modern default in monorepos",
            "ESLint enforces rules; Prettier formats; both should run on save",
            "TypeScript's compiler runs separately from the bundler in most setups"
          ]},
          { h: "Where to learn", isResources: true, items: [
            "Vite guide (https://vitejs.dev/guide/)",
            "Why pnpm (https://pnpm.io/motivation)"
          ]}
        ]
      }
    ]
  }
];

