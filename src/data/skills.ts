export interface Skill {
  id: string;
  title: string;
  author: string;
  description: string;
  category: string;
  stars: number;
  downloads: number;
  users: number;
  version?: string;
  updatedAt?: string;
  license?: string;
  githubUrl?: string;
}

// Real Claude Skills from https://github.com/anthropics/claude-cookbooks
export const skills: Skill[] = [
  // Built-in Claude Skills
  {
    id: "xlsx",
    title: "xlsx",
    author: "anthropic/xlsx",
    description:
      "Create and manipulate Excel workbooks with formulas, charts, and formatting. Build professional spreadsheets with complex calculations and data visualization.",
    category: "Data & Analytics",
    stars: 31400,
    downloads: 15420,
    users: 12350,
    version: "1.0.0",
    updatedAt: "2 days ago",
    license: "MIT",
    githubUrl: "https://github.com/anthropics/claude-cookbooks/tree/main/skills",
  },
  {
    id: "pptx",
    title: "pptx",
    author: "anthropic/pptx",
    description:
      "Generate professional presentations with slides, charts, and transitions. Create compelling PowerPoint documents with rich layouts and visual elements.",
    category: "Design",
    stars: 31400,
    downloads: 12890,
    users: 10240,
    version: "1.0.0",
    updatedAt: "2 days ago",
    license: "MIT",
    githubUrl: "https://github.com/anthropics/claude-cookbooks/tree/main/skills",
  },
  {
    id: "pdf",
    title: "pdf",
    author: "anthropic/pdf",
    description:
      "Create formatted PDF documents with text, tables, and images. Build professional reports, invoices, and documentation with precise layout control.",
    category: "Writing",
    stars: 31400,
    downloads: 11560,
    users: 9180,
    version: "1.0.0",
    updatedAt: "2 days ago",
    license: "MIT",
    githubUrl: "https://github.com/anthropics/claude-cookbooks/tree/main/skills",
  },
  {
    id: "docx",
    title: "docx",
    author: "anthropic/docx",
    description:
      "Generate Word documents with rich formatting and structure. Create professional documents with headers, tables, images, and consistent styling.",
    category: "Writing",
    stars: 31400,
    downloads: 10230,
    users: 8120,
    version: "1.0.0",
    updatedAt: "2 days ago",
    license: "MIT",
    githubUrl: "https://github.com/anthropics/claude-cookbooks/tree/main/skills",
  },
  // Custom Skills from claude-cookbooks
  {
    id: "analyzing-financial-statements",
    title: "analyzing-financial-statements",
    author: "anthropic/analyzing-financial-statements",
    description:
      "Calculate key financial ratios and metrics from financial statement data for investment analysis. Includes profitability, liquidity, leverage, and valuation ratios.",
    category: "Data & Analytics",
    stars: 31400,
    downloads: 3240,
    users: 2890,
    version: "1.0.0",
    updatedAt: "3 months ago",
    license: "MIT",
    githubUrl:
      "https://github.com/anthropics/claude-cookbooks/tree/main/skills/custom_skills/analyzing-financial-statements",
  },
  {
    id: "applying-brand-guidelines",
    title: "applying-brand-guidelines",
    author: "anthropic/applying-brand-guidelines",
    description:
      "Apply consistent corporate branding and styling to all generated documents including colors, fonts, layouts, and messaging for professional communication.",
    category: "Design",
    stars: 31400,
    downloads: 2180,
    users: 1920,
    version: "1.0.0",
    updatedAt: "3 months ago",
    license: "MIT",
    githubUrl:
      "https://github.com/anthropics/claude-cookbooks/tree/main/skills/custom_skills/applying-brand-guidelines",
  },
  {
    id: "creating-financial-models",
    title: "creating-financial-models",
    author: "anthropic/creating-financial-models",
    description:
      "Advanced financial modeling suite with DCF analysis, sensitivity testing, Monte Carlo simulations, and scenario planning for investment decisions.",
    category: "Data & Analytics",
    stars: 31400,
    downloads: 2890,
    users: 2450,
    version: "1.0.0",
    updatedAt: "3 months ago",
    license: "MIT",
    githubUrl:
      "https://github.com/anthropics/claude-cookbooks/tree/main/skills/custom_skills/creating-financial-models",
  },
  // Community Skills (simulated)
  {
    id: "8",
    title: "frontend-design",
    author: "community/frontend-design",
    description:
      "Create distinctive, production-grade frontend interfaces with high design quality. Generates creative, polished code and UI design that avoids generic AI aesthetics.",
    category: "Design",
    stars: 47860,
    downloads: 5680,
    users: 4920,
    version: "2.1.0",
    updatedAt: "1 week ago",
    license: "MIT",
  },
  {
    id: "9",
    title: "mcp-integration",
    author: "community/mcp-integration",
    description:
      'Integrate Model Context Protocol servers into your workflow. Use when asking to "add MCP server", "integrate MCP", or "configure MCP in plugin".',
    category: "Coding",
    stars: 35420,
    downloads: 4230,
    users: 3890,
    version: "1.5.0",
    updatedAt: "3 days ago",
    license: "Apache-2.0",
  },
  {
    id: "10",
    title: "skill-creator",
    author: "community/skill-creator",
    description:
      "Guide for creating effective skills. Use when users want to create a new skill that extends Claude's capabilities with custom instructions and resources.",
    category: "Planning",
    stars: 28930,
    downloads: 3450,
    users: 3120,
    version: "1.2.0",
    updatedAt: "1 month ago",
    license: "MIT",
  },
  {
    id: "11",
    title: "prompt-engineering",
    author: "community/prompt-engineering",
    description:
      "Master advanced prompt engineering techniques to maximize LLM performance, reliability, and controllability in production environments.",
    category: "Research",
    stars: 23399,
    downloads: 4890,
    users: 4230,
    version: "3.0.0",
    updatedAt: "2 weeks ago",
    license: "MIT",
  },
  {
    id: "12",
    title: "typescript-patterns",
    author: "community/typescript-patterns",
    description:
      "Write TypeScript and JavaScript code following best practices and modern patterns. Includes type safety, error handling, and clean architecture guidelines.",
    category: "Coding",
    stars: 44733,
    downloads: 6780,
    users: 5940,
    version: "2.0.0",
    updatedAt: "5 days ago",
    license: "MIT",
  },
  {
    id: "13",
    title: "api-documentation",
    author: "community/api-documentation",
    description:
      "Generate comprehensive API documentation with OpenAPI specs, code examples, and interactive guides. Follows industry standards for developer experience.",
    category: "Writing",
    stars: 18920,
    downloads: 2340,
    users: 2010,
    version: "1.3.0",
    updatedAt: "2 weeks ago",
    license: "MIT",
  },
  {
    id: "14",
    title: "data-visualization",
    author: "community/data-visualization",
    description:
      "Create stunning data visualizations with D3.js, Chart.js, and other libraries. Transform complex datasets into clear, insightful graphics.",
    category: "Data & Analytics",
    stars: 21340,
    downloads: 3120,
    users: 2780,
    version: "1.8.0",
    updatedAt: "1 week ago",
    license: "MIT",
  },
  {
    id: "15",
    title: "react-components",
    author: "community/react-components",
    description:
      "Build reusable React components with TypeScript, hooks, and modern patterns. Includes accessibility features and responsive design support.",
    category: "Coding",
    stars: 52180,
    downloads: 8920,
    users: 7650,
    version: "4.2.0",
    updatedAt: "3 days ago",
    license: "MIT",
  },
  {
    id: "16",
    title: "database-design",
    author: "community/database-design",
    description:
      "Design efficient database schemas with proper normalization, indexing strategies, and query optimization for SQL and NoSQL databases.",
    category: "Coding",
    stars: 15670,
    downloads: 1890,
    users: 1650,
    version: "1.1.0",
    updatedAt: "1 month ago",
    license: "Apache-2.0",
  },
  {
    id: "17",
    title: "technical-writing",
    author: "community/technical-writing",
    description:
      "Write clear, concise technical documentation including tutorials, guides, and reference materials. Follows best practices for developer communication.",
    category: "Writing",
    stars: 12450,
    downloads: 2230,
    users: 1980,
    version: "2.1.0",
    updatedAt: "2 weeks ago",
    license: "MIT",
  },
  {
    id: "18",
    title: "security-audit",
    author: "community/security-audit",
    description:
      "Perform security audits on code and infrastructure. Identify vulnerabilities, suggest fixes, and generate compliance reports.",
    category: "Research",
    stars: 19870,
    downloads: 1560,
    users: 1340,
    version: "1.4.0",
    updatedAt: "1 week ago",
    license: "MIT",
  },
  {
    id: "19",
    title: "project-planning",
    author: "community/project-planning",
    description:
      "Create detailed project plans with milestones, timelines, resource allocation, and risk assessment. Generate Gantt charts and sprint plans.",
    category: "Planning",
    stars: 14320,
    downloads: 2450,
    users: 2180,
    version: "1.6.0",
    updatedAt: "3 weeks ago",
    license: "MIT",
  },
  {
    id: "20",
    title: "email-composer",
    author: "community/email-composer",
    description:
      "Compose professional emails for various contexts including business communication, customer support, and marketing campaigns.",
    category: "Communication",
    stars: 8920,
    downloads: 4560,
    users: 4120,
    version: "1.2.0",
    updatedAt: "1 week ago",
    license: "MIT",
  },
  {
    id: "21",
    title: "meeting-notes",
    author: "community/meeting-notes",
    description:
      "Transform meeting transcripts into structured notes with action items, decisions, and key points. Generate follow-up tasks automatically.",
    category: "Productivity",
    stars: 11230,
    downloads: 3890,
    users: 3450,
    version: "1.3.0",
    updatedAt: "2 weeks ago",
    license: "MIT",
  },
  {
    id: "22",
    title: "code-review",
    author: "community/code-review",
    description:
      "Perform thorough code reviews with best practices, security checks, and performance suggestions. Generate actionable feedback for pull requests.",
    category: "Coding",
    stars: 27890,
    downloads: 5120,
    users: 4560,
    version: "2.0.0",
    updatedAt: "4 days ago",
    license: "MIT",
  },
  {
    id: "23",
    title: "unit-testing",
    author: "community/unit-testing",
    description:
      "Generate comprehensive unit tests for your code with high coverage. Supports Jest, Mocha, pytest, and other testing frameworks.",
    category: "Coding",
    stars: 23450,
    downloads: 4670,
    users: 4120,
    version: "1.8.0",
    updatedAt: "1 week ago",
    license: "MIT",
  },
  {
    id: "24",
    title: "ux-research",
    author: "community/ux-research",
    description:
      "Conduct UX research analysis including user interviews, survey design, and usability testing. Generate insights and recommendations.",
    category: "Research",
    stars: 9870,
    downloads: 1230,
    users: 1080,
    version: "1.1.0",
    updatedAt: "1 month ago",
    license: "MIT",
  },
];

export const categories = [
  "All",
  "Research",
  "Coding",
  "Writing",
  "Data & Analytics",
  "Design",
  "Planning",
  "Communication",
  "Productivity",
];
