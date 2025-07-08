
const FrontendChallengePlan = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg shadow-lg max-w-4xl mx-auto my-8">
      <p className="text-[30px] font-bold text-center mb-4 text-white">90-Day Frontend Mastery Challenge</p>
      <p className="text-[15px] leading-6 mb-4 text-white">
        <span className="font-bold">Key Technologies: </span>
        HTML, CSS, JavaScript (ES6+), React (dominant framework),
        Redux (state management), UI Libraries, Version Control
        (Git/GitHub), Deployment.
      </p>
      <p className="text-[15px] leading-10 mb-2 text-white">
        <span className="font-bold">Core Philosophy: </span>
        Learn by building. Start simple, then add complexity, ensuring each project solidifies your understanding of core concepts.
      </p>

      <p className="text-[15px] leading-10 mt-6 mb-2 text-white">
        <span className="font-bold">Phase 1: </span>
        Foundations & Core Technologies (Days 1-30)
      </p>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 1:</span>
        HTML, CSS Fundamentals & Git
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">HTML5: </span>Semantic HTML, forms, accessibility basics. Build static web pages.</li>
        <li><span className="font-bold">CSS3: </span>Selectors, Box Model, Flexbox, Grid (crucial for layout). Basic animations and transitions.</li>
        <li><span className="font-bold">Responsive Design: </span>Media queries, mobile-first approach.</li>
        <li><span className="font-bold">Version Control (Git & GitHub): </span>Master basic commands (`init`, `add`, `commit`, `push`, `pull`, `branch`, `merge`). Create a GitHub repository for all projects.</li>
        <li><span className="font-bold">Project: </span>Build a fully responsive, multi-page static website (e.g., a personal portfolio, a small business landing page) using only HTML and CSS.</li>
      </ul>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 2:</span>
        JavaScript Fundamentals (ES6+)
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">JavaScript Basics: </span>Variables, data types, operators, control flow (if/else, loops).</li>
        <li><span className="font-bold">DOM Manipulation: </span>Selecting elements, changing content, styles, event handling.</li>
        <li><span className="font-bold">ES6+ Features: </span>`let`, `const`, arrow functions, template literals, destructuring, spread/rest operators, modules.</li>
        <li><span className="font-bold">Asynchronous JavaScript: </span>Callbacks, Promises, `async/await` (essential for fetching data).</li>
        <li><span className="font-bold">Project: </span>Enhance your static website with dynamic features using vanilla JavaScript (e.g., a responsive navigation menu, image carousel, form validation, a simple to-do list application that persists in local storage).</li>
      </ul>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 3:</span>
        Advanced CSS & Build Tools
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">Advanced CSS: </span>Custom properties (CSS variables), `calc()`, `clip-path`, advanced animations.</li>
        <li><span className="font-bold">CSS Methodologies: </span>Introduction to BEM or utility-first CSS (like Tailwind CSS concepts).</li>
        <li><span className="font-bold">CSS Preprocessors (Optional but Recommended): </span>Sass/SCSS for more organized CSS.</li>
        <li><span className="font-bold">Basic Build Tools: </span>Understand what a module bundler is (Webpack/Vite concepts). Learn to use npm/yarn for package management.</li>
        <li><span className="font-bold">Project: </span>Refactor your previous project using Sass (if you learned it) and incorporate more advanced CSS techniques. Experiment with a CSS framework like Bootstrap or Tailwind CSS to understand component-based styling.</li>
      </ul>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 4:</span>
        Introduction to React
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">React Fundamentals: </span>Components (functional), JSX, Props, State, Event Handling in React.</li>
        <li><span className="font-bold">React Developer Tools: </span>Learn to use them for debugging.</li>
        <li><span className="font-bold">Conditional Rendering, Lists & Keys: </span>How to render dynamic content.</li>
        <li><span className="font-bold">Forms in React: </span>Controlled components.</li>
        <li><span className="font-bold">Project: </span>Rebuild one of your previous vanilla JS projects (e.g., the to-do list or a simple calculator) using React components. Focus on component structure and state management within a single component.</li>
      </ul>

      <p className="text-[15px] leading-10 mt-6 mb-2 text-white">
        <span className="font-bold">Phase 2: </span>
        Framework Mastery & State Management (Days 31-60)
      </p>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 5:</span>
        React Hooks & Routing
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">React Hooks: </span>`useState`, `useEffect`, `useContext`, `useRef`, `useMemo`, `useCallback`. Understand their purpose and common use cases.</li>
        <li><span className="font-bold">React Router: </span>Client-side routing, nested routes, protected routes.</li>
        <li><span className="font-bold">Context API: </span>Global state management for simpler applications.</li>
        <li><span className="font-bold">Project: </span>Build a multi-page React application (e.g., a simple blog or an e-commerce product catalog). Implement routing and use various hooks to manage component state and side effects.</li>
      </ul>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 6:</span>
        State Management with Redux
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">Redux Fundamentals: </span>Store, Actions, Reducers, Dispatch. Understand the Redux flow.</li>
        <li><span className="font-bold">React-Redux: </span>Connecting React components to the Redux store.</li>
        <li><span className="font-bold">Redux Thunk/Saga (for async actions): </span>Handling API calls with Redux.</li>
        <li><span className="font-bold">Project: </span>Integrate Redux into your React application to manage complex global state (e.g., user authentication status, shopping cart items, filtered product lists). Make sure your app fetches data from a public API (e.g., JSONPlaceholder, dummy product API).</li>
      </ul>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 7:</span>
        UI Libraries, Forms & Testing
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">UI Component Libraries: </span>Learn to use a popular one like <span className="font-bold">Material-UI, Ant Design, or Chakra UI</span>. Focus on integrating components and customizing themes.</li>
        <li><span className="font-bold">Advanced Forms: </span>Formik, React Hook Form for robust form validation and submission.</li>
        <li><span className="font-bold">Unit Testing (Introduction): </span>Learn <span className="font-bold">Jest</span> and <span className="font-bold">React Testing Library</span>. Write basic tests for components and Redux reducers/actions.</li>
        <li><span className="font-bold">Project: </span>Rebuild a section of your app using a UI component library. Implement a complex form with validation. Write unit tests for some key components and logic.</li>
      </ul>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 8:</span>
        Performance, Optimization & Accessibility
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">Web Performance: </span>Code splitting, lazy loading, image optimization, memoization.</li>
        <li><span className="font-bold">Browser Developer Tools: </span>Master debugging, performance analysis, network tab.</li>
        <li><span className="font-bold">Accessibility (A11y): </span>ARIA attributes, semantic HTML for screen readers, keyboard navigation.</li>
        <li><span className="font-bold">Progressive Web Apps (PWAs - Introduction): </span>Service Workers, manifest file.</li>
        <li><span className="font-bold">Project: </span>Optimize your main React application for performance. Implement lazy loading for routes/components. Conduct a basic accessibility audit and fix common issues. If time permits, add basic PWA capabilities.</li>
      </ul>

      <p className="text-[15px] leading-10 mt-6 mb-2 text-white">
        <span className="font-bold">Phase 3: </span>
        Project Building & Job Readiness (Days 61-90)
      </p>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 9:</span>
        Full-Scale React Project (Frontend Focus)
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">Conceptualize: </span>Choose a substantial frontend-only project idea that showcases all your learned skills. (e.g., a rich dashboard, a complex data visualization tool, a social media clone with static data).</li>
        <li><span className="font-bold">Design & Plan: </span>Wireframe, create component hierarchy, plan state management.</li>
        <li><span className="font-bold">Build: </span>Start coding the core features, focusing on clean code, modularity, and maintainability.</li>
        <li><span className="font-bold">Project: </span>Dedicate this week to building the foundation of your large-scale frontend project. This will be your primary portfolio piece.</li>
      </ul>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 10:</span>
        Portfolio & Hackathon Prep
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">Continue Flagship Project: </span>Bring your main project to a near-complete state.</li>
        <li><span className="font-bold">Build Your Portfolio Website: </span>Create a dedicated portfolio site (using React, obviously!) to showcase your projects. Include descriptions, screenshots, live demos, and GitHub links.</li>
        <li><span className="font-bold">Hackathon Preparation: </span>Look for upcoming online hackathons. Brainstorm ideas that you can build solo within 24-48 hours, leveraging your frontend skills. Create a basic React boilerplate.</li>
        <li><span className="font-bold">LeetCoding/Coding Challenges: </span>Continue daily practice (1-2 medium problems) on platforms like LeetCode or HackerRank, focusing on JavaScript-specific challenges or general DSA relevant to frontend logic.</li>
      </ul>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 11:</span>
        Solo Hackathon & Resume/LinkedIn
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">1 Hackathon (Solo - Participate): </span>Dedicate a weekend to an intense solo hackathon. Focus on building a functional MVP that demonstrates your ability to build quickly under pressure.</li>
        <li><span className="font-bold">Refine Portfolio: </span>Add your hackathon project to your portfolio.</li>
        <li><span className="font-bold">Resume/CV: </span>Craft a compelling resume highlighting your frontend skills, projects, and achievements. Quantify where possible.</li>
        <li><span className="font-bold">LinkedIn Profile: </span>Optimize your LinkedIn profile, showcase your projects, and start connecting with recruiters and other developers.</li>
        <li><span className="font-bold">Job Search Strategy: </span>Research frontend roles, understand common interview questions (technical and behavioral).</li>
      </ul>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 12:</span>
        Final Polish & Job Applications
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">Final Portfolio Polish: </span>Ensure all projects are deployed (Netlify, Vercel for React apps), look professional, and are bug-free. Get feedback from peers.</li>
        <li><span className="font-bold">Interview Practice: </span>Practice explaining your projects, your thought process, and answering common technical questions.</li>
        <li><span className="font-bold">Apply for Jobs: </span>Actively apply for junior/entry-level Frontend Developer roles. Tailor your resume and cover letter for each application.</li>
        <li><span className="font-bold">Continuous Learning: </span>Identify areas for ongoing learning (e.g., TypeScript, Next.js/Gatsby, WebAssembly, advanced animations).</li>
      </ul>
    </div>
  );
};

export default FrontendChallengePlan;
