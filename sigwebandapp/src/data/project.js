// All project information for the Projects section.
// Data is grouped by domain: web, app, blockchain.
// Every component reads from this file, no hardcoding elsewhere.

const project = {
  web: [
    {
      id: "web-1",
      title: "Nebula Analytics",
      description:
        "A real-time analytics dashboard for SaaS teams with custom charts, cohort analysis and role-based access control.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=70",
      stack: ["React", "TypeScript", "D3.js", "Node", "PostgreSQL"],
      github: "https://github.com/example/nebula-analytics",
      demo: "https://nebula.example.com",
      domain: "Web Development",
    },
    {
      id: "web-2",
      title: "Aurora CMS",
      description:
        "A headless content management system with a block-based editor, versioning and multi-tenant workspaces.",
      image:
        "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1200&q=70",
      stack: ["Next.js", "GraphQL", "Prisma", "Redis"],
      github: "https://github.com/example/aurora-cms",
      demo: "https://aurora.example.com",
      domain: "Web Development",
    },
    {
      id: "web-3",
      title: "Orbit Commerce",
      description:
        "A modern storefront with server-side rendering, personalized recommendations and streaming checkout.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=70",
      stack: ["Remix", "Stripe", "Algolia", "Tailwind"],
      github: "https://github.com/example/orbit-commerce",
      demo: "https://orbit.example.com",
      domain: "Web Development",
    },
    {
      id: "web-4",
      title: "Lumen Docs",
      description:
        "A collaborative documentation platform with realtime editing, semantic search and AI summaries.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=70",
      stack: ["React", "Yjs", "WebSockets", "OpenAI"],
      github: "https://github.com/example/lumen-docs",
      demo: "https://lumen.example.com",
      domain:"Web Development",
    },
    {
      id: "web-5",
      title: "Pulse Monitor",
      description:
        "An uptime and performance monitoring suite with alerting, status pages and incident timelines.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=70",
      stack: ["Vue", "Go", "ClickHouse", "Grafana"],
      github: "https://github.com/example/pulse-monitor",
      demo: "https://pulse.example.com",
      domain: "Web Development",
    },
  ],

  app: [
    {
      id: "app-1",
      title: "Trailkeeper",
      description:
        "An outdoor navigation app with offline maps, GPX import and social route sharing for hikers.",
      image:
        "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=1200&q=70",
      stack: ["React Native", "Expo", "MapBox", "Supabase"],
      github: "https://github.com/example/trailkeeper",
      demo: "https://trailkeeper.example.com",
      domain: "App Development",
    },
    {
      id: "app-2",
      title: "Beacon Finance",
      description:
        "A personal finance tracker with automatic categorisation, budgets and recurring transaction detection.",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=70",
      stack: ["Flutter", "Firebase", "Plaid"],
      github: "https://github.com/example/beacon-finance",
      demo: "https://beacon.example.com",
      domain: "App Development",
    },
    {
      id: "app-3",
      title: "Muse Journal",
      description:
        "A minimalist journaling app with mood tracking, prompts and end-to-end encrypted sync.",
      image:
        "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1200&q=70",
      stack: ["Swift", "SwiftUI", "CloudKit"],
      github: "https://github.com/example/muse-journal",
      demo: "https://muse.example.com",
      domain: "App Development",
    },
    {
      id: "app-4",
      title: "Cadence Fit",
      description:
        "A workout planner that adapts to your recovery, sleep and heart-rate data from wearables.",
      image:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=70",
      stack: ["Kotlin", "Jetpack Compose", "HealthConnect"],
      github: "https://github.com/example/cadence-fit",
      demo: "https://cadence.example.com",
      domain: "App Development",
    },
    {
      id: "app-5",
      title: "Nimbus Notes",
      description:
        "A cross-platform note-taking app with markdown, wiki links and offline-first architecture.",
      image:
        "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=70",
      stack: ["React Native", "SQLite", "Zustand"],
      github: "https://github.com/example/nimbus-notes",
      demo: "https://nimbus.example.com",
      domain: "App Development",
    },
  ],

  blockchain: [
    {
      id: "chain-1",
      title: "Solstice DEX",
      description:
        "A decentralised exchange with concentrated liquidity, limit orders and gas-optimised routing.",
      image:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=70",
      stack: ["Solidity", "Foundry", "The Graph", "Ethers.js"],
      github: "https://github.com/example/solstice-dex",
      demo: "https://solstice.example.com",
      domain: "Blockchain",
    },
    {
      id: "chain-2",
      title: "Vault Guardian",
      description:
        "A multisig treasury dashboard with policy engine, transaction simulation and audit trails.",
      image:
        "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=1200&q=70",
      stack: ["Solidity", "Safe SDK", "Viem", "Next.js"],
      github: "https://github.com/example/vault-guardian",
      demo: "https://vault.example.com",
      domain: "Blockchain",
    },
    {
      id: "chain-3",
      title: "Relic NFT",
      description:
        "An NFT marketplace with lazy minting, on-chain royalties and creator subscriptions.",
      image:
        "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?auto=format&fit=crop&w=1200&q=70",
      stack: ["Solidity", "Hardhat", "IPFS", "React"],
      github: "https://github.com/example/relic-nft",
      demo: "https://relic.example.com",
      domain: "Blockchain",
    },
    {
      id: "chain-4",
      title: "Ledger Bridge",
      description:
        "A cross-chain messaging bridge with light-client verification and slashing for validators.",
      image:
        "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=1200&q=70",
      stack: ["Rust", "Cosmos SDK", "TypeScript"],
      github: "https://github.com/example/ledger-bridge",
      demo: "https://ledgerbridge.example.com",
      domain: "Blockchain",
    },
    {
      id: "chain-5",
      title: "Quorum DAO",
      description:
        "A governance platform with delegation, off-chain voting and on-chain execution via timelocks.",
      image:
        "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=1200&q=70",
      stack: ["Solidity", "Snapshot", "wagmi", "Vite"],
      github: "https://github.com/example/quorum-dao",
      demo: "https://quorum.example.com",
      domain: "Blockchain",
    },
  ],
};

export default project;
