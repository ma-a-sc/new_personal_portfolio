import React from "react";
import {Card, CardContent, CardHeader} from "@/components/ui/card.tsx";

interface ProjectCardProps {
    Title: string
    Description: string
    Link: string
    LinkLabel: string
    Internal: boolean
}

const ProjectCard: React.FC<ProjectCardProps> = ({Title, Description, Link, LinkLabel, Internal}) => {

    function getLink(Internal: boolean, Link: string): string {
        if (Internal) {
            return "http://127.0.0.1:3000/static/" + Link
        }
        return Link
    }

    return (
        <Card>
            <CardHeader>
                <h3 className="text-lg font-bold">{Title}</h3>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400">{Description}</p>
                <a className="text-blue-600 hover:text-green-500" target="_blank"
                   href={getLink(Internal, Link)}>
                    {LinkLabel}
                </a>
            </CardContent>
        </Card>
    )
}

export default ProjectCard