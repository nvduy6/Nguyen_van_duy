import React, { useEffect, useState } from 'react'
import { useForm,SubmitHandler } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { readSkill } from '../../api/skill'
import { Iskill } from '../../type/Skill'
type Props ={
  onUpdate:(skil:Iskill)=>void
}
const Update_skill = (props:Props) => {
  const {register,handleSubmit,formState:{errors},reset}=useForm<Iskill>();
  const navigate = useNavigate();
  const {id} = useParams();

  const [skill,setSkill] = useState<Iskill[]>();
  useEffect(()=>{
    const getSkill = async()=>{
      const {data} = await readSkill(id);
      reset(data);
    }
    getSkill();
  },[]);
  const onSubmit:SubmitHandler<Iskill>=data=>{
    props.onUpdate(data)
    navigate("/admin/skill")
  }
  return (
    <div className=" mt-5 md:mt-0 md:col-span-2">
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                    <div className="grid grid-cols-3 gap-6">
                        <div className="col-span-3 sm:col-span-2">
                            <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                                Tên sản phẩm
                            </label>
                            <div className="mt-1 flex rounded-md shadow-sm">
                                <input type="text" {...register('title')} id="title-post" className="focus:ring-indigo-500 focus:border-indigo-800 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="Mời bạn nhập tên sản phẩm" />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-6">
                        <div className="col-span-3 sm:col-span-2">
                            <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                                Danh gia
                            </label>
                            <div className="mt-1 flex rounded-md shadow-sm">
                                <input type="text" {...register('progr')} id="title-post" className="focus:ring-indigo-500 focus:border-indigo-800 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="Mời bạn nhập tên sản phẩm" />
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
                    
                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                        <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Update
                        </button>
                    </div>
                </div>
            </div></form>
    </div>
  )
}

export default Update_skill