
interface Project {
    Title: string
    Description: string
    Link: Link
    Rank: number
}

interface Link {
    label: string
    internal: boolean
    link: string
}

async function getProjects():Promise<Project[]> {
    return await fetch(
        "http://127.0.0.1:3000/projects",{
            method: 'Get',
            mode: 'cors'
    }
    )
}
export default getProjects