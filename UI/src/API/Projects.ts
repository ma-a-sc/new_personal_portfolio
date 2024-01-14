async function getProjects(): Promise<Response> {
    return fetch("http://127.0.0.1:3000/projects",{
        method: 'Get',
        mode: 'cors'
    })
}
export default getProjects