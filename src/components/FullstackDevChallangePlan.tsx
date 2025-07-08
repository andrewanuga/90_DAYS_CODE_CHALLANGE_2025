const FullstackDevChallengePlan = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg shadow-lg max-w-4xl mx-auto my-8">
      <p className="text-[30px] font-bold text-center mb-4 text-white">90-Day Fullstack Development Mastery Challenge</p>
      <p className="text-[15px] leading-6 mb-4 text-white">
        <span className="font-bold">Key Technologies: </span>
        (Frontend: HTML, CSS, JavaScript, React/Vue/Angular, State Management),
        (Backend: Node.js/Express or Python/Django, REST APIs),
        (Database: MongoDB/PostgreSQL), Git/GitHub, Deployment.
      </p>
      <p className="text-[15px] leading-10 mb-2 text-white">
        <span className="font-bold">Core Philosophy: </span>
        Build complete, end-to-end applications, understanding how frontend and backend communicate and integrate seamlessly.
      </p>

      <p className="text-[15px] leading-10 mt-6 mb-2 text-white">
        <span className="font-bold">Phase 1: </span>
        Foundations & Core Technologies (Days 1-30)
      </p>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 1:</span>
        Frontend Basics (HTML, CSS, JavaScript)
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">HTML5 & CSS3: </span>Semantic HTML, Flexbox, Grid, Responsive Design.</li>
        <li><span className="font-bold">JavaScript (ES6+): </span>DOM manipulation, asynchronous JS (Promises, async/await).</li>
        <li><span className="font-bold">Git & GitHub: </span>Master basic commands for version control.</li>
        <li><span className="font-bold">Project: </span>Build a fully responsive, interactive static website (e.g., a personal landing page with a contact form).</li>
      </ul>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 2:</span>
        Backend Basics & REST APIs
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">Backend Language/Framework: </span>Choose <span className="font-bold">Node.js with Express</span> or <span className="font-bold">Python with Flask/Django</span>.</li>
        <li><span className="font-bold">HTTP & RESTful APIs: </span>Understand HTTP methods, status codes, and principles of RESTful API design.</li>
        <li><span className="font-bold">Basic Server Setup: </span>Routing, handling requests and responses.</li>
        <li><span className="font-bold">Project: </span>Build a simple REST API (e.g., for a "tasks" or "products" resource) with basic CRUD operations using in-memory data (no database yet).</li>
      </ul>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 3:</span>
        Database Integration (SQL/NoSQL)
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">Database Choice: </span>Learn either <span className="font-bold">PostgreSQL/MySQL (SQL)</span> or <span className="font-bold">MongoDB (NoSQL)</span>. Understand basic schema design/document structure.</li>
        <li><span className="font-bold">ORM/ODM: </span>Use an Object-Relational Mapper (ORM) like Sequelize/Prisma (Node.js) or SQLAlchemy/Django ORM (Python) for SQL, or an ODM like Mongoose (Node.js) for MongoDB.</li>
        <li><span className="font-bold">Project: </span>Integrate your chosen database into your backend API. Migrate your CRUD operations to persist data in the database.</li>
      </ul>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 4:</span>
        Frontend Framework & API Consumption
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">Frontend Framework: </span>Introduce <span className="font-bold">React</span> (or Vue/Angular). Learn components, props, state, and basic lifecycle.</li>
        <li><span className="font-bold">API Consumption: </span>Use `fetch` or `axios` in your frontend to consume your backend API.</li>
        <li><span className="font-bold">Project: </span>Build a simple frontend application using your chosen framework that displays data from your backend API and allows for basic interactions (e.g., listing tasks/products).</li>
      </ul>

      <p className="text-[15px] leading-10 mt-6 mb-2 text-white">
        <span className="font-bold">Phase 2: </span>
        Intermediate Features & Integration (Days 31-60)
      </p>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 5:</span>
        Authentication & Authorization
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">Backend Auth: </span>Implement user registration, login, and logout using <span className="font-bold">JWT (JSON Web Tokens)</span>. Secure password hashing (bcrypt).</li>
        <li><span className="font-bold">Frontend Auth: </span>Integrate JWT into your frontend, manage tokens (local storage), and protect routes.</li>
        <li><span className="font-bold">Authorization: </span>Implement role-based access control (RBAC) on the backend.</li>
        <li><span className="font-bold">Project: </span>Add a complete user authentication and authorization system to your fullstack application.</li>
      </ul>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 6:</span>
        Advanced Frontend State Management & Routing
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">State Management: </span>Deep dive into <span className="font-bold">Redux (for React)</span>, Vuex (for Vue), or NgRx (for Angular). Understand actions, reducers, store, and middleware.</li>
        <li><span className="font-bold">Frontend Routing: </span>Implement client-side routing (e.g., React Router) for a multi-page experience.</li>
        <li><span className="font-bold">Project: </span>Refactor your frontend to use a dedicated state management library for complex data and user interactions. Implement comprehensive routing.</li>
      </ul>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 7:</span>
        Advanced API Features & Data Handling
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">File Uploads: </span>Handle single and multiple file uploads on the backend (e.g., Multer for Node.js, Django's FileField). Store files (local, cloud storage concepts).</li>
        <li><span className="font-bold">Search & Filtering: </span>Implement robust search, filtering, and pagination for your API.</li>
        <li><span className="font-bold">Error Handling: </span>Implement comprehensive error handling across frontend and backend.</li>
        <li><span className="font-bold">Project: </span>Add file upload functionality (e.g., user avatars, product images) and advanced search/filtering to your fullstack application.</li>
      </ul>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 8:</span>
        Testing & Deployment Basics
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">Backend Testing: </span>Write unit and integration tests for your API (e.g., Jest/Supertest for Node.js, Pytest/Django testing for Python).</li>
        <li><span className="font-bold">Frontend Testing: </span>Write basic unit tests for components (e.g., Jest/React Testing Library).</li>
        <li><span className="font-bold">Deployment Basics: </span>Deploy your frontend (Vercel/Netlify) and backend (Heroku/Render/small VPS). Understand environment variables.</li>
        <li><span className="font-bold">Project: </span>Add tests to both your frontend and backend. Successfully deploy your complete fullstack application to a live environment.</li>
      </ul>

      <p className="text-[15px] leading-10 mt-6 mb-2 text-white">
        <span className="font-bold">Phase 3: </span>
        Flagship Project & Job Readiness (Days 61-90)
      </p>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 9:</span>
        Flagship Fullstack Project - Planning & Core Implementation
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">Conceptualize: </span>Design a substantial fullstack project that integrates multiple complex features (e.g., a real-time chat app, a simple e-commerce store with a shopping cart, a blog with a rich text editor and comments, a project management tool).</li>
        <li><span className="font-bold">Architect: </span>Plan your database schema, API endpoints, frontend components, and state management.</li>
        <li><span className="font-bold">Build Core Features: </span>Focus on implementing the central functionality and ensuring smooth communication between frontend and backend.</li>
        <li><span className="font-bold">Project: </span>Start building your flagship fullstack application. Get the main user flows and data interactions working end-to-end.</li>
      </ul>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 10:</span>
        Flagship Project - Feature Expansion & Polish
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">Feature Integration: </span>Add secondary features, refine existing ones, and improve overall user experience.</li>
        <li><span className="font-bold">Performance Optimization: </span>Identify and address bottlenecks on both frontend and backend.</li>
        <li><span className="font-bold">Bug Fixing: </span>Thoroughly test and debug your entire application.</li>
        <li><span className="font-bold">Project: </span>Continue developing your flagship fullstack app, bringing it to a highly polished and functional state.</li>
      </ul>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 11:</span>
        Portfolio Integration & Hackathon Prep
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">Portfolio Website: </span>Create or update your portfolio site. Showcase your fullstack projects prominently.</li>
        <li><span className="font-bold">Project Showcases: </span>For each project, include live demos, screenshots, clear descriptions of its features, the tech stack used, and your contributions to both frontend and backend. Link to GitHub repositories.</li>
        <li><span className="font-bold">Hackathon Prep (Optional): </span>If you plan a fullstack hackathon, prepare a basic boilerplate for quick setup.</li>
      </ul>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 12:</span>
        Job Readiness & Continuous Learning
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">Resume/CV & LinkedIn: </span>Highlight your fullstack capabilities, specific technologies mastered, and project achievements.</li>
        <li><span className="font-bold">Interview Practice: </span>Be ready to discuss your fullstack architecture, API design, database choices, and problem-solving across the stack.</li>
        <li><span className="font-bold">Apply for Jobs: </span>Actively apply for junior/entry-level Fullstack Developer roles.</li>
        <li><span className="font-bold">Continuous Learning: </span>Explore advanced topics like microservices, serverless, GraphQL, CI/CD pipelines, or specific cloud provider services.</li>
      </ul>
    </div>
  );
};

export default FullstackDevChallengePlan;
