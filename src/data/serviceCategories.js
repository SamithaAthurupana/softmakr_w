export const serviceCategories = [
  {
    slug: 'web-mobile-cloud',
    title: 'Web, Mobile & Cloud Apps',
    tagline: 'We build the software your business runs on — fast, scalable, and built to last.',
    heroImg: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&h=600&fit=crop',
    metaDesc: 'Softmakr builds enterprise web apps, mobile applications, and cloud platforms. See our portfolio of production-grade software products and discover how we can build yours.',
    intro: 'Every great business today is built on great software. Whether you need a customer-facing web platform that handles millions of users, a mobile app your sales team depends on daily, or a cloud infrastructure that scales automatically with your growth — we have built it before, and we know exactly how to build it for you.',
    stats: [
      { value: '50+', label: 'Products shipped to production' },
      { value: '99.9%', label: 'Average platform uptime' },
      { value: '3×', label: 'Faster delivery vs in-house teams' },
      { value: '12', label: 'Countries served' },
    ],
    whatWeBuild: {
      heading: 'What we build for you',
      desc: 'From idea to launch — we architect, design, and engineer software products that solve real business problems. Here is the full range of what we deliver.',
      items: [
        {
          icon: '🌐',
          title: 'Enterprise Web Platforms',
          desc: 'High-performance web applications built with React, Next.js, or Vue. From B2B SaaS dashboards processing millions of events to public-facing portals serving enterprise clients.',
        },
        {
          icon: '📱',
          title: 'Mobile Applications',
          desc: 'Cross-platform iOS and Android apps using React Native — one codebase, native performance on both platforms. We build apps your customers will actually use.',
        },
        {
          icon: '☁️',
          title: 'Cloud Infrastructure',
          desc: 'AWS and GCP infrastructure designed for reliability and cost efficiency. Auto-scaling, zero-downtime deployments, multi-region failover, and infrastructure-as-code from day one.',
        },
        {
          icon: '🔌',
          title: 'API & Microservices',
          desc: 'RESTful and GraphQL APIs built with FastAPI or Node.js. Event-driven microservice architectures using Kafka and RabbitMQ for systems that never go down.',
        },
        {
          icon: '🛒',
          title: 'E-commerce & Marketplace Platforms',
          desc: 'Custom marketplace and e-commerce platforms with payment integrations, inventory management, real-time order tracking, and vendor management — built to scale.',
        },
        {
          icon: '📊',
          title: 'Business Intelligence Dashboards',
          desc: 'Real-time analytics platforms that aggregate data from every part of your operation and surface the decisions your leadership team actually needs to make.',
        },
      ],
    },
    portfolio: {
      heading: 'Products we have already built',
      desc: 'These are not concepts. These are production systems — running today, handling real users, solving real problems for real businesses.',
      items: [
        {
          title: 'LexixGPT — Enterprise AI Web Platform',
          category: 'Web App + Cloud Infrastructure',
          desc: 'A full-stack enterprise AI assistant platform with a React frontend, FastAPI backend, real-time WebSocket chat, role-based access control, and multi-tenant cloud architecture on AWS ECS. Deployed for enterprise clients with 99.9% uptime SLA.',
          img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&h=360&fit=crop',
          tags: ['React', 'FastAPI', 'AWS ECS', 'PostgreSQL', 'WebSockets'],
        },
        {
          title: 'AI Driven LMS — Learning Platform',
          category: 'Web App + Mobile + Cloud',
          desc: 'A multi-platform learning management system with a React web app, React Native mobile apps, video streaming, real-time progress tracking, and a serverless AWS backend handling 10,000+ concurrent learners.',
          img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=360&fit=crop',
          tags: ['React Native', 'Next.js', 'AWS Lambda', 'CloudFront', 'RDS'],
        },
        {
          title: 'Platform Analyzer — BI Dashboard',
          category: 'Web Platform + Real-Time Data',
          desc: 'A real-time business intelligence platform connecting 12+ data sources, processing 500K+ events daily, with sub-2-second dashboard refresh and ML-powered anomaly alerts. Built on a Kafka + React + FastAPI stack.',
          img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=360&fit=crop',
          tags: ['React', 'Kafka', 'FastAPI', 'BigQuery', 'Terraform'],
        },
      ],
    },
    techStack: {
      heading: 'Our technology stack',
      desc: 'We use modern, battle-tested technologies chosen for performance, developer velocity, and long-term maintainability — not hype.',
      groups: [
        { label: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'React Native'] },
        { label: 'Backend', items: ['FastAPI', 'Node.js', 'Python', 'GraphQL', 'REST APIs'] },
        { label: 'Cloud & DevOps', items: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform'] },
        { label: 'Databases', items: ['PostgreSQL', 'MongoDB', 'Redis', 'BigQuery', 'Elasticsearch'] },
      ],
    },
    whyUs: [
      { title: 'You own everything', desc: 'Full source code, infrastructure, and documentation handed over at delivery. No vendor lock-in, no recurring licensing fees for the platform we build you.' },
      { title: 'Production-ready from day one', desc: 'We do not build prototypes. Every product ships with CI/CD, monitoring, automated testing, and documentation — ready to handle real traffic on launch day.' },
      { title: 'We move fast', desc: 'Most software agencies take 6–12 months to ship a working product. Our average time from kickoff to live deployment is 6–10 weeks, without cutting corners.' },
      { title: 'You talk to the engineers', desc: 'No account managers, no communication layers. You work directly with the developers building your product every step of the way.' },
    ],
    process: [
      { step: '01', title: 'Discovery & Architecture', desc: 'We start with a deep-dive session to understand your business goals, user needs, and technical constraints. We produce a detailed architecture document and project scope before writing a line of code.' },
      { step: '02', title: 'Design & Prototype', desc: 'High-fidelity UI designs and a clickable prototype, reviewed and approved by your team. You see exactly what you are getting before development begins.' },
      { step: '03', title: 'Agile Development', desc: 'Two-week sprints with working software demonstrated at every review. Full transparency: you see the codebase, the CI pipeline, and the staging environment throughout.' },
      { step: '04', title: 'Launch & Scale', desc: 'Production deployment with zero-downtime rollout, performance monitoring, and a 90-day post-launch support window. When you grow, we scale with you.' },
    ],
    cta: {
      heading: 'Ready to build something exceptional?',
      desc: 'Tell us what you need to build. We will tell you exactly how we would build it, how long it will take, and what it will cost — in one free discovery call.',
    },
  },

  {
    slug: 'artificial-intelligence',
    title: 'Artificial Intelligence',
    tagline: 'We turn your data and domain knowledge into AI systems that create measurable competitive advantage.',
    heroImg: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1400&h=600&fit=crop',
    metaDesc: 'Softmakr builds production-grade AI systems: LLM applications, RAG pipelines, ML models, fraud detection, and intelligent automation. See our AI portfolio and book a discovery call.',
    intro: 'Artificial intelligence is no longer a future capability — it is the defining competitive advantage of the present. The businesses winning their markets right now are not the largest or the oldest. They are the ones that have embedded intelligence into their operations, their products, and their customer experiences. We build the AI systems that get you there.',
    stats: [
      { value: '15+', label: 'AI systems in production' },
      { value: '94%', label: 'Model accuracy on fraud detection' },
      { value: '10×', label: 'Faster insights vs manual analysis' },
      { value: '60%', label: 'Average ops cost reduction via AI automation' },
    ],
    whatWeBuild: {
      heading: 'AI solutions we build',
      desc: 'We cover the full spectrum of applied AI — from language models and computer vision to predictive analytics and intelligent automation. Every solution is production-grade, not a demo.',
      items: [
        {
          icon: '🧠',
          title: 'LLM & Generative AI Applications',
          desc: 'Custom AI assistants, document Q&A systems, code generation tools, and content pipelines powered by GPT-4o, Claude 3.5, Gemini, and open-source models. Fine-tuned or RAG-augmented on your proprietary data.',
        },
        {
          icon: '🔍',
          title: 'RAG & Knowledge Systems',
          desc: 'Retrieval-Augmented Generation pipelines that connect LLMs to your internal knowledge base — documentation, databases, emails, and past projects — for accurate, cited, real-time answers.',
        },
        {
          icon: '🤖',
          title: 'Agentic AI Workflows',
          desc: 'Multi-step AI agents that autonomously execute complex business workflows: data gathering, analysis, decision-making, and action — with human-in-the-loop checkpoints where you need them.',
        },
        {
          icon: '🚨',
          title: 'Fraud & Anomaly Detection',
          desc: 'Real-time ML models that monitor transaction streams, user behaviour, and operational data for anomalies. Designed for financial services, e-commerce, and cybersecurity applications.',
        },
        {
          icon: '📈',
          title: 'Predictive Analytics & Forecasting',
          desc: 'Revenue forecasts, demand predictions, churn risk scores, and supply chain models. Trained on your historical data, deployed into your existing dashboards and workflows.',
        },
        {
          icon: '🎓',
          title: 'AI-Powered Learning Systems',
          desc: 'Adaptive learning engines that personalize content delivery, generate assessments automatically, and predict learner performance — deployed into existing LMS platforms or built from scratch.',
        },
      ],
    },
    portfolio: {
      heading: 'AI systems we have shipped',
      desc: 'These are production AI systems handling real workloads, making real decisions, and delivering measurable results for our clients.',
      items: [
        {
          title: 'LexixGPT — Enterprise AI Assistant',
          category: 'LLM + RAG + Agentic Workflows',
          desc: 'A custom enterprise AI assistant built on GPT-4o with a proprietary RAG pipeline over client documentation. Handles 5,000+ queries per day with 91% answer accuracy. Deployed across Slack, a web portal, and a mobile app. Reduced internal support ticket volume by 67% in the first month.',
          img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&h=360&fit=crop',
          tags: ['OpenAI GPT-4o', 'LangChain', 'Pinecone', 'FastAPI', 'RAG'],
        },
        {
          title: 'Banking Fraud Detection System',
          category: 'Real-Time ML + Anomaly Detection',
          desc: 'An ML pipeline processing 50,000+ transactions per hour with 94% fraud detection accuracy and 800ms average response time. Built on an ensemble of gradient boosting and neural network models, trained on 3 years of transaction history. Reduced fraud losses by $2.4M in the first year.',
          img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=360&fit=crop',
          tags: ['Python', 'XGBoost', 'Kafka', 'FastAPI', 'Redis', 'AWS SageMaker'],
        },
        {
          title: 'AI Driven LMS — Adaptive Learning Engine',
          category: 'ML + Personalization + NLP',
          desc: 'An adaptive learning AI that models each learner\'s knowledge state in real time, generates personalised content sequences, and predicts performance risk 3 weeks in advance. Tripled course completion rates versus the baseline LMS and improved knowledge retention scores by 44%.',
          img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=360&fit=crop',
          tags: ['Python', 'Scikit-learn', 'OpenAI', 'PostgreSQL', 'AWS Lambda'],
        },
      ],
    },
    techStack: {
      heading: 'Our AI & ML tech stack',
      desc: 'We work with every major AI platform and build on open standards — so you are never locked into a vendor you did not choose.',
      groups: [
        { label: 'LLMs & APIs', items: ['OpenAI GPT-4o', 'Anthropic Claude', 'Google Gemini', 'Llama 3', 'Mistral'] },
        { label: 'ML Frameworks', items: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'XGBoost', 'Hugging Face'] },
        { label: 'AI Orchestration', items: ['LangChain', 'LlamaIndex', 'CrewAI', 'Autogen', 'Haystack'] },
        { label: 'Vector & Data', items: ['Pinecone', 'Qdrant', 'pgvector', 'Weaviate', 'Apache Kafka'] },
      ],
    },
    whyUs: [
      { title: 'We build AI that works in production', desc: 'Any developer can get an LLM to respond in a demo. We build AI systems that are accurate, reliable, cost-efficient, and observable — at production scale, under real-world conditions.' },
      { title: 'Your data never trains anyone else\'s model', desc: 'Every AI system we build runs in your infrastructure or your cloud account. Your proprietary data stays yours — it never touches a shared training pipeline.' },
      { title: 'We measure outcomes, not outputs', desc: 'We define success metrics before we write code: accuracy targets, latency budgets, cost-per-query ceilings. You know exactly what you are paying for and how to verify you got it.' },
      { title: 'AI expertise across the full stack', desc: 'Our team includes ML engineers, NLP specialists, data engineers, and full-stack developers. We build the model, the API layer, the frontend, and the data pipeline — not just one piece.' },
    ],
    process: [
      { step: '01', title: 'Problem & Data Scoping', desc: 'We assess your data availability, quality, and volume. We define the exact ML problem, success metrics, and a realistic accuracy target. This scoping prevents the most common cause of AI project failure: building the wrong thing.' },
      { step: '02', title: 'Model Development & Evaluation', desc: 'Baseline model → iterative improvement → evaluation against your specific success criteria. We show you the numbers at every stage — not just "the model is training".' },
      { step: '03', title: 'Production Integration', desc: 'Model deployment via API, integration with your existing systems, and end-to-end testing under realistic load. The model does not ship until it meets the accuracy and latency targets we agreed upfront.' },
      { step: '04', title: 'Monitoring & Continuous Improvement', desc: 'Production ML requires ongoing care. We set up model performance monitoring, data drift detection, and a retraining pipeline — so your AI gets better as your data grows.' },
    ],
    cta: {
      heading: 'Your AI advantage starts here.',
      desc: 'We scope AI projects in a single session. One conversation is all it takes to know whether AI can solve your specific problem, what it will take to build it, and what return you can expect.',
    },
  },

  {
    slug: 'ux-designs',
    title: 'UX Design',
    tagline: 'We design interfaces that convert visitors into customers and users into advocates.',
    heroImg: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1400&h=600&fit=crop',
    metaDesc: 'Softmakr UX design services: product design, SaaS dashboards, mobile UI, AI interfaces, and design systems. See our portfolio and discover how great design drives business results.',
    intro: 'Design is not decoration — it is conversion. Every pixel in your interface either builds confidence and drives action, or creates friction and loses customers. The difference between a product that grows organically through word-of-mouth and one that haemorrhages users after the first session almost always comes back to the quality of the experience. We design the experiences that grow businesses.',
    stats: [
      { value: '180%', label: 'Average engagement increase post-redesign' },
      { value: '43%', label: 'Conversion rate improvement on redesigned flows' },
      { value: '4.8★', label: 'Average App Store rating for our mobile designs' },
      { value: '30%', label: 'Reduction in support tickets via better UX' },
    ],
    whatWeBuild: {
      heading: 'Design work we deliver',
      desc: 'We design end-to-end product experiences — from initial user research through to production-ready design systems that your engineering team can ship from.',
      items: [
        {
          icon: '🖥️',
          title: 'SaaS Product & Dashboard Design',
          desc: 'Complex data-dense interfaces made simple. We design SaaS dashboards, admin panels, and analytics tools where clarity of information is the product. Designed for power users without alienating newcomers.',
        },
        {
          icon: '📱',
          title: 'Mobile App UI/UX',
          desc: 'iOS and Android interfaces that feel native and natural. We follow platform conventions where they serve users and break them where they do not. Every tap and swipe is intentional.',
        },
        {
          icon: '🤖',
          title: 'AI & Conversational Interface Design',
          desc: 'Designing for AI is a new discipline. We design chat interfaces, AI co-pilots, and agent dashboards that make powerful AI capabilities feel simple, trustworthy, and delightful to use.',
        },
        {
          icon: '🛒',
          title: 'E-commerce & Conversion Design',
          desc: 'Product pages, checkout flows, and onboarding sequences engineered for conversion. We combine UX research with A/B testing insights to design flows that turn browsers into buyers.',
        },
        {
          icon: '🎨',
          title: 'Brand & Design Systems',
          desc: 'Scalable design systems in Figma with tokenized color, typography, and spacing. A consistent component library your engineering team can implement once and scale infinitely.',
        },
        {
          icon: '🔬',
          title: 'UX Research & Audits',
          desc: 'User interviews, usability testing, heatmap analysis, and conversion funnel audits. We find the exact points where your current product loses users and give you a prioritized fix list.',
        },
      ],
    },
    portfolio: {
      heading: 'Interfaces we have designed',
      desc: 'These are real product designs — shipped, live, and performing. Each one started with a brief and became a product people love using.',
      items: [
        {
          title: 'LexixGPT — AI Chat Interface',
          category: 'AI Product Design + Design System',
          desc: 'A complete UI/UX design for an enterprise AI assistant: chat interface with threaded conversations, source citation display, model switching, conversation history sidebar, and admin settings panel. Built as a Figma design system with 200+ components. User satisfaction score: 4.7/5 in post-launch survey.',
          img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=360&fit=crop',
          tags: ['Figma', 'AI Interface', 'Design System', 'Interaction Design', 'Accessibility'],
        },
        {
          title: 'AI Driven LMS — Learner Dashboard',
          category: 'EdTech UX + Mobile Design',
          desc: 'A learner-first interface design for a multi-platform LMS: personalized home dashboard, course player with AI-generated notes, gamification elements including skill trees and achievement system, and a mobile-first React Native UI. Course completion rate increased 3× versus the previous design.',
          img: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=360&fit=crop',
          tags: ['Mobile UI', 'Gamification', 'Data Visualization', 'React Native', 'Figma'],
        },
        {
          title: 'Platform Analyzer — Executive Dashboard',
          category: 'Data Visualization + Analytics UX',
          desc: 'An executive-facing analytics dashboard design for a business intelligence platform: role-specific views for CEO, CFO, and Operations, real-time KPI cards, interactive chart components, anomaly alert system, and a drill-down exploration UI. Support tickets related to "can\'t find the data I need" dropped by 72% after launch.',
          img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=360&fit=crop',
          tags: ['Data Viz', 'Dashboard Design', 'Figma', 'Charts', 'Executive UX'],
        },
      ],
    },
    techStack: {
      heading: 'Our design toolkit',
      desc: 'We use industry-standard tools that integrate seamlessly with your engineering workflow — so designs go from Figma to production without friction.',
      groups: [
        { label: 'Design & Prototyping', items: ['Figma', 'FigJam', 'Framer', 'Adobe XD', 'InVision'] },
        { label: 'Research & Testing', items: ['Maze', 'Hotjar', 'FullStory', 'UserTesting', 'Optimal Workshop'] },
        { label: 'Frontend Handoff', items: ['Storybook', 'CSS Variables', 'Tailwind CSS', 'Radix UI', 'shadcn/ui'] },
        { label: 'Analytics & CRO', items: ['Google Analytics 4', 'Mixpanel', 'Amplitude', 'Optimizely', 'PostHog'] },
      ],
    },
    whyUs: [
      { title: 'Design that ships', desc: 'We deliver Figma files that engineers can build from, not presentations that collect dust. Every component is named to match your codebase, every state is accounted for, every edge case is designed.' },
      { title: 'We design for outcomes, not awards', desc: 'Our measure of a great design is conversion rate, retention, and user satisfaction — not design awards. We track what happens after launch and iterate until the numbers move.' },
      { title: 'Research before pixels', desc: 'We do not open Figma until we understand your users. Every design decision is backed by user research, competitive analysis, or validated hypotheses — not aesthetic preferences.' },
      { title: 'Integrated with your engineering team', desc: 'Our designers work directly with your developers throughout delivery. No handoff delays, no lost-in-translation component specs. The design system your team gets is built to be implemented.' },
    ],
    process: [
      { step: '01', title: 'Discovery & Research', desc: 'User interviews, competitive analysis, heuristic audit of your existing product, and definition of design success metrics. We align on what "better" means before we design anything.' },
      { step: '02', title: 'Information Architecture & Wireframes', desc: 'Low-fidelity wireframes to validate structure and user flows before investing in visual design. Fast iteration, rapid stakeholder alignment, no wasted effort on the wrong direction.' },
      { step: '03', title: 'Visual Design & Prototype', desc: 'High-fidelity pixel-perfect designs with interactive prototypes for usability testing. Every screen, every state, every animation — specified and validated before engineering begins.' },
      { step: '04', title: 'Design System & Handover', desc: 'A complete component library in Figma with tokenized design variables, accessibility annotations, and developer documentation. Your engineering team can build from it on day one.' },
    ],
    cta: {
      heading: 'Great design is your fastest path to growth.',
      desc: 'We have seen companies double conversion rates with a single well-designed onboarding flow. We have seen mobile apps go from 2-star to 4.8-star ratings after one complete redesign. Let\'s talk about what a better design could do for your business.',
    },
  },
];
