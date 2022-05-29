export function getImagePath(name:string){
    if(name.includes('http')) return name;
    else `${process.env.REACT_APP_API_BASE_URL}/${name}`
}