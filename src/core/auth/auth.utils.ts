
export const AUTH_STORAGE_KEY = "auth-token";


export const wrapUsingAuth = (options: any  = {}) => {
    options.headers = {
        ...options.headers,
        'Authorization': `Bearer ${sessionStorage.getItem(AUTH_STORAGE_KEY)}`
    }
    return options;
}