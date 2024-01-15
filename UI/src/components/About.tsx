import React from "react";

const About: React.FC = () => {
    return(
        <section className="w-full py-24" id="about">
            <div className="container grid gap-6 grid-cols-2 lg:gap-12">
                <img
                    alt="Mark Scharmann"
                    className="mx-auto order-last"
                    height="800"
                    src="/me_inverted.jpg"
                    style={{
                        aspectRatio: "800/800",
                        objectFit: "cover",
                    }}
                    width="800"
                />
                <div className="flex flex-col justify-center space-y-4">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Me</h2>
                    <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                        Code, coffee and politics. That is what I am about.
                    </p>
                    <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                        At the moment I am working at Fintiba GmbH in Frankfurt as a backend developer. Previously I was
                        a
                        Political Science student at the Goethe University Frankfurt. I got into software development
                        during my studies. Statistical analysis and quantitative research interested me for
                        which one needs to write code to analyse large datasets and write analysis.
                        After the passion sparked I started learning to code by working through books and coding
                        projects which in
                        the end landed me my current job.
                    </p>
                    <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                        I have a passion for good coffee and if you want to do me a favor invite me over coffee! Show me
                        your favorite spot.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About