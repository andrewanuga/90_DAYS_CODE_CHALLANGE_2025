const GameDevChallengePlan = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg shadow-lg max-w-4xl mx-auto my-8">
      <p className="text-[30px] font-bold text-center mb-4 text-white">90-Day Game Development Mastery Challenge</p>
      <p className="text-[15px] leading-6 mb-4 text-white">
        <span className="font-bold">Key Technologies: </span>
        JavaScript, HTML5 Canvas, Phaser.js (or similar 2D framework), Game Logic,
        Asset Management, Basic Physics, Git/GitHub.
      </p>
      <p className="text-[15px] leading-10 mb-2 text-white">
        <span className="font-bold">Core Philosophy: </span>
        Build small, playable games iteratively. Focus on understanding game mechanics and development cycles.
      </p>

      <p className="text-[15px] leading-10 mt-6 mb-2 text-white">
        <span className="font-bold">Phase 1: </span>
        Foundations & Basic Game Mechanics (Days 1-30)
      </p>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 1:</span>
        JavaScript Refresher & HTML Canvas Basics
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">JavaScript: </span>Review ES6+ features, object-oriented concepts, and asynchronous programming.</li>
        <li><span className="font-bold">HTML5 Canvas: </span>Understand `canvas` element, drawing shapes, images, basic animations.</li>
        <li><span className="font-bold">Game Loop: </span>Concept of `update()` and `render()` functions.</li>
        <li><span className="font-bold">Git & GitHub: </span>Set up repositories for all game projects.</li>
        <li><span className="font-bold">Project: </span>Create a simple drawing application or a bouncing ball animation on an HTML Canvas.</li>
      </ul>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 2:</span>
        Phaser.js Introduction & Sprites
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">Phaser.js Setup: </span>Integrate Phaser into an HTML project.</li>
        <li><span className="font-bold">Scenes & Game Objects: </span>Understand Phaser scenes, sprites, text, and groups.</li>
        <li><span className="font-bold">Input Handling: </span>Keyboard input, mouse/touch input.</li>
        <li><span className="font-bold">Project: </span>Build a basic game where a sprite moves based on user input (e.g., a simple character moving around the screen).</li>
      </ul>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 3:</span>
        Physics & Collisions
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">Arcade Physics: </span>Enable physics for game objects, gravity, velocity.</li>
        <li><span className="font-bold">Collision Detection: </span>Handle overlaps and collisions between sprites and groups.</li>
        <li><span className="font-bold">Game States: </span>Basic state management (e.g., `playing`, `game over`).</li>
        <li><span className="font-bold">Project: </span>Create a simple "Pong" game or a basic platformer with gravity and collision detection against platforms.</li>
      </ul>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 4:</span>
        Asset Management & Tilemaps
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">Asset Loading: </span>Load images, spritesheets, and audio.</li>
        <li><span className="font-bold">Animations: </span>Create and play sprite animations.</li>
        <li><span className="font-bold">Tilemaps: </span>Use Tiled editor to create maps and integrate them into Phaser.</li>
        <li><span className="font-bold">Project: </span>Build a top-down maze game or a platformer with a more complex level designed using tilemaps.</li>
      </ul>

      <p className="text-[15px] leading-10 mt-6 mb-2 text-white">
        <span className="font-bold">Phase 2: </span>
        Intermediate Game Features & Design (Days 31-60)
      </p>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 5:</span>
        Game UI & Scoring Systems
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">UI Elements: </span>Display score, lives, timers using text and UI sprites.</li>
        <li><span className="font-bold">Game State Management: </span>Implement more robust game states (e.g., `MainMenu`, `Level1`, `GameOver`).</li>
        <li><span className="font-bold">Local Storage: </span>Save high scores locally.</li>
        <li><span className="font-bold">Project: </span>Enhance your platformer or maze game with a clear HUD, score tracking, and a high-score system.</li>
      </ul>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 6:</span>
        Sound, Music & Particles
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">Audio Integration: </span>Add background music and sound effects for game events (e.g., jumps, collisions, pickups).</li>
        <li><span className="font-bold">Particle Emitters: </span>Create visual effects like explosions, dust, or magic trails.</li>
        <li><span className="font-bold">Camera Control: </span>Follow player, camera shakes.</li>
        <li><span className="font-bold">Project: </span>Add dynamic audio and particle effects to your existing game to enhance immersion.</li>
      </ul>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 7:</span>
        Enemy AI & Object Management
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">Simple AI: </span>Implement basic enemy behaviors (e.g., patrolling, chasing, shooting in patterns).</li>
        <li><span className="font-bold">Object Pooling: </span>Efficiently manage frequently created/destroyed objects (e.g., bullets, enemies).</li>
        <li><span className="font-bold">Timers & Delays: </span>Schedule events within the game.</li>
        <li><span className="font-bold">Project: </span>Develop a simple "Space Invaders" clone or add multiple types of enemies with distinct behaviors to your platformer.</li>
      </ul>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 8:</span>
        Game Design Principles & UI/UX
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">Game Design: </span>Understand core loops, player motivation, level design principles.</li>
        <li><span className="font-bold">UI/UX for Games: </span>Designing intuitive menus, feedback mechanisms, onboarding.</li>
        <li><span className="font-bold">Input Customization: </span>Allow players to remap controls.</li>
        <li><span className="font-bold">Project: </span>Design and implement a proper main menu, pause menu, and game over/win screens for your most complex game. Ensure smooth transitions.</li>
      </ul>

      <p className="text-[15px] leading-10 mt-6 mb-2 text-white">
        <span className="font-bold">Phase 3: </span>
        Flagship Project & Portfolio (Days 61-90)
      </p>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 9:</span>
        Flagship Game Development - Planning & Core Loop
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">Conceptualize: </span>Choose a substantial game idea that showcases your skills (e.g., a mini-RPG, a tower defense game, a more polished platformer with multiple levels).</li>
        <li><span className="font-bold">Design Document (Mini): </span>Outline core mechanics, art style, levels, and features.</li>
        <li><span className="font-bold">Build Core Loop: </span>Focus this week on getting the fundamental gameplay loop working.</li>
        <li><span className="font-bold">Project: </span>Start building your flagship game. Get the player character, basic movement, and primary interaction working.</li>
      </ul>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 10:</span>
        Flagship Game - Feature Implementation & Polish
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">Feature Integration: </span>Add more enemies, power-ups, level elements, and UI enhancements.</li>
        <li><span className="font-bold">Bug Fixing: </span>Actively identify and fix bugs.</li>
        <li><span className="font-bold">Refinement: </span>Improve visual feedback, sound design, and overall feel.</li>
        <li><span className="font-bold">Project: </span>Continue developing your flagship game, aiming for a complete, albeit small, vertical slice or a few polished levels.</li>
      </ul>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 11:</span>
        Portfolio Integration & Optimization
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">Game Optimization: </span>Improve performance (frame rate, loading times).</li>
        <li><span className="font-bold">Portfolio Website: </span>Create or update your portfolio site. Dedicate a section to your games.</li>
        <li><span className="font-bold">Project Showcases: </span>For each game, include a playable demo (deployed online), screenshots/GIFs, a brief description of the game, technologies used, and your learning takeaways.</li>
        <li><span className="font-bold">Hackathon Prep (Optional): </span>If you plan a game-focused hackathon, prepare a simple boilerplate.</li>
      </ul>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 12:</span>
        Deployment, Job Readiness & Continuous Learning
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">Deployment: </span>Deploy your flagship game to platforms like Itch.io or your personal website.</li>
        <li><span className="font-bold">Resume/CV & LinkedIn: </span>Highlight your game development skills, projects, and passion.</li>
        <li><span className="font-bold">Interview Practice: </span>Be ready to discuss your game projects, design decisions, and technical challenges.</li>
        <li><span className="font-bold">Continuous Learning: </span>Explore other engines (Unity, Godot), 3D concepts, advanced AI, or multiplayer networking.</li>
      </ul>
    </div>
  );
};

export default GameDevChallengePlan;
