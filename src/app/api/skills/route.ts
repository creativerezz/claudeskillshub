import { NextResponse } from "next/server";
import { skills, categories } from "@/data/skills";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get("search") || "";
  const category = searchParams.get("category") || "All";
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || "21", 10);
  const sort = searchParams.get("sort") || "stars";

  let filteredSkills = [...skills];

  // Filter by category
  if (category && category !== "All") {
    filteredSkills = filteredSkills.filter(
      (skill) => skill.category === category
    );
  }

  // Filter by search
  if (search) {
    const searchLower = search.toLowerCase();
    filteredSkills = filteredSkills.filter(
      (skill) =>
        skill.title.toLowerCase().includes(searchLower) ||
        skill.description.toLowerCase().includes(searchLower) ||
        skill.author.toLowerCase().includes(searchLower)
    );
  }

  // Sort skills
  filteredSkills.sort((a, b) => {
    switch (sort) {
      case "stars":
        return b.stars - a.stars;
      case "downloads":
        return b.downloads - a.downloads;
      case "recent":
        // Sort by updatedAt (most recent first)
        const dateA = a.updatedAt || "0 days ago";
        const dateB = b.updatedAt || "0 days ago";
        return dateA.localeCompare(dateB);
      default:
        return b.stars - a.stars;
    }
  });

  // Pagination
  const total = filteredSkills.length;
  const totalPages = Math.ceil(total / limit);
  const offset = (page - 1) * limit;
  const paginatedSkills = filteredSkills.slice(offset, offset + limit);

  return NextResponse.json({
    skills: paginatedSkills,
    pagination: {
      page,
      limit,
      total,
      totalPages,
    },
    categories,
  });
}
