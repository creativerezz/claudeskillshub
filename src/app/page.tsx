"use client";

import { useState, useEffect, useCallback } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SkillCard } from "@/components/SkillCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useDebounce } from "@/hooks/useDebounce";
import { Search, ChevronLeft, ChevronRight, Loader2, ArrowUpDown } from "lucide-react";
import type { Skill } from "@/data/skills";

type SortOption = "stars" | "downloads" | "recent";

export default function SkillsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState<SortOption>("stars");
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 21,
    total: 0,
    totalPages: 0,
  });

  const debouncedSearch = useDebounce(searchQuery, 300);

  const fetchSkills = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        search: debouncedSearch,
        category: selectedCategory,
        page: currentPage.toString(),
        limit: "21",
        sort: sortBy,
      });

      const response = await fetch(`/api/skills?${params}`);
      const data = await response.json();

      setSkills(data.skills);
      setCategories(data.categories);
      setPagination(data.pagination);
    } catch (error) {
      console.error("Failed to fetch skills:", error);
    } finally {
      setLoading(false);
    }
  }, [debouncedSearch, selectedCategory, currentPage, sortBy]);

  useEffect(() => {
    fetchSkills();
  }, [fetchSkills]);

  // Reset to page 1 when search, category, or sort changes
  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedSearch, selectedCategory, sortBy]);

  const totalSkills = pagination.total || 30721;
  const totalPages = pagination.totalPages || 1463;

  const getSortLabel = (option: SortOption) => {
    switch (option) {
      case "stars":
        return "Most Stars";
      case "downloads":
        return "Most Downloads";
      case "recent":
        return "Recently Updated";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto max-w-7xl px-4 py-10 md:px-6">
        {/* Header Section */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <h1 className="mb-2 text-2xl font-semibold text-foreground">Skills</h1>
            <p className="text-sm text-muted-foreground">
              Browse 15,000+ AI skills from the community. Compatible with{" "}
              <a
                href="https://docs.anthropic.com/en/docs/claude-code/skills"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline underline-offset-2 hover:text-primary"
              >
                Claude Skills
              </a>
              .
            </p>
          </div>
          <Button
            variant="outline"
            className="w-fit border-primary px-4 text-sm text-primary hover:bg-primary hover:text-primary-foreground"
            onClick={() => window.location.href = '/submit-skill'}
          >
            Create Skill
          </Button>
        </div>

        {/* Skills Best Practices Banner */}
        <div className="mb-6 rounded-lg border border-primary/20 bg-primary/5 p-4">
          <div className="flex items-start gap-3">
            <div className="rounded-full bg-primary/20 p-2">
              <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-foreground">New to creating Skills?</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Learn how to write effective Skills with our comprehensive{" "}
                <a
                  href="/docs/skills-best-practices"
                  className="text-primary underline underline-offset-2 hover:text-primary/80"
                >
                  Skills Best Practices Guide
                </a>
                . Includes naming conventions, progressive disclosure patterns, and testing strategies.
              </p>
            </div>
          </div>
        </div>

        {/* Search and Sort Bar */}
        <div className="mb-6 flex flex-col gap-4 md:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search skills by name or description..."
              className="h-10 border-border/60 bg-card pl-10 text-sm placeholder:text-muted-foreground/60 focus-visible:ring-primary/50"
              value={searchQuery}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Sort Dropdown */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="flex h-10 w-full items-center justify-between rounded-md border border-border/60 bg-card px-3 py-2 text-sm text-foreground ring-offset-background transition-colors hover:border-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 md:w-48"
            >
              <option value="stars">Most Stars</option>
              <option value="downloads">Most Downloads</option>
              <option value="recent">Recently Updated</option>
            </select>
          </div>
        </div>

        {/* Category Filters */}
        <div className="mb-6 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`rounded-md border px-3 py-1.5 text-sm transition-colors ${
                selectedCategory === category
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border/60 bg-transparent text-muted-foreground hover:border-muted-foreground/60 hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Count and Current Sort */}
        <div className="mb-5 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            {totalSkills.toLocaleString()} skills found
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <ArrowUpDown className="h-3.5 w-3.5" />
            <span>Sorted by: {getSortLabel(sortBy)}</span>
          </div>
        </div>

        {/* Skills Grid */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : skills.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <p className="mb-2 text-lg font-medium text-foreground">No skills found</p>
            <p className="text-sm text-muted-foreground">
              Try adjusting your search or filter criteria
            </p>
          </div>
        ) : (
          <div className="mb-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <SkillCard
                key={skill.id}
                id={skill.id}
                title={skill.title}
                author={skill.author}
                description={skill.description}
                category={skill.category}
                stars={skill.stars}
                downloads={skill.downloads}
                users={skill.users}
              />
            ))}
          </div>
        )}

        {/* Pagination */}
        {!loading && skills.length > 0 && (
          <div className="flex items-center justify-center gap-1">
            <Button
              variant="ghost"
              size="sm"
              className="gap-1 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>

            {[1, 2, 3].map((page) => (
              <Button
                key={page}
                variant="ghost"
                size="sm"
                className={`h-9 w-9 text-sm ${
                  currentPage === page
                    ? "bg-secondary text-foreground"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </Button>
            ))}

            <span className="px-2 text-sm text-muted-foreground">...</span>

            <Button
              variant="ghost"
              size="sm"
              className="h-9 w-9 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
              onClick={() => setCurrentPage(totalPages)}
            >
              {totalPages}
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="gap-1 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
