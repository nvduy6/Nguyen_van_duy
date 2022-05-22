import React from 'react'
import { Link } from 'react-router-dom';
import { IPAbout } from '../../type/About'
type Props = {
  about:IPAbout[];
  onRemoveAbout:(id:number)=>void
}
const List_about = (props:Props) => {
  return (
    <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
                    <table className="min-w-full border-collapse border border-slate-400">
                        <thead>
                            <tr>
                                <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                    STT</th>
                                <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                    tieeu de</th>
                                <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                    chi tiet</th>
                                <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                    tên</th>
                                <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                    danh giá</th>
                                <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                    Edit</th>
                                <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                    Delete</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">\
                            {props.about.map((item, index) => {
                                return (
                                    <tr id="product" key={index}>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                            <div className="text-sm leading-5 text-gray-500">{index + 1}</div>
                                        </td>

                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                            <div className="text-sm leading-5 text-gray-500">{item.title}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                            <div className="text-sm leading-5 text-gray-500">{item.desc}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                            <div className="text-sm leading-5 text-gray-500">{item.name}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                            <div className="text-sm leading-5 text-gray-500">{item.progr}</div>
                                        </td>
                                        <td className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">

                                            <button><Link to={`/admin/about/${item.id}/edit`}>Update</Link></button>
                                        
                                            <button className='ml-2 bg-red-500 text-gray-50' onClick={() => props.onRemoveAbout(item.id)}>Delete</button>
                                        </td>


                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
  )
}

export default List_about