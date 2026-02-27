import type { CVData } from "./types";

export const cvData: CVData = {
  personal: {
    name: "Holiakhovskyi Yevhen",
    title: "SDET Lead",
    tagline:
      "Driving quality through automation, architecture, and engineering excellence.",
    location: "Kyiv, Ukraine",
    email: "yholia@example.com",
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
        url: "mailto:yholia@example.com",
        label: "Email",
      },
    ],
  },

  about:
    "SDET Lead with 7+ years of experience building scalable test automation frameworks, leading QA engineering teams, and embedding quality into every stage of the SDLC. Passionate about shifting testing left, designing robust CI/CD pipelines, and mentoring engineers to think beyond manual testing. I combine deep technical expertise in modern testing tools with a strategic mindset to deliver reliable, high-quality software at speed.",

  skills: [
    { name: "Playwright", level: 95, category: "automation" },
    { name: "Selenium", level: 90, category: "automation" },
    { name: "Cypress", level: 85, category: "automation" },
    { name: "Appium", level: 75, category: "automation" },
    { name: "REST Assured", level: 88, category: "automation" },
    { name: "k6 / Gatling", level: 70, category: "automation" },

    { name: "TypeScript", level: 92, category: "languages" },
    { name: "Java", level: 85, category: "languages" },
    { name: "Python", level: 78, category: "languages" },
    { name: "JavaScript", level: 90, category: "languages" },
    { name: "SQL", level: 80, category: "languages" },

    { name: "Docker", level: 85, category: "tools" },
    { name: "Git", level: 92, category: "tools" },
    { name: "Jira / Xray", level: 88, category: "tools" },
    { name: "Postman", level: 85, category: "tools" },
    { name: "Allure Report", level: 90, category: "tools" },

    { name: "GitHub Actions", level: 88, category: "ci-cd" },
    { name: "Jenkins", level: 82, category: "ci-cd" },
    { name: "GitLab CI", level: 80, category: "ci-cd" },
    { name: "Azure DevOps", level: 75, category: "ci-cd" },

    { name: "Agile / Scrum", level: 92, category: "methodologies" },
    { name: "BDD / TDD", level: 88, category: "methodologies" },
    { name: "Risk-Based Testing", level: 85, category: "methodologies" },
    { name: "Shift-Left Testing", level: 90, category: "methodologies" },
  ],

  experience: [
    {
      id: "exp-1",
      company: "TechNova Solutions",
      role: "SDET Lead",
      startDate: "Mar 2022",
      endDate: null,
      location: "Kyiv, Ukraine",
      description:
        "Leading a team of 8 SDETs across 3 product squads. Architected a unified test automation platform that reduced regression cycle time by 60%.",
      highlights: [
        "Built a cross-platform test framework with Playwright + TypeScript serving 12 microservices",
        "Reduced flaky test rate from 15% to under 2% through smart retry logic and test isolation",
        "Implemented parallel execution pipeline cutting CI time from 45min to 12min",
        "Mentored 4 junior engineers into mid-level SDET roles",
      ],
      technologies: [
        "Playwright",
        "TypeScript",
        "GitHub Actions",
        "Docker",
        "Allure",
        "k6",
      ],
    },
    {
      id: "exp-2",
      company: "DataStream Inc.",
      role: "Senior SDET",
      startDate: "Jun 2019",
      endDate: "Feb 2022",
      location: "Remote",
      description:
        "Owned end-to-end test automation for a real-time analytics platform processing 2M+ events/day.",
      highlights: [
        "Designed API test suite with REST Assured covering 350+ endpoints",
        "Introduced contract testing with Pact, catching 30+ breaking changes pre-deployment",
        "Set up performance testing with Gatling, identifying 5 critical bottlenecks",
        "Led migration from Selenium to Playwright, improving test speed by 3x",
      ],
      technologies: [
        "Java",
        "Selenium",
        "Playwright",
        "REST Assured",
        "Gatling",
        "Jenkins",
        "Pact",
      ],
    },
    {
      id: "exp-3",
      company: "WebCraft Studio",
      role: "QA Automation Engineer",
      startDate: "Sep 2017",
      endDate: "May 2019",
      location: "Lviv, Ukraine",
      description:
        "Built test automation from scratch for an e-commerce platform serving 500K+ monthly users.",
      highlights: [
        "Created a BDD framework with Cucumber + Selenium covering 200+ user scenarios",
        "Automated visual regression testing with Percy, catching UI regressions early",
        "Integrated test reporting with Allure and Slack notifications",
      ],
      technologies: [
        "Java",
        "Selenium",
        "Cucumber",
        "Percy",
        "Maven",
        "Jenkins",
        "Allure",
      ],
    },
  ],

  projects: [
    {
      id: "proj-1",
      title: "AutoPilot Framework",
      description:
        "Open-source, batteries-included test automation framework built on Playwright. Features page object model, data-driven testing, parallel execution, and rich HTML reporting out of the box.",
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
        "A configurable test data generation library that creates realistic, relational test data for databases and APIs with built-in cleanup hooks.",
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
      institution: "Taras Shevchenko National University of Kyiv",
      degree: "Master of Science",
      field: "Computer Science",
      startDate: "2015",
      endDate: "2017",
      description:
        "Specialized in software engineering and quality assurance methodologies.",
      achievements: [
        "Graduated with honors",
        "Thesis on automated test generation using machine learning",
      ],
    },
    {
      id: "edu-2",
      institution: "Taras Shevchenko National University of Kyiv",
      degree: "Bachelor of Science",
      field: "Computer Science",
      startDate: "2011",
      endDate: "2015",
      achievements: [
        "Dean's list for 6 consecutive semesters",
        "Led university coding competition team",
      ],
    },
  ],

  certifications: [
    {
      id: "cert-1",
      name: "ISTQB Certified Tester — Advanced Level (Test Automation Engineer)",
      issuer: "ISTQB",
      date: "2023",
      credentialUrl: "https://www.istqb.org",
    },
    {
      id: "cert-2",
      name: "AWS Certified Developer — Associate",
      issuer: "Amazon Web Services",
      date: "2022",
      credentialUrl: "https://aws.amazon.com/certification/",
    },
    {
      id: "cert-3",
      name: "Professional Scrum Master I (PSM I)",
      issuer: "Scrum.org",
      date: "2021",
      credentialUrl: "https://www.scrum.org",
    },
    {
      id: "cert-4",
      name: "Certified Kubernetes Application Developer (CKAD)",
      issuer: "CNCF / Linux Foundation",
      date: "2023",
      credentialUrl: "https://www.cncf.io/certification/ckad/",
    },
  ],
};
