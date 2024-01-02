import React from "react";

const Greeting: React.FC = () => {
    return(
        <section className="w-full py-24 bg-gray-100 dark:bg-gray-800" id="hero">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <h1 className="text-5xl font-bold tracking-tighter sm:text-7xl ">Hey ho, I'm</h1>
                    <h1 className="text-5xl font-bold tracking-tighter sm:text-7xl text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-yellow-500 ">Mark</h1>
                    <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                        Backend developer specializing in Python and Go. But that is not the only thing I do. If you are curious keep scrolling ... OR
                    </p>
                    <a
                        className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gradient-to-r hover:from-green-400 hover:to-yellow-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                        href="#"
                    >
                        Contact Me
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Greeting