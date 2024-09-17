

import Student from '@/models/Student';
import { DeleteStudent } from '@/utils/action';
import DbConnect from '@/utils/DbConnect'
import Link from 'next/link'


export default async function page() {
    DbConnect();
    const data = await Student.find({});


    return (
        <div className='flex  flex-1 h-screen flex-col p-20'>
            <div className='mb-3 flex gap-2 justify-between px-5'>
                <Link href="/" className='bg-slate-600 text-white hover:bg-slate-800 mt-3  px-3 py-2 rounded'>Go Back</Link>
                <Link href="/insert" className='bg-teal-600 text-white hover:bg-teal-800 mt-3  px-3 py-2 rounded' >Add new Marksheet</Link>
            </div>
            <table className='border '>
                <thead>
                    <tr>
                        <th className='border p-3'>Id </th>
                        <th className='border p-3'>Name</th>
                        <th className='border p-3'>Father</th>
                        <th className='border p-3'>School </th>
                        <th className='border p-3'>Maths</th>
                        <th className='border p-3'>Sci</th>
                        <th className='border p-3'>sst</th>
                        <th className='border p-3'>Hindi</th>
                        <th className='border p-3'>eng</th>
                        <th className='border p-3'>Total</th>
                        <th className='border p-3'>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        data.map((std, i) => {
                            let id = std._id;
                            const StudentDeletewithId = DeleteStudent.bind(null, id);
                            return (

                                <tr keys={i}>
                                    <td className='border p-3'>{i + 1}</td>
                                    <td className='border p-3'>{std.name}</td>
                                    <td className='border p-3'>{std.fatherName}</td>
                                    <td className='border p-3'>{std.schoolName}</td>
                                    <td className='border p-3'>{std.maths}</td>
                                    <td className='border p-3'>{std.sci}</td>
                                    <td className='border p-3'>{std.sst}</td>
                                    <td className='border p-3'>{std.hindi}</td>
                                    <td className='border p-3'>{std.eng}</td>
                                    <td className='border p-3'>{std.eng + std.hindi + std.sci + std.sst + std.maths}</td>
                                    <td className='border p-2 flex gap-3 justify-center'>
                                        <Link href={`/view/${std._id}`} className='bg-green-600 text-white  px-3 py-2 rounded'>view marksheet</Link>

                                        <form action={StudentDeletewithId}>

                                            <button className='bg-red-600 hover:bg-red-800 text-white rounded px-3 py-2'>Delete</button>
                                        </form>
                                    </td>
                                </tr>)

                        })
                    }

                </tbody>
            </table>
        </div >
    )
}
