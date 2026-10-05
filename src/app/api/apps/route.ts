import { NextResponse } from "next/server";
import { apps, appCategories } from "@/data/apps";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get("search") || "";
  const category = searchParams.get("category") || "All";
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || "21", 10);
  const sort = searchParams.get("sort") || "stars";

  let filteredApps = [...apps];

  // Filter by category
  if (category && category !== "All") {
    filteredApps = filteredApps.filter((app) => app.category === category);
  }

  // Filter by search
  if (search) {
    const searchLower = search.toLowerCase();
    filteredApps = filteredApps.filter(
      (app) =>
        app.title.toLowerCase().includes(searchLower) ||
        app.description.toLowerCase().includes(searchLower) ||
        app.author.toLowerCase().includes(searchLower)
    );
  }

  // Sort apps
  filteredApps.sort((a, b) => {
    switch (sort) {
      case "stars":
        return b.stars - a.stars;
      case "downloads":
        return b.downloads - a.downloads;
      case "recent":
        const dateA = a.updatedAt || "0 days ago";
        const dateB = b.updatedAt || "0 days ago";
        return dateA.localeCompare(dateB);
      default:
        return b.stars - a.stars;
    }
  });

  // Pagination
  const total = filteredApps.length;
  const totalPages = Math.ceil(total / limit);
  const offset = (page - 1) * limit;
  const paginatedApps = filteredApps.slice(offset, offset + limit);

  return NextResponse.json({
    apps: paginatedApps,
    pagination: {
      page,
      limit,
      total,
      totalPages,
    },
    categories: appCategories,
  });
}
