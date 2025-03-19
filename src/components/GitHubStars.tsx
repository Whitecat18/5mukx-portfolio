"use client";

import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { extractRepoInfo } from "@/lib/github";

interface GitHubStarsProps {
  repoUrl: string;
  fallbackCount?: number;
  className?: string;
}

export default function GitHubStars({ repoUrl, fallbackCount = 0, className = "" }: GitHubStarsProps) {
  const [starCount, setStarCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchStars = async () => {
      try {
        setLoading(true);
        const repoInfo = extractRepoInfo(repoUrl);

        if (!repoInfo) {
          throw new Error("Invalid GitHub URL");
        }

        const { owner, repo } = repoInfo;

        const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`);

        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`);
        }

        const data = await response.json();
        setStarCount(data.stargazers_count);
        setError(false);
      } catch (err) {
        console.error("Error fetching GitHub stars:", err);
        setError(true);
        setStarCount(fallbackCount);
      } finally {
        setLoading(false);
      }
    };

    fetchStars();
  }, [repoUrl, fallbackCount]);

  return (
    <div className={`flex items-center space-x-1 text-sm ${className}`}>
      <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
      <span>
        {loading ? "..." : starCount?.toLocaleString() || fallbackCount.toLocaleString()}
      </span>
    </div>
  );
}
