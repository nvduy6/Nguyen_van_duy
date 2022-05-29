import React from 'react'
import { FaCalendar, FaCocktail, FaEnvelope, FaFacebook, FaGlobe, FaHeart, FaInstagram, FaPalette, FaPhone, } from 'react-icons/fa'
const Footer = () => {
    return (
        <div className='w-10/12 m-auto grid grid-cols-4 pt-4'>
            <div className='text-left'>
                <h3 className='text-xl'>About Orbit.</h3>
                <p className='text-left text-lg'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <h3 className='text-xl'>Connect</h3>
                <ul>
                    <li className='inline-block p-2 text-xl ' ><FaFacebook /></li>
                    <li className='inline-block p-2 text-xl '><FaInstagram /></li>
                    <li className='inline-block p-2 text-xl '><FaEnvelope /></li>
                </ul>
            </div>
            <div className='text-left ml-20'>
                <h3 className='text-xl'>Navagation</h3>
                <ul>
                    <li className='text-lg'>HTLM5</li>
                    <li className='text-lg'>CSS3</li>
                    <li className='text-lg'>JQuery</li>
                    <li className='text-lg'>Bootstrap</li>
                    <li className='text-lg'>Javascrpt</li>
                </ul>
            </div>
            <div className='text-left ml-20'>
                <h3 className='text-xl'>Services</h3>
                <ul>
                    <li className='text-lg'>Web Design</li>
                    <li className='text-lg'>eCommecrce</li>
                    <li className='text-lg'>WordPress</li>
                    <li className='text-lg'>Frontend</li>
                </ul>
            </div>
            <div className='text-left'>
                <h3 className='text-xl'>Contact</h3>
                <ul className='text-left text-lg'>
                    <li>
                        <div className='flex'>
                            <div className=' mt-1 '> <FaGlobe /></div>
                            <p className='ml-2 text-lg'> 43 Raymouth Rd. Baltemoer, London 3910</p>
                        </div>
                    </li>
                    <li><div className='flex'>
                        <div className=' mt-1 '><FaPhone /></div>
                        <p className='ml-2 text-lg'>+84 962596202</p>
                    </div> </li>
                    <li>
                        <div className='flex'>
                            <div className=' mt-1 '><FaEnvelope /></div>
                            <p className='ml-2 text-lg'> duynguyenvan328@gmail.com</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        // <p className='text-lg pb-6'>Copyright ©2022 All rights reserved | This template is made with  by Colorlib</p>
    )
}

export default Footer