import React from "react";
import {Card, CardContent, CardHeader} from "@/components/ui/card.tsx";

const Education: React.FC = () => {
    const handleClickScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <section className="w-full py-24" id="education">
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl text-center font-bold tracking-tighter sm:text-5xl mb-12">Education</h2>
                <Card>
                    <CardHeader>
                        <h3 className="text-lg font-bold">
                            Bachelor's Degree in Political Science (Major) and American Studies (Minor) (2018-2022)
                        </h3>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Foundational education in Political Science (economics, philosophy, research methodology and
                            many more aspects)
                            with a specialization in quantitative research and analysis.
                            Wrote my Bachelors Thesis on the impact of the individuals identity on the attitudes towards
                            different integration areas of the EU. To achieve this task I analyzed the Eurobarometer
                            92.3 open
                            data set issued by the European Commission using the R programming language.
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            You can see the code in the <a
                            className="text-blue-600 hover:text-green-500 text-center hover:cursor-pointer"
                            onClick={() => handleClickScroll("projects")}>Projects</a> above.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}

export default Education