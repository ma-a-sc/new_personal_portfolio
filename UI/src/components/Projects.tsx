import React, {useEffect} from "react";
import getProjects from "@/API/Projects.ts";
import {Project} from "@/interfaces/project.ts";
import ProjectCard from "@/components/ProjectCard.tsx";

const Projects:React.FC = () => {
    const [allShown, setAllShown] = React.useState(false)
    const [itemsToShow, setItemsToShow] = React.useState(3)
    const [projects, setProjects] = React.useState<Project[]>([]);

    const toggle = () => {
        setAllShown(!allShown)
        setItemsToShow(projects.length)
    }

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
                if (a.Rank < b.Rank) {
                    return -1;
                }
                if (a.Rank > b.Rank) {
                    return 1;
                }
                return 0;
            });
        }, [projects]
    )

    return (
            <section className="w-full py-24" id="projects">
                <div className="container px-4 md:px-6">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-12">Projects</h2>
                    <div className="grid md:gap-6 sm:grid-cols-1 lg:grid-cols-3">

                        {
                            projects.length === 0 ? (
                                <div>Loading...</div>
                            ) : (
                                projects.slice(0, itemsToShow).map((project) => (
                                    <ProjectCard
                                        key={project.Rank}
                                        Title={project.Title}
                                        Description={project.Description}
                                        Link={project.Link}
                                        LinkLabel={project.LinkLabel}
                                        Internal={project.Internal}
                                    />
                                ))
                            )
                        }
                        {
                            allShown ? <></>:
                                <a className="text-blue-600 hover:text-green-500 text-center lg:col-start-2  mx-auto cursor-pointer"
                                   onClick={() => toggle()}>Load
                                    All Projects
                                </a>
                        }
                    </div>

                </div>

            </section>
    )
}

export default Projects