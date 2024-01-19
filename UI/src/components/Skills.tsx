import React from "react";
import {Badge} from "@/components/ui/badge.tsx";
import {useCollapse} from "react-collapsed";

interface DevelopmentBadgesProps {
    props: any
}

const DevelopmentBadges: React.FC<DevelopmentBadgesProps> = ({props}) => {
    return <>
        <div className="mt-6 flex flex-wrap gap-4" {...props()}>
            <Badge className="text-sm py-1 px-2" variant="secondary">
                Python
            </Badge>
            <Badge className="text-sm py-1 px-2" variant="secondary">
                Django
            </Badge>
            <Badge className="text-sm py-1 px-2" variant="secondary">
                SQL
            </Badge>
            <Badge className="text-sm py-1 px-2" variant="secondary">
                Golang
            </Badge>
            <Badge className="text-sm py-1 px-2" variant="secondary">
                React
            </Badge>
            <Badge className="text-sm py-1 px-2" variant="secondary">
                JS/TS
            </Badge>
        </div>
    </>
}

interface DataBadgesProps {
    props: any
}

const DataBadges: React.FC<DataBadgesProps> = ({props}) => {
    return (<div className="mt-6 flex flex-wrap gap-4" {...props()}>
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
    </div>)

}

const Development: React.FC = () => {

    const [isExpanded, setShowDevelopment] = React.useState(false)
    const {getCollapseProps, getToggleProps} = useCollapse({isExpanded})

    return (
        <>
            <button className="hover:text-green-500 cursor-pointer" {...getToggleProps({
                onClick: () => {
                    setShowDevelopment(!isExpanded)
                }
            })}>
                <h3 className="tracking-tighter text-5xl mt-6">Development</h3>
            </button>
            <DevelopmentBadges props={getCollapseProps}/>
            <p className="my-6">
                I have been developing in Python now for over 3 years and over 1 year professionally. Through my job I
                also gained a solid understanding of Django, Celery, MySql and Docker.
            </p>
            <p>
                In my free time I take time to explore different languages and technologies. After trying out Swift,
                Kotlin and
                Rust I landed on the decision of learning Go indepth. As it is a lot of fun and I think the language has
                a lot going for it.
                Furthermore, I learned the basic React, with which also
                this <a className="text-blue-600 hover:text-green-500"
                        href="https://github.com/ma-a-sc/new_personal_portfolio" target="_blank">website</a> was developed.
                React is overkill for such a website, but hey I wanted to experiment with it.
            </p>
        </>
    )
}

const Data: React.FC = () => {
    const handleClickScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const [isExpanded, setShowData] = React.useState(false)
    const {getCollapseProps, getToggleProps} = useCollapse({isExpanded})

    return (
        <div className="mt-6">
            <button className="hover:text-green-500 cursor-pointer" {...getToggleProps({
                onClick: () => {
                    setShowData(!isExpanded)
                }
            })}>
                <h3 className="tracking-tighter text-5xl mt-6">Data</h3>
            </button>
            <DataBadges props={getCollapseProps}/>
            <p className="my-6">
                In university I got into statistical analysis and R. I really enjoyed it and eventually wrote my Bachelors Thesis
                using R to analyse a dataset. The code of my BA can be found further down in the <a className="text-blue-600 hover:text-green-500 text-center hover:cursor-pointer" onClick={() => handleClickScroll("projects")}>Projects</a> section.
                Besides that I got into touch with analyzing texts (Text Mining) and gathering data through web scraping. Some of the projects are down below.
                At the moment I am trying to implement a web scraping tool in Go for myself.
            </p>
        </div>
    )
}

const Skills: React.FC = () => {
    return (
        <section className="w-full py-24 bg-gray-100 dark:bg-gray-800" id="skills">
            <div className="container px-4 md:px-6">
                <Development></Development>
                <Data/>

            </div>
        </section>)
}

export default Skills