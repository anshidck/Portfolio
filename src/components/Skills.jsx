import React from 'react'

function Skills() {
  return (
    <div className='bg-zinc-950 text-white  w-full'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-3xl font-bold text-center text-orange-700'>Skills</p>
                <p className='text-center py-6'>\\ There are the technologies I've worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center '>
                
                <div className='hover:shadow-md hover:shadow-orange-700 hover:scale-105 duration-500'>
                    <img className='w-20 mx-auto h-30 py-4' src="https://logos-download.com/wp-content/uploads/2017/07/HTML5_badge.png" alt="/" />
                    <p className='my-2 font-bold text-xl'>HTML</p>
                </div>
                <div className='hover:shadow-md hover:shadow-orange-700 hover:scale-105 duration-500'>
                    <img className='w-20 mx-auto h-30 py-4' src="https://www.logolynx.com/images/logolynx/s_6e/6e6e1283cd55308a55b9eae8197b5e9b.png" alt="/" />
                    <p className='my-2 font-bold text-xl'>CSS</p>
                </div>
                <div className='hover:shadow-md hover:shadow-orange-700 hover:scale-105 duration-500'>
                    <img className='w-20 mx-auto h-30 py-4' src="https://logos-download.com/wp-content/uploads/2019/01/JavaScript_Logo.png" alt="/" />
                    <p className='my-2 font-bold text-xl'>JavaScript</p>
                </div>
                <div className='hover:shadow-md hover:shadow-orange-700 hover:scale-105 duration-500'>
                    <img className='w-20 mx-auto h-30 py-4' src="http://logos-download.com/wp-content/uploads/2016/09/React_logo_logotype_emblem.png" alt="/" />
                    <p className='my-4 font-bold text-xl'>React</p>
                </div>
                <div className='hover:shadow-md hover:shadow-orange-700 hover:scale-105 duration-500'>
                    <img className='w-20 mx-auto h-30 py-4' src="https://www.ictdemy.com/images/5728/nodejs_logo.png" alt="/sa" />
                    <p className='my-2 font-bold text-xl'>Node Js</p>
                </div>
                <div className='hover:shadow-md hover:shadow-orange-700 hover:scale-105 duration-500'>
                    <img className='w-20 mx-auto h-30 py-4' src="https://vectorified.com/images/express-js-icon-20.png" alt="/" />
                    <p className='my-2 font-bold text-xl'>Express Js</p>
                </div>
                <div className='hover:shadow-md hover:shadow-orange-700 hover:scale-105 duration-500'>
                    <img className='w-28 mx-auto h-28 py-1' src="https://pluspng.com/img-png/logo-mongodb-png-mongodb-logo-png-400.png" alt="/" />
                    <p className='my-2 font-bold text-xl'>MongoDB</p>
                </div>
                <div className='hover:shadow-md hover:shadow-orange-700 hover:scale-105 duration-500'>
                    <img className='w-28 mx-auto h-30 py-4' src="https://codekitapp.com/images/help/free-tailwind-icon@2x.png" alt="/" />
                    <p className='my-4 font-bold text-xl'>Tailwind</p>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Skills