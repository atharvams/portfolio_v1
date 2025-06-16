import Header from "@/components/header";
import Socials from "@/components/socials";
import ProjectCard from "@/components/ui/card";
import { projects } from "@/lib/data";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white px-6 py-12 font-sans">
      <div className="max-w-xl mx-auto mt-10">
        <Header />
        <Socials />
        <section>
          <h1 className="bg-zinc-700 font-semibold text-md pl-3 m-1 rounded-2xl">
            Projects
          </h1>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
            />
          ))}
        </section>
      </div>
    </div>
  );
}
