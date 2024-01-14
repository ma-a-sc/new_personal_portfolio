async function getProjects(): Promise<Response> {
    return fetch("http://127.0.0.1:3000/projects",{
        method: 'Get',
        mode: 'cors'
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json()
        })
}
export default getProjects