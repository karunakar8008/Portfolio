// ============================================================================
//  PORTFOLIO CONTENT  —  Karunakar Gudipudi
//  Everything the site displays lives here. Edit this one file to update text,
//  skills, experience, projects, certifications, and education.
//  (The chatbot's knowledge is in  api/_resume-context.js  — update both when
//   your résumé changes.)
// ============================================================================

export const profile = {
  name: "Karunakar Gudipudi",
  role: "Senior .NET Full Stack Developer",
  // Rotating taglines shown with a typing effect in the hero.
  taglines: [
    "I build scalable .NET & cloud-native platforms.",
    "12 years turning enterprise requirements into shipped software.",
    "APIs, React front-ends, and Azure — end to end.",
  ],
  summary:
    "Senior .NET Full Stack Developer with 12 years building scalable, secure enterprise web platforms across banking, financial services, insurance, and research publishing — specializing in .NET 6–8, React, Azure, and event-driven microservices.",
  location: "United States",
  email: "gudipudikarunakar9@gmail.com",
  phone: "614-427-2436", // Remove this line if you'd rather not list a phone number publicly.
  resumeUrl: "#", // Put your résumé in /public (e.g. /resume.pdf) and set this to "/resume.pdf".
};

export const socials = [
  // ↓ Replace these with your real profile URLs.
  { label: "LinkedIn", url: "https://linkedin.com/in/your-handle", icon: "linkedin" },
  { label: "GitHub", url: "https://github.com/your-handle", icon: "github" },
  { label: "Email", url: "mailto:gudipudikarunakar9@gmail.com", icon: "mail" },
];

// --- Professional summary section -------------------------------------------
export const summary = {
  heading: "Professional Summary",
  lead:
    "12 years of full-stack .NET application development, specializing in scalable web solutions with .NET Core, React, and Azure in enterprise domains.",
  // Animated counters.
  stats: [
    { value: 12, suffix: "+", label: "Years experience" },
    { value: 6, suffix: "", label: "Enterprise clients" },
    { value: 4, suffix: "", label: "Industry domains" },
    { value: 2, suffix: "", label: "Cloud certifications" },
  ],
  // Highlight cards — the strongest points distilled from the résumé.
  highlights: [
    "Design and modernize web portals with React (v16–18), secure REST APIs, and accessible, responsive UI.",
    "Build reusable APIs with MVC, .NET 6–8, and Web API, enforcing layered, loosely-coupled architecture.",
    "Deliver cloud-native microservices on Azure App Services, orchestrated through Azure DevOps and IaC.",
    "Ship serverless, event-driven features with Azure Functions, Event Grid, and Kafka.",
    "Apply design patterns — Repository, Mediator, DI, CQRS, Saga — for testable, maintainable systems.",
    "Deliver compliance & audit features aware of SOX, HIPAA, GDPR, FATCA, AML, and ISO standards.",
  ],
  domains: ["Banking", "Financial Services", "Insurance", "Research Publishing"],
};

// --- Skills -----------------------------------------------------------------
// Core competencies render as animated proficiency bars.
// `level` is a self-assessment: "Expert" | "Advanced" | "Proficient".
// Edit these freely — they're your own rating.
export const coreCompetencies = [
  { name: "C# / .NET 6–8 / .NET Core", level: "Expert" },
  { name: "ASP.NET Core Web API & REST", level: "Expert" },
  { name: "SQL Server / PostgreSQL / EF Core", level: "Advanced" },
  { name: "React (v16–18) & TypeScript", level: "Advanced" },
  { name: "Azure (App Services, Functions, APIM, DevOps)", level: "Advanced" },
  { name: "Microservices & Event-Driven (Kafka, Event Grid)", level: "Advanced" },
  { name: "CI/CD & IaC (Azure DevOps, GitHub Actions, Terraform)", level: "Advanced" },
  { name: "Cloud Security (OAuth2, JWT, Entra ID, Key Vault)", level: "Proficient" },
];

// Full skill inventory, grouped. Shown as filterable chip groups.
export const skillGroups = [
  { category: "Languages", items: ["C#", "T-SQL", "JavaScript", "TypeScript", "Python", "PowerShell", "JSON"] },
  { category: "Frameworks", items: [".NET 6/7/8", ".NET Core", "ASP.NET Core", "MVC", "Entity Framework Core"] },
  { category: "Front-End", items: ["React (v16–18)", "HTML5", "CSS3", "Bootstrap", "jQuery", "Material UI"] },
  { category: "Cloud & DevOps", items: ["Azure DevOps", "Azure App Service", "Azure Functions", "ARM Templates"] },
  { category: "Containerization", items: ["Docker", "Azure Container Registry", "Kubernetes (AKS)"] },
  { category: "Authentication", items: ["OAuth2", "JWT", "Azure AD / Entra ID"] },
  { category: "Messaging & Events", items: ["Kafka", "Azure Event Grid", "Service Bus"] },
  { category: "Databases", items: ["SQL Server", "PostgreSQL", "Cosmos DB", "MongoDB"] },
  { category: "Monitoring & Logging", items: ["Application Insights", "Log Analytics", "KQL"] },
  { category: "Automation & Scripting", items: ["ARM Templates", "PowerShell", "YAML", "GitHub Actions"] },
  { category: "Version Control & CI/CD", items: ["GitHub", "Azure Repos", "TFS", "Jenkins", "GitLab"] },
  { category: "Testing", items: ["NUnit", "xUnit", "MSTest", "Postman", "Swagger"] },
  { category: "Other Tools", items: ["Jira", "Confluence", "Fiddler", "SonarQube", "REST APIs"] },
];

// --- Experience (6 clients, most recent first) ------------------------------
export const experience = [
  {
    role: "Sr. .NET Full Stack Developer",
    company: "LPL Financial",
    location: "Fort Mill, SC",
    period: "Jan 2026 – Present",
    domain: "Financial Services",
    summary: "Enterprise-scale REST APIs on .NET 8 with Azure API Management and IaC.",
    bullets: [
      "Designed, built, and supported enterprise-scale RESTful APIs using .NET 8, ASP.NET Core Web API, C#, and PostgreSQL following multi-tier architecture and SOLID principles.",
      "Configured Azure API Management policies for auth, routing, transformation, caching, throttling, rate limiting, and standardized error handling.",
      "Implemented enterprise API security with OAuth 2.0, OpenID Connect, JWT, Microsoft Entra ID, Managed Identities, and Azure Key Vault.",
      "Built resilient downstream integrations with Refit — timeouts, retries, cancellation tokens, and standardized error mapping.",
      "Provisioned repeatable cloud infrastructure with Terraform/IaC and automated CI/CD via Azure DevOps and GitHub Actions.",
      "Established monitoring, distributed tracing, dashboards, and alerting with Azure Monitor and Application Insights.",
    ],
    tech: [".NET 8", "ASP.NET Core Web API", "PostgreSQL", "EF Core", "Azure APIM", "Azure Functions", "OAuth 2.0 / OIDC", "Entra ID", "Key Vault", "Terraform", "Azure DevOps", "GitHub Actions", "xUnit"],
  },
  {
    role: "Sr. .NET Full Stack Developer",
    company: "First Citizens Bank",
    location: "Raleigh, NC",
    period: "Aug 2024 – Dec 2025",
    domain: "Banking",
    summary: "React 18 banking UIs and .NET 8 microservices with Kafka event pipelines.",
    bullets: [
      "Developed front-end banking modules in React 18 with reusable components, context-based forms, and dynamic validation tied to real-time credit APIs.",
      "Built backend services in .NET Core — fraud detection modules and loan workflow engines — using FluentValidation and MediatR.",
      "Re-structured features into discrete microservices, applying CQRS and Saga patterns for consistent customer transactions and credit approvals.",
      "Developed Kafka-based pipelines integrating asynchronous microservices for real-time event triggers and banking rule engines.",
      "Deployed securely to Azure App Services with Key Vault for secrets and Azure AD for identity; automated via ARM templates.",
      "Optimized React performance with React.memo, lazy loading, and dynamic imports for large customer grids.",
    ],
    tech: ["React 18", ".NET 8", "ASP.NET Core", "Kafka", "Azure App Services", "Azure Functions", "Cosmos DB", "SQL Server", "MediatR", "Redux", "OAuth2", "ARM Templates", "Application Insights"],
  },
  {
    role: "Sr. .NET Full Stack Developer",
    company: "Elsevier Inc",
    location: "Philadelphia, PA",
    period: "Jan 2024 – Aug 2024",
    domain: "Research Publishing",
    summary: "Researcher submission platform — React 17 UIs and .NET 7 APIs, GDPR-aware.",
    bullets: [
      "Delivered modular UI features in React 17 — form rendering engines, dashboard widgets, and metadata-driven submission interfaces.",
      "Engineered robust backend APIs in .NET 7 with validation, OpenAPI documentation, and versioning in ASP.NET Core.",
      "Transformed monolithic workflows into microservices for researcher profiles, submission validation, and reviewer queues.",
      "Built Azure Functions with durable orchestrations for large file uploads, status updates, and researcher notifications.",
      "Used Cosmos DB change feeds to trigger metadata reindexing and push updates to React dashboard tiles.",
      "Aligned .NET APIs and Azure services with GDPR regulations alongside UX, editorial, and compliance teams.",
    ],
    tech: ["React 17", ".NET 7", "ASP.NET Core", "PostgreSQL", "Cosmos DB", "Azure App Services", "Azure Functions", "ARM Templates", "Azure DevOps", "OAuth2", "xUnit", "Swagger"],
  },
  {
    role: "Sr. .NET Full Stack Developer",
    company: "FIS",
    location: "Cincinnati, OH",
    period: "Dec 2022 – Dec 2023",
    domain: "Financial Services",
    summary: "Investment dashboards and trade-processing APIs — React/TS and .NET 8.",
    bullets: [
      "Built React-based investment dashboards for trade summaries, report filters, and portfolio visualizations using React 17 and TypeScript.",
      "Developed PWA-compatible UIs for transaction filtering, investor lookup, and trade reconciliation with real-time updates.",
      "Created robust REST APIs in .NET 8 for investor records, trade processing, and document uploads via JWT-authenticated routes.",
      "Decoupled financial reporting and validation into lightweight microservices with SQS and Azure Event Grid for async trade-lifecycle events.",
      "Applied repository and unit-of-work patterns, encapsulating database operations in reusable service classes.",
      "Maintained financial audit compliance with logging, data retention, and permission audit features.",
    ],
    tech: ["React 17", "TypeScript", ".NET 8", "ASP.NET Core", "Azure SQL", "Cosmos DB", "Azure Event Grid", "Docker", "Redux", "EF Core", "Azure DevOps", "Application Insights"],
  },
  {
    role: ".NET Full Stack Developer",
    company: "NTT Data",
    location: "Hyderabad, India",
    period: "Sep 2018 – Oct 2022",
    domain: "Insurance",
    summary: "Modular insurance systems — ASP.NET MVC / .NET Core and Angular 10.",
    bullets: [
      "Developed modular insurance systems using ASP.NET MVC, .NET Core 3.1, and Razor Pages for policy issuance, premium tracking, and claims adjudication.",
      "Built responsive insurance portals in Angular 10 for agents and customers to manage policy lifecycle and submit claims.",
      "Applied IRDAI and ISO 27001 standards for secure handling of sensitive policyholder data.",
      "Created NuGet-based shared libraries for premium validation, rules engine, and policy calculators across product lines.",
      "Developed Hangfire background schedulers for nightly quote calculations, email notifications, and auto-renewal triggers.",
      "Migrated large-scale datasets from DB2 to SQL Server using SSIS with audit logs and reconciliation reports.",
    ],
    tech: [".NET Core 3.1", "ASP.NET MVC", "Razor Pages", "Angular 10", "SQL Server", "IBM DB2", "EF Core", "Dapper", "Hangfire", "SSIS", "Docker", "NUnit", "Azure DevOps"],
  },
  {
    role: ".NET Full Stack Developer",
    company: "HSBC",
    location: "Hyderabad, India",
    period: "Jan 2014 – Sep 2018",
    domain: "Banking",
    summary: "Global transaction processing & compliance — ASP.NET MVC and Angular.",
    bullets: [
      "Designed a global transaction processing system using ASP.NET MVC 5 on .NET Framework 4.7 and Angular, supporting real-time fund transfers and digital approvals.",
      "Engineered microservices for AML risk scoring, account verification, and payment batch processing, adhering to FATCA, AML, and ISO 20022.",
      "Developed SWIFT and ISO-compliant financial message workflows using CQRS, MediatR, and FluentValidation.",
      "Built compliance tooling — dashboards, threshold monitors, and audit-trail search — with SignalR for live updates.",
      "Automated recurring data exports and third-party report transfers with Quartz.NET and scheduled APIs.",
      "Integrated centralized logging with Serilog, Application Insights, and correlation IDs across APAC/EMEA rollouts.",
    ],
    tech: [".NET Framework 4.7", "ASP.NET MVC 5", "AngularJS / Angular 2", "Oracle", "SQL Server", "EF Core", "CQRS", "MediatR", "Quartz.NET", "SignalR", "OAuth 2.0", "Azure AD", "Serilog"],
  },
];

// --- Featured / real-world projects (your own builds) -----------------------
// These render in an immersive, spotlighted section above the client work.
export const featuredProjects = [
  {
    title: "Consultancy Management Platform",
    tagline: "Multi-tenant enterprise SaaS",
    status: "Active build",
    description:
      "A multi-tenant consultancy management platform built with .NET 8 and Angular 22, engineered to enterprise standards — tenant isolation, role-based access, and a modular service architecture serving multiple client organizations from a single deployment.",
    highlights: [
      "Multi-tenant architecture with per-tenant data isolation",
      ".NET 8 Web API backend with a modular, layered design",
      "Angular 22 SPA front-end with reusable component library",
      "Enterprise-grade auth, RBAC, and audit-ready data model",
    ],
    tech: [".NET 8", "Angular 22", "Multi-tenant", "REST APIs", "SQL Server", "RBAC"],
    accent: "#6366f1",
  },
  {
    title: "MuleSoft → Azure Error-Capture Pipeline",
    tagline: "Integration observability POC",
    status: "Proof of concept",
    description:
      "An enterprise-style POC that captures every 4xx/5xx error from MuleSoft APIs and persists a structured, correlation-ID-traceable record to Azure Table Storage. Errors are published to an Azure Service Bus queue first for durable, non-blocking capture, then written to storage by a separate consumer.",
    highlights: [
      "Global Mule error handler captures all 4xx/5xx errors with correlation IDs",
      "Queue-based decoupling via Azure Service Bus (durable, non-blocking, dead-letter)",
      "Day-partitioned, PII-masked error records in Azure Table Storage",
      "Dual transport (AMQP connector + HTTPS REST/SAS) to beat network constraints",
      "Two-layer security: API Manager Client ID Enforcement + app-level API key",
    ],
    tech: ["MuleSoft", "CloudHub 2.0", "DataWeave", "Azure Service Bus", "Azure Table Storage", "Azure SQL"],
    accent: "#0ea5e9",
  },
  {
    title: "API as an MCP Server",
    tagline: "Model Context Protocol · Azure APIM",
    status: "Built",
    description:
      "Exposed an existing .NET 8 REST API as a Model Context Protocol (MCP) server using Azure API Management's native MCP export — making its operations callable as tools by AI assistants (Claude in VS Code / Desktop) with zero new application code, OAuth2 security, and central governance.",
    highlights: [
      "Zero-code MCP exposure via Azure APIM native MCP export (reuses the OpenAPI contract)",
      "Two-token OAuth2 model with APIM Credential Manager token exchange",
      "Separate Entra ID app registrations (gateway vs backend) to limit blast radius",
      "Local token-refresh service auto-refreshes bearer tokens — no manual pasting",
      "Role-based (Read/Write) authorization enforced at the backend",
    ],
    tech: [".NET 8", "ASP.NET Core", "Azure APIM", "MCP", "Microsoft Entra ID", "EF Core", "Azure SQL"],
    accent: "#8b5cf6",
  },
];

// --- Projects (curated highlights derived from client work) -----------------
export const projects = [
  {
    title: "Enterprise API Platform",
    client: "LPL Financial",
    domain: "Financial Services",
    description:
      "Enterprise-scale RESTful API platform on .NET 8 with Azure API Management, secured by OAuth 2.0 / Entra ID and provisioned with Terraform.",
    highlights: [
      "APIM policies for auth, caching, throttling, and error handling",
      "Resilient downstream integration (retries, timeouts, Refit)",
      "Full CI/CD with Azure DevOps + GitHub Actions and IaC",
    ],
    tech: [".NET 8", "Azure APIM", "PostgreSQL", "Terraform", "OAuth 2.0"],
    featured: true,
  },
  {
    title: "Digital Banking Platform",
    client: "First Citizens Bank",
    domain: "Banking",
    description:
      "React 18 banking modules backed by .NET 8 microservices — fraud detection, loan workflow engines, and real-time Kafka event pipelines.",
    highlights: [
      "CQRS + Saga for consistent credit approvals",
      "Kafka pipelines for real-time banking rule engines",
      "Azure-secured with Key Vault and Azure AD",
    ],
    tech: ["React 18", ".NET 8", "Kafka", "MediatR", "Azure"],
    featured: true,
  },
  {
    title: "Research Publishing Portal",
    client: "Elsevier",
    domain: "Research Publishing",
    description:
      "Researcher submission and review platform with React 17 metadata-driven UIs, .NET 7 APIs, and Cosmos DB change-feed-driven dashboards.",
    highlights: [
      "Durable Azure Functions for large file workflows",
      "Microservices for submission & reviewer queues",
      "GDPR-aligned data handling",
    ],
    tech: ["React 17", ".NET 7", "Cosmos DB", "Azure Functions"],
    featured: false,
  },
  {
    title: "Investment Trading Dashboards",
    client: "FIS",
    domain: "Financial Services",
    description:
      "PWA-capable investment dashboards (React + TypeScript) over .NET 8 trade-processing APIs with Event Grid / SQS async pipelines.",
    highlights: [
      "Real-time trade reconciliation & investor lookup",
      "Event-driven trade lifecycle with Azure Event Grid",
      "Audit-compliant logging and retention",
    ],
    tech: ["React 17", "TypeScript", ".NET 8", "Azure Event Grid"],
    featured: false,
  },
  {
    title: "Insurance Policy Management",
    client: "NTT Data",
    domain: "Insurance",
    description:
      "Modular insurance platform (ASP.NET MVC / .NET Core + Angular 10) for policy issuance, premium tracking, and claims — IRDAI & ISO 27001 compliant.",
    highlights: [
      "JSON-driven rules engine for dynamic quotes",
      "Hangfire schedulers for renewals & notifications",
      "DB2 → SQL Server migration via SSIS",
    ],
    tech: [".NET Core 3.1", "Angular 10", "SQL Server", "Hangfire"],
    featured: false,
  },
  {
    title: "Global Transaction Processing",
    client: "HSBC",
    domain: "Banking",
    description:
      "Global payments & compliance system (ASP.NET MVC + Angular) for real-time transfers, AML scoring, and SWIFT / ISO 20022 message processing.",
    highlights: [
      "AML risk scoring & payment batch microservices",
      "Live compliance dashboards with SignalR",
      "FATCA / AML / ISO 20022 adherence",
    ],
    tech: ["ASP.NET MVC 5", "Angular", "CQRS", "SignalR"],
    featured: false,
  },
];

// --- Certifications ---------------------------------------------------------
export const certifications = [
  {
    name: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services",
    accent: "#FF9900",
    icon: "aws",
    url: "#", // Add your credential/verification link if you have one.
  },
  {
    name: "Microsoft Certified: Azure Developer Associate",
    issuer: "Microsoft",
    accent: "#0078D4",
    icon: "azure",
    url: "#",
  },
];

// --- Education --------------------------------------------------------------
export const education = [
  {
    degree: "Bachelor of Technology (B.Tech), Computer Science",
    school: "Osmania University",
    location: "Hyderabad, Telangana, India",
    year: "2014",
  },
];

// --- Contact ----------------------------------------------------------------
export const contact = {
  heading: "Let's connect",
  blurb:
    "Open to senior .NET / full-stack and cloud engineering roles. Reach out — or ask my AI assistant anything about my background.",
};

// --- Chatbot ----------------------------------------------------------------
export const chatbot = {
  title: "Ask about Karunakar",
  subtitle: "AI recruiter assistant",
  // First message shown when the chat opens.
  greeting:
    "Hi! I'm Karunakar's AI assistant. Ask me anything about his experience, skills, projects, or background — I'll answer from his résumé.",
  // Suggested prompts shown as clickable chips.
  suggestions: [
    "How many years of .NET experience does he have?",
    "What's his Azure and cloud experience?",
    "Tell me about his banking projects.",
    "What are his strongest skills?",
    "Is he open to new roles?",
  ],
};
