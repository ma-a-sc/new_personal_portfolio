/**
 * v0 by Vercel.
 * @see https://v0.dev/t/rbVRdDj7wuD
 */
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import React from "react";

interface ContactFormProps{
    call: () => void
}

 const ContactForm:React.FC<ContactFormProps> = ({call}) => {
    return (
        <>
         <Card className="w-full max-w-md mx-4 border-t-2 border-b-5 ">
             <div className={"container flex-row"}>
                 <button onClick={call} className={"mx-1 my-1 justify-end"}>
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                          stroke="currentColor" className="w-6 h-6">
                         <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"/>
                     </svg>
                 </button>
                 <CardHeader>
                     <h2 className="text-xl font-bold">Contacting me!? I feel honored</h2>
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
                        <Textarea className="w-full min-h-[100px]" id="message" placeholder="Enter your message here"
                                  required/>
                    </div>
                    <Button
                        className="w-full hover:animate-pulse hover:bg-gradient-to-r hover:from-green-400 hover:to-yellow-500">Submit</Button>
                </CardContent>
            </Card>
        </>
    )
 }

export default ContactForm

