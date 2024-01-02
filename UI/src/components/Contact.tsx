import React from "react";

const Contact:React.FC = () => {
    return (
        <section className="w-full py-24 bg-gray-100 dark:bg-gray-800" id="contact">
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-12">Contact</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">Email: john.doe@example.com</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Phone: (123) 456-7890</p>
                <a className="text-blue-600 hover:text-green-500" href="#">
                    LinkedIn
                </a>
                <a className="text-blue-600 hover:text-green-500 ml-4" href="#">
                    GitHub
                </a>
            </div>
        </section>
    )
}

export default Contact