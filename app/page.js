
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='p-10 flex flex-1 justify-center items-center flex-col '>
    <h1 className='text-3xl font-semibold mb-5'>RMS system</h1>
    <div className='grid grid-cols-2 gap-10'>
      <Link href="/insert" className='bg-red-800 text-white px-10 py-5 font-semibold text-xl'>insert</Link>
      <Link href="/manage" className='bg-slate-800 text-white px-10 py-5 font-semibold text-xl'>Manage</Link>
    </div>
    </div>
  )
}

export default page