import React from 'react'

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
    <div className="flex-1 min-w-0">
      <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
        Thống Kê
      </h2>
    </div>
    <div className="container mx-auto mt-12">
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="flex items-center h-52 px-4 py-6 bg-white rounded-md shadow-md">
          <div className="p-3 bg-indigo-600 rounded">
            <a href="/user">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </a>
          </div>
          <div className="mx-4">
            <a href="/user">
              <h4 className="text-2xl font-semibold text-gray-700">4</h4>
              <div className="text-gray-500">Quản lý tài khoản</div>
            </a>
          </div>
        </div>
        <div className="flex items-center px-4 py-6 bg-white rounded-md shadow-md">
          <div className="p-3 bg-indigo-600 rounded">
            <a href="/admin/NewList">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
            </a>
          </div>
          <div className="mx-4">
            <a href="/admin/NewList">
              <h4 className="text-2xl font-semibold text-gray-700">${'{'}products.length{'}'}</h4>
              <div className="text-gray-500">Quản lý sản phẩm</div>
            </a>
          </div>
        </div>
        <div className="flex items-center px-4 py-6 bg-white rounded-md shadow-md">
          <div className="p-3 bg-indigo-600 rounded">
            <a href="/category/list">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </a>
          </div>
          <div className="mx-4">
            <a href="/category/list">
              <h4 className="text-2xl font-semibold text-gray-700">6</h4>
              <div className="text-gray-500">Quản lý tài danh mục</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Admin