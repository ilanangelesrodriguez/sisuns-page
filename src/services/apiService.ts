import {API_URL} from "../config";

const apiUrl = API_URL;

async function fetchData(url: string, options = {}) {
    const response = await fetch(`${apiUrl}${url}`, options);
    if (response.ok) {
        const text = await response.text();
        return text ? JSON.parse(text) : {};
    } else {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
    }
}

export { fetchData };
