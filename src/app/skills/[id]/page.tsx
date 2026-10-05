"use client";

import { useParams, useRouter } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/data/skills";
import {
  Star,
  ArrowDown,
  Users,
  ArrowLeft,
  ExternalLink,
  Copy,
  Check,
  GitBranch,
  Calendar,
  Shield,
} from "lucide-react";
import { useState } from "react";

export default function SkillDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [copied, setCopied] = useState(false);

  const skill = skills.find((s) => s.id === params.id);

  if (!skill) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container mx-auto max-w-7xl px-4 py-10 md:px-6">
          <div className="flex flex-col items-center justify-center py-20">
            <h1 className="mb-4 text-2xl font-semibold text-foreground">
              Skill Not Found
            </h1>
            <p className="mb-6 text-muted-foreground">
              The skill you're looking for doesn't exist.
            </p>
            <Button
              onClick={() => router.push("/")}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Skills
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const getCategoryColor = (cat: string) => {
    const colors: Record<string, string> = {
      Design: "bg-[#2a2218] text-[#c9a67a] border-[#3d3020]",
      Coding: "bg-[#182420] text-[#6ab895] border-[#1f3830]",
      Planning: "bg-[#1f1f1f] text-[#9a9a9a] border-[#2a2a2a]",
      Writing: "bg-[#211f26] text-[#a898b8] border-[#2d2a35]",
      Research: "bg-[#1e2025] text-[#8a92b0] border-[#282a32]",
      "Data & Analytics": "bg-[#1a2020] text-[#68b8a0] border-[#203030]",
      Communication: "bg-[#201a20] text-[#b898a8] border-[#302530]",
      Productivity: "bg-[#20201a] text-[#a8b868] border-[#303020]",
    };
    return colors[cat] || "bg-[#1f1f1f] text-[#9a9a9a] border-[#2a2a2a]";
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(`automatehub install ${skill.author}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isOfficialSkill = skill.author.startsWith("anthropic/");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto max-w-7xl px-4 py-8 md:px-6">
        {/* Back Button */}
        <button
          type="button"
          onClick={() => router.push("/")}
          className="mb-6 flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Skills
        </button>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header */}
            <div className="mb-6">
              <div className="mb-3 flex items-start justify-between">
                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <h1 className="text-2xl font-semibold text-foreground">
                      {skill.title}
                    </h1>
                    {isOfficialSkill && (
                      <Badge className="bg-primary/20 text-primary border-primary/30 border text-xs">
                        Official
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{skill.author}</p>
                </div>
                <Badge
                  variant="secondary"
                  className={`${getCategoryColor(skill.category)} border px-3 py-1 text-xs font-normal`}
                >
                  {skill.category}
                </Badge>
              </div>
            </div>

            {/* Stats */}
            <div className="mb-8 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Star className="h-4 w-4 text-primary" />
                <span>{skill.stars.toLocaleString()} stars</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <ArrowDown className="h-4 w-4" />
                <span>{skill.downloads.toLocaleString()} downloads</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="h-4 w-4" />
                <span>{skill.users.toLocaleString()} users</span>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="mb-4 text-lg font-semibold text-foreground">
                Description
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                {skill.description}
              </p>
            </div>

            {/* Source Info */}
            {isOfficialSkill && (
              <div className="mb-8 rounded-lg border border-primary/20 bg-primary/5 p-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/20 p-2">
                    <Shield className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Official Claude Skill</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      This skill is maintained by Anthropic and is part of the official Claude Skills Cookbook.
                      View the source on{" "}
                      <a
                        href="https://github.com/anthropics/claude-cookbooks/tree/main/skills"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary underline underline-offset-2 hover:text-primary/80"
                      >
                        GitHub
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Usage */}
            <div className="mb-8">
              <h2 className="mb-4 text-lg font-semibold text-foreground">
                When to Use
              </h2>
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {skill.description}
                </p>
              </div>
            </div>

            {/* Example Prompts */}
            <div className="mb-8">
              <h2 className="mb-4 text-lg font-semibold text-foreground">
                Example Prompts
              </h2>
              <div className="space-y-3">
                <div className="rounded-lg border border-border bg-card p-4">
                  <p className="text-sm text-muted-foreground">
                    "Help me with {skill.title} for my project"
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-card p-4">
                  <p className="text-sm text-muted-foreground">
                    "Use the {skill.category.toLowerCase()} skill to assist with my task"
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 space-y-6">
              {/* Install Card */}
              <div className="rounded-lg border border-border bg-card p-5">
                <h3 className="mb-4 font-semibold text-foreground">
                  Install Skill
                </h3>
                <div className="mb-4 flex items-center gap-2 rounded-md border border-border bg-background p-3">
                  <code className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-sm text-muted-foreground">
                    automatehub install {skill.author}
                  </code>
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="shrink-0 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {copied ? (
                      <Check className="h-4 w-4 text-green-500" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Add to Claude
                </Button>
              </div>

              {/* Details Card */}
              <div className="rounded-lg border border-border bg-card p-5">
                <h3 className="mb-4 font-semibold text-foreground">Details</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <GitBranch className="h-4 w-4" />
                      <span>Version</span>
                    </div>
                    <span className="text-sm text-foreground">{skill.version || "1.0.0"}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>Updated</span>
                    </div>
                    <span className="text-sm text-foreground">{skill.updatedAt || "Recently"}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Shield className="h-4 w-4" />
                      <span>License</span>
                    </div>
                    <span className="text-sm text-foreground">{skill.license || "MIT"}</span>
                  </div>
                </div>
              </div>

              {/* Links Card */}
              <div className="rounded-lg border border-border bg-card p-5">
                <h3 className="mb-4 font-semibold text-foreground">Links</h3>
                <div className="space-y-3">
                  {skill.githubUrl ? (
                    <a
                      href={skill.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>View on GitHub</span>
                    </a>
                  ) : (
                    <a
                      href="#"
                      className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>View on GitHub</span>
                    </a>
                  )}
                  <a
                    href="https://docs.anthropic.com/en/docs/claude-code/skills"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Skills Documentation</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Report Issue</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
