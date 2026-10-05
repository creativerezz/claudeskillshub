"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function SkillsBestPracticesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto max-w-4xl px-4 py-8 md:px-6">
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Skills
        </Link>

        <article className="prose prose-invert max-w-none">
          <h1 className="mb-4 text-3xl font-bold text-foreground">
            Skill Authoring Best Practices
          </h1>
          <p className="text-lg text-muted-foreground">
            Learn how to write effective Skills that Claude can discover and use
            successfully.
          </p>

          <hr className="my-8 border-border" />

          <p className="lead text-muted-foreground">
            Good Skills are concise, well-structured, and tested with real usage. This
            guide provides practical authoring decisions to help you write Skills that
            Claude can discover and use effectively.
          </p>

          <h2 className="mt-8 text-2xl font-semibold text-foreground">Core Principles</h2>

          <h3 className="mt-6 text-xl font-semibold text-foreground">Concise is Key</h3>
          <p className="text-muted-foreground">
            The context window is a public good. Your Skill shares the context window
            with everything else Claude needs to know, including:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
            <li>The system prompt</li>
            <li>Conversation history</li>
            <li>Other Skills' metadata</li>
            <li>Your actual request</li>
          </ul>

          <p className="text-muted-foreground">
            Not every token in your Skill has an immediate cost. At startup, only the
            metadata (name and description) from all Skills is pre-loaded. Claude reads
            SKILL.md only when the Skill becomes relevant, and reads additional files only
            as needed.
          </p>

          <div className="my-6 rounded-lg border border-primary/20 bg-primary/5 p-4">
            <p className="font-semibold text-foreground">Default assumption: Claude is already very smart</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Only add context Claude doesn't already have. Challenge each piece of
              information:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-sm text-muted-foreground">
              <li>"Does Claude really need this explanation?"</li>
              <li>"Can I assume Claude knows this?"</li>
              <li>"Does this paragraph justify its token cost?"</li>
            </ul>
          </div>

          <div className="my-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-green-500/20 bg-green-500/5 p-4">
              <p className="mb-2 font-semibold text-green-400">✓ Good: Concise (~50 tokens)</p>
              <pre className="overflow-x-auto rounded bg-card p-3 text-sm text-muted-foreground">
{`## Extract PDF text

Use pdfplumber for text extraction:

\`\`\`python
import pdfplumber

with pdfplumber.open("file.pdf") as pdf:
    text = pdf.pages[0].extract_text()
\`\`\``}
              </pre>
            </div>

            <div className="rounded-lg border border-red-500/20 bg-red-500/5 p-4">
              <p className="mb-2 font-semibold text-red-400">✗ Bad: Too verbose (~150 tokens)</p>
              <pre className="overflow-x-auto rounded bg-card p-3 text-sm text-muted-foreground">
{`## Extract PDF text

PDF (Portable Document Format) files are
a common file format that contains text,
images, and other content. To extract
text from a PDF, you'll need to use a
library. There are many libraries
available for PDF processing, but we
recommend pdfplumber because it's easy
to use and handles most cases well...`}
              </pre>
            </div>
          </div>

          <h3 className="mt-6 text-xl font-semibold text-foreground">
            Set Appropriate Degrees of Freedom
          </h3>
          <p className="text-muted-foreground">
            Match the level of specificity to the task's fragility and variability.
          </p>

          <div className="my-6 space-y-4">
            <div className="rounded-lg border border-border bg-card p-4">
              <p className="mb-2 font-semibold text-foreground">High Freedom (text-based instructions)</p>
              <p className="mb-2 text-sm text-muted-foreground">Use when:</p>
              <ul className="list-disc space-y-1 pl-6 text-sm text-muted-foreground">
                <li>Multiple approaches are valid</li>
                <li>Decisions depend on context</li>
                <li>Heuristics guide the approach</li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
              <p className="mb-2 font-semibold text-foreground">Medium Freedom (pseudocode with parameters)</p>
              <p className="mb-2 text-sm text-muted-foreground">Use when:</p>
              <ul className="list-disc space-y-1 pl-6 text-sm text-muted-foreground">
                <li>A preferred pattern exists</li>
                <li>Some variation is acceptable</li>
                <li>Configuration affects behavior</li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
              <p className="mb-2 font-semibold text-foreground">Low Freedom (specific scripts)</p>
              <p className="mb-2 text-sm text-muted-foreground">Use when:</p>
              <ul className="list-disc space-y-1 pl-6 text-sm text-muted-foreground">
                <li>Operations are fragile and error-prone</li>
                <li>Consistency is critical</li>
                <li>A specific sequence must be followed</li>
              </ul>
            </div>
          </div>

          <h2 className="mt-8 text-2xl font-semibold text-foreground">Naming Conventions</h2>
          <p className="text-muted-foreground">
            Use consistent naming patterns to make Skills easier to reference and discuss. We
            recommend using <strong>gerund form</strong> (verb + -ing) for Skill names.
          </p>

          <div className="my-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-green-500/20 bg-green-500/5 p-4">
              <p className="mb-3 font-semibold text-green-400">✓ Good naming examples</p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li><code className="rounded bg-card px-2 py-0.5">processing-pdfs</code></li>
                <li><code className="rounded bg-card px-2 py-0.5">analyzing-spreadsheets</code></li>
                <li><code className="rounded bg-card px-2 py-0.5">managing-databases</code></li>
                <li><code className="rounded bg-card px-2 py-0.5">testing-code</code></li>
              </ul>
            </div>

            <div className="rounded-lg border border-red-500/20 bg-red-500/5 p-4">
              <p className="mb-3 font-semibold text-red-400">✗ Avoid</p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li><code className="rounded bg-card px-2 py-0.5">helper</code> - Too vague</li>
                <li><code className="rounded bg-card px-2 py-0.5">utils</code> - Too generic</li>
                <li><code className="rounded bg-card px-2 py-0.5">documents</code> - Unclear action</li>
                <li><code className="rounded bg-card px-2 py-0.5">anthropic-helper</code> - Reserved word</li>
              </ul>
            </div>
          </div>

          <h2 className="mt-8 text-2xl font-semibold text-foreground">
            Writing Effective Descriptions
          </h2>
          <p className="text-muted-foreground">
            The <code className="rounded bg-card px-2 py-0.5 text-sm">description</code> field
            enables Skill discovery and should include both what the Skill does and when to use it.
          </p>

          <div className="my-6 rounded-lg border border-orange-500/20 bg-orange-500/5 p-4">
            <p className="font-semibold text-orange-400">⚠ Always write in third person</p>
            <p className="mt-2 text-sm text-muted-foreground">
              The description is injected into the system prompt, and inconsistent
              point-of-view can cause discovery problems.
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="text-green-400">✓ "Processes Excel files and generates reports"</li>
              <li className="text-red-400">✗ "I can help you process Excel files"</li>
              <li className="text-red-400">✗ "You can use this to process Excel files"</li>
            </ul>
          </div>

          <h2 className="mt-8 text-2xl font-semibold text-foreground">
            Progressive Disclosure Patterns
          </h2>
          <p className="text-muted-foreground">
            SKILL.md serves as an overview that points Claude to detailed materials as needed.
            Keep SKILL.md body under 500 lines for optimal performance.
          </p>

          <div className="my-6 rounded-lg border border-border bg-card p-4">
            <p className="mb-3 font-semibold text-foreground">Example structure:</p>
            <pre className="overflow-x-auto text-sm text-muted-foreground">
{`pdf/
├── SKILL.md              # Main instructions
├── FORMS.md              # Form-filling guide
├── reference.md          # API reference
├── examples.md           # Usage examples
└── scripts/
    ├── analyze_form.py   # Utility script
    ├── fill_form.py      # Form filling script
    └── validate.py       # Validation script`}
            </pre>
          </div>

          <h2 className="mt-8 text-2xl font-semibold text-foreground">Checklist for Effective Skills</h2>
          <p className="text-muted-foreground">Before sharing a Skill, verify:</p>

          <div className="my-6 space-y-4">
            <div className="rounded-lg border border-border bg-card p-4">
              <p className="mb-3 font-semibold text-foreground">Core Quality</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <span>Description is specific and includes key terms</span>
                </li>
                <li className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <span>Description includes both what the Skill does and when to use it</span>
                </li>
                <li className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <span>SKILL.md body is under 500 lines</span>
                </li>
                <li className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <span>Additional details are in separate files (if needed)</span>
                </li>
                <li className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <span>No time-sensitive information (or in "old patterns" section)</span>
                </li>
                <li className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <span>Consistent terminology throughout</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
              <p className="mb-3 font-semibold text-foreground">Testing</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <span>At least three evaluations created</span>
                </li>
                <li className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <span>Tested with Haiku, Sonnet, and Opus</span>
                </li>
                <li className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <span>Tested with real usage scenarios</span>
                </li>
                <li className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <span>Team feedback incorporated (if applicable)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 rounded-lg border border-primary/20 bg-primary/5 p-6">
            <h3 className="mb-3 text-lg font-semibold text-foreground">Next Steps</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <a
                href="https://docs.anthropic.com/en/docs/claude-code/skills"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/40"
              >
                <p className="font-semibold text-foreground">Use Skills in Claude Code</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Create and manage Skills in Claude Code
                </p>
              </a>
              <a
                href="https://docs.anthropic.com/en/build-with-claude/skills-guide"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/40"
              >
                <p className="font-semibold text-foreground">Use Skills with the API</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Upload and use Skills programmatically
                </p>
              </a>
            </div>
          </div>

          <div className="mt-8 rounded-lg border border-border bg-card p-4">
            <p className="text-sm text-muted-foreground">
              <strong>Source:</strong> This documentation is adapted from{" "}
              <a
                href="https://docs.anthropic.com/en/docs/agents-and-tools/agent-skills/best-practices"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-2 hover:text-primary/80"
              >
                Anthropic's official Skills documentation
              </a>
              .
            </p>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
