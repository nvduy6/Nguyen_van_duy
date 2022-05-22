import { Iskill } from "../type/Skill";
import instance from "./Instance";
export const listSkill = ()=>{
    const url = "/skills";
    return instance.get(url)
}
export const addSkill =(skill:Iskill)=>{
    const url = `/skills`
    return instance.post(url,skill)
}
export const removeSkill =(id:number)=>{
    const url = `/skills/${id}`;
    return instance.delete(url)
}
export const readSkill =(id:string|undefined)=>{
    const url = `/skills/${id}`;
    return instance.get(url)
}
export const updateSkill =(skill:Iskill)=>{
    const url = `/skills/${skill.id}`;
    return instance.put(url,skill)
}