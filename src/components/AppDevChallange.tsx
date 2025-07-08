const AppDevChallengePlan = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg shadow-lg max-w-4xl mx-auto my-8">
      <p className="text-[30px] font-bold text-center mb-4 text-white">90-Day Mobile App Development Mastery Challenge (React Native)</p>
      <p className="text-[15px] leading-6 mb-4 text-white">
        <span className="font-bold">Key Technologies: </span>
        React Native, Expo CLI, JavaScript/TypeScript, Redux/Zustand, React Navigation,
        API Integration, UI/UX for Mobile, Git/GitHub, Firebase (for backend services).
      </p>
      <p className="text-[15px] leading-10 mb-2 text-white">
        <span className="font-bold">Core Philosophy: </span>
        Build cross-platform mobile apps with a focus on user experience, performance, and practical features.
      </p>

      <p className="text-[15px] leading-10 mt-6 mb-2 text-white">
        <span className="font-bold">Phase 1: </span>
        React Native Fundamentals & UI (Days 1-30)
      </p>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 1:</span>
        React Native & Expo Setup
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">React Native Basics: </span>Understand components, JSX, Props, State.</li>
        <li><span className="font-bold">Expo CLI: </span>Set up your development environment, create your first app.</li>
        <li><span className="font-bold">Core Components: </span>`View`, `Text`, `Image`, `Button`.</li>
        <li><span className="font-bold">Git & GitHub: </span>Initialize repositories for all app projects.</li>
        <li><span className="font-bold">Project: </span>Create a "Hello World" app. Build a simple static screen (e.g., a basic profile card or a welcome screen) using core components.</li>
      </ul>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 2:</span>
        Styling, Layout & User Input
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">Styling: </span>`StyleSheet`, inline styles, common styling patterns.</li>
        <li><span className="font-bold">Layout: </span>Master Flexbox for responsive layouts.</li>
        <li><span className="font-bold">User Input: </span>`TextInput`, `TouchableOpacitry`, `Switch`, `Slider`.</li>
        <li><span className="font-bold">Platform Specificity: </span>Basic `Platform` API usage.</li>
        <li><span className="font-bold">Project: </span>Build a simple form (e.g., a login/signup screen, a contact form) with proper styling and layout. Implement basic input handling.</li>
      </ul>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 3:</span>
        Navigation & Data Display
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">React Navigation: </span>Implement Stack Navigator for screen transitions.</li>
        <li><span className="font-bold">Lists: </span>Efficiently display large lists of data using `FlatList` and `ScrollView`.</li>
        <li><span className="font-bold">API Integration (Basic): </span>Use `fetch` or `axios` to get data from a public REST API.</li>
        <li><span className="font-bold">Project: </span>Create a multi-screen app (e.g., a simple recipe list, a movie list) that fetches data from a public API and displays it in a scrollable list, with navigation to detail screens.</li>
      </ul>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 4:</span>
        State Management & Firebase Authentication
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">State Management: </span>Understand the need for global state. Introduce <span className="font-bold">Redux</span> or <span className="font-bold">Zustand</span> for managing complex application state.</li>
        <li><span className="font-bold">Firebase Authentication: </span>Set up a Firebase project. Implement user registration, login, and logout.</li>
        <li><span className="font-bold">Context API: </span>Understand how to use React's Context API for simpler global state.</li>
        <li><span className="font-bold">Project: </span>Integrate Redux/Zustand into your app. Implement Firebase authentication to protect routes and manage user sessions.</li>
      </ul>

      <p className="text-[15px] leading-10 mt-6 mb-2 text-white">
        <span className="font-bold">Phase 2: </span>
        Advanced Features & UI/UX (Days 31-60)
      </p>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 5:</span>
        Advanced Navigation & UI Libraries
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">React Navigation: </span>Implement Tab Navigator and Drawer Navigator for complex app structures.</li>
        <li><span className="font-bold">UI Component Libraries: </span>Explore and use libraries like <span className="font-bold">React Native Paper, NativeBase, or UI Kitten</span> for consistent and beautiful UI.</li>
        <li><span className="font-bold">Custom Components: </span>Build reusable custom UI components.</li>
        <li><span className="font-bold">Project: </span>Refactor your app to use a more complex navigation structure (e.g., tabs for main sections, drawer for settings). Integrate a UI component library for improved aesthetics.</li>
      </ul>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 6:</span>
        Firebase Firestore & Realtime Data
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">Firebase Firestore: </span>Learn to store, retrieve, update, and delete data in a NoSQL cloud database.</li>
        <li><span className="font-bold">Realtime Updates: </span>Implement listeners for live data updates.</li>
        <li><span className="font-bold">Data Modeling: </span>Design efficient data structures for Firestore.</li>
        <li><span className="font-bold">Project: </span>Build a simple chat application or a collaborative to-do list using Firebase Firestore for real-time data synchronization.</li>
      </ul>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 7:</span>
        Device Features & Permissions
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">Camera & Image Picker: </span>Accessing device camera and photo library.</li>
        <li><span className="font-bold">Geolocation: </span>Getting user's location.</li>
        <li><span className="font-bold">Permissions API: </span>Handling user permissions for device features.</li>
        <li><span className="font-bold">Push Notifications: </span>Implement basic push notifications using Expo Notifications or Firebase Cloud Messaging.</li>
        <li><span className="font-bold">Project: </span>Create an app that allows users to take/upload a profile picture and display their current location on a map (if you integrate a map library).</li>
      </ul>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 8:</span>
        Performance Optimization & Testing
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">Performance: </span>Optimize `FlatList` performance, image caching, avoiding unnecessary re-renders.</li>
        <li><span className="font-bold">Debugging: </span>Master React Native Debugger, Chrome DevTools.</li>
        <li><span className="font-bold">Unit Testing (Introduction): </span>Learn <span className="font-bold">Jest</span> and <span className="font-bold">React Native Testing Library</span>. Write basic tests for components and Redux logic.</li>
        <li><span className="font-bold">Project: </span>Optimize one of your existing apps for smoother performance. Write unit tests for a few key components or utility functions.</li>
      </ul>

      <p className="text-[15px] leading-10 mt-6 mb-2 text-white">
        <span className="font-bold">Phase 3: </span>
        Flagship Project & Job Readiness (Days 61-90)
      </p>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 9:</span>
        Flagship Mobile App Development - Planning & Core Features
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">Conceptualize: </span>Choose a substantial mobile app idea that showcases your comprehensive skills (e.g., a fitness tracker, a simple e-commerce app, a note-taking app with sync, a personal budget tracker).</li>
        <li><span className="font-bold">Design & Plan: </span>Wireframe, create user flows, plan data models (Firestore/API), and component architecture.</li>
        <li><span className="font-bold">Build Core Features: </span>Focus on implementing the central functionality and user experience.</li>
        <li><span className="font-bold">Project: </span>Start building your flagship mobile app. Get the main screens, navigation, and primary data interactions working.</li>
      </ul>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 10:</span>
        Flagship App - Feature Expansion & Polish
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">Feature Integration: </span>Add secondary features, refine existing ones, and ensure smooth user interactions.</li>
        <li><span className="font-bold">UI/UX Refinement: </span>Pay attention to animations, transitions, and overall visual appeal.</li>
        <li><span className="font-bold">Bug Fixing & Edge Cases: </span>Thoroughly test your app for various scenarios.</li>
        <li><span className="font-bold">Project: </span>Continue developing your flagship app, bringing it to a highly polished and functional state.</li>
      </ul>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 11:</span>
        Portfolio Integration & Hackathon Prep
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">Portfolio Website: </span>Create or update your portfolio site. Dedicate a prominent section to your mobile apps.</li>
        <li><span className="font-bold">Project Showcases: </span>For each app, include screenshots, a demo video (if possible), a clear description of its features and your role, and a link to the GitHub repository.</li>
        <li><span className="font-bold">Hackathon Prep (Optional): </span>If you plan a mobile app-focused hackathon, prepare a basic React Native boilerplate.</li>
      </ul>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 12:</span>
        Deployment (Conceptual), Job Readiness & Continuous Learning
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">Deployment Concepts: </span>Understand the process of building and submitting apps to Google Play Store and Apple App Store (Expo simplifies this).</li>
        <li><span className="font-bold">Resume/CV & LinkedIn: </span>Highlight your mobile development skills, React Native expertise, and app projects.</li>
        <li><span className="font-bold">Interview Practice: </span>Be ready to discuss your app architecture, UI/UX decisions, and technical challenges.</li>
        <li><span className="font-bold">Continuous Learning: </span>Explore native module development, more advanced animations, or specific platform APIs (e.g., HealthKit).</li>
      </ul>
    </div>
  );
};

export default AppDevChallengePlan;