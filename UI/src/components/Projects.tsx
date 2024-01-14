import React, {useEffect} from "react";
import getProjects from "@/API/Projects.ts";
import {Project} from "@/interfaces/project.ts";
import ProjectCard from "@/components/ProjectCard.tsx";

const Projects:React.FC = () => {
    const [projects, setProjects] = React.useState<Project[]>([]);
    useEffect(() => {
        getProjects().then((response) => {
        if (response.ok) {
          response.json().then((data) => {
            setProjects(data);
          });
        }
      });
    }, []);
    useEffect(() => {
        projects.sort((a, b) => {
            if (a.Rank < b.Rank) {return -1; }
            if (a.Rank > b.Rank) {return 1;}
            return 0;
        });
        }, [projects]
    )

    return (
        <section className="w-full py-24" id="projects">
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-12">Projects</h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        projects.map((project) => (
                            <ProjectCard
                                key={project.Rank}
                                Title={project.Title}
                                Description={project.Description}
                                Link={project.Link}
                                LinkLabel={project.LinkLabel}
                                Internal={project.Internal}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Projects