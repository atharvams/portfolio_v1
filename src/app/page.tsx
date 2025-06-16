import Header from "@/components/header";
import Socials from "@/components/socials";
import ProjectCard from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white px-6 py-12 font-sans">
      <div className="max-w-xl mx-auto mt-10">
        <Header />
        <Socials />
        <section>
          <h1 className="bg-zinc-700 font-semibold text-md pl-3 m-1 rounded-2xl">Projects</h1>
          <ProjectCard />
        </section>
      </div>
    </div>
  );
}
