import React from "react";
import { Button } from "./button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

function ProjectCard() {
  return (
    <div className="p-4 ">
      <div className="flex items-baseline justify-between mb-1 ">
        <h1 className="text-sm font-medium">OOPS</h1>
        <div className="flex flex-row gap-2">
          <a
            href={""}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            GitHub <ExternalLink className="w-3 h-3" />
          </a>
          <a
            href={""}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            Visit <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
      <h2 className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">
        Description hello huny bunny
      </h2>
      <div className="flex flex-wrap gap-2">
        <span className="text-xs text-zinc-400 dark:text-zinc-500">
          HTML/CSS
        </span>
      </div>
    </div>
  );
}

export default ProjectCard;
