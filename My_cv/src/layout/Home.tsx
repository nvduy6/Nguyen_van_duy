import React from 'react'
import { Progress } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaCalendar, FaCocktail, FaEnvelope, FaFacebook, FaGlobe, FaHeart, FaInstagram, FaPalette, FaPhone, } from 'react-icons/fa'
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
          <div className='pt-28 flex justify-around'>
            <img className='flex-1 h-4/5 ' src="https://media-exp1.licdn.com/dms/image/C5603AQFSmcFbH08_MQ/profile-displayphoto-shrink_200_200/0/1628851164082?e=1655337600&v=beta&t=q5efA5HxTY-jRr3yBvonorsjGSLkAIat7cZS-pS7AMo" alt="" />
            <div className='flex-1 ml-16 '>
              <h3 className='text-left text-2xl'>My Bio</h3>
              <p className='text-left text-lg'>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                <br />
                A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
              </p>
              <div style={{ width: 380 }}>
                <h3 className='text-left'>HTML5</h3>
                <Progress percent={80} size="small" />
                <h3 className='text-left'>Javascrpt</h3>
                <Progress percent={50} size="small" status="active" />
                <h3 className='text-left'>Booststrap</h3>
                <Progress percent={70} size="small" status="exception" />
                <h3 className='text-left'>React js</h3>
                <Progress percent={100} size="small" />
              </div>
            </div>
          </div>
          {/* thong tin */}
          <div id='serevices' className=' min-h-screen'>
            <div className='pt-56'>
              <h3 className='text-center text-2xl'>Services</h3>
              <div className='grid grid-cols-3 gap-4 mt-4'>
                <div className='border-2 px-2 py-2'>
                  <div className='text-6xl text-green-400 ml-40'></div>

                  <h3 className='text-xl'>Development</h3>
                  <p className='text-lg'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
                <div className='border-2 px-2 py-2'>
                  <div className='text-6xl text-green-400 ml-40'><FaPalette /></div>
                  <h3 className='text-xl'>Development</h3>
                  {/* <span className='text-6xl text-green-400 '></span> */}
                  <p className='mt- text-lg'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
                <div className='border-2 px-2 py-2'>
                  <img src="" alt="" />
                  <h3 className='text-xl'>Development</h3>
                  <p className='text-lg'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
              </div>
            </div>
          </div>
          {/* ngôn ngữ */}
          <div id='word' className=' min-h-screen'>
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

          </div>
          {/* Link du an */}
          <div id='contact' className='text-2xl min-h-screen'>
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
          </div>

        </div>
      </main>
      {/* footer */}
      <footer className='w-full bg-slate-400 mt-20'>
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
        <p className='text-lg pb-6'>Copyright ©2022 All rights reserved | This template is made with  by Colorlib</p>
      </footer>
    </div>
  )
}

export default Home