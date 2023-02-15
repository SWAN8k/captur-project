import Image from 'next/legacy/image'
import React from 'react'

function Portfolio() {
    return (
        <div className='max-w-[1240px] mx-auto py-16  text-center'>
            <h1 className='font-bold text-3xl p-4'>Travel Photos</h1>
            <div className="grid grid-rows-none md:grid-cols-5 p-4 gap-4">
                <div className="w-full h-full col-span-2 md:col-span-3 row-span-2">
                    <Image
                        src='https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dHJhdmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1200&q=60'
                        alt='/'
                        layout='responsive'
                        width='677'
                        height='451'
                    />
                </div>
                <div className="w-full h-full">
                    <Image src='https://plus.unsplash.com/premium_photo-1668703335393-a0749dbdd5ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1200&q=60'
                        width='215'
                        height='217'
                        layout='responsive'
                        objectFit='cover'
                    />
                </div>
                <div className="w-full h-full">
                    <Image src='https://images.unsplash.com/photo-1488085061387-422e29b40080?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1200&q=60'
                        width='215'
                        height='217'
                        layout='responsive'
                        objectFit='cover'
                    />
                </div>
                <div className="w-full h-full">
                    <Image src='https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1200&q=60'
                        width='215'
                        height='217'
                        layout='responsive'
                        objectFit='cover'
                    />
                </div>
                <div className="w-full h-full">
                    <Image src='https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1200&q=60'
                        width='215'
                        height='217'
                        layout='responsive'
                        objectFit='cover'
                    />
                </div>

            </div>
        </div>
    )
}

export default Portfolio
