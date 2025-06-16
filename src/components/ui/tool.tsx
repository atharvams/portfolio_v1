import { Tool } from "@/lib/data";
import Image from "next/image";
import React from "react";

function Tools({ logo, title }: Tool) {
  return (
    <div className="flex flex-col items-center group">
      <div className="relative h-7 w-7 sm:h-8 sm:w-8 mb-3 transition-all duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-1">
        <Image
          src={logo}
          alt={`${title} logo`}
          fill
          className="object-contain drop-shadow-md"
          loading="eager"
        />
      </div>
      <span className="text-xs text-zinc-500 dark:text-zinc-400 text-center whitespace-nowrap">
        {title}
      </span>
    </div>
  );
}

export default Tools;
