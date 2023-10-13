import React from 'react'
import Photo from '../assets/IMG_2397.jpg'

function About() {
  return (
    <div name='about' className='w-full h-screen bg-zinc-950 text-white'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
             <div className='pb-2'><p className='text-3xl font-bold text-orange-700 items-center'>About</p></div>
            <div className='max-w-[1000px] w-full gap-8 sm:grid sm:grid-cols-3'>
                <div className='p-6'>
                    <img className='w-full h-[300px] object-cover' src={Photo} alt="/" />
                </div>
                <div className='col-span-2 p-6'>
                    <p className='font-bold text-lg'>
                        I started my journey in the world of computers from an young age. now i'm 20 years old. Web development is my 
                        center of interest, i always love the idea of cross-platform development, 1-n one code base deploy into almost any platform 
                        which web technology like javaScript enables me to do. I also like creating interactive UI components for share those design and codes
                        to the world through Github.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About