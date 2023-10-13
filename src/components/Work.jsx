import React from 'react'

function Work() {
  return (
    <div name='work' className='w-full h-full bg-zinc-950 text-white p-4'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
             <div className='py-9 items-center'>
                <p className='font-bold text-orange-700 text-3xl text-center'>Portfolio</p>
               <p className='text-cemter'>\\ Check out some of my recent work</p>
             </div>
             <div className='max-w-[1000px] w-full gap-8 sm:grid sm:grid-cols-2'>
                <div className='p-6'>
                    <img className='w-full h-[270px] object-cover rounded   ' src="https://thumbs.dreamstime.com/b/e-basket-depicting-e-commerce-online-shopping-icon-isolated-black-background-e-basket-depicting-e-commerce-162170236.jpg" alt="/" />
                </div>
                <div className='p-3 px-6'>
                   <div>
                    <h1 className='text-orange-700 font-bold text-2xl'>E-Commerce  Website</h1>
                    <ul className='marker:text-orange-700 list-disc'>
                        <li>Developed a full-stack e-commerce platform using MERN sttoack.</li>
                        <li>Implemented user Authentication, product catalog, and cart  functionality.</li>
                        <li>Integraated secure payment gateways using Stripe API</li>
                    </ul>
                   </div>
                    <div className='py-5'>
                        <a className='py-2 px-3 border-2 border-white rounded font-bold ' href="https://github.com/anshidck/mern-ecommrce">Code</a>
                        <a className='py-2 px-3 border-2 border-orange-700 rounded fontbold mx-3 bg-orange-700 text-white' href="https://mern-e-commerce-u1ni.onrender.com">Live</a>
                    </div>
                </div>
            </div>
            <div className='max-w-[1000px] w-full gap-8 sm:grid sm:grid-cols-2'>
                <div className='p-6'>
                    <img className='w-full h-[270px]' src="https://is3-ssl.mzstatic.com/image/thumb/Purple122/v4/1e/d3/fa/1ed3fa04-6987-e893-7806-4c8f9f761790/source/1200x630bf.jpg" alt="/" />
                </div>
                <div className='p-3 px-6'>
                   <div>
                    <h1 className='text-orange-700 font-bold text-2xl'>Real-time Message-Application</h1>
                    <ul className='marker:text-orange-700 list-disc'>
                        <li>Designed and built a Real-time chat application similar to whatsApp .</li>
                        <li>Implemented private and group messaging features with real-time updates.</li>
                        <li>Integrated user authentication and profile management</li>
                    </ul>
                   </div>
                    <div className='py-5'>
                        <a className='py-2 px-3 border-2 border-white rounded font-bold ' href="https://github.com/anshidck/mern-chat">Code</a>
                        <a className='py-2 px-3 border-2 border-orange-700 rounded fontbold mx-3 bg-orange-700 text-white' href="https://mern-chat-9km4.onrender.com">Live</a>
                    </div>
                </div>
            </div>
            <div className='max-w-[1000px] w-full gap-8 sm:grid sm:grid-cols-2'>
                <div className='p-6'>
                    <img className='w-full h-[270px]' src="https://i.pinimg.com/originals/c6/2c/05/c62c055ede6aadbb1f94a555071c98b9.jpg" alt="/" />
                </div>
                <div className='p-3 px-6'>
                   <div>
                    <h1 className='text-orange-700 font-bold text-2xl'>Social Media Platform</h1>
                    <ul className='marker:text-orange-700 list-disc'>
                        <li>Created a social media platform similar to instegram using MERN stack</li>
                        <li>Implemented user registration, profile management, and photo sharing features.</li>
                        <li>Integrated likes, comment and add friends</li>
                    </ul>
                   </div>
                    <div className='py-5'>
                        <a className='py-2 px-3 border-2 border-white rounded font-bold ' href="https://github.com/anshidck/mern-social-media">Code</a>
                        <a className='py-2 px-3 border-2 border-orange-700 rounded fontbold mx-3 bg-orange-700 text-white' href="/">Live</a>
                    </div>
                </div>
            </div>
            <div className='max-w-[1000px] w-full gap-8 sm:grid sm:grid-cols-2'>
                <div className='p-6'>
                    <img className='w-full h-[270px] object-cover' src="https://www.hel.fi/static/hki4all/kuvat/ladattavat/pukuhuone_m_nega.jpg" alt="/" />
                </div>
                <div className='p-3 px-6'>
                   <div>
                    <h1 className='text-orange-700 font-bold text-2xl'>Room Booking Application</h1>
                    <ul className='marker:text-orange-700 list-disc'>
                        <li>Developed a room booking application for hotels and accoommodation .</li>
                        <li>Implemented user-friendly search and booking interfaces.</li>
                        <li>Integrated Searching and filtering</li>
                    </ul>
                   </div>
                    <div className='py-5'>
                        <a className='py-2 px-3 border-2 border-white rounded font-bold ' href="https://github.com/anshidck/mern-Booking">Code</a>
                        <a className='py-2 px-3 border-2 border-orange-700 rounded fontbold mx-3 bg-orange-700 text-white' href="/">Live</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work