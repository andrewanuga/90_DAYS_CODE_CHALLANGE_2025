const BlockchainChallengePlan = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg shadow-lg max-w-4xl mx-auto my-8">
      <p className="text-[30px] font-bold text-center mb-4 text-white">90-Day Blockchain Developer Mastery Challenge</p>
      <p className="text-[15px] leading-6 mb-4 text-white">
        <span className="font-bold">Key Technologies: </span>
        Blockchain Fundamentals, Cryptography, Ethereum, Solidity, Web3.js/Ethers.js,
        Hardhat/Truffle, OpenZeppelin, JavaScript/TypeScript, Git/GitHub.
      </p>
      <p className="text-[15px] leading-10 mb-2 text-white">
        <span className="font-bold">Core Philosophy: </span>
        Learn by doing. Every concept should lead to a small project or implementation.
      </p>

      <p className="text-[15px] leading-10 mt-6 mb-2 text-white">
        <span className="font-bold">Phase 1: </span>
        Blockchain & Web2 Foundations (Days 1-30)
      </p>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 1:</span>
        Blockchain Fundamentals & Core Concepts
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">What is Blockchain? </span>Decentralization, immutability, distributed ledger technology (DLT). Public vs. Private Blockchains.</li>
        <li><span className="font-bold">Consensus Mechanisms: </span>Proof of Work (PoW), Proof of Stake (PoS) - high-level understanding.</li>
        <li><span className="font-bold">Cryptography Basics: </span>Hashing (SHA-256). Public-key Cryptography (asymmetric encryption), digital signatures.</li>
        <li><span className="font-bold">Transactions & Blocks: </span>How transactions are validated and grouped into blocks. Block structure, Merkle trees.</li>
        <li><span className="font-bold">Blockchain Architectures: </span>UTXO vs. Account-based models.</li>
        <li><span className="font-bold">Project: </span>Implement a <span className="font-bold">simplified, bare-bones blockchain in JavaScript/Python</span> (for conceptual understanding only). Focus on creating blocks, adding transactions, and basic proof-of-work. Use Git and GitHub from day one for all your code.</li>
      </ul>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 2:</span>
        Ethereum Ecosystem & Smart Contracts Introduction
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">Ethereum Basics: </span>Ethereum Virtual Machine (EVM), Gas, Gwei, Wei. Accounts (EOAs vs. Contract Accounts). Ethereum network (Mainnet, Testnets - Sepolia, Arbitrum Sepolia, Optimism Sepolia, etc.).</li>
        <li><span className="font-bold">Solidity Fundamentals (Part 1): </span>Introduction to Solidity syntax, data types (uint, address, bool, bytes), variables (state vs. local). Functions (visibility: public, private, internal, external), return values. `msg.sender`, `msg.value`, `block.timestamp`.</li>
        <li><span className="font-bold">Development Environment Setup: </span><span className="font-bold">Remix IDE</span>: Learn to write, compile, deploy, and interact with simple smart contracts. <span className="font-bold">MetaMask</span>: Set up a wallet, connect to testnets.</li>
        <li><span className="font-bold">Project: </span>Deploy a <span className="font-bold">simple "Hello World" smart contract</span> on Remix and a public testnet. Create contracts that store and retrieve a single value.</li>
      </ul>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 3:</span>
        Advanced Solidity & Smart Contract Patterns
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">Solidity Fundamentals (Part 2): </span>Mappings, Arrays (fixed vs. dynamic). Structs, Enums. Modifiers (`onlyOwner`, `require`, `revert`). Events (for logging and UI updates).</li>
        <li><span className="font-bold">Contract Interaction: </span>Calling functions between contracts. Inheritance.</li>
        <li><span className="font-bold">Security Best Practices (Introduction): </span>Reentrancy, integer overflow/underflow (understand common vulnerabilities).</li>
        <li><span className="font-bold">Project: </span>Build a <span className="font-bold">simple token contract (ERC-20 concepts)</span> with basic minting/transfer functions using Solidity. Implement an `onlyOwner` modifier. Deploy and test on a testnet.</li>
      </ul>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 4:</span>
        Development Frameworks & Testing
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">Hardhat / Truffle Suite: </span>Set up a local development environment. Understand project structure, compilation, deployment scripts. <span className="font-bold">Ganache</span>: Use a personal blockchain for local testing.</li>
        <li><span className="font-bold">Smart Contract Testing: </span>Write <span className="font-bold">unit tests</span> for your Solidity contracts using Hardhat/Truffle's testing framework (JavaScript/TypeScript). Understand test best practices (isolated tests, assertions).</li>
        <li><span className="font-bold">Solidity Libraries: </span>Introduction to <span className="font-bold">OpenZeppelin Contracts</span> (ERC-20, Ownable, ReentrancyGuard).</li>
        <li><span className="font-bold">Project: </span>Rewrite your ERC-20 token using Hardhat/Truffle and OpenZeppelin contracts for standard features. Write comprehensive unit tests for all functions. Deploy to Ganache and a testnet using your framework.</li>
      </ul>

      <p className="text-[15px] leading-10 mt-6 mb-2 text-white">
        <span className="font-bold">Phase 2: </span>
        DApp Development & Advanced Concepts (Days 31-60)
      </p>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 5:</span>
        Frontend Interaction (Web3.js / Ethers.js)
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">JavaScript/TypeScript Refresh: </span>Ensure strong JS fundamentals.</li>
        <li><span className="font-bold">Web3.js / Ethers.js: </span>Connecting to Ethereum nodes (MetaMask provider). Interacting with smart contracts (instantiating contract objects, calling read/write functions). Handling events from smart contracts. Sending transactions, signing messages.</li>
        <li><span className="font-bold">Frontend Framework (React Introduction): </span>Components, JSX, Props, State. Set up a basic React app.</li>
        <li><span className="font-bold">Project: </span>Build your <span className="font-bold">first DApp frontend</span> using React and Web3.js/Ethers.js. Connect to your deployed token contract. Implement functions to check balance, transfer tokens, and display transaction history (by listening to events).</li>
      </ul>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 6:</span>
        Decentralized Applications (DApps) - Full Stack
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">DApp Architecture: </span>How frontend, backend (optional for DApps, often just smart contracts), and blockchain interact.</li>
        <li><span className="font-bold">User Experience (UX) in DApps: </span>Wallet connection, transaction confirmations, gas fees.</li>
        <li><span className="font-bold">IPFS (InterPlanetary File System): </span>Storing decentralized content (e.g., images for NFTs, DApp frontends).</li>
        <li><span className="font-bold">State Management (Optional but Recommended): </span>Context API or Redux for complex DApp state.</li>
        <li><span className="font-bold">Project: </span>Build a more complex DApp: a <span className="font-bold">decentralized voting application</span> or a <span className="font-bold">simple crowdfunding platform</span>. Users should be able to create proposals/campaigns, vote/contribute, and see results. Store proposal details on IPFS.</li>
      </ul>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 7:</span>
        NFTs & Advanced Smart Contracts
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">Non-Fungible Tokens (NFTs): </span>ERC-721 standard (understanding the functions). Metadata (JSON schema, IPFS storage).</li>
        <li><span className="font-bold">ERC-1155 (Multi-token Standard - optional, but good to know).</span></li>
        <li><span className="font-bold">Smart Contract Upgradability (Concepts): </span>Proxy patterns (understand why this is needed).</li>
        <li><span className="font-bold">Decentralized Finance (DeFi) Primitives (Introduction): </span>Automated Market Makers (AMMs), lending protocols (high-level concepts).</li>
        <li><span className="font-bold">Project: </span>Create an <span className="font-bold">ERC-721 NFT collection contract</span>. Implement minting functionality. Store NFT metadata on IPFS. Build a simple DApp frontend to display minted NFTs and allow users to mint.</li>
      </ul>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 8:</span>
        Oracles, Layer 2s & Security Audits
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">Oracles: </span>What are they and why are they needed? (e.g., Chainlink concepts). Fetching off-chain data securely.</li>
        <li><span className="font-bold">Layer 2 Scaling Solutions: </span>Understand the need for L2s (scalability issues of L1s). Rollups (Optimistic vs. ZK-Rollups), Sidechains.</li>
        <li><span className="font-bold">Smart Contract Security Audits (Concepts): </span>Common tools and methodologies (Slither, MythX - conceptual understanding). Importance of professional audits.</li>
        <li><span className="font-bold">Project: </span>Integrate a <span className="font-bold">mock oracle</span> (simulated off-chain data) into a smart contract to make a decision based on external data (e.g., a simple weather-based insurance contract). Deploy the contract to an L2 testnet (e.g., Arbitrum Sepolia).</li>
      </ul>

      <p className="text-[15px] leading-10 mt-6 mb-2 text-white">
        <span className="font-bold">Phase 3: </span>
        Specialization, Project Building & Job Readiness (Days 61-90)
      </p>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 9:</span>
        Full-Stack Blockchain Project (Your Flagship)
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">Conceptualize: </span>Design your flagship "Full-Stack Blockchain Developer" project. This should be a significant DApp that integrates most of what you've learned. Examples: a decentralized marketplace, a simple DAO (Decentralized Autonomous Organization), a supply chain tracking system.</li>
        <li><span className="font-bold">Architect: </span>Plan out your smart contracts, frontend (React Native with Redux if you also plan to cover it), and potential off-chain backend components (for data indexing, notifications, etc.).</li>
        <li><span className="font-bold">Build Core Features: </span>Start coding the main functionalities of your flagship project. Focus on modularity, clean code, and robust error handling.</li>
        <li><span className="font-bold">LeetCoding/Coding Challenges: </span>Continue daily practice (1-2 medium problems) on platforms like LeetCode, focusing on algorithms and data structures relevant to optimizing blockchain logic or off-chain components.</li>
      </ul>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 10:</span>
        Portfolio Building & Hackathon Prep
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">Continue Flagship Project: </span>Bring your main DApp to a near-complete state. Ensure all smart contract interactions are smooth and the UI is intuitive.</li>
        <li><span className="font-bold">Build Your Portfolio Website: </span>Create a dedicated portfolio site (could be a simple static site or a React app) to showcase your blockchain projects. Include detailed descriptions, screenshots, live demos (on testnets!), and GitHub links.</li>
        <li><span className="font-bold">Hackathon Preparation: </span>Look for upcoming online blockchain hackathons. Brainstorm a focused idea you can build solo within 24-48 hours, leveraging a subset of your skills. Have a basic DApp boilerplate ready.</li>
      </ul>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 11:</span>
        Solo Hackathon & Resume/LinkedIn
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">1 Hackathon (Solo - Participate): </span>Dedicate a weekend to an intense solo hackathon. Focus on building a functional MVP that demonstrates your ability to build quickly under pressure and leverage blockchain tech.</li>
        <li><span className="font-bold">Refine Portfolio: </span>Add your hackathon project to your portfolio website. Detail the problem, your solution, and the tech stack.</li>
        <li><span className="font-bold">Resume/CV: </span>Craft a compelling resume tailored for blockchain developer roles. Highlight your projects, specific smart contract skills (Solidity, testing), DApp development, and any security awareness.</li>
        <li><span className="font-bold">LinkedIn Profile: </span>Optimize your LinkedIn profile, showcase your projects, and connect with blockchain recruiters and other developers in the space. Start engaging with relevant posts.</li>
      </ul>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 12:</span>
        Final Polish & Job Applications
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">Final Portfolio Polish: </span>Ensure all projects are deployed on appropriate testnets, work smoothly, and are well-documented. Check for broken links and mobile responsiveness. Get feedback from peers if possible.</li>
        <li><span className="font-bold">Interview Practice: </span>Practice explaining your projects, your technical decisions, and answering common blockchain-specific interview questions (e.g., "Explain the difference between PoW and PoS," "Describe a common smart contract vulnerability and how to prevent it").</li>
        <li><span className="font-bold">Apply for Jobs: </span>Actively search and apply for junior/entry-level Blockchain Developer, Smart Contract Developer, or Web3 Developer roles. Tailor your resume and cover letter for each application.</li>
        <li><span className="font-bold">Stay Updated: </span>Blockchain is rapidly evolving. Follow thought leaders, news, and new protocol developments.</li>
      </ul>
    </div>
  );
};

export default BlockchainChallengePlan;
