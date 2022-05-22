import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from 'react-router-dom';
import Home from './layout/Home';
import Admin from './layout/Admin';
import Add_blog from './page/Blog/Add_blog';
import List_blog from './page/Blog/List_blog';
import Update_blog from './page/Blog/Update_blog';
import List_skill from './page/Skill/List_skill';
import Add_skill from './page/Skill/Add_skill';
import Update_skill from './page/Skill/Update_skill';
import { IpBlog } from './type/Blog';
import { addBlog, listBlog ,removeBlog, update } from './api/blog';
import axios from 'axios';
import { addAbout, listAbout, removeAbout, UpdateAbout } from './api/about';
import { IPAbout } from './type/About';
import List_about from './page/About/List_about';
import Add_about from './page/About/Add_about';
import Update_about from './page/About/Update_about';
import { Item } from 'rc-menu';
import { Iskill } from './type/Skill';
import { addSkill } from './api/skill';
function App() {
  const [count, setCount] = useState(0)
const [blogs,setBlogs] = useState<IpBlog[]>([]);
const [abouts,setAbout] = useState<IPAbout[]>([]);
const [skills,setSkill]= useState<Iskill[]>([]);
useEffect (()=>{
  const getBlog = async ()=>{
    const {data} = await listBlog();
    setBlogs(data)
  }
  getBlog();
},[])
const onHandlerBlog = async (blog:IpBlog)=>{
  const {data}= await addBlog(blog);
  setBlogs([...blogs,data]);
}
const onHandeleRemoveBlog = (id:number)=>{
  removeBlog(id);
  setBlogs(blogs.filter(item=>item.id!==id))
}
const onHandeleUpdateBlog = async (Blog:IpBlog)=>{
  const {data} = await update(Blog);
  setBlogs(blogs.map(item=>item.id == data.id? data:item));
}

useEffect(()=>{
  const getAbout = async()=>{
    const {data} =await listAbout();
    setAbout(data);
  }
  getAbout()
},[])
const onHandeleRemoveAbout = (id:number)=>{
  removeAbout(id);
  setAbout(abouts.filter(item=>item.id!==id));
}
const onHandeleAddAbout = async(about:IPAbout)=>{
  const {data}= await addAbout(about);
  setAbout([...abouts,data])
}
const onHandeleUpdateAbout =async (about:IPAbout)=>{
  const {data} = await UpdateAbout(about);
  setAbout(abouts.map(item=>item.id == data.id? data:item))
}

// skill
const onHandleAddSkill = async(skill:Iskill)=>{
  const {data} = await addSkill(skill);
  setSkill([...skills,data]);
}
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='admin' element={<Admin />}>
            <Route path='blog'>
              <Route index element={<List_blog blog={blogs} onRemoveBlog={onHandeleRemoveBlog} />} />
              <Route path='add' element={<Add_blog onAddBlog={onHandlerBlog}/>} />
              <Route path=':id/edit' element={<Update_blog onUpdateBlog={onHandeleUpdateBlog} />} />
            </Route>
            <Route path='skill'>
              <Route index element={<List_skill />} />
              <Route path='add' element={<Add_skill addSkill={onHandleAddSkill} />} />
              <Route path=':id/edit' element={<Update_skill />} />
            </Route>
            <Route path='about'>
              <Route index element={<List_about about={abouts} onRemoveAbout={onHandeleRemoveAbout} />} />
              <Route path='add' element={<Add_about onAddAbout={onHandeleAddAbout} />} />
              <Route path=':id/edit' element={<Update_about onUpdateAbut={onHandeleUpdateAbout} />} />
            </Route>
          </Route>
        </Routes>
      </main>
    </div>
  )
}

export default App
