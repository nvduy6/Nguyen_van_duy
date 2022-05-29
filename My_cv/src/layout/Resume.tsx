import React from 'react'
import { FaCalendar, FaCocktail, FaEnvelope, FaFacebook, FaGlobe, FaHeart, FaInstagram, FaPalette, FaPhone, } from 'react-icons/fa'
const Resume = () => {
  return (
    <div className='grid grid-cols-2 gap-4 pt-40'>
    <img className=' w-full' src="https://media-exp1.licdn.com/dms/image/C5603AQFSmcFbH08_MQ/profile-displayphoto-shrink_200_200/0/1628851164082?e=1655337600&v=beta&t=q5efA5HxTY-jRr3yBvonorsjGSLkAIat7cZS-pS7AMo" alt="" />
    <div className='flex-1 ml-16'>
      <h3 className='text-center text-2xl'>Work Experience</h3>
      <div className='grid grid-cols-2 gap-4 mt-4'>
        <div>
          <h3 className='text-xl'>Senior Front End Developer</h3>
          <div className='grid grid-cols-2 gap-1'>
            <p className='text-lg'>Facebook</p>
            <div className='flex'>
              <div><FaGlobe /></div>
              <p className='text-lg'>San Francisco</p>
            </div>

          </div>
        </div>
        <div>
          <button className='text-xl text-green-400 bg-slate-200 w-50 h-10 rounded-2xl'>FULLTIME</button>
          <p className='text-lg'>November2019-Present</p>
        </div>

      </div>
      <hr />
      <div className='grid grid-cols-2 gap-4 mt-4'>
        <div>
          <h3 className='text-xl'>Senior Front End Developer</h3>
          <div className='grid grid-cols-2 gap-1'>
            <p className='text-lg'>Facebook</p>
            <p className='text-lg'>San Francisco</p>
          </div>
        </div>
        <div>
          <button className='text-xl text-green-400 bg-slate-200 w-50 h-10 rounded-2xl'>FULLTIME</button>
          <p className='text-lg'>November2019-Present</p>
        </div>

      </div>
      <hr />
      <div className='grid grid-cols-2 gap-4 mt-4'>
        <div>
          <h3 className='text-xl'>Senior Front End Developer</h3>
          <div className='grid grid-cols-2 gap-1'>
            <p className='text-lg'>Facebook</p>
            <p className='text-lg'>San Francisco</p>
          </div>
        </div>
        <div>
          <button className='text-xl text-green-400 bg-slate-200 w-50 h-10 rounded-2xl'>FULLTIME</button>
          <p className='text-lg'>November2019-Present</p>
        </div>

      </div>
      <hr />
    </div>
  </div>
  )
}

export default Resume