import React from 'react'

function Contacts() {
  return (
    <div className='max-w-[1240px] m-auto p-4 h-screen'>
      <h1 className='text-2xl font-bold text-center p-4'>Let's work together</h1>
      <form className='max-w-[600px] m-auto'>
          <div className="grid grid-cols-2 gap-2">
            <input type="text" placeholder='Name' className='border shadow-lg p-3'/>
            <input type="text" placeholder='Email' className='border shadow-lg p-3'/>
          </div>
          <input type="text" placeholder='Subject' className='border shadow-lg p-3 w-full my-2'/>
          <textarea className='border shadow-lg p-3 w-full'  cols="30" rows="10" placeholder='Message'></textarea>
          <button className='font-semibold border shadow-lg p-3 w-full mt-2'>Submit</button>
      </form>
      
    </div>
  )
}

export default Contacts
