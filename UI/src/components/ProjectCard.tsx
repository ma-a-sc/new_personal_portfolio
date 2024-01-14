import React from "react";
import {Card, CardContent, CardHeader} from "@/components/ui/card.tsx";
import {Link, Project} from "@/interfaces/project.ts";

const ProjectCard: React.FC<Project> = ({Title, Description, Link}) => {

    function getLink(Link: Link): string {
        if (Link.internal) {
            return "http://127.0.0.1:3000" + Link.link
        }
        return Link.link
    }

    return (
        <Card>
            <CardHeader>
                <h3 className="text-lg font-bold">{Title}</h3>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400">{Description}</p>
                <a className="text-blue-600 hover:text-green-500" target="_blank" href={getLink(Link)}>
                    {Link.label}
                </a>
            </CardContent>
        </Card>
    )
}

export default ProjectCard