import React, { useEffect, useState } from 'react'
import { IPAbout } from '../type/About';
import { listAbout } from '../api/about';
const Information = () => {
  const [abouts, setAbout] = useState<IPAbout[]>([]);
  useEffect(() => {
    const getAbout = async () => {
      const { data } = await listAbout();
      setAbout(data);
    }
    getAbout()
  }, [])
  
  return (
    <div className='pt-28 flex justify-around'>
      {abouts.map((item,index)=>{
        return(
          <div>
        <div>
          <img className='flex-1 h-4/5 ' src={item.image} alt="" />
        </div>

        <div className='flex-1 ml-16 '>
          <h3 className='text-left text-2xl'>{item.name}</h3>
          <p className='text-left text-lg'>
            {item.desc}
          </p>
        </div>
      </div>
        )
      })}
      <div>
        <div>
          <img className='flex-1 h-4/5 ' src="https://media-exp1.licdn.com/dms/image/C5603AQFSmcFbH08_MQ/profile-displayphoto-shrink_200_200/0/1628851164082?e=1655337600&v=beta&t=q5efA5HxTY-jRr3yBvonorsjGSLkAIat7cZS-pS7AMo" alt="" />
        </div>

        <div className='flex-1 ml-16 '>
          <h3 className='text-left text-2xl'>My Bio</h3>
          <p className='text-left text-lg'>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
            <br />
            A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
          </p>
        </div>
      </div>
    </div>

  )
}

export default Information