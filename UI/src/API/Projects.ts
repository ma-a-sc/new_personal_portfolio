const testing = undefined

async function getProjects(): Promise<Response> {
    if (testing == undefined) {
        return fetch("https://maasc.up.railway.app/projects",{
            method: 'Get',
            mode: 'cors'
        })
    }
    return fetch("http://127.0.0.1:3000/projects",{
        method: 'Get',
        mode: 'cors'
    })
}
export default getProjects