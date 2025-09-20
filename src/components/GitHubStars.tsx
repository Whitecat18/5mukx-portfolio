"use client";
import useSWR from "swr";
import { Star } from "lucide-react";
import { extractRepoInfo } from "@/lib/github";

interface GitHubStarsProps {
  repoUrl: string;
  fallbackCount?: number;
  className?: string;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function GitHubStars({
  repoUrl,
  fallbackCount = 0,
  className = "",
}: GitHubStarsProps) {
  const repoInfo = extractRepoInfo(repoUrl);

  const { data, error } = useSWR(
    repoInfo ? `https://api.github.com/repos/${repoInfo.owner}/${repoInfo.repo}` : null,
    fetcher,
    {
      fallbackData: { stargazers_count: fallbackCount },
      revalidateOnFocus: false, // Optionally, prevent re-fetching on window focus
    }
  );

  if (!repoInfo) {
    return (
      <div className={`flex items-center space-x-1 text-sm ${className}`}>
        <Star className="h-4 w-4" />
        <span>Invalid URL</span>
      </div>
    );
  }

  const starCount = data?.stargazers_count;
  const isLoading = !data && !error;

  return (
    <div
      className={`flex items-center space-x-2 text-sm font-medium text-gray-400 ${className}`}
    >
      <div className="flex items-center gap-1 rounded-full bg-gray-800 px-3 py-1">
        <Star className="h-4 w-4 fill-yellow-400 text-yellow-500" />
        <span>
          {isLoading
            ? "..."
            : starCount?.toLocaleString() || fallbackCount.toLocaleString()}
        </span>
      </div>
      <span className="hidden sm:inline">stars</span>
    </div>
  );
}