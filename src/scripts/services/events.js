import { baseUrl, items } from "../variables.js";

async function getEvents(userName) {
    const response = await fetch(`${baseUrl}/${userName}/events?per_page=${items}`)
    return await response.json()
}

export { getEvents }