import { insertResult } from '@/utils/action'
import Link from 'next/link'
import React from 'react'

export default function page() {
    return (
        <div className='flex justify-center items-center h-screen'>
            <form action={insertResult} method='post' className='w-4/12 bg-slate-200 px-10 py-3'>
                <div className='mb-3 flex flex-col gap-2'>
                    <label htmlFor='name'>Fullname</label>
                    <input type="text" id='name' className='border px-3 py-2 rounded w-full' name='name' />
                </div>
                <div className='mb-3 flex flex-col gap-2'>
                    <label htmlFor='father_name'>Father Name</label>
                    <input type="text" id='father_name' className='border px-3 py-2 rounded w-full' name='fatherName' />
                </div>
                <div className='mb-3 flex flex-col gap-2'>
                    <label htmlFor='school_name'>schoolName</label>
                    <input type="text" id='school_name' className='border px-3 py-2 rounded w-full' name='schoolName' />
                </div>
                <div className='grid grid-cols-5 gap-2'>
                    <div className='mb-3 flex flex-col gap-2'>
                        <label htmlFor='sci'>sci</label>
                        <input type="text" id='sci' className='border px-3 py-2 rounded w-full' name='sci' />
                    </div>
                    <div className='mb-3 flex flex-col gap-2'>
                        <label htmlFor='sci'>sst</label>
                        <input type="text" id='sst' className='border px-3 py-2 rounded w-full' name='sst' />
                    </div>
                    <div className='mb-3 flex flex-col gap-2'>
                        <label htmlFor='maths'>maths</label>
                        <input type="text" id='maths' className='border px-3 py-2 rounded w-full' name='maths' />
                    </div>
                    <div className='mb-3 flex flex-col gap-2'>
                        <label htmlFor='hindi'>hindi</label>
                        <input type="text" id='hindi' className='border px-3 py-2 rounded w-full' name='hindi' />
                    </div>
                    <div className='mb-3 flex flex-col gap-2'>
                        <label htmlFor='eng'>eng</label>
                        <input type="text" id='eng' className='border px-3 py-2 rounded w-full' name='eng' />
                    </div>

                </div>
                <div className='mb-3 flex flex-col gap-2'>
                        <label htmlFor='dp'>profile</label>
                        <input type="file" id='dp' className='border px-3 py-2 rounded w-full' name='dp' />
                    </div>

                <div className='mb-3 flex justify-between gap-2'>
                    <Link href="/"  className='bg-slate-600 text-white hover:bg-slate-800 mt-3 f px-3 py-2 rounded'>Go Back</Link>
                    <input type="submit"  value='create New Result' className='bg-teal-600 text-white hover:bg-teal-800 mt-3 float-end px-3 py-2 rounded'/>


                </div>

            </form>
        </div>
    )
}
