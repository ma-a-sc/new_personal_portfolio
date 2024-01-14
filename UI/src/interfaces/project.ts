export interface Project {
    Title: string
    Description: string
    Link: Link
    Rank: number
}

export interface Link {
    label: string
    internal: boolean
    link: string
}