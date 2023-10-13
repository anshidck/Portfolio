import React from 'react'

function Contact() {
  return (
    <div name='contact' className='w-full h-full bg-zinc-950 flex justify-center items-center py-9 px-6'>
        <form method='POST' action="https://getform.io/f/24286128-c9aa-4b5a-b858-45a84acc2698" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-3xl font-bold text-orange-700 text-center'>Contact</p>
                <p className='text-white py-4 text-center'>\\ submit the form below me an email</p>
            </div>
            <input className='bg-white p-2 rounded' type="text" placeholder='name' name='name'/>
            <input className='my-4 p-2 bg-white rounded' type="email" placeholder='email' name='email'/>
            <textarea className='bg-white p-2 rounded' name="message" rows="10" placeholder='message...'></textarea>
            <button className='text-white border-2 rounded px-4 py-3 my-8 mx-auto flex items-center hover:border-orange-700 hover:text-orange-700'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact