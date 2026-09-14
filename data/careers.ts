export type ResponsibilityArea = {
  title: string;
  items: string[];
};

export type CareerOpening = {
  title: string;
  location: string;
  employmentModel: string;
  openings: string;
  summary: string[];
  responsibilities: ResponsibilityArea[];
  requiredSkills: string[];
  preferredSkills: string[];
  successMeasures: string[];
};

export const careerOpening: CareerOpening = {
  title: "Engineering Manager – Applications, Cloud & AI",
  location: "Chennai",
  employmentModel: "Full-time",
  openings: "One",
  summary: [
    "The Engineering Manager will be responsible for the technical direction, engineering quality, cloud architecture, code review discipline and delivery health of the organisation’s applications, websites, microsites, portals, APIs and engineering platforms.",
    "This is a hands-on technical role. The person must be comfortable reviewing pull requests, reading and writing code, guiding architecture, improving engineering standards, contributing to cloud infrastructure decisions and using AI tools to improve development productivity.",
  ],
  responsibilities: [
    {
      title: "Technical Architecture and Stack Ownership",
      items: [
        "Own technical decisions for internal applications, websites, microsites, portals, APIs and supporting platforms.",
        "Define and maintain standards for backend, frontend, database, hosting, deployment, integration and security practices.",
        "Review and recommend appropriate technology stacks based on maintainability, scalability, security, cost and developer productivity.",
        "Ensure applications are designed with clean architecture, maintainable code, proper API structure, secure authentication and clear deployment patterns.",
        "Challenge vendor and developer proposals where technology choices are outdated, overly complex, poorly documented or difficult to support.",
      ],
    },
    {
      title: "Hands-on Code Review and Development Standards",
      items: [
        "Actively review pull requests across internal applications and vendor-built systems.",
        "Review code for quality, maintainability, readability, performance, security and test coverage.",
        "Contribute directly to code where required, especially for architecture changes, critical fixes, automation, integrations and platform improvements.",
        "Define coding standards, branching strategy, PR review practices, release process and repository hygiene.",
        "Ensure repositories are properly structured, documented and access-controlled.",
        "Track and reduce technical debt across internal applications and microsites.",
      ],
    },
    {
      title: "Backend, Frontend and Python Capability",
      items: [
        "Work across backend technologies such as Java, .NET or PHP.",
        "Work with frontend frameworks such as Angular, React or equivalent modern JavaScript/TypeScript frameworks.",
        "Use Python for automation, scripting, data extraction, reporting, AI workflows, integration utilities and developer productivity tooling.",
        "Review APIs, database interactions, authentication flows, frontend architecture, reusable components and integration patterns.",
        "Ensure applications follow secure coding and modern development practices.",
      ],
    },
    {
      title: "Cloud Infrastructure and DevOps",
      items: [
        "Contribute to AWS/cloud infrastructure design and implementation.",
        "Review cloud hosting, networking, IAM, storage, databases, logging, monitoring, backup and deployment patterns.",
        "Support CI/CD pipeline design and improvement.",
        "Introduce infrastructure-as-code practices where suitable.",
        "Ensure cloud resources are tagged, documented, monitored and cost-visible.",
        "Ensure applications have rollback plans, environment separation and reliable deployment processes.",
      ],
    },
    {
      title: "AI-Assisted Development and Automation",
      items: [
        "Use AI development tools to improve coding productivity, documentation, test generation, code review and troubleshooting.",
        "Evaluate and implement AI-assisted coding workflows safely, with clear data and code privacy boundaries.",
        "Automate code review checks where possible using tools for linting, static analysis, dependency checks, security scanning and test coverage.",
        "Use AI to support PR summaries, documentation generation, unit test suggestions, code quality review and developer knowledge search.",
        "Ensure AI-assisted development does not bypass human review, security review or accountability.",
      ],
    },
    {
      title: "Unit Testing, Code Quality and Engineering Hygiene",
      items: [
        "Establish expectations for unit testing, integration testing and regression testing.",
        "Improve test coverage for internal applications and critical code paths.",
        "Introduce or improve code quality tools such as SonarQube, CodeQL, Snyk, Dependabot, linting, formatting and automated test pipelines.",
        "Ensure pull requests include adequate tests, documentation and review evidence.",
        "Track code quality, open defects, failed builds, dependency issues and security findings.",
      ],
    },
    {
      title: "Engineering Delivery Visibility",
      items: [
        "Connect engineering work to tools and dashboards that show delivery progress and engineering health.",
        "Track metrics such as PR review time, deployment frequency, build failures, defect trends, test coverage, technical debt and open vulnerabilities.",
        "Ensure management has visibility into application delivery progress, blockers, risks and quality.",
        "Help standardise engineering tools such as GitHub, GitLab, Bitbucket, Jira, Azure DevOps or similar platforms.",
      ],
    },
    {
      title: "Internal Applications, Websites and Microsites Governance",
      items: [
        "Maintain a technical inventory of internal applications, websites, microsites, portals, repositories, APIs and hosting environments.",
        "Ensure every application or microsite has a source-code owner, technical owner, business owner and deployment owner.",
        "Review hosting, domain, DNS, SSL, admin access, vendor access and release ownership for all internal applications and microsites.",
        "Identify old, unsupported or poorly maintained applications and recommend remediation, migration or retirement.",
        "Ensure vendor-built applications are handed over with source code, deployment documentation, credentials process and support model.",
      ],
    },
    {
      title: "Security and Application Hardening",
      items: [
        "Review application security controls such as authentication, access control, input validation, dependency security, secure headers and logging.",
        "Track application security findings to closure.",
        "Ensure cloud and application access is based on least privilege.",
        "Support secure development practices across internal and vendor-delivered code.",
      ],
    },
  ],
  requiredSkills: [
    "Strong hands-on software engineering background.",
    "Strong experience in at least one backend technology: Java, .NET or PHP.",
    "Working knowledge of modern frontend development using Angular, React or similar frameworks.",
    "Good Python capability for scripting, automation, integrations, reporting or AI-enabled workflows.",
    "Experience reviewing pull requests and enforcing engineering standards.",
    "Experience with REST APIs, databases, authentication, integrations and web application architecture.",
    "Experience with AWS or similar cloud infrastructure.",
    "Experience with CI/CD, Git workflows, branching strategy and release management.",
    "Understanding of unit testing, integration testing, test automation and code quality tools.",
    "Practical understanding of secure coding, dependency management and application hardening.",
    "Experience using AI coding assistants or AI tools for development productivity.",
  ],
  preferredSkills: [
    "AWS services such as EC2, S3, RDS, Lambda, CloudFront, Route 53, IAM, CloudWatch or similar.",
    "Infrastructure-as-code using Terraform, CloudFormation, CDK or similar.",
    "Code quality and security tools.",
    "Experience with GitHub Actions, GitLab CI or other CI/CD tools.",
    "Experience setting up engineering dashboards and delivery metrics.",
    "Experience with AI-assisted development tools such as GitHub Copilot, Cursor, ChatGPT, Claude, CodeWhisperer or similar.",
    "Experience maintaining internal applications, websites, microsites, portals or SaaS integrations.",
  ],
  successMeasures: [
    "Pull request review process established and followed.",
    "Technology stack standards documented and adopted.",
    "Code quality and testing expectations defined across internal applications.",
    "AI-assisted development workflows piloted safely.",
    "Unit test coverage and automated review checks improved.",
    "Internal applications, websites and microsites inventoried with owners and repositories.",
    "AWS/cloud infrastructure ownership, documentation and cost visibility improved.",
    "Engineering health dashboard implemented.",
    "Vendor-built applications reviewed for code quality, documentation and maintainability.",
    "Technical debt and application security issues tracked and reduced.",
  ],
};
