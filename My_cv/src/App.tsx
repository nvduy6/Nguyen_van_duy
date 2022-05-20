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
function App() {
  const [count, setCount] = useState(0)
const [blogs,setBlogs] = useState<IpBlog[]>([]);
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
const removeBlog = (id:number)=>{
  removeBlog(id);
  setBlogs(blogs.filter(item=>item.id!==id))
}
const onHandeleUpdateBlog = async (Blog:IpBlog)=>{
  const {data} = await update(Blog);
  setBlogs(blogs.map(item=>item.id == data.id? data:item));
}
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='admin' element={<Admin />}>
            <Route path='blog'>
              <Route index element={<List_blog blog={blogs} onRemoveBlog={removeBlog} />} />
              <Route path='add' element={<Add_blog onAddBlog={onHandlerBlog}/>} />
              <Route path=':id/edit' element={<Update_blog onUpdateBlog={onHandeleUpdateBlog} />} />
            </Route>
            <Route path='skill'>
              <Route index element={<List_skill />} />
              <Route path='skill/add' element={<Add_skill />} />
              <Route path='skill/:id/edit' element={<Update_skill />} />
            </Route>
          </Route>
        </Routes>
      </main>
    </div>
  )
}

export default App
