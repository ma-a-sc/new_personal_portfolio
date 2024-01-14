import React from "react";
import {Card, CardContent, CardHeader} from "@/components/ui/card.tsx";
import getProjects from "@/API/Projects.ts";
import {Project} from "@/interfaces/project.ts";

const Projects:React.FC = () => {
    const projectsResponse = getProjects()

    return (
        <section className="w-full py-24" id="projects">
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-12">Projects</h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <Card>
                        <CardHeader>
                            <h3 className="text-lg font-bold">Project 1</h3>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-gray-500 dark:text-gray-400">A brief description of the project.</p>
                            <a className="text-blue-600 hover:text-green-500" href="#">
                                View Code
                            </a>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <h3 className="text-lg font-bold">Project 2</h3>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-gray-500 dark:text-gray-400">A brief description of the project.</p>
                            <a className="text-blue-600 hover:text-green-500" href="#">
                                View Code
                            </a>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <h3 className="text-lg font-bold">Project 3</h3>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-gray-500 dark:text-gray-400">A brief description of the project.</p>
                            <a className="text-blue-600 hover:text-green-500" href="#">
                                View Code
                            </a>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

export default Projects