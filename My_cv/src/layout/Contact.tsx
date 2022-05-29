import React from 'react'
import { FaCalendar, FaCocktail, FaEnvelope, FaFacebook, FaGlobe, FaHeart, FaInstagram, FaPalette, FaPhone, } from 'react-icons/fa'
const Contact = () => {
  return (
    <div className='pt-40'>
    <h3>Contact Me</h3>
    <div className='grid grid-cols-2 gap-4 mt-4'>
      <form >
        <div className='grid grid-cols-2 gap-1'>
          <div className='text-left' >
            <label htmlFor="">First name</label>
            <br />
            <input className='border-none' type="text" />
            <hr />
          </div>
          <div className='text-left'>
            <label htmlFor="">Last name</label>
            <input type="text" />
            <hr />
          </div>
        </div>
        <div className='py-4 text-left'>
          <label htmlFor="">Email address</label>
          <br />
          <input type="text" name="" id="" />
          <hr />
        </div>
        <div className='text-left'>
          <label htmlFor="">Message</label> <br />
          <textarea cols={50} rows={5} defaultValue={""} />
          <hr />
        </div>
        <button className='bg-green-300 w-40 h-12 rounded-xl  text-lg mt-4 '>SEND MESSAGE</button>
      </form>

      <div className='w-11/12 ml-16'>
        <h3 className='text-2xl'>Contact Info</h3>
        <ul className='text-left text-lg'>
          <li>
            <div className='flex'>
              <div className='text-green-500 mt-1 '> <FaGlobe /></div>
              <p className='ml-2'> 43 Raymouth Rd. Baltemoer, London 3910</p>
            </div>
          </li>
          <li><div className='flex'>
            <div className='text-green-500 mt-1 '><FaPhone /></div>
            <p className='ml-2'>+84 962596202</p>
          </div> </li>
          <li>
            <div className='flex'>
              <div className='text-green-500 mt-1 '><FaEnvelope /></div>
              <p className='ml-2'> duynguyenvan328@gmail.com</p>
            </div>
          </li>

        </ul>
      </div>
    </div>
  </div>
  )
}

export default Contact