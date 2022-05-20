import instance from "./Instance";
import { IpBlog } from "../type/Blog";
export const listBlog=()=>{
    const url = "/blogs";
    return instance.get(url)
}
export const addBlog = (blogs:IpBlog)=>{
    const url="/blogs";
    return instance.post(url,blogs);
}
export const removeBlog = (id:number)=>{
    const url = `/blogs/${id}`;
    return instance.delete(url);
}
export const update = (blogs:IpBlog)=>{
    const url = `/blogs/${blogs.id}`;
    return instance.put(url,blogs);
}
export const read = (id:string|undefined)=>{
    const url = `/blogs/${id}`;
    return instance.get(url);
}