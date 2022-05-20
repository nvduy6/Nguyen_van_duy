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
export const updateBlog = (id:number)=>{
    const url = `/blogs/${id}`;
    return instance.delete(url);
}