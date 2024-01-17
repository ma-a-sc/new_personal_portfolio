async function getProjects(): Promise<Response> {
    return fetch("https://maasc.up.railway.app/projects",{
        method: 'Get',
        mode: 'cors'
    })
}
export default getProjects