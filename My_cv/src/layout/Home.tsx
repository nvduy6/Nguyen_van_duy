import React from 'react'
import { Progress } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaCalendar, FaCocktail, FaEnvelope, FaFacebook, FaGlobe, FaHeart, FaInstagram, FaPalette, FaPhone, } from 'react-icons/fa'
import Information from './information';
import Serevices from './Serevices';
import Resume from './Resume';
import Contact from './Contact';
import { Footer } from 'antd/lib/layout/layout';
const Home = () => {
  return (
    <div className='w-full'>
      <header className='flex justify-around bg-slate-400 h-20 sticky top-0 z-10 ' >
        <div>
          <h2 className='text-2xl border-4 px-1 py-1 mt-3'>Duy</h2>
        </div>
        <nav>
          <ul className='mt-4'>
            <li className='inline p-2 text-xl '><a className='no-underline text-black hover:text-gray-900' href="#">Home</a> </li>
            <li className='inline p-2 text-xl'><a className='no-underline text-black' href="#about">About</a> </li>
            <li className='inline p-2 text-xl' ><a className='no-underline text-black' href="#serevices">Services</a> </li>
            <li className='inline p-2 text-xl'><a className='no-underline text-black' href="#word">Word</a></li>
            <li className='inline p-2 text-xl'><a className='no-underline text-black' href="#contact"> Contact</a></li>

            <li className='inline p-2 text-xl'>Blog</li>

          </ul>
        </nav>
      </header>
      <div>
        <img className='w-full relative top-0 h-full' src="https://preview.colorlib.com/theme/orbit/images/xhero_img.jpg.pagespeed.ic.WrSXj_3UV4.webp" alt="" />
        <div className='absolute top-60 ml-72'>
          <h3 className='text-zinc-50 text-5xl italic  '>I'm Duy Nguyen Van <br />
            A Front-end Developer
          </h3>
          <p className='text-zinc-50 text-2xl'>  A new work from <span className='text-green-500'>Ha Noi</span> </p>
        </div>

      </div>
      {/* banner */}
      <main className='w-9/12 m-auto '>

        <div id='about' className='  min-h-screen '>
          <Information/>
          {/* thong tin */}
          <div id='serevices' className=' min-h-screen'>
            <Serevices/>
          </div>
          {/* ngôn ngữ */}
          <div id='word' className=' min-h-screen'>
          <Resume/>

          </div>
          {/* Link du an */}
          <div id='contact' className='text-2xl min-h-screen'>
          <Contact/>
          </div>

        </div>
      </main>
      {/* footer */}
      <footer className='w-full bg-slate-400 mt-20'>
       <Footer/>
      </footer>
    </div>
  )
}

export default Home