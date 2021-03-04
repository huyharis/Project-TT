export const serverUrl = "http://localhost:5000";

export const serverLocal = "http://localhost:5000"
export const configHeader = {
    headers: {
        'Authorization': localStorage.getItem('tokens')
    }
}
