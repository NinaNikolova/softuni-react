const request = async (method, url, data) => {
    const options = {};
    if (method !== "GET") {
        options.method = method;
        if (data) {
            options.headers = {
                'content-type': 'application/json'
            };

            const user = localStorage.getItem('auth');
            const auth = JSON.parse(user || '{}');
    
          
    
            if (auth.accessToken) {
                options.headers['X-Authorization'] = auth.accessToken;
            }
    
            options.body = JSON.stringify(data)
        }

    }
    const res = await fetch(url, options);
    if (res.status === 204) {
        return {};
    }
    const result = await res.json();
    if (!res.ok) {
        throw result;
    }
    return result;

}
export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const del = request.bind(null, 'DELETE')