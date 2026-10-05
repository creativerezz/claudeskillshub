"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Check, AlertCircle } from "lucide-react";
import Link from "next/link";
import { categories } from "@/data/skills";

export default function SubmitSkillPage() {
  const [formData, setFormData] = useState({
    name: "",
    author: "",
    description: "",
    category: "",
    githubUrl: "",
    license: "MIT",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    // Name validation
    if (!formData.name) {
      newErrors.name = "Skill name is required";
    } else if (formData.name.length > 64) {
      newErrors.name = "Name must be 64 characters or less";
    } else if (!/^[a-z0-9-]+$/.test(formData.name)) {
      newErrors.name = "Name must contain only lowercase letters, numbers, and hyphens";
    } else if (formData.name.includes("anthropic") || formData.name.includes("claude")) {
      newErrors.name = "Name cannot contain reserved words (anthropic, claude)";
    }

    // Author validation
    if (!formData.author) {
      newErrors.author = "Author name is required";
    } else if (formData.author.length > 64) {
      newErrors.author = "Author must be 64 characters or less";
    }

    // Description validation
    if (!formData.description) {
      newErrors.description = "Description is required";
    } else if (formData.description.length > 1024) {
      newErrors.description = "Description must be 1024 characters or less";
    } else if (formData.description.length < 20) {
      newErrors.description = "Description should be at least 20 characters";
    }

    // Category validation
    if (!formData.category) {
      newErrors.category = "Category is required";
    }

    // GitHub URL validation (optional but must be valid if provided)
    if (formData.githubUrl && !formData.githubUrl.match(/^https?:\/\/(www\.)?github\.com\/.+/)) {
      newErrors.githubUrl = "Please provide a valid GitHub URL";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      // In a real app, this would send data to an API
      console.log("Submitting skill:", formData);
      setSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: "",
          author: "",
          description: "",
          category: "",
          githubUrl: "",
          license: "MIT",
        });
        setSubmitted(false);
      }, 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto max-w-3xl px-4 py-8 md:px-6">
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Skills
        </Link>

        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-bold text-foreground">Submit a Skill</h1>
          <p className="text-muted-foreground">
            Share your skill with the community. Make sure to follow our{" "}
            <Link
              href="/docs/skills-best-practices"
              className="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              best practices guide
            </Link>
            .
          </p>
        </div>

        {submitted && (
          <div className="mb-6 rounded-lg border border-green-500/20 bg-green-500/10 p-4">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-green-500/20 p-2">
                <Check className="h-4 w-4 text-green-500" />
              </div>
              <div>
                <p className="font-semibold text-green-500">Skill submitted successfully!</p>
                <p className="text-sm text-muted-foreground">
                  Your skill will be reviewed and published soon.
                </p>
              </div>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-foreground">
              Skill Name <span className="text-red-500">*</span>
            </label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="processing-pdfs"
              className={`${errors.name ? "border-red-500" : ""}`}
            />
            {errors.name && (
              <p className="flex items-center gap-1 text-sm text-red-500">
                <AlertCircle className="h-3.5 w-3.5" />
                {errors.name}
              </p>
            )}
            <p className="text-xs text-muted-foreground">
              Use lowercase letters, numbers, and hyphens only. Max 64 characters.
            </p>
          </div>

          {/* Author Field */}
          <div className="space-y-2">
            <label htmlFor="author" className="block text-sm font-medium text-foreground">
              Author <span className="text-red-500">*</span>
            </label>
            <Input
              id="author"
              name="author"
              value={formData.author}
              onChange={handleChange}
              placeholder="username/organization"
              className={`${errors.author ? "border-red-500" : ""}`}
            />
            {errors.author && (
              <p className="flex items-center gap-1 text-sm text-red-500">
                <AlertCircle className="h-3.5 w-3.5" />
                {errors.author}
              </p>
            )}
          </div>

          {/* Description Field */}
          <div className="space-y-2">
            <label htmlFor="description" className="block text-sm font-medium text-foreground">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe what your skill does and when to use it. Write in third person."
              rows={4}
              className={`flex w-full rounded-md border border-border bg-card px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                errors.description ? "border-red-500" : ""
              }`}
            />
            {errors.description && (
              <p className="flex items-center gap-1 text-sm text-red-500">
                <AlertCircle className="h-3.5 w-3.5" />
                {errors.description}
              </p>
            )}
            <p className="text-xs text-muted-foreground">
              {formData.description.length}/1024 characters. Include what the skill does and when to use it.
            </p>
          </div>

          {/* Category Field */}
          <div className="space-y-2">
            <label htmlFor="category" className="block text-sm font-medium text-foreground">
              Category <span className="text-red-500">*</span>
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className={`flex h-10 w-full items-center rounded-md border border-border bg-card px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 ${
                errors.category ? "border-red-500" : ""
              }`}
            >
              <option value="">Select a category...</option>
              {categories.filter((c) => c !== "All").map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            {errors.category && (
              <p className="flex items-center gap-1 text-sm text-red-500">
                <AlertCircle className="h-3.5 w-3.5" />
                {errors.category}
              </p>
            )}
          </div>

          {/* GitHub URL Field */}
          <div className="space-y-2">
            <label htmlFor="githubUrl" className="block text-sm font-medium text-foreground">
              GitHub URL (optional)
            </label>
            <Input
              id="githubUrl"
              name="githubUrl"
              value={formData.githubUrl}
              onChange={handleChange}
              placeholder="https://github.com/username/skill-repo"
              className={`${errors.githubUrl ? "border-red-500" : ""}`}
            />
            {errors.githubUrl && (
              <p className="flex items-center gap-1 text-sm text-red-500">
                <AlertCircle className="h-3.5 w-3.5" />
                {errors.githubUrl}
              </p>
            )}
          </div>

          {/* License Field */}
          <div className="space-y-2">
            <label htmlFor="license" className="block text-sm font-medium text-foreground">
              License
            </label>
            <select
              id="license"
              name="license"
              value={formData.license}
              onChange={handleChange}
              className="flex h-10 w-full items-center rounded-md border border-border bg-card px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
            >
              <option value="MIT">MIT</option>
              <option value="Apache-2.0">Apache 2.0</option>
              <option value="GPL-3.0">GPL 3.0</option>
              <option value="BSD-3-Clause">BSD 3-Clause</option>
            </select>
          </div>

          {/* Guidelines */}
          <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
            <p className="mb-2 font-semibold text-foreground">Before submitting:</p>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Ensure your skill follows naming conventions (gerund form preferred)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Write description in third person</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Test your skill with different Claude models</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Review the Skills Best Practices guide</span>
              </li>
            </ul>
          </div>

          {/* Submit Button */}
          <div className="flex gap-4">
            <Button
              type="submit"
              className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Submit Skill
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => window.location.href = "/"}
              className="border-border"
            >
              Cancel
            </Button>
          </div>
        </form>
      </main>

      <Footer />
    </div>
  );
}
