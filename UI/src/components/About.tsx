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
                        I have been working as a junior backend developer now for over year. My expertise mainly lies in Django
                        but I have experience in FastAPI as well. In my free time I am exploring different languages, such as
                        Rust, Swift and Kotlin, but one in particular has caught my attention: Golang. Currently I am experimenting
                        with backend and CLI-tool development in it.
                    </p>
                    <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                        I have a passion for building things and collecting/analyzing data.
                    </p>
                    <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                        To round it all up I hold a Backer's degree in political science from Goethe University Frankfurt
                        , in which I learned how to statistically analyze data and during which I found my passion for web scraping. It is a lot of fun
                        you should try it too if you haven't.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About