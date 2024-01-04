import React from "react";
import {Card, CardContent, CardHeader} from "@/components/ui/card.tsx";

interface ProjectCardProps {
    Name: string,
    Description: string
    ref: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({Name, Description, ref}) => {
    return (
        <Card>
            <CardHeader>
                <h3 className="text-lg font-bold">{Name}</h3>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400">{Description}</p>
                <a className="text-blue-600 hover:text-green-500" target="_blank" href={ref}>
                    View Code
                </a>
            </CardContent>
        </Card>
    )
}

export default ProjectCard