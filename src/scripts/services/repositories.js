import { baseUrl, items } from "../variables.js";

async function getRepositories(userName) {
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${items}`)
    return await response.json()
}

export { getRepositories }