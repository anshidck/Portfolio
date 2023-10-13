import React from 'react'
import { BsPersonCircle } from 'react-icons/bs'
import { Link } from 'react-scroll'


function Navbar() {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-black text-white'>
        <h1 className='font-bold text-2xl ml-4 text-orange-700'>CK</h1>
        <div className='mx-4'>
            <ul className='flex gap-6'>
                <li className='m-auto'>
                    <Link to='about' smooth={true} duration={500}>
                    <BsPersonCircle size={30}/>
                    </Link>
                </li>
                <li className='text-black bg-orange-700 py-2 px-1 rounded font-bold'>
                <Link to='contact' smooth={true} duration={500}>
                    Hire me
                    </Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar