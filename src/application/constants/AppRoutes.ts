export const APP_ROUTES = {
    HOME:"home",
    DASHBOARD: "dashboard",
    LOGIN:"login",
    SIGNUP:"signup",
    ABOUT:"about",
    PROFILE:"profile",
    PROJECTS:"projects",
    NOT_AUTHORIZED:"not-authorized"
};

export const FILE_UPLOAD_ROUTE = `${process.env.REACT_APP_API_BASE_URL}/upload-file`
export const FILE_ROUTE = `${process.env.REACT_APP_API_BASE_URL}/static`