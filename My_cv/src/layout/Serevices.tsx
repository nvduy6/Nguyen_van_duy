import { Progress } from 'antd';
import React, { useEffect, useState } from 'react'
import { FaCalendar, FaCocktail, FaEnvelope, FaFacebook, FaGlobe, FaHeart, FaInstagram, FaPalette, FaPhone, } from 'react-icons/fa'
import { listSkill } from '../api/skill';
import { Iskill } from '../type/Skill';
const Serevices = () => {
  const [skills, setSkill] = useState<Iskill[]>([]);
  useEffect(() => {
    const getSkills = async () => {
      const { data } = await listSkill();
      setSkill(data);
    }
    getSkills()
  }, [])
   
  return (
    <div className='pt-56'>
    <h3 className='text-center text-2xl'>Services</h3>
    <div className='grid grid-cols-3 gap-4 mt-4'>
    {skills.map((item, index) => {
          return (
             <div className='border-2 px-2 py-2'>
             {/* <div className='text-6xl text-green-400 ml-40'></div> */}
             <img className='w-20 m-auto' src={item.image} alt="" />
             <h3 className='text-xl'>{item.title}</h3>
             <Progress percent={item.progr} size="small" />
             <p className='text-lg'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
           </div>
          )
        })}
     
      {/* <div className='border-2 px-2 py-2'>
        <div className='text-6xl text-green-400 ml-40'><FaPalette /></div>
        <h3 className='text-xl'>Development</h3>
        <p className='mt- text-lg'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
      </div>
      <div className='border-2 px-2 py-2'>
        <img src="" alt="" />
        <h3 className='text-xl'>Development</h3>
        <p className='text-lg'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
      </div> */}
    </div>
  </div>
  )
}

export default Serevices