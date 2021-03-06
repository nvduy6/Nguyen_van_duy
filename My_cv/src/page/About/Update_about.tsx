import React, { useEffect, useState } from 'react'
import { SubmitHandler,useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { readAbout } from '../../api/about'
import { IPAbout } from '../../type/About'
type Props = {
onUpdateAbut:(about:IPAbout)=>void
}
const Update_about = (props:Props) => {
  const {register,handleSubmit,formState:{errors},reset}=useForm<IPAbout>();
  const navigate = useNavigate();
  const {id}=useParams();
  const [about,setAbout] = useState<IPAbout[]>();
  useEffect(()=>{
    const getAbout = async()=>{
      const {data}=await readAbout(id)
      reset(data)
    }
    getAbout()
  },[])
  const onSubmit:SubmitHandler<IPAbout>=data=>{
    props.onUpdateAbut(data);
    navigate("/admin/about")
  }
  return (
    <div>
      <div className=" mt-5 md:mt-0 md:col-span-2">
        <form onSubmit={handleSubmit(onSubmit)} id="form-add-post">
          <div className="shadow sm:rounded-md sm:overflow-hidden">
            <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
              <div className="grid grid-cols-3 gap-6">
                <div className="col-span-3 sm:col-span-2">
                  <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                    Tiêu đề
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <input type="text"  {...register('image')} id="title-post" className="focus:ring-indigo-500 focus:border-indigo-800 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="Mời bạn nhập tên sản phẩm" />
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                  Chi tiết
                </label>
                <div className="mt-1">
                  <textarea id="desc-post" {...register('desc')} rows={3} className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="Chi tiết..." defaultValue={""} />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-6">
                <div className="col-span-3 sm:col-span-2">
                  <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                    Tên 
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <input type="text"  {...register('name')} id="title-post" className="focus:ring-indigo-500 focus:border-indigo-800 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="Mời bạn nhập tên sản phẩm" />
                  </div>
                </div>
              </div>
              
              {/* <div className="grid grid-cols-2 gap-2">
                <div>  <img className="mt-2 h-20 w-20" src="https://thumbs.dreamstime.com/b/no-thumbnail-image-placeholder-forums-blogs-websites-148010362.jpg" id="img-preview" /></div>
                <div className="col-span-3 sm:col-span-2">
                  <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                    Hinh anh
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <input type="file" name="company-website" id="img-post" className="focus:ring-indigo-500 focus:border-indigo-800 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="Mời bạn nhập tiêu đề" />
                  </div>
                </div>
              </div> */}

              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  ADD
                </button>
              </div>
            </div>
          </div></form>
      </div>
    </div>
  )
}

export default Update_about