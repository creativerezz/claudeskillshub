export interface App {
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
  icon?: string;
}

export const apps: App[] = [
  {
    id: "claude-desktop",
    title: "Claude Desktop",
    author: "anthropic/claude-desktop",
    description:
      "Official Claude desktop application with native performance, offline capabilities, and seamless integration with your local files and tools.",
    category: "Productivity",
    stars: 89400,
    downloads: 245000,
    users: 198000,
    version: "2.1.0",
    updatedAt: "1 day ago",
    license: "Proprietary",
    githubUrl: "https://github.com/anthropics/claude-desktop",
  },
  {
    id: "mcp-server-manager",
    title: "MCP Server Manager",
    author: "community/mcp-manager",
    description:
      "Manage and configure Model Context Protocol servers with an intuitive GUI. Monitor connections, debug issues, and deploy servers effortlessly.",
    category: "Developer Tools",
    stars: 45200,
    downloads: 67800,
    users: 54300,
    version: "1.8.0",
    updatedAt: "3 days ago",
    license: "MIT",
    githubUrl: "https://github.com/community/mcp-manager",
  },
  {
    id: "prompt-studio",
    title: "Prompt Studio",
    author: "community/prompt-studio",
    description:
      "Visual prompt engineering workspace with version control, A/B testing, and analytics. Build, test, and optimize prompts collaboratively.",
    category: "Developer Tools",
    stars: 38900,
    downloads: 52400,
    users: 41200,
    version: "2.0.0",
    updatedAt: "1 week ago",
    license: "MIT",
  },
  {
    id: "ai-code-assistant",
    title: "AI Code Assistant",
    author: "community/ai-code-assistant",
    description:
      "Intelligent code completion and refactoring powered by Claude. Supports 50+ programming languages with context-aware suggestions.",
    category: "Developer Tools",
    stars: 67800,
    downloads: 89200,
    users: 72400,
    version: "3.2.0",
    updatedAt: "2 days ago",
    license: "Apache-2.0",
  },
  {
    id: "document-analyzer",
    title: "Document Analyzer",
    author: "enterprise/doc-analyzer",
    description:
      "Extract insights from PDFs, spreadsheets, and documents. Automated summarization, data extraction, and compliance checking.",
    category: "Business",
    stars: 28900,
    downloads: 34500,
    users: 28100,
    version: "1.5.0",
    updatedAt: "5 days ago",
    license: "Commercial",
  },
  {
    id: "chat-widget",
    title: "Chat Widget",
    author: "community/chat-widget",
    description:
      "Embeddable AI chat widget for websites. Customizable styling, multi-language support, and easy integration with any frontend framework.",
    category: "Integration",
    stars: 23400,
    downloads: 45600,
    users: 38900,
    version: "2.3.0",
    updatedAt: "1 week ago",
    license: "MIT",
  },
  {
    id: "data-pipeline",
    title: "Data Pipeline",
    author: "enterprise/data-pipeline",
    description:
      "Orchestrate AI-powered data processing workflows. Connect to databases, APIs, and file systems with built-in transformation tools.",
    category: "Data",
    stars: 19800,
    downloads: 23400,
    users: 18700,
    version: "1.2.0",
    updatedAt: "2 weeks ago",
    license: "Apache-2.0",
  },
  {
    id: "voice-assistant",
    title: "Voice Assistant",
    author: "community/voice-assistant",
    description:
      "Voice-enabled AI assistant with speech-to-text and text-to-speech. Build conversational experiences with natural language understanding.",
    category: "Communication",
    stars: 31200,
    downloads: 42100,
    users: 35600,
    version: "1.9.0",
    updatedAt: "4 days ago",
    license: "MIT",
  },
  {
    id: "api-gateway",
    title: "API Gateway",
    author: "enterprise/api-gateway",
    description:
      "Secure API gateway for AI applications. Rate limiting, authentication, caching, and usage analytics built-in.",
    category: "Developer Tools",
    stars: 15600,
    downloads: 19800,
    users: 16200,
    version: "1.1.0",
    updatedAt: "1 month ago",
    license: "Commercial",
  },
  {
    id: "knowledge-base",
    title: "Knowledge Base",
    author: "community/knowledge-base",
    description:
      "Build and manage AI-powered knowledge bases. Vector search, document ingestion, and retrieval-augmented generation support.",
    category: "Data",
    stars: 42300,
    downloads: 56700,
    users: 47800,
    version: "2.5.0",
    updatedAt: "3 days ago",
    license: "MIT",
  },
  {
    id: "workflow-automation",
    title: "Workflow Automation",
    author: "enterprise/workflow-auto",
    description:
      "No-code workflow builder with AI capabilities. Automate repetitive tasks, integrate with 100+ services, and build custom triggers.",
    category: "Productivity",
    stars: 35800,
    downloads: 48200,
    users: 41500,
    version: "3.0.0",
    updatedAt: "1 week ago",
    license: "Commercial",
  },
  {
    id: "content-generator",
    title: "Content Generator",
    author: "community/content-gen",
    description:
      "Generate blog posts, social media content, and marketing copy. Templates, tone customization, and SEO optimization included.",
    category: "Content",
    stars: 28700,
    downloads: 39400,
    users: 33200,
    version: "1.7.0",
    updatedAt: "5 days ago",
    license: "MIT",
  },
  {
    id: "code-reviewer",
    title: "Code Reviewer",
    author: "community/code-reviewer",
    description:
      "Automated code review with security scanning, best practice checks, and performance suggestions. Integrates with GitHub and GitLab.",
    category: "Developer Tools",
    stars: 52100,
    downloads: 67300,
    users: 58900,
    version: "2.4.0",
    updatedAt: "2 days ago",
    license: "MIT",
  },
  {
    id: "translation-hub",
    title: "Translation Hub",
    author: "enterprise/translation-hub",
    description:
      "AI-powered translation and localization platform. Support for 100+ languages with context-aware translations and terminology management.",
    category: "Communication",
    stars: 21400,
    downloads: 28900,
    users: 24600,
    version: "1.4.0",
    updatedAt: "2 weeks ago",
    license: "Commercial",
  },
  {
    id: "meeting-assistant",
    title: "Meeting Assistant",
    author: "community/meeting-assistant",
    description:
      "Transcribe meetings, generate summaries, and extract action items automatically. Calendar integration and follow-up reminders.",
    category: "Productivity",
    stars: 38200,
    downloads: 51600,
    users: 44300,
    version: "2.1.0",
    updatedAt: "4 days ago",
    license: "MIT",
  },
  {
    id: "image-analyzer",
    title: "Image Analyzer",
    author: "community/image-analyzer",
    description:
      "Analyze images with AI vision capabilities. Object detection, text extraction, and visual question answering in one package.",
    category: "Data",
    stars: 33600,
    downloads: 44800,
    users: 38100,
    version: "1.6.0",
    updatedAt: "1 week ago",
    license: "Apache-2.0",
  },
  {
    id: "slack-bot",
    title: "Slack Bot",
    author: "community/slack-bot",
    description:
      "Intelligent Slack bot with customizable commands, thread summarization, and team productivity features. Easy setup and configuration.",
    category: "Integration",
    stars: 29400,
    downloads: 42300,
    users: 36800,
    version: "2.0.0",
    updatedAt: "3 days ago",
    license: "MIT",
  },
  {
    id: "email-assistant",
    title: "Email Assistant",
    author: "community/email-assistant",
    description:
      "Draft, reply, and organize emails with AI assistance. Smart categorization, priority detection, and response suggestions.",
    category: "Communication",
    stars: 25600,
    downloads: 35200,
    users: 29800,
    version: "1.3.0",
    updatedAt: "6 days ago",
    license: "MIT",
  },
];

export const appCategories = [
  "All",
  "Developer Tools",
  "Productivity",
  "Business",
  "Data",
  "Integration",
  "Communication",
  "Content",
];
