import React from "react";
import {Card, CardContent, CardHeader} from "@/components/ui/card.tsx";
import {Label} from "@/components/ui/label.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Textarea} from "@/components/ui/textarea.tsx";
import {Button} from "@/components/ui/button.tsx";

const Contact:React.FC = () => {
    return (
        <section className="w-full py-24 bg-gray-100 dark:bg-gray-800" id="contact">
            <div className="container grid grid-cols-2">
                <div>
                    <div className="container px-4 md:px-6">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-12">Contact</h2>
                        <p className="text-sm my-5 text-gray-500 dark:text-gray-400">Email: mark.scharmann.ms@gmail.com</p>
                        <a className="text-blue-600 hover:text-green-500" href="https://www.linkedin.com/in/mark-scharmann-9202b92a5/">
                            LinkedIn
                        </a>
                        <a className="text-blue-600 hover:text-green-500 ml-4" href="https://github.com/ma-a-sc">
                            GitHub
                        </a>
                        <a className="text-blue-600 hover:text-green-500 ml-4"
                           href="https://www.hackerrank.com/profile/m98_hr">
                            HackerRank
                        </a>
                    </div>
                </div>
                <div>
                    <Card className="w-full max-w-md mx-4 border-t-2 border-b-5 ">
                        <div className={"container flex-row"}>
                            <CardHeader>
                            </CardHeader>
                        </div>

                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Name</Label>
                                <Input className="w-full" id="name" placeholder="Enter your name" required/>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input className="w-full" id="email" placeholder="Enter your email address" required
                                       type="email"/>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="message">Message</Label>
                                <Textarea className="w-full min-h-[100px]" id="message"
                                          placeholder="Enter your message here"
                                          required/>
                            </div>
                            <Button
                                className="w-full hover:animate-pulse hover:bg-gradient-to-r hover:from-green-400 hover:to-yellow-500 ">Submit</Button>
                        </CardContent>
                    </Card>
                </div>
            </div>

        </section>
    )
}

export default Contact