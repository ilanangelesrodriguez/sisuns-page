import {API_URL} from "../config";

const apiUrl = API_URL;

async function fetchData(url: string, options = {}) {
    const response = await fetch(`${apiUrl}${url}`, options);
    return response.json();
}

export { fetchData };
