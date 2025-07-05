import Footer from "@/components/footer";
import Header from "@/components/header";
import Socials from "@/components/socials";
import ProjectCard from "@/components/ui/card";
import Tools from "@/components/ui/tool";
import { practiceProjects, projects, researchPapers, tools } from "@/lib/data";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white px-6 py-12 font-sans">
      <div className="max-w-xl mx-auto mt-10">
        <Header />
        <Socials />
        <section className="projects mt-4">
          <h1 className="bg-zinc-800 font-semibold text-md pl-4 pt-1 pb-1 m-1 rounded-t-md">
            Featured Projects
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
        <section className="practice-projects mt-4">
          <h1 className="bg-zinc-800 font-semibold text-md pl-4 pt-1 pb-1 m-1 rounded-t-md">
            Practice projects
          </h1>
          {practiceProjects.map((project, index) => (
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
        <section className="papers mt-4">
          <h1 className="bg-zinc-800 font-semibold text-md pl-4 pt-1 pb-1 m-1 rounded-t-md">
            Published research papers
          </h1>
          {researchPapers.map((project, index) => (
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
        <section className="mt-4">
          <h1 className="bg-zinc-800 font-semibold text-md pl-4 pt-1 pb-1 m-1 rounded-t-md">
            Tools
          </h1>
          <div className="grid grid-cols-7 gap-5 m-4 pl-5 pr-5 max-sm:grid-cols-4 sm:gap-x-4 max-xxs:grid-cols-3 max-xxs:gap-4">
            {tools.map((tool, index) => (
              <Tools key={index} logo={tool.logo} title={tool.title} />
            ))}
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}
