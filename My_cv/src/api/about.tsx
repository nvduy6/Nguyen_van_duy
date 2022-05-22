import { IPAbout } from "../type/About";
import instance from "./Instance";
export const listAbout=()=>{
const url="/about";
return instance.get(url)
}
export const addAbout=(about:IPAbout)=>{
    const url="/about";
    return instance.post(url,about);
}
export const readAbout=(id:string|undefined)=>{
    const url = `/about/${id}`;
    return instance.get(url);
}
export const removeAbout=(id:number)=>{
const url = `/about/${id}`;
return instance.delete(url);
}
export const UpdateAbout = (about:IPAbout)=>{
    const url = `/about/${about.id}`;
    return instance.put(url,about)
}