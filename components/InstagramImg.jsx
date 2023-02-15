import Image from 'next/legacy/image'
import React from 'react'
import { FaInstagram } from 'react-icons/fa'

function InstagramImg() {
    return (
        <div className='relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 p-4'>
             <Image src='https://images.unsplash.com/photo-1523032217284-d9e49d6c5f04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvdG98ZW58MHx8MHx8&auto=format&fit=crop&w=1200&q=60' alt='/' width='306px' height='200px' className='rounded-md'  layout='responsive'/> 
             <Image src='https://images.unsplash.com/photo-1487530903081-59e0e3331512?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fGZvdG98ZW58MHx8MHx8&auto=format&fit=crop&w=1200&q=60' alt='/' width='206px' height='200px' className='rounded-md'  layout='responsive'/> 
             <Image src='https://images.unsplash.com/photo-1582883693742-5d25fbef2c65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGZvdG98ZW58MHx8MHx8&auto=format&fit=crop&w=1200&q=60' alt='/' width='206px' height='200px' className='rounded-md'  layout='responsive'/> 
             <Image src='https://images.unsplash.com/photo-1534142499731-a32a99935397?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGZvdG98ZW58MHx8MHx8&auto=format&fit=crop&w=1200&q=60' alt='/' width='206px' height='200px' className='rounded-md'  layout='responsive'/> 
             <Image src='https://images.unsplash.com/photo-1609813744174-a0df83d477fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGZvdG98ZW58MHx8MHx8&auto=format&fit=crop&w=1200&q=60' alt='/' width='206px' height='200px' className='rounded-md'  layout='responsive'/> 
             <Image src='https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGZvdG98ZW58MHx8MHx8&auto=format&fit=crop&w=1200&q=60' alt='/' width='206px' height='200px' className='rounded-md'  layout='responsive'/> 


            {/* overlay */}
            <div className="flex justify-center w-full h-full items-center cursor-pointer rounded-lg absolute top-0 left-0 right-0 bottom-0 hover:bg-black/40 group">
                <p className='text-gray-300 hidden group-hover:block cursor-pointer'><FaInstagram size={50}  className='z-10'/></p>
            </div>
        </div>
    )
}

export default InstagramImg