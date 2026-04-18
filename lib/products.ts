export type PricingTier = {
  name: string;
  price: string;
  period?: string;
  features: string[];
};

export type Product = {
  slug: string;
  productId: string;
  name: string;
  tagline: string;
  description: string;
  brand: string;
  vendor: string;
  logo: string;
  heroImage: string;
  screenshots: { url: string; caption: string }[];
  features: { title: string; description: string }[];
  useCases: { title: string; description: string }[];
  integrations: { name: string; description: string }[];
  howToUse: { step: number; title: string; description: string }[];
  faq: { question: string; answer: string }[];
  pricing: {
    model: "free" | "contact" | "tiered" | "usage";
    tiers?: PricingTier[];
    note?: string;
  };
  apiDocUrl?: string;
  tryItUrl?: string;
  buyItUrl?: string;
  highlights: string[];
  cta: string;
};

const VENDOR = "OpenAutonomyx";
const BRAND = "OpenAutonomyx";

export const products: Product[] = [
  {
    slug: "fast-saas-toolkit",
    productId: "OAX-FST-001",
    name: "Fast SaaS Toolkit",
    tagline: "Ship production-ready SaaS in days, not quarters.",
    description:
      "Pre-wired foundations for multi-tenant SaaS — auth, billing, admin, audit, observability. Fork, configure, deploy. You focus on the product your customers pay for.",
    brand: BRAND,
    vendor: VENDOR,
    logo: "/logos/fast-saas-toolkit.svg",
    heroImage: "/hero/fast-saas-toolkit.png",
    screenshots: [
      { url: "/shots/fst-tenant-admin.png", caption: "Tenant administration" },
      { url: "/shots/fst-billing.png", caption: "Lago billing integration" },
      { url: "/shots/fst-observability.png", caption: "Built-in observability" },
    ],
    features: [
      { title: "Multi-tenant from day one", description: "Keycloak SSO, tenant isolation, per-tenant config, usage-based billing via Lago. No retrofitting." },
      { title: "Governed by default", description: "OpenFGA authorization, OPA policy checks, full audit trail. Enterprise-ready without enterprise headaches." },
      { title: "Self-hosted or managed", description: "Runs on Docker, Kubernetes, or your VPS. Same code, same behavior, anywhere." },
      { title: "Observability built-in", description: "Prometheus, Grafana, Langfuse, OpenTelemetry — wired before you write your first endpoint." },
      { title: "22 services pre-wired", description: "Postgres, Redis, Langflow, Keycloak, Lago, Langfuse, Grafana, MinIO, and more — all compose-orchestrated." },
      { title: "Zero vendor lock-in", description: "Every component is open-source. Swap any piece without losing your codebase." },
    ],
    useCases: [
      { title: "AI SaaS startup", description: "Launch an AI product with multi-tenant billing, auth, and observability on day one — no infra distractions." },
      { title: "Internal enterprise tool", description: "Stand up a governed internal platform with SSO, audit, and role-based access in hours, not sprints." },
      { title: "ISV accelerator", description: "Package your vertical SaaS with a reusable foundation so each customer deploy looks identical." },
    ],
    integrations: [
      { name: "Keycloak", description: "Identity and SSO" },
      { name: "Lago", description: "Metered billing and invoicing" },
      { name: "OpenFGA", description: "Fine-grained authorization" },
      { name: "OPA", description: "Policy as code" },
      { name: "Langfuse", description: "LLM observability and tracing" },
      { name: "Prometheus + Grafana", description: "Metrics and dashboards" },
    ],
    howToUse: [
      { step: 1, title: "Fork the repo", description: "One-click fork from github.com/openautonomyx, clone locally." },
      { step: 2, title: "Configure env", description: "Copy .env.example, fill in tenant defaults, payment keys, SMTP." },
      { step: 3, title: "Deploy", description: "`docker compose up -d` on any Linux VPS, or `helm install` on Kubernetes." },
      { step: 4, title: "Onboard your first tenant", description: "One API call creates a tenant with isolated auth, billing, and storage." },
    ],
    faq: [
      { question: "Is Fast SaaS Toolkit open-source?", answer: "Yes — all components are open-source or MIT/Apache-licensed. You can self-host entirely." },
      { question: "Can I swap components?", answer: "Yes. Every service is behind a stable interface. Replace Keycloak with your IdP, Lago with Stripe, etc." },
      { question: "Does it support Kubernetes?", answer: "Yes. Compose for dev, Helm charts for production. Same config across both." },
      { question: "Who is this for?", answer: "SaaS founders, ISVs, and internal platform teams who want enterprise primitives without building them." },
    ],
    pricing: {
      model: "tiered",
      tiers: [
        { name: "Open Source", price: "Free", features: ["Self-host anywhere", "All core components", "Community support"] },
        { name: "Team", price: "$499", period: "/month", features: ["Hosted by Autonomyx", "Up to 10 tenants", "Business-hours support", "SLA 99.5%"] },
        { name: "Enterprise", price: "Contact us", features: ["Unlimited tenants", "Dedicated deployment", "24/7 support", "SLA 99.99%", "Compliance support"] },
      ],
    },
    apiDocUrl: "https://api-docs.openautonomyx.com/fast-saas-toolkit",
    tryItUrl: "https://github.com/openautonomyx/fast-saas-toolkit",
    buyItUrl: "mailto:chinmay@openautonomyx.com?subject=Fast%20SaaS%20Toolkit%20purchase",
    highlights: ["22 pre-wired services", "One command deploy", "Per-tenant metered billing", "Zero vendor lock-in"],
    cta: "Start building",
  },
  {
    slug: "decision-intelligence-platform",
    productId: "OAX-DIP-002",
    name: "Decision Intelligence Platform",
    tagline: "From signals to decisions to outcomes — governed, auditable, explainable.",
    description:
      "An autonomous decision layer that ingests signals, applies policy, consults models, and executes actions — with a full audit trail every step of the way.",
    brand: BRAND,
    vendor: VENDOR,
    logo: "/logos/dip.svg",
    heroImage: "/hero/dip.png",
    screenshots: [
      { url: "/shots/dip-decision-flow.png", caption: "Decision flow designer" },
      { url: "/shots/dip-audit.png", caption: "Immutable audit trail" },
      { url: "/shots/dip-explain.png", caption: "Per-decision explanations" },
    ],
    features: [
      { title: "Policy-as-code", description: "Decision rules expressed in OPA. Version-controlled. Reviewable. Hot-reloaded without restart." },
      { title: "Model-augmented reasoning", description: "LLMs where they add value — summarization, classification, extraction. Deterministic logic where they don't." },
      { title: "Human-in-the-loop", description: "Configurable approval thresholds. Agents propose, humans dispose. Defer to experts when confidence is low." },
      { title: "Explainable by construction", description: "Every decision traces back to the signals, rules, and model outputs that produced it. Regulator-ready." },
      { title: "Pluggable connectors", description: "Read signals from Kafka, Pub/Sub, webhooks, databases. Write decisions anywhere." },
      { title: "Temporal-aware", description: "Reason over time — decisions can depend on what happened last week, not just the current event." },
    ],
    useCases: [
      { title: "Credit underwriting", description: "Combine credit bureau signals, alternative data, and policy rules into explainable approval decisions." },
      { title: "Fraud triage", description: "Score and route fraud alerts using a mix of rules, models, and human review based on confidence." },
      { title: "Contract risk review", description: "Parse contracts, extract clauses, check against policy, flag for legal review with full context." },
    ],
    integrations: [
      { name: "OPA", description: "Open Policy Agent for rule evaluation" },
      { name: "Autonomyx Model Gateway", description: "LLM inference" },
      { name: "Langfuse", description: "Decision tracing and metrics" },
      { name: "Kafka / Pub/Sub", description: "Signal ingestion" },
      { name: "Temporal", description: "Workflow durability" },
    ],
    howToUse: [
      { step: 1, title: "Define your policy", description: "Write decision rules in OPA Rego — reviewable, testable, versionable." },
      { step: 2, title: "Wire signals", description: "Connect your event streams, databases, and APIs as inputs." },
      { step: 3, title: "Configure confidence thresholds", description: "Set where to auto-decide vs. escalate to human review." },
      { step: 4, title: "Deploy + observe", description: "Every decision is traced end-to-end. Review, tune, rinse, repeat." },
    ],
    faq: [
      { question: "Is this a rules engine or a model?", answer: "Both. Rules handle the deterministic parts, models handle the fuzzy parts, and the platform orchestrates when each applies." },
      { question: "Can it explain a specific decision?", answer: "Yes — every decision carries its full derivation: inputs, rules fired, model outputs, confidence scores." },
      { question: "Is the audit log tamper-proof?", answer: "Append-only storage with cryptographic hashing. Regulator-grade." },
      { question: "Does it replace my current workflow engine?", answer: "It complements it. The DIP handles decisions; workflow engines handle multi-step orchestration." },
    ],
    pricing: {
      model: "contact",
      note: "Priced per decision volume and deployment shape. Contact us for a quote.",
    },
    apiDocUrl: "https://api-docs.openautonomyx.com/decision-intelligence",
    tryItUrl: "mailto:chinmay@openautonomyx.com?subject=DIP%20trial",
    buyItUrl: "mailto:chinmay@openautonomyx.com?subject=DIP%20purchase",
    highlights: ["OPA + OpenFGA native", "Any LLM via gateway", "Approval workflows", "Immutable audit log"],
    cta: "See how decisions flow",
  },
  {
    slug: "entity-search",
    productId: "OAX-ES-003",
    name: "Entity Search",
    tagline: "Find the real entity behind the name — across languages, spellings, sources.",
    description:
      "Hybrid semantic + structured search across companies, people, and organizations. Resolve fuzzy matches, deduplicate records, enrich with public data.",
    brand: BRAND,
    vendor: VENDOR,
    logo: "/logos/entity-search.svg",
    heroImage: "/hero/entity-search.png",
    screenshots: [
      { url: "/shots/es-search.png", caption: "Multi-source entity resolution" },
      { url: "/shots/es-graph.png", caption: "Entity relationship graph" },
      { url: "/shots/es-confidence.png", caption: "Confidence-scored matches" },
    ],
    features: [
      { title: "Fuzzy at scale", description: "Handles transliterations, phonetic variants, abbreviations, and typos without hand-tuning rules." },
      { title: "Multi-source resolution", description: "Unifies public registries, sanctions lists, social graphs, and your private data into one canonical entity." },
      { title: "Explainable matches", description: "Every match comes with a confidence score and the features that drove it — no black-box ranking." },
      { title: "Real-time enrichment", description: "Pull the latest filings, news, and signals on demand via the entity graph — not stale snapshots." },
      { title: "22+ languages", description: "Built with Indian, Arabic, and Southeast Asian names in mind. Not just Latin-script English." },
      { title: "Deduplication pipeline", description: "Feed in messy data, get clean canonical records out. Runs as batch or streaming." },
    ],
    useCases: [
      { title: "KYC / onboarding", description: "Resolve prospective customers against sanctions, PEP, and corporate registries with confidence scores." },
      { title: "Master data management", description: "Dedupe your CRM, ERP, and data warehouse — unify records across systems." },
      { title: "Investigative research", description: "Find related entities across jurisdictions — beneficial owners, shell structures, shared addresses." },
    ],
    integrations: [
      { name: "OpenSanctions", description: "Global sanctions and PEP data" },
      { name: "OpenCorporates", description: "Company registrations worldwide" },
      { name: "Salesforce / HubSpot", description: "CRM record enrichment" },
      { name: "Neo4j", description: "Graph backend option" },
      { name: "MCP", description: "Agent-native access" },
    ],
    howToUse: [
      { step: 1, title: "Load your entity corpus", description: "Import CSV, connect a DB, or stream via Kafka — whatever you have." },
      { step: 2, title: "Run resolution", description: "Search by name, ID, or partial signal — get ranked candidates with confidence." },
      { step: 3, title: "Enrich on demand", description: "Ask for more context — filings, news, related entities — fetched live." },
      { step: 4, title: "Integrate via API", description: "Embed in your app, CRM, or agent via REST, GraphQL, or MCP." },
    ],
    faq: [
      { question: "What languages does it handle?", answer: "22+ — including Hindi, Tamil, Bengali, Arabic, Thai, Vietnamese, Indonesian, plus all major European languages." },
      { question: "Is customer data sent to external services?", answer: "Only when you explicitly enrich. All core matching runs locally / on your infrastructure." },
      { question: "How fresh is the public data?", answer: "Sanctions and PEP lists refresh daily. Company data weekly. You can also push real-time updates." },
      { question: "Can I use it for agent tools?", answer: "Yes — MCP server built in. Agents can search and enrich as tool calls." },
    ],
    pricing: {
      model: "usage",
      note: "Priced per resolved entity per month. Volume discounts apply.",
      tiers: [
        { name: "Starter", price: "$0.02", period: "/resolution", features: ["Up to 100K resolutions/mo", "Public sources", "API + MCP access"] },
        { name: "Growth", price: "$0.01", period: "/resolution", features: ["Up to 1M resolutions/mo", "Private sources", "Custom enrichment"] },
        { name: "Enterprise", price: "Contact us", features: ["Unlimited volume", "On-prem deployment", "Custom sources", "24/7 support"] },
      ],
    },
    apiDocUrl: "https://api-docs.openautonomyx.com/entity-search",
    tryItUrl: "https://entity-search.openautonomyx.com/demo",
    buyItUrl: "mailto:chinmay@openautonomyx.com?subject=Entity%20Search%20purchase",
    highlights: ["22+ languages", "Public + private sources", "Confidence-scored results", "API + UI + MCP"],
    cta: "Search for an entity",
  },
  {
    slug: "deep-agent",
    productId: "OAX-DA-004",
    name: "Deep Agent",
    tagline: "A research-grade agent that plans, acts, and verifies — with a filesystem and subagents.",
    description:
      "Deep Agent tackles complex, multi-step work — research, analysis, drafting — with planning, a persistent filesystem, and the ability to spawn specialized subagents.",
    brand: BRAND,
    vendor: VENDOR,
    logo: "/logos/deep-agent.svg",
    heroImage: "/hero/deep-agent.png",
    screenshots: [
      { url: "/shots/da-plan.png", caption: "Plan visualization" },
      { url: "/shots/da-subagents.png", caption: "Parallel subagent dispatch" },
      { url: "/shots/da-workspace.png", caption: "Persistent workspace" },
    ],
    features: [
      { title: "Plans before it acts", description: "Breaks ambitious tasks into checkable steps. Revises the plan as it learns. No runaway loops." },
      { title: "Persistent workspace", description: "A filesystem the agent reads, writes, and reasons over. State survives across sessions." },
      { title: "Subagent dispatch", description: "Spawns focused subagents for parallel research, verification, or synthesis. Merges their output." },
      { title: "Any model, any tool", description: "Runs on any LLM via the Autonomyx Model Gateway. Tools via MCP. No vendor lock-in." },
      { title: "Verification passes", description: "Self-checks its own work — fact-checks citations, tests generated code, validates schemas." },
      { title: "Streaming observability", description: "Watch every thought, tool call, and subagent in real time. Pause, redirect, or kill at any step." },
    ],
    useCases: [
      { title: "Market research", description: "Gather and synthesize information across 50+ sources into a structured brief — with citations." },
      { title: "Due diligence", description: "Investigate a company end-to-end: filings, news, relationships, risks. Produces a verifiable report." },
      { title: "Code refactoring", description: "Plan, execute, and verify large refactors across a codebase with subagent parallelism." },
    ],
    integrations: [
      { name: "MCP servers", description: "Any MCP tool becomes an agent capability" },
      { name: "Autonomyx Model Gateway", description: "Multi-model routing and observability" },
      { name: "Langfuse", description: "Trace every decision" },
      { name: "Git", description: "Version-controlled workspaces" },
      { name: "Temporal", description: "Long-running durable workflows" },
    ],
    howToUse: [
      { step: 1, title: "Describe the goal", description: "Natural language input — \"Research X and produce Y with constraints Z\"." },
      { step: 2, title: "Review the plan", description: "Agent proposes a plan. Approve, edit, or redirect before execution." },
      { step: 3, title: "Watch it work", description: "Live stream of subagent activity, tool calls, and workspace changes." },
      { step: 4, title: "Collect the output", description: "Structured deliverable — report, code, analysis — with full provenance." },
    ],
    faq: [
      { question: "How is this different from ChatGPT / Claude?", answer: "Chat assistants are conversational. Deep Agent plans, persists state, dispatches parallel workers, and verifies its output — designed for multi-hour tasks, not chat turns." },
      { question: "What LLM does it use?", answer: "Any — routed via the Autonomyx Model Gateway. Open-source models for cost, frontier models where they help." },
      { question: "Can I kill a runaway agent?", answer: "Yes. Hard budget limits on time, money, and actions. Pause/kill from the UI any time." },
      { question: "Is my workspace private?", answer: "Yes. Workspaces are isolated per tenant, encrypted at rest. Only you and agents you authorize can access." },
    ],
    pricing: {
      model: "tiered",
      tiers: [
        { name: "Developer", price: "$49", period: "/month", features: ["Up to 100 agent-hours/mo", "All core features", "Community support"] },
        { name: "Team", price: "$499", period: "/month", features: ["Up to 1,000 agent-hours/mo", "Private workspaces", "Priority support"] },
        { name: "Enterprise", price: "Contact us", features: ["Unlimited hours", "Dedicated infra", "SLA + 24/7 support", "Custom tools"] },
      ],
    },
    apiDocUrl: "https://api-docs.openautonomyx.com/deep-agent",
    tryItUrl: "https://deep-agent.openautonomyx.com",
    buyItUrl: "mailto:chinmay@openautonomyx.com?subject=Deep%20Agent%20purchase",
    highlights: ["Planning + revision", "Persistent filesystem", "Parallel subagents", "MCP-native"],
    cta: "Spin up an agent",
  },
  {
    slug: "fraud-database",
    productId: "OAX-FDB-005",
    name: "Fraud Database",
    tagline: "A curated graph of fraud signals — entities, patterns, and typologies.",
    description:
      "Continuously updated database of fraudulent entities, typologies, and indicators — structured for query, API access, and agent consumption.",
    brand: BRAND,
    vendor: VENDOR,
    logo: "/logos/fraud-db.svg",
    heroImage: "/hero/fraud-db.png",
    screenshots: [
      { url: "/shots/fdb-query.png", caption: "SQL + GraphQL query console" },
      { url: "/shots/fdb-typologies.png", caption: "Typology library" },
      { url: "/shots/fdb-graph.png", caption: "Entity-relationship graph" },
    ],
    features: [
      { title: "Structured signals", description: "Entities, relationships, typologies — queryable via SQL, GraphQL, or an agent-friendly MCP server." },
      { title: "Provenance-tracked", description: "Every signal carries its source, date, and confidence. You decide what to trust." },
      { title: "Typology library", description: "Pre-identified fraud patterns — invoice fraud, synthetic identity, circular trading — updated as new ones emerge." },
      { title: "Privacy-respecting", description: "No personal data retention beyond what's legally required. Anonymized pattern indicators by default." },
      { title: "Daily refreshes", description: "New signals ingested daily from open intelligence, regulator actions, and partner contributions." },
      { title: "Agent-ready", description: "MCP server exposes every query as a tool — agents can lookup fraud signals inline." },
    ],
    useCases: [
      { title: "Transaction monitoring", description: "Enrich payment events with fraud signals at decision time — block or step-up auth." },
      { title: "Vendor onboarding", description: "Check a new vendor against known fraud networks before issuing a PO." },
      { title: "Insurance claims review", description: "Flag claims involving entities linked to known fraud patterns." },
    ],
    integrations: [
      { name: "Entity Search", description: "Resolve names to canonical IDs" },
      { name: "Trust Score", description: "Feed into composite scoring" },
      { name: "Neo4j / ArangoDB", description: "Graph-native query" },
      { name: "Kafka", description: "Streaming signal ingestion" },
      { name: "MCP", description: "Agent tool access" },
    ],
    howToUse: [
      { step: 1, title: "Get API credentials", description: "Sign up, receive a scoped API token." },
      { step: 2, title: "Query by entity", description: "Lookup a name, ID, or wallet address — get known associations and confidence." },
      { step: 3, title: "Subscribe to patterns", description: "Watch for new signals matching your risk typologies." },
      { step: 4, title: "Integrate with your pipeline", description: "REST, GraphQL, Kafka, or MCP — pick the shape that fits." },
    ],
    faq: [
      { question: "Where does the data come from?", answer: "Regulatory actions, court filings, open-source intelligence, partner contributions — every entry carries provenance." },
      { question: "Can we contribute signals?", answer: "Yes — contributors get reduced API pricing and priority on signal types they submit." },
      { question: "Is the data personally identifying?", answer: "Minimal. We anonymize where possible and retain only what's legally useful for fraud detection." },
      { question: "What's the SLA on freshness?", answer: "Daily refresh on public signals. Real-time via webhooks for high-severity additions." },
    ],
    pricing: {
      model: "usage",
      note: "Priced per query. Flat-rate plans available.",
      tiers: [
        { name: "Starter", price: "$0.05", period: "/query", features: ["Up to 50K queries/mo", "Public signals", "REST + MCP access"] },
        { name: "Professional", price: "$0.02", period: "/query", features: ["Up to 1M queries/mo", "Partner signals", "Streaming updates"] },
        { name: "Enterprise", price: "Contact us", features: ["Unlimited queries", "Custom signal sources", "SLA + 24/7 support"] },
      ],
    },
    apiDocUrl: "https://api-docs.openautonomyx.com/fraud-database",
    tryItUrl: "https://fraud-db.openautonomyx.com/demo",
    buyItUrl: "mailto:chinmay@openautonomyx.com?subject=Fraud%20DB%20purchase",
    highlights: ["Graph-native", "MCP server included", "Typology library", "Provenance on every row"],
    cta: "Query the database",
  },
  {
    slug: "trust-score",
    productId: "OAX-TS-006",
    name: "Trust Score",
    tagline: "A composite trust signal for the entities you do business with.",
    description:
      "Rolls up entity search, fraud signals, decision rules, and real-time enrichment into a single, explainable score — with drill-down into what drove it.",
    brand: BRAND,
    vendor: VENDOR,
    logo: "/logos/trust-score.svg",
    heroImage: "/hero/trust-score.png",
    screenshots: [
      { url: "/shots/ts-score.png", caption: "Composite score with drill-down" },
      { url: "/shots/ts-weights.png", caption: "Configurable component weights" },
      { url: "/shots/ts-history.png", caption: "Score history over time" },
    ],
    features: [
      { title: "Composite, not black-box", description: "Every score is the sum of visible components — compliance, fraud signals, stability, verification." },
      { title: "Configurable weights", description: "Your risk model isn't ours. Tune component weights to match your policy." },
      { title: "Real-time updates", description: "Scores refresh as underlying signals change. No stale snapshots used for live decisions." },
      { title: "Integrates everywhere", description: "Use via API, embed in your KYC flow, or let an agent use it as a tool call." },
      { title: "Historic tracking", description: "See how a score moved over time — useful for ongoing monitoring and alerts." },
      { title: "Multi-entity types", description: "Companies, people, wallets, domains — one score model, many entity shapes." },
    ],
    useCases: [
      { title: "Customer onboarding gate", description: "Auto-approve high-trust entities, review medium, reject low — with policy-driven thresholds." },
      { title: "Vendor risk", description: "Continuously monitor your vendor portfolio for score drops and alert on threshold breaches." },
      { title: "Marketplace trust", description: "Surface trust signals to buyers or let algorithms rank supply based on scoring." },
    ],
    integrations: [
      { name: "Entity Search", description: "Entity resolution upstream" },
      { name: "Fraud Database", description: "Fraud signal input" },
      { name: "Decision Intelligence Platform", description: "Use scores in decision rules" },
      { name: "Webhooks", description: "Alert on score changes" },
      { name: "MCP", description: "Agent tool access" },
    ],
    howToUse: [
      { step: 1, title: "Define your trust model", description: "Pick components (compliance, fraud, stability, verification), set weights." },
      { step: 2, title: "Look up an entity", description: "Submit a name or ID — get a score, components, and explanation." },
      { step: 3, title: "Subscribe to changes", description: "Set alert thresholds — we webhook you when a score crosses them." },
      { step: 4, title: "Embed or integrate", description: "Use the score API in your app, or let agents query it as a tool." },
    ],
    faq: [
      { question: "How is the score calculated?", answer: "A weighted sum of signal components — fully visible. You can inspect every input and weight." },
      { question: "How fresh is a score?", answer: "Recomputed on every query. Underlying signals refresh daily (compliance) to real-time (fraud alerts)." },
      { question: "Can I use my own signals?", answer: "Yes — bring your own components with your weights, alongside ours." },
      { question: "Is this a regulated credit score?", answer: "No — Trust Score is for business risk, not consumer credit decisions subject to FCRA or equivalents." },
    ],
    pricing: {
      model: "tiered",
      tiers: [
        { name: "Starter", price: "$99", period: "/month", features: ["Up to 10K scores/mo", "Standard components", "API + UI access"] },
        { name: "Team", price: "$999", period: "/month", features: ["Up to 500K scores/mo", "Custom weights", "Webhook alerts"] },
        { name: "Enterprise", price: "Contact us", features: ["Unlimited scores", "Custom components", "SLA + 24/7 support"] },
      ],
    },
    apiDocUrl: "https://api-docs.openautonomyx.com/trust-score",
    tryItUrl: "https://trust-score.openautonomyx.com/demo",
    buyItUrl: "mailto:chinmay@openautonomyx.com?subject=Trust%20Score%20purchase",
    highlights: ["Composite score", "Drill-down explanations", "Policy-configurable", "API + UI + MCP"],
    cta: "See a sample score",
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
