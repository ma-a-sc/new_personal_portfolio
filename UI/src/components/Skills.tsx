import React from "react";
import {Badge} from "@/components/ui/badge.tsx";

const Skills: React.FC = () => {
    return (
        <section className="w-full py-24 bg-gray-100 dark:bg-gray-800" id="skills">
        <div className="container px-4 md:px-6">
            <h2 className="text-3xl text-center font-bold tracking-tighter sm:text-5xl mb-12">Skills</h2>
            <h3 className="tracking-tighter sm:text-5xl mb-12">Development</h3>
            <div className="flex flex-wrap gap-4">
                <Badge className="text-sm py-1 px-2" variant="secondary">
                    Python
                </Badge>
                <Badge className="text-sm py-1 px-2" variant="secondary">
                    Django
                </Badge>
                <Badge className="text-sm py-1 px-2" variant="secondary">
                    MySQL
                </Badge>
                <Badge className="text-sm py-1 px-2" variant="secondary">
                    Docker
                </Badge>
                <Badge className="text-sm py-1 px-2" variant="secondary">
                    Golang
                </Badge>
                <Badge className="text-sm py-1 px-2" variant="secondary">
                    React
                </Badge>
            </div>
            <h3 className="tracking-tighter sm:text-5xl mb-12 my-12">Data</h3>
            <div className="flex flex-wrap gap-4">
                <Badge className="text-sm py-1 px-2" variant="secondary">
                    R
                </Badge>
                <Badge className="text-sm py-1 px-2" variant="secondary">
                    STATA
                </Badge>
                <Badge className="text-sm py-1 px-2" variant="secondary">
                    SPSS
                </Badge>
                <Badge className="text-sm py-1 px-2" variant="secondary">
                    WebScraping
                </Badge>
                <Badge className="text-sm py-1 px-2" variant="secondary">
                    Basic NLP
                </Badge>
                <Badge className="text-sm py-1 px-2" variant="secondary">
                    Multivariate Regression Analysis
                </Badge>
            </div>
        </div>
    </section>)
}

export default Skills