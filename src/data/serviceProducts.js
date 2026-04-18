export const serviceProducts = [
  {
    slug: 'lexixgpt',
    title: 'LexixGPT',
    tagline: 'Your enterprise AI brain — built on your data, deployed in days.',
    heroDesc: 'LexixGPT is a production-grade AI assistant platform that turns your company\'s scattered knowledge into instant, accurate, context-aware answers. Stop losing hours to internal search and repetitive questions. Start getting the right answer in seconds.',
    heroImg: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&h=520&fit=crop',
    metaDesc: 'LexixGPT by Softmakr: an enterprise AI assistant platform that integrates with your tools and knowledge base to deliver intelligent, context-aware responses. Book a demo.',
    stats: [
      { value: '70%', label: 'Reduction in internal Q&A time' },
      { value: '3 days', label: 'Average deployment time' },
      { value: '99.9%', label: 'Uptime SLA' },
      { value: '10x', label: 'Faster onboarding for new hires' },
    ],
    problem: {
      heading: 'The problem every growing company faces',
      desc: 'As companies scale, knowledge becomes fragmented. It lives in Notion pages nobody updates, Slack threads nobody can find, and the heads of senior employees who are always in meetings. New hires spend weeks finding answers that should take minutes. Customer-facing teams give inconsistent answers. Critical processes only one person understands.',
      points: [
        {
          title: 'Knowledge locked in silos',
          body: 'Your best information is buried across Confluence, Google Drive, Notion, Slack, and SharePoint. No single person — or tool — can access it all at once.',
        },
        {
          title: 'Repetitive questions drain your best people',
          body: 'Senior engineers and managers answer the same questions dozens of times a week. That is engineering salary being spent on a search problem.',
        },
        {
          title: 'Onboarding takes months, not days',
          body: 'New team members spend their first weeks navigating tribal knowledge rather than contributing. Every hire is an expensive delay before productivity.',
        },
      ],
    },
    solution: {
      heading: 'LexixGPT: The AI that knows your business',
      desc: 'We build a custom AI assistant trained on your specific documentation, processes, product knowledge, and communication history. It integrates with the tools your team already uses and delivers authoritative, cited answers in real time — across Slack, your web app, or a custom-branded portal.',
    },
    features: [
      {
        icon: '⚡',
        title: 'Instant Knowledge Retrieval',
        desc: 'Semantic search across all connected sources. Ask a question in plain English and get a synthesized answer with source citations — not a list of links.',
      },
      {
        icon: '🔗',
        title: 'Deep Tool Integration',
        desc: 'Native connectors for Confluence, Notion, Google Drive, Slack, Jira, GitHub, SharePoint, and custom databases. Your assistant knows where everything lives.',
      },
      {
        icon: '🧠',
        title: 'Context-Aware Conversations',
        desc: 'LexixGPT remembers conversation context, understands follow-up questions, and can reason across multiple documents to answer complex multi-part queries.',
      },
      {
        icon: '🔒',
        title: 'Enterprise-Grade Security',
        desc: 'Role-based access control ensures users only retrieve information they are authorized to see. All data stays within your AWS or Azure VPC — nothing leaves your infrastructure.',
      },
      {
        icon: '📊',
        title: 'Usage Analytics Dashboard',
        desc: 'See which questions get asked most, which sources are most relied upon, and where knowledge gaps exist. Turn AI usage into actionable documentation insights.',
      },
      {
        icon: '🎯',
        title: 'Continuous Improvement Engine',
        desc: 'Feedback loops and answer quality ratings feed back into the system. LexixGPT improves automatically as your team uses it and your documentation evolves.',
      },
    ],
    howItWorks: [
      {
        step: '01',
        title: 'Connect your knowledge sources',
        desc: 'We integrate with your existing tools in one session. No migration, no data export, no disruption to your current workflows.',
      },
      {
        step: '02',
        title: 'We build and index your AI',
        desc: 'Our team configures the RAG pipeline, tunes the retrieval quality, and sets up role-based access rules tailored to your org structure.',
      },
      {
        step: '03',
        title: 'Deploy to your team\'s workflow',
        desc: 'LexixGPT goes live in your Slack workspace, your intranet, or a branded web portal. Your team starts asking questions from day one.',
      },
      {
        step: '04',
        title: 'Measure, refine, scale',
        desc: 'We monitor performance, refine retrieval quality based on real usage data, and expand coverage as your knowledge base grows.',
      },
    ],
    useCases: [
      {
        industry: 'Technology & SaaS',
        title: 'Engineering documentation at scale',
        desc: 'A 200-person engineering team uses LexixGPT to answer architecture questions, surface runbooks during incidents, and onboard new developers 4x faster. Senior engineers report saving 6+ hours per week on internal Q&A.',
        img: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&h=340&fit=crop',
      },
      {
        industry: 'Financial Services',
        title: 'Compliance and policy access',
        desc: 'A financial institution deployed LexixGPT to give compliance teams instant access to policy documents, regulatory guidelines, and audit trail queries — reducing compliance research time by 65% while maintaining strict access controls.',
        img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=340&fit=crop',
      },
      {
        industry: 'E-commerce & Retail',
        title: 'Customer support AI that never sleeps',
        desc: 'A retail brand integrated LexixGPT into their customer support flow. The AI handles 78% of incoming queries autonomously — order status, return policies, product specifications — escalating only genuinely complex issues to human agents.',
        img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=340&fit=crop',
      },
    ],
    cta: {
      heading: 'Your team deserves better answers, faster.',
      desc: 'We scope, build, and deploy LexixGPT for your organization — fully customized, production-ready, within days. Let\'s talk about what you need.',
    },
  },

  {
    slug: 'ai-driven-lms',
    title: 'AI Driven LMS',
    tagline: 'Training that adapts. Learning that sticks. Results that compound.',
    heroDesc: 'Our AI-powered Learning Management System does what traditional LMS platforms cannot: it learns how each person learns, adapts content in real time, and predicts performance gaps before they become problems. The result is faster skill development, lower training costs, and measurable business outcomes.',
    heroImg: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=520&fit=crop',
    metaDesc: 'AI Driven LMS by Softmakr: a next-generation learning management system with AI-personalized content delivery, adaptive learning paths, and predictive performance analytics.',
    stats: [
      { value: '40%', label: 'Faster time-to-competency' },
      { value: '3x', label: 'Higher course completion rates' },
      { value: '60%', label: 'Reduction in training costs' },
      { value: '92%', label: 'Learner satisfaction score' },
    ],
    problem: {
      heading: 'Why traditional LMS platforms fail',
      desc: 'Most learning management systems are content libraries disguised as learning platforms. They deliver the same material to every person in the same order at the same pace — regardless of what they already know, how they learn best, or what gaps actually matter for their role. The result: low completion rates, knowledge that does not transfer to the job, and training budgets that cannot justify their cost.',
      points: [
        {
          title: 'One-size-fits-all content kills engagement',
          body: 'When experienced employees sit through basics they already know, they disengage. When beginners are rushed through complex material without sufficient foundation, they fail. Static content paths serve neither.',
        },
        {
          title: 'No insight into what is actually learned',
          body: 'Completion rates measure whether someone clicked through. They do not measure whether anyone learned anything. Most platforms cannot tell the difference between a learner who mastered a module and one who guessed through it.',
        },
        {
          title: 'Training does not connect to business outcomes',
          body: 'L&D teams struggle to show ROI because traditional platforms cannot link learning activity to performance metrics, skill development, or business results. Budget justification becomes guesswork.',
        },
      ],
    },
    solution: {
      heading: 'An LMS that thinks like a great teacher',
      desc: 'We build AI Driven LMS solutions that continuously assess each learner\'s knowledge state, adapt the content sequence in real time, and surface exactly the right material at exactly the right moment. The system gets smarter with every interaction — building a personalized learning model for every individual in your organization.',
    },
    features: [
      {
        icon: '🤖',
        title: 'Adaptive Learning Engine',
        desc: 'The AI continuously models each learner\'s knowledge gaps, learning velocity, and content preferences. Course paths adapt dynamically — skipping material they already know, reinforcing areas where they struggle.',
      },
      {
        icon: '📝',
        title: 'AI Content Generation',
        desc: 'Generate quizzes, summaries, flashcards, and practice scenarios automatically from your existing training materials. Keep content fresh without the manual authoring overhead.',
      },
      {
        icon: '📈',
        title: 'Predictive Performance Analytics',
        desc: 'The system identifies learners at risk of falling behind before they do — enabling proactive intervention rather than reactive remediation. Managers get early warning dashboards with actionable recommendations.',
      },
      {
        icon: '🎮',
        title: 'Gamification & Engagement Mechanics',
        desc: 'Skill trees, achievement badges, leaderboards, and streak mechanics turn mandatory training into something people actually want to complete. Engagement rates increase by an average of 180% within the first month.',
      },
      {
        icon: '📱',
        title: 'Mobile-First, Offline-Capable',
        desc: 'Learning happens anywhere. Our mobile apps support offline content consumption and sync progress when connectivity returns — critical for field teams, manufacturing floors, and distributed workforces.',
      },
      {
        icon: '🔗',
        title: 'HRIS & SCORM Integration',
        desc: 'Connects to your HR systems (Workday, BambooHR, SAP), automatically enrolls new hires in required training, and exports SCORM-compatible reports for compliance documentation.',
      },
    ],
    howItWorks: [
      {
        step: '01',
        title: 'We audit your current training',
        desc: 'Our team reviews your existing content, identifies gaps, maps learning objectives to job roles, and defines the competency framework the AI will optimize toward.',
      },
      {
        step: '02',
        title: 'Content ingestion and AI training',
        desc: 'We ingest your existing materials, structure them into learning objects, and train the adaptive engine on your specific content domain and learner population.',
      },
      {
        step: '03',
        title: 'Launch and baseline',
        desc: 'We deploy the platform, run initial assessments to establish each learner\'s baseline knowledge state, and activate personalized learning paths for every user.',
      },
      {
        step: '04',
        title: 'Continuous optimization',
        desc: 'The AI improves its personalization model as learners interact with content. We review analytics monthly and refine the competency framework as your business evolves.',
      },
    ],
    useCases: [
      {
        industry: 'Corporate Training',
        title: 'Sales team enablement at scale',
        desc: 'A 500-person sales organization reduced onboarding time from 12 weeks to 6 weeks using our AI Driven LMS. New reps reached quota attainment 47% faster. The AI identified that product knowledge gaps — not process knowledge — were the primary driver of early churn among new hires.',
        img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=340&fit=crop',
      },
      {
        industry: 'Healthcare',
        title: 'Compliance training with zero tolerance for gaps',
        desc: 'A hospital network deployed our LMS to manage mandatory compliance training for 3,000 clinical staff. Completion rates increased from 71% to 97%. The predictive analytics flagged 140 staff members who were likely to miss deadlines two weeks before the compliance window closed, enabling targeted outreach.',
        img: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=340&fit=crop',
      },
      {
        industry: 'EdTech Platforms',
        title: 'B2C learning product with AI tutoring',
        desc: 'An online education startup integrated our adaptive engine into their existing course catalog. Average course completion rates jumped from 18% (industry average) to 61%. Learner NPS increased by 38 points in the first quarter after launch.',
        img: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=600&h=340&fit=crop',
      },
    ],
    cta: {
      heading: 'Transform how your organization learns.',
      desc: 'Whether you are building an edtech product from scratch or overhauling corporate training, we architect and deliver the AI Driven LMS that moves the needle on real business outcomes.',
    },
  },

  {
    slug: 'platform-analyzer',
    title: 'Platform Analyzer',
    tagline: 'Every data source. One intelligence layer. Decisions you can trust.',
    heroDesc: 'Platform Analyzer is a business intelligence and ML-powered analytics platform that pulls data from every corner of your operation, surfaces the patterns that matter, and delivers the clarity your leadership team needs to act with confidence — not gut feel.',
    heroImg: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=520&fit=crop',
    metaDesc: 'Platform Analyzer by Softmakr: a business intelligence platform combining multi-source data aggregation, ML-powered anomaly detection, and executive dashboards for data-driven decisions.',
    stats: [
      { value: '80%', label: 'Faster insight generation' },
      { value: '12+', label: 'Data sources unified in one view' },
      { value: '35%', label: 'Average cost savings identified in year one' },
      { value: '<2s', label: 'Dashboard load time at any scale' },
    ],
    problem: {
      heading: 'Data everywhere. Insight nowhere.',
      desc: 'Most businesses collect more data than ever before and understand their operations less than ever before. Sales data lives in Salesforce. Operations data lives in spreadsheets. Marketing data lives in five different ad platforms. Customer data lives in your CRM. Nobody has a complete picture, so leadership makes million-dollar decisions from incomplete dashboards and weekly reports that are already outdated by the time they are read.',
      points: [
        {
          title: 'Fragmented data creates blind spots',
          body: 'When your data lives in silos, you cannot see the connections that matter: how a supply chain delay affects customer satisfaction, or how a marketing campaign shift ripples through revenue weeks later.',
        },
        {
          title: 'Dashboards built on stale data',
          body: 'Most BI tools show you what happened last week. Platform Analyzer shows you what is happening now — and what is likely to happen next week if current trends hold.',
        },
        {
          title: 'Analysts spend 80% of their time on data prep',
          body: 'Your data team is expensive. Most of their time is spent cleaning, joining, and moving data — not analysing it. Every hour on data wrangling is an hour not spent on insight.',
      },
      ],
    },
    solution: {
      heading: 'A unified intelligence layer for your entire operation',
      desc: 'We build Platform Analyzer as a custom business intelligence platform for your specific data landscape. We connect every source, build the data pipelines, apply ML models for anomaly detection and forecasting, and deliver executive-ready dashboards that update in real time — without anyone manually pulling reports.',
    },
    features: [
      {
        icon: '🔄',
        title: 'Universal Data Connectors',
        desc: 'Native connectors for Salesforce, HubSpot, Stripe, PostgreSQL, MySQL, BigQuery, Snowflake, Google Analytics, Meta Ads, and 40+ more. Custom API connectors for proprietary systems. Data flows in automatically — no manual exports.',
      },
      {
        icon: '🤖',
        title: 'ML-Powered Anomaly Detection',
        desc: 'Our models learn your data\'s normal patterns and alert you the moment something deviates — a revenue spike, an unusual churn cluster, a cost overrun before it compounds. Know about problems before your customers do.',
      },
      {
        icon: '🔮',
        title: 'Predictive Forecasting',
        desc: 'Revenue forecasts, demand predictions, inventory projections, and staffing recommendations based on ML models trained on your historical data. Plan with numbers, not estimates.',
      },
      {
        icon: '📊',
        title: 'Executive Dashboards, Built for Decisions',
        desc: 'Dashboards designed around the decisions your leadership team actually makes — not generic charts. Each view is crafted for a specific role: CEO, CFO, Head of Sales, Operations Director.',
      },
      {
        icon: '⚡',
        title: 'Real-Time Data Pipeline',
        desc: 'Built on Apache Kafka and Apache Flink for sub-second data ingestion and processing. Your dashboards reflect the current state of your business — not a snapshot from this morning\'s batch job.',
      },
      {
        icon: '🛡️',
        title: 'Data Governance Built In',
        desc: 'Column-level access controls, full audit logging, PII detection and masking, GDPR-compliant data handling, and end-to-end encryption. Your data assets are protected without slowing down access for authorized users.',
      },
    ],
    howItWorks: [
      {
        step: '01',
        title: 'Data source audit and mapping',
        desc: 'We catalogue every data source in your organization, assess data quality, identify the KPIs that matter to each stakeholder, and design the unified data model.',
      },
      {
        step: '02',
        title: 'Pipeline architecture and build',
        desc: 'Our data engineers build the ingestion pipelines, transformation logic, and warehouse schema. We handle the complexity — you get clean, reliable data.',
      },
      {
        step: '03',
        title: 'ML model training and deployment',
        desc: 'We train anomaly detection and forecasting models on your historical data, validate them against known outcomes, and deploy them into your live data pipeline.',
      },
      {
        step: '04',
        title: 'Dashboard delivery and handover',
        desc: 'We build and deliver every dashboard, train your team on the platform, document the data definitions, and hand over a system your analysts can extend independently.',
      },
    ],
    useCases: [
      {
        industry: 'E-commerce & Retail',
        title: 'Real-time revenue intelligence',
        desc: 'An e-commerce brand processing 50,000 daily orders used Platform Analyzer to unify sales, inventory, marketing, and logistics data. The anomaly detection flagged a fulfilment centre bottleneck on a Tuesday afternoon — 9 hours before it would have caused $200K in delayed shipments. Executive dashboards replaced 6 manually-compiled weekly reports.',
        img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=340&fit=crop',
      },
      {
        industry: 'FinTech & Banking',
        title: 'Fraud pattern detection at transaction speed',
        desc: 'A digital bank integrated Platform Analyzer\'s ML pipeline into their transaction stream. The anomaly detection models flagged 94% of fraudulent transactions within 800ms of occurrence — enabling automated blocks before funds left the platform. False positive rates were reduced by 60% versus their previous rule-based system.',
        img: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=340&fit=crop',
      },
      {
        industry: 'SaaS & Technology',
        title: 'Churn prediction and revenue forecasting',
        desc: 'A B2B SaaS company used Platform Analyzer to build a customer health score model across 28 product usage signals. The model identified at-risk accounts an average of 47 days before they churned — giving customer success teams enough lead time to intervene. First-year churn reduced by 22%.',
        img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=340&fit=crop',
      },
    ],
    cta: {
      heading: 'Stop flying blind. Start deciding with data.',
      desc: 'We design, build, and deliver a Platform Analyzer tailored to your business data landscape — fully operational, production-hardened, and ready to surface the insights that drive your next growth stage.',
    },
  },
];
