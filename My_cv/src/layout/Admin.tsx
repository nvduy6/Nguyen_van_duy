import React from 'react'
import { Outlet } from 'react-router-dom'

const Admin = () => {
    return (
        <div className="flex h-screen  ">
            <div className="px-4 py-2 bg-gray-500 bg-indigo-600 ">
                <svg xmlns="http://www.w3.org/2000/svg" className="inline w-8 h-8 text-white lg:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <div className="hidden lg:block">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10">
                            <img className="w-10 h-10 rounded-full" src="https://source.unsplash.com/user/erondu" alt="admin dashboard ui" />
                        </div>
                        <div className="ml-4">
                            <div className="inline-block w-full h-full font-bold text-white" id="username" />
                        </div>
                    </div>
                    <ul className="mt-4">
                        <li className="mb-6">
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                    <button type="submit" className="p-1 focus:outline-none">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" className="w-4 h-4">
                                            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </button>
                                </span>
                                <input type="search" name="search" className="w-full px-4 py-2 pl-12 rounded shadow outline-none" placeholder="Search..." />
                            </div></li>
                        <li className="mb-2 rounded hover:shadow hover:bg-gray-800">
                            <a href="/admin/dashoad" className="inline-block w-full h-full px-3 py-2 font-bold text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="inline-block w-6 h-6 mr-2 -mt-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                                Trang chủ
                            </a>
                        </li>
                        <li className="mb-2 rounded hover:shadow hover:bg-gray-800">
                            <a href="/admin/NewList" className="inline-block w-full h-full px-3 py-2 font-bold text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="inline-block w-6 h-6 mr-2 -mt-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                                </svg>
                                Danh sách sản phẩm
                            </a>
                        </li>
                        <li className="mb-2 rounded hover:shadow hover:bg-gray-800">
                            <a href="/category/list" className="inline-block w-full h-full px-3 py-2 font-bold text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="inline-block w-6 h-6 mr-2 -mt-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                                </svg>
                                Danh mục sản phẩm
                            </a>
                        </li>
                        <li className="mb-2 rounded hover:shadow hover:bg-gray-800">
                            <a href="/user" className="inline-block w-full h-full px-3 py-2 font-bold text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="inline-block w-6 h-6 mr-2 -mt-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                Tài khoản
                            </a>
                        </li>
                        <li className="mb-2 rounded hover:shadow hover:bg-gray-800">
                            <a href="" className="inline-block w-full h-full px-3 py-2 font-bold text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="inline-block w-6 h-6 mr-2 -mt-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                Đơn hàng
                            </a>
                        </li>
                        <li className="mb-2 rounded hover:shadow hover:bg-gray-800">
                            <a href="/" className="inline-block w-full h-full px-3 py-2 font-bold text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="inline-block w-6 h-6 mr-2 -mt-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                                </svg>
                                Vào Website
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="w-full px-4 py-2 bg-gray-200 lg:w-full">
                <Outlet/>
            </div>
        </div>

    )
}

export default Admin