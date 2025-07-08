const BackendChallengePlan = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg shadow-lg max-w-4xl mx-auto my-8">
      <p className="text-[30px] font-bold text-center mb-4 text-white">90-Day Backend Mastery Challenge</p>
      <p className="text-[15px] leading-6 mb-4 text-white">
        <span className="font-bold">Key Technologies: </span>
        Node.js (with Express/NestJS) or Python (with Flask/Django), SQL/NoSQL Databases,
        API Design (REST, GraphQL), Authentication/Authorization, Testing, Deployment,
        Data Structures & Algorithms.
      </p>
      <p className="text-[15px] leading-10 mb-2 text-white">
        <span className="font-bold">Core Philosophy: </span>
        Build functional APIs. Start with simple CRUD, then add authentication, complex logic, and scaling considerations.
      </p>

      <p className="text-[15px] leading-10 mt-6 mb-2 text-white">
        <span className="font-bold">Phase 1: </span>
        Foundations & Core Technologies (Days 1-30)
      </p>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 1:</span>
        Programming Language & DSA Fundamentals
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">Choose Language & Framework: </span><span className="font-bold">Node.js (Express.js)</span> or <span className="font-bold">Python (Flask/Django)</span>. Pick one and commit.</li>
        <li><span className="font-bold">Language Fundamentals: </span>Syntax, data types, control flow, functions, modules.</li>
        <li><span className="font-bold">HTTP & Web Basics: </span>How the internet works, client-server model, HTTP methods, status codes.</li>
        <li><span className="font-bold">Data Structures & Algorithms (Introduction): </span>Arrays, Linked Lists, Stacks, Queues. Understand Big O notation.</li>
        <li><span className="font-bold">Git & GitHub: </span>Master basic commands. All code should be version-controlled.</li>
        <li><span className="font-bold">Project: </span>Build a simple command-line application using your chosen language. Implement basic DSA concepts (e.g., a simple stack-based calculator, a linked list to manage a playlist).</li>
      </ul>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 2:</span>
        Relational Databases (SQL) & ORMs
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">Database Management (SQL): </span>Introduction to <span className="font-bold">PostgreSQL or MySQL</span>.</li>
        <li><span className="font-bold">SQL Fundamentals: </span>`CREATE TABLE`, `INSERT`, `SELECT`, `UPDATE`, `DELETE`, `JOINs`, basic data types, primary/foreign keys.</li>
        <li><span className="font-bold">ORM (Object-Relational Mapper): </span>Learn to use an ORM for your chosen language (e.g., <span className="font-bold">Sequelize/Prisma for Node.js, SQLAlchemy/Django ORM for Python</span>).</li>
        <li><span className="font-bold">Project: </span>Build a basic REST API (e.g., for a "books" or "users" resource) using your chosen backend framework. Store data in a SQL database, interacting via an ORM. Implement basic CRUD operations.</li>
      </ul>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 3:</span>
        NoSQL Databases & Advanced Data Handling
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">NoSQL Databases: </span>Introduction to <span className="font-bold">MongoDB (document-based)</span>. Understand when to use NoSQL vs. SQL.</li>
        <li><span className="font-bold">MongoDB Basics: </span>Collections, documents, basic queries.</li>
        <li><span className="font-bold">Data Validation: </span>Input validation on the backend.</li>
        <li><span className="font-bold">Error Handling & Logging: </span>Implement robust error handling and logging mechanisms.</li>
        <li><span className="font-bold">Project: </span>Refactor your existing API to use MongoDB for some data (e.g., user profiles or ephemeral data), or create a new API endpoint that uses MongoDB. Ensure robust error handling and input validation.</li>
      </ul>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 4:</span>
        Authentication & Authorization
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">Authentication: </span>User registration, login.</li>
        <li><span className="font-bold">Authorization: </span>Role-based access control (RBAC).</li>
        <li><span className="font-bold">Techniques: </span><span className="font-bold">JWT (JSON Web Tokens)</span>, session-based authentication.</li>
        <li><span className="font-bold">Password Hashing: </span>Best practices for storing passwords (e.g., bcrypt).</li>
        <li><span className="font-bold">API Security Basics: </span>OWASP Top 10 introduction (e.g., SQL Injection, XSS prevention concepts).</li>
        <li><span className="font-bold">Project: </span>Add user authentication (registration, login, JWT issuance) and authorization to your existing API. Implement protected routes based on user roles.</li>
      </ul>

      <p className="text-[15px] leading-10 mt-6 mb-2 text-white">
        <span className="font-bold">Phase 2: </span>
        System Design & Scaling Concepts (Days 31-60)
      </p>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 5:</span>
        Advanced API Design & Testing
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">RESTful API Design Principles: </span>Best practices, versioning.</li>
        <li><span className="font-bold">GraphQL (Introduction): </span>Understand its advantages and disadvantages compared to REST. Implement a basic GraphQL endpoint if time permits.</li>
        <li><span className="font-bold">API Testing: </span>Use tools like <span className="font-bold">Postman/Insomnia</span> for manual testing.</li>
        <li><span className="font-bold">Unit & Integration Testing: </span>Learn a testing framework (e.g., <span className="font-bold">Jest for Node.js, Pytest for Python</span>). Write tests for your API endpoints and core logic.</li>
        <li><span className="font-bold">Project: </span>Refine your API design. Add more complex routes. Write comprehensive unit and integration tests for your API. Explore a basic GraphQL schema if interested.</li>
      </ul>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 6:</span>
        Caching & Performance Optimization
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">Caching Strategies: </span>In-memory caching, distributed caching (e.g., <span className="font-bold">Redis</span> concepts).</li>
        <li><span className="font-bold">Database Optimization: </span>Indexing, query optimization.</li>
        <li><span className="font-bold">Load Balancing (Concepts): </span>Understand how it helps with scalability.</li>
        <li><span className="font-bold">Monitoring & Logging: </span>Tools and best practices for observing your backend (e.g., Prometheus/Grafana concepts, ELK stack concepts).</li>
        <li><span className="font-bold">Project: </span>Integrate caching into your API for frequently accessed data. Optimize database queries for performance. Measure and improve API response times.</li>
      </ul>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 7:</span>
        Microservices (Introduction) & Message Queues
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">Monolithic vs. Microservices: </span>Understand the pros and cons.</li>
        <li><span className="font-bold">Designing Microservices: </span>Bounded contexts, communication patterns.</li>
        <li><span className="font-bold">Message Queues (Introduction): </span>Learn about <span className="font-bold">RabbitMQ/Kafka</span> concepts. When and why to use them.</li>
        <li><span className="font-bold">Project: </span>Take a small, independent part of your existing API and separate it into a "mock" microservice. Implement basic communication between them (e.g., direct HTTP calls for now, not a full message queue). This is more conceptual than full implementation in 90 days.</li>
      </ul>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 8:</span>
        Deployment & DevOps Fundamentals
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">Containerization (Docker): </span>Introduction to Docker, Dockerfiles, building images, running containers.</li>
        <li><span className="font-bold">Cloud Platforms (Basics): </span>Familiarize yourself with basic concepts of <span className="font-bold">AWS, Azure, or Google Cloud Platform</span> (e.g., EC2, Lambda, RDS, App Service).</li>
        <li><span className="font-bold">CI/CD (Continuous Integration/Continuous Deployment - Concepts): </span>Understand the pipeline.</li>
        <li><span className="font-bold">Project: </span>Dockerize your backend application. Deploy your API to a free tier or trial cloud service (e.g., Render, Heroku, or a small EC2 instance). Automate a simple deployment script.</li>
      </ul>

      <p className="text-[15px] leading-10 mt-6 mb-2 text-white">
        <span className="font-bold">Phase 3: </span>
        Project Building & Job Readiness (Days 61-90)
      </p>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 9:</span>
        Flagship Backend Project
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">Conceptualize: </span>Design a substantial backend project that showcases advanced concepts (e.g., a real-time chat application, an e-commerce backend with payment integration, a project management system).</li>
        <li><span className="font-bold">Architect: </span>Plan your database schema, API endpoints, authentication flow, and potential microservice boundaries.</li>
        <li><span className="font-bold">Build: </span>Start coding the core features, focusing on robust design, security, and testability. This will be your primary portfolio piece.</li>
        <li><span className="font-bold">LeetCoding/Coding Challenges: </span>Continue daily practice (1-2 medium/hard problems) on platforms like LeetCode or HackerRank, focusing on DSA relevant to backend performance and logic.</li>
      </ul>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 10:</span>
        Portfolio & Hackathon Prep
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">Continue Flagship Project: </span>Bring your main backend project to a near-complete state. Implement more complex features.</li>
        <li><span className="font-bold">Build Your Portfolio (Basic Frontend): </span>Create a simple static HTML/CSS/JS page or use a simple template to showcase your backend projects. Focus on clear descriptions, API documentation (e.g., Postman collection), and links to GitHub repositories/deployed services.</li>
        <li><span className="font-bold">Hackathon Preparation: </span>Research upcoming online hackathons. Brainstorm backend-centric ideas you can implement in 24-48 hours. Have a basic backend boilerplate ready.</li>
      </ul>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 11:</span>
        Solo Hackathon & Resume/LinkedIn
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">1 Hackathon (Solo - Participate): </span>Dedicate a weekend to an intense solo hackathon. Focus on building a functional MVP that demonstrates your backend prowess.</li>
        <li><span className="font-bold">Refine Portfolio: </span>Add your hackathon project to your portfolio.</li>
        <li><span className="font-bold">Resume/CV: </span>Craft a compelling resume highlighting your backend skills, projects, and achievements. Emphasize API design, database management, and scalability.</li>
        <li><span className="font-bold">LinkedIn Profile: </span>Optimize your LinkedIn profile, showcase your projects, and connect with recruiters and other backend developers.</li>
        <li><span className="font-bold">Job Search Strategy: </span>Research backend roles, understand common interview questions (technical and behavioral).</li>
      </ul>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 12:</span>
        Final Polish & Job Applications
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">Final Portfolio Polish: </span>Ensure all projects are deployed (if applicable), well-documented (API docs are key for backend!), and professional. Get feedback.</li>
        <li><span className="font-bold">Interview Practice: </span>Practice explaining your project architecture, your technical decisions, and answering common backend-specific questions (e.g., "How would you scale this application?").</li>
        <li><span className="font-bold">Apply for Jobs: </span>Actively apply for junior/entry-level Backend Developer, API Developer, or Software Engineer roles. Tailor your resume and cover letter for each application.</li>
        <li><span className="font-bold">Continuous Learning: </span>Identify areas for ongoing learning (e.g., specific cloud provider certifications, advanced database tuning, message queues in production, GraphQL deep dive, Go/Rust for performance).</li>
      </ul>
    </div>
  );
};

export default BackendChallengePlan;
