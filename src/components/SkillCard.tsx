"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Star, ArrowDown, Users, Heart } from "lucide-react";
import { useFavorites } from "@/hooks/useFavorites";

interface SkillCardProps {
  id: string;
  title: string;
  author: string;
  description: string;
  category: string;
  stars: number;
  downloads: number;
  users: number;
}

export function SkillCard({
  id,
  title,
  author,
  description,
  category,
  stars,
  downloads,
  users,
}: SkillCardProps) {
  const { toggleFavorite, isFavorite } = useFavorites();
  const favorite = isFavorite(id);

  const getCategoryColor = (cat: string) => {
    const colors: Record<string, string> = {
      Design: "bg-[#2a2218] text-[#c9a67a] border-[#3d3020]",
      Coding: "bg-[#182420] text-[#6ab895] border-[#1f3830]",
      Planning: "bg-[#1f1f1f] text-[#9a9a9a] border-[#2a2a2a]",
      Writing: "bg-[#211f26] text-[#a898b8] border-[#2d2a35]",
      Research: "bg-[#1e2025] text-[#8a92b0] border-[#282a32]",
    };
    return colors[cat] || "bg-[#1f1f1f] text-[#9a9a9a] border-[#2a2a2a]";
  };

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleFavorite(id);
  };

  return (
    <Link href={`/skills/${id}`}>
      <div className="group flex h-full cursor-pointer flex-col rounded-lg border border-border/60 bg-card p-5 transition-all duration-200 hover:border-muted-foreground/40 hover:bg-card/90">
        <div className="mb-1.5 flex items-start justify-between gap-3">
          <h3 className="font-semibold leading-tight text-foreground transition-colors group-hover:text-primary">
            {title}
          </h3>
          <div className="flex shrink-0 items-center gap-3">
            <button
              onClick={handleFavoriteClick}
              className="transition-colors hover:text-primary"
              aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
            >
              <Heart
                className={`h-4 w-4 ${
                  favorite ? "fill-primary text-primary" : "text-muted-foreground"
                }`}
              />
            </button>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Star className="h-3.5 w-3.5" />
              <span>{stars.toLocaleString()}</span>
            </div>
          </div>
        </div>

        <p className="mb-3 text-sm text-muted-foreground">{author}</p>

        <p className="mb-5 line-clamp-2 flex-1 text-sm leading-relaxed text-muted-foreground/70">
          {description}
        </p>

        <div className="flex items-center justify-between">
          <Badge
            variant="secondary"
            className={`${getCategoryColor(category)} border px-2 py-0.5 text-xs font-normal`}
          >
            {category}
          </Badge>

          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <ArrowDown className="h-3.5 w-3.5" />
              <span>{downloads.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Users className="h-3.5 w-3.5" />
              <span>{users.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
