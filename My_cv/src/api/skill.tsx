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