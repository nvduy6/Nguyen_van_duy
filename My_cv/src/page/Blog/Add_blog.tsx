import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { IpBlog } from '../../type/Blog'
type Props = {
    onAddBlog: (blogs: IpBlog) => void;
}
const Add_blog = (props: Props) => {
    const { register, handleSubmit, formState: { errors } } = useForm<IpBlog>()
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<IpBlog> = data => {
        props.onAddBlog(data);
        navigate("/admin/blog")
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
                                        Tên sản phẩm
                                    </label>
                                    <div className="mt-1 flex rounded-md shadow-sm">
                                        <input type="text"  {...register('name')} id="title-post" className="focus:ring-indigo-500 focus:border-indigo-800 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="Mời bạn nhập tên sản phẩm" />
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
                            {/* <div>
                                <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                                    Giá
                                </label>
                                <div className="mt-1">
                                    <input type="number" name="company-website" id="price-post" className="focus:ring-indigo-500 focus:border-indigo-800 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="Giá sản phẩm" />
                                </div>
                                <div>
                                    <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                                        Danh mục sản phẩm
                                    </label>
                                    <div className="mt-1">
                                        <select name="day" id="category" className="focus:ring-indigo-500 focus:border-indigo-800 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300">
                                            <option value="">-- Chọn danh mục sản phẩm --</option>
                                            ${'{'}data.map((cate)=&gt; `
                                            <option value="${cate.id}">${'{'}cate.title{'}'} </option>
                                            ` ){'}'}
                                        </select>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                    <div>  <img className="mt-2 h-20 w-20" src="https://thumbs.dreamstime.com/b/no-thumbnail-image-placeholder-forums-blogs-websites-148010362.jpg" id="img-preview" /></div>
                                    <div className="col-span-3 sm:col-span-2">
                                        <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                                            Hinh anh
                                        </label>
                                        <div className="mt-1 flex rounded-md shadow-sm">
                                            <input type="file" name="company-website" id="img-post" className="focus:ring-indigo-500 focus:border-indigo-800 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="Mời bạn nhập tiêu đề" />
                                        </div>
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

export default Add_blog