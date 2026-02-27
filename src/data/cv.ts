import type { CVData } from "./types";

export const cvData: CVData = {
  personal: {
    name: "Yevhen Holiakhovskyi",
    title: "SDET Lead",
    tagline:
      "Building scalable test automation frameworks and embedding quality into every stage of the software lifecycle.",
    location: "Ukraine",
    email: "yholiakh@gmail.com",
    socials: [
      {
        platform: "github",
        url: "https://github.com/yholia",
        label: "GitHub",
      },
      {
        platform: "linkedin",
        url: "https://linkedin.com/in/yholia",
        label: "LinkedIn",
      },
      {
        platform: "telegram",
        url: "https://t.me/yholia",
        label: "Telegram",
      },
      {
        platform: "email",
        url: "mailto:yholiakh@gmail.com",
        label: "Email",
      },
    ],
  },

  about:
    "Lead SDET with 8+ years of experience spearheading quality assurance across the full software development lifecycle. I architect automated test frameworks, lead teams of SDETs, and integrate testing deeply into CI/CD pipelines. My expertise spans Java, C#, TypeScript, and Python alongside tools like Selenium, Appium, and modern CI systems. Recently expanded into AI-augmented engineering — leveraging Claude Code and LLM tooling to accelerate test generation, code review, and developer workflows. Driven by a commitment to shipping reliable software at pace and turning quality assurance into a genuine competitive advantage.",

  skills: [
    { name: "Selenium", level: 92, category: "automation" },
    { name: "Appium", level: 82, category: "automation" },
    { name: "Playwright", level: 88, category: "automation" },
    { name: "JUnit / TestNG", level: 90, category: "automation" },
    { name: "REST Assured", level: 85, category: "automation" },
    { name: "Performance Testing", level: 78, category: "automation" },

    { name: "Java", level: 92, category: "languages" },
    { name: "C#", level: 80, category: "languages" },
    { name: "TypeScript / JS", level: 88, category: "languages" },
    { name: "Python", level: 78, category: "languages" },
    { name: "SQL", level: 80, category: "languages" },

    { name: "Git", level: 92, category: "tools" },
    { name: "Perforce", level: 75, category: "tools" },
    { name: "Docker", level: 82, category: "tools" },
    { name: "Postman", level: 88, category: "tools" },
    { name: "Allure Report", level: 85, category: "tools" },
    { name: "Claude Code / AI", level: 88, category: "tools" },

    { name: "Jenkins", level: 88, category: "ci-cd" },
    { name: "TeamCity", level: 82, category: "ci-cd" },
    { name: "GitHub Actions", level: 85, category: "ci-cd" },
    { name: "Azure DevOps", level: 75, category: "ci-cd" },

    { name: "Agile / Scrum", level: 92, category: "methodologies" },
    { name: "Kanban", level: 85, category: "methodologies" },
    { name: "BDD / TDD", level: 88, category: "methodologies" },
    { name: "Risk-Based Testing", level: 85, category: "methodologies" },
  ],

  experience: [
    {
      id: "exp-3",
      company: "Langate, Inc.",
      role: "Software Development Engineer in Test (SDET)",
      startDate: "Mar 2024",
      endDate: null,
      location: "Ukraine",
      description:
        "Architecting and owning a multi-layer test automation framework for an enterprise employee recognition platform serving 9+ major clients including Accenture, Siemens, and Texas Instruments. Covering E2E, UI, API, visual regression, and database testing layers.",
      highlights: [
        "Built a multi-project .NET automation suite (C# + TUnit) covering E2E, API, UI, component, integration, and database test layers",
        "Implemented Page Object Model with custom base classes, PageFactory, and domain-organized page objects for Admin and Client portals",
        "Developed a visual regression testing module using Playwright + TypeScript with screenshot and ARIA snapshot comparisons across mobile, tablet, desktop, and wide viewports",
        "Designed a ResourceReaper cleanup pattern with LIFO stack ordering, ensuring reliable test isolation and zero resource leaks across parallel runs",
        "Integrated Entity Framework Core with Azure SQL for database-driven test data setup and verification",
        "Configured multi-tenant test execution across 9+ enterprise clients via environment-based appsettings, enabling full regression per tenant",
        "Generated strongly-typed API clients from server definitions; built an ApiService composition layer with token-based authentication helpers",
      ],
      technologies: [
        "C#",
        ".NET 10",
        "Playwright",
        "TUnit",
        "TypeScript",
        "Entity Framework Core",
        "Azure SQL",
        "Testcontainers",
        "FluentAssertions",
        "Bogus / Faker",
      ],
    },
    {
      id: "exp-2",
      company: "Akvelon, Inc.",
      role: "Lead Software Development Engineer in Test (SDET)",
      startDate: "Mar 2021",
      endDate: null,
      location: "Ukraine",
      description:
        "Leading quality assurance for a rail container terminal management system (TC/IPRO) used by major carriers including BNSF, CSX, and others. Owning a multi-layer test suite covering integration, performance, UI, and hardware integration across 4 live terminal environments.",
      highlights: [
        "Designed and grew a 239-class JUnit 5 integration test suite validating complete business workflows (waybill creation, railcar planning, track assignment, RTLS) across 4 environments",
        "Built Gatling performance tests for JMS/SOAP messaging pipelines, achieving 500 msg/sec throughput, P95 latency < 50ms, and 200 concurrent users — exceeding all production targets",
        "Engineered ActiveMQ/JMS integration with Gatling from scratch, resolving 10 major technical challenges including thread safety, Jakarta EE namespacing, XML serialization, and custom Gatling DSL wrappers",
        "Integrated ReportPortal for structured test reporting with DEBUG/OFFICIAL launch modes and Bitbucket build status notifications via Jenkins",
        "Automated multi-profile Maven builds with Jenkins pipelines supporting tag/class filtering and per-environment runs triggered every 30 minutes",
        "Covered hardware integration testing via serial communication (jSerialComm) for RFID readers and gate equipment, and UI automation with Selenide",
        "Mentored team members and enforced code quality standards via Checkstyle, AspectJ instrumentation, and Lombok-based patterns",
      ],
      technologies: [
        "Java 17",
        "JUnit 5",
        "Gatling",
        "Selenide",
        "ActiveMQ / JMS",
        "Apache CXF (SOAP)",
        "Retrofit",
        "ReportPortal",
        "Spring Boot",
        "Maven",
        "Jenkins",
      ],
    },
    {
      id: "exp-1",
      company: "Akvelon, Inc.",
      role: "Software Development Engineer in Test",
      startDate: "Jun 2017",
      endDate: "Mar 2021",
      location: "Ukraine",
      description:
        "Designed, implemented, and executed automated test frameworks and strategies, blending software development skills with testing expertise to contribute across the entire SDLC.",
      highlights: [
        "Designed and developed automated test suites for functional, integration, regression, and performance testing",
        "Wrote clean, maintainable test code and established coding standards for the QA team",
        "Identified, reported, and triaged software defects through thorough root cause analysis",
        "Collaborated with developers and product managers to define test plans aligned with project timelines",
        "Documented test plans, procedures, and results — producing clear reports with actionable metrics",
      ],
      technologies: [
        "Java",
        "C#",
        "Selenium",
        "Appium",
        "JUnit",
        "TestNG",
        "Jenkins",
        "TeamCity",
        "Git",
        "Perforce",
      ],
    },
  ],

  projects: [
    {
      id: "proj-1",
      title: "AutoPilot Framework",
      description:
        "Open-source test automation framework built on Playwright with page object model, data-driven testing, parallel execution, and rich HTML reporting out of the box.",
      technologies: ["Playwright", "TypeScript", "GitHub Actions", "Allure"],
      repoUrl: "https://github.com/yholia/autopilot-framework",
      featured: true,
    },
    {
      id: "proj-2",
      title: "API Guardian",
      description:
        "Lightweight API contract testing tool that auto-generates tests from OpenAPI specs. Validates response schemas, status codes, and performance SLAs in CI pipelines.",
      technologies: ["TypeScript", "Node.js", "OpenAPI", "Jest"],
      repoUrl: "https://github.com/yholia/api-guardian",
      featured: true,
    },
    {
      id: "proj-3",
      title: "Flake Detector",
      description:
        "CI plugin that identifies and quarantines flaky tests by analyzing historical pass/fail patterns. Provides dashboards and auto-retry recommendations.",
      technologies: ["Python", "PostgreSQL", "Docker", "React"],
      repoUrl: "https://github.com/yholia/flake-detector",
      featured: true,
    },
    {
      id: "proj-4",
      title: "Test Data Factory",
      description:
        "Configurable test data generation library that creates realistic, relational test data for databases and APIs with built-in cleanup hooks.",
      technologies: ["TypeScript", "Faker.js", "PostgreSQL", "Redis"],
      repoUrl: "https://github.com/yholia/test-data-factory",
      featured: false,
    },
    {
      id: "proj-5",
      title: "QA Metrics Dashboard",
      description:
        "Real-time dashboard aggregating test results, code coverage, and quality KPIs from multiple CI systems into a unified view.",
      technologies: ["React", "D3.js", "Node.js", "InfluxDB"],
      repoUrl: "https://github.com/yholia/qa-metrics-dashboard",
      featured: false,
    },
    {
      id: "proj-6",
      title: "Visual Diff Engine",
      description:
        "Pixel-perfect visual regression testing engine with AI-powered intelligent diff detection that ignores anti-aliasing and dynamic content.",
      technologies: ["Python", "OpenCV", "TensorFlow", "Docker"],
      repoUrl: "https://github.com/yholia/visual-diff-engine",
      featured: false,
    },
  ],

  education: [
    {
      id: "edu-1",
      institution:
        'National Aerospace University — "Kharkiv Aviation Institute" (NAU "KhAI")',
      degree: "Master's degree",
      field: "System Analysis",
      startDate: "2012",
      endDate: "2018",
      description:
        "Studied system analysis, mathematical modeling, and management methodologies applied to complex engineering systems.",
    },
  ],

  certifications: [],
};
