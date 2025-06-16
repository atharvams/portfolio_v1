import Header from "@/components/header";
import Socials from "@/components/socials";
import ProjectCard from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white px-6 py-12 font-sans">
      <div className="max-w-xl mx-auto mt-10">
        <Header />
        <Socials />
        <ProjectCard />
      </div>
    </div>
  );
}
