import { socialData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { iconMap } from "./icons/iconMap";

function Socials() {
  return (
    <div className="flex flex-row gap-4 p-4">
      {socialData.map((social, index) => {
        const Icon = iconMap[social.icon as keyof typeof iconMap];
        return (
          <Link
            key={index}
            href={social.url}
            target="_blank"
            className="flex items-center gap-2 p-2 hover:bg-neutral-800 rounded-lg transition-colors"
          >
            <Icon className="w-6 h-6 text-white" />
          </Link>
        );
      })}
    </div>
  );
}

export default Socials;
