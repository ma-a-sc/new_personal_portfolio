import React from "react";
import {Card, CardContent, CardHeader} from "@/components/ui/card.tsx";

const Experience: React.FC = () => {
    return (
        <section className="w-full py-24 bg-gray-100 dark:bg-gray-800" id="experience">
        <div className="container px-4 md:px-6">
            <h2 className="text-3xl text-center font-bold tracking-tighter sm:text-5xl mb-12">Experience</h2>
            <Card>
                <CardHeader>
                    <h3 className="text-lg font-bold">Backend Developer - Fintiba GmbH (2022 - Present)</h3>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Backend development using a standard Python stack (Django, MySQL, Celery, Docker).

                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        At this job I am responsible for code related to the provided insurance products.
                        This means customer facing code, internal tools (mainly functions for the internal customer
                        manager) as well as
                        interfacing code with the insurance partners.
                        Thousands of customers as well as coworkers hence depend on the code being written by Me.
                        Concise, readable and correct code hence is of the essence, because the customers rely on my code
                        to work and their Visa process going smoothly.
                    </p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <h3 className="text-lg font-bold">Fitness Trainer - FitSevenEleven GmbH (2020 - 2022)</h3>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Developing and teaching customized fitness plans as well as customer care/trainings assistance
                        and minor administrative tasks.
                    </p>
                </CardContent>
            </Card>
        </div>
    </section>)
}

export default Experience