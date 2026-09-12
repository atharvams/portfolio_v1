import React from "react";
import { Experience } from "@/lib/data";
import { Briefcase } from "lucide-react";

function ExperienceCard({
  role,
  company,
  location,
  period,
  description,
  highlights,
  tags,
}: Experience) {
  return (
    <div className="p-4">
      <div className="flex items-start gap-3">
        <div className="mt-1 p-1.5 bg-zinc-800 rounded-md">
          <Briefcase className="w-4 h-4 text-zinc-400" />
        </div>
        <div className="flex-1">
          <div className="flex items-baseline justify-between mb-1 flex-wrap gap-1">
            <h3 className="text-sm font-medium text-white">{role}</h3>
            <span className="text-xs text-zinc-500">{period}</span>
          </div>
          <p className="text-sm text-zinc-400 mb-2">
            {company} · {location}
          </p>
          <p className="text-sm text-zinc-500 mb-3 leading-relaxed">
            {description}
          </p>
          <ul className="space-y-1.5 mb-3">
            {highlights.map((highlight, index) => (
              <li
                key={index}
                className="text-xs text-zinc-500 pl-3 relative before:content-['▸'] before:absolute before:left-0 before:text-zinc-600"
              >
                {highlight}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs text-zinc-400 dark:text-zinc-500"
              >
                {tag}
                {index < tags.length - 1 ? " / " : ""}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceCard;
