import Image from "next/image";
import React from "react";

function Header() {
  return (
    <>
      <div className="flex items-center justify-between bg-neutral-800 p-6 rounded-lg">
        <div>
          <h1 className="text-md font-semibold">Hey! I'm Atharva!</h1>
          <p className="pt-4 text-zinc-500">
            You have an Idea! I know how to build it! Let's work together!
          </p>
          <p className="text-sm text-zinc-500">Mail: atharva.vit@gmail.com</p>
        </div>
        <div>
          <Image
            src="./vercel.svg"
            width={40}
            height={40}
            alt="Picture of the author"
          />
        </div>
      </div>
    </>
  );
}

export default Header;
