export function getImagePath(name?:string){
    if(name){
        if(name.includes('http')) return name;
        else return `${process.env.REACT_APP_API_BASE_URL}/${name}`
    }
    return ''
}