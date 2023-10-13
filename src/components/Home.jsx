import React from 'react'
import { Link } from 'react-scroll'
import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'

function Home() {
  return (
    <div className='w-full h-screen bg-zinc-950'>
        <div className='max-w-[1080px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-orange-700 font-mono font-bold py-1'>Hi,</p>
            <h1 className='text-5xl font-bold text-white font-mono py-2'> My name is Anshid ck</h1>
            <h2 className='font-bold text-xl py-1 text-white font-mono'>I'm a <span className='text-orange-700'>Web Developer</span></h2>
            <ul className='flex py-1 gap-4'>
              <li>
                <AiFillGithub size={40} color='white'/>
              </li>
              <li>
                <AiFillLinkedin size={40} color='white'/>
              </li>
              <li>
                <AiOutlineTwitter size={40} color='white'/>
              </li>
              <li>
                <AiOutlineInstagram size={40} color='white'/>
              </li>
            </ul>
            <div>
              <button className='text-white my-3 py-3 px-5 bg-orange-700 font-bold rounded cursor-pointer'>
                <Link to='work' smooth={true} duration={500}>
                View Work
                </Link>
              </button>
            </div>
        </div>
    </div>
  )
}

export default Home