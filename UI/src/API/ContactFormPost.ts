async function doContactPost(name: string, email: string, message: string):Promise<Response> {
    const post_data = {
        "Name": name,
        "Email": email,
        "Message": message
    }
    return await fetch(
        "https://maasc.up.railway.app/contact", {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(post_data)
        })
}

export default doContactPost