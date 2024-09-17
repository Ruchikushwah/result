import Student from "@/models/Student";
import DbConnect from "@/utils/DbConnect";
import Image from "next/image";
import Link from 'next/link'


const   page = async({params}) => {

    DbConnect();
    const Studentid = params.Studentid;
    const data = await Student.findById(Studentid);

  const totalmarks=  data.sci + data.sst + data.hindi + data.eng + data.maths;
  let fail = false;
  if(data.sci < 30) fail = true;
  if(data.sst < 30) fail = true;
  if(data.hindi < 30) fail = true;
  if(data.eng < 30) fail = true;
  if(data.maths < 30) fail = true;

  const division = (fail) ? "fail":(totalmarks >= 300 ? "1st" : (totalmarks >= 250) ?"2nd" : (totalmarks >=150) ? "3rd" : "fail");
  return (
    <div className="flex items-center justify-center h-screen flex-col">
        <table className="border w-5/12 ">
            <tbody>
            <tr>
                <th colSpan="4" className="bg-purple-500 text-white py-2">personal Details</th>
            </tr>
            <tr>
                <th className="border p-3" colSpan="2">FullName</th>
                <td className="border p-3">{data.name}</td>
                <td className="border p-3" rowSpan={3}>
                    {
                        data.dp? <Image width="100" height="80" src={`/student_dp/${data.dp}`}/>
                        :<Image width="100" height="80" src={`./https://picsum.photos/300/300`}/>
                    }
                </td>
            </tr>
            <tr>
                <th className="border p-3" colSpan="2">FatherName</th>
                <td className="border p-3" >{data.fatherName}</td>
            </tr>
            <tr>
                <th className="border p-3" colSpan="2">schoolName</th>
                <td className="border p-3">{data.schoolName}</td>
            </tr>
            <tr>
                <th colSpan="4" className="bg-red-600 text-white p-2">marks Details</th>
            </tr>
            <tr>
                <th className="border p-3">subject</th>
                <th className="border p-3">Total marks</th>
                <th className="border p-3">pass marks</th>
                <th className="border p-3">obtain marks</th>
            </tr>
            <tr>
                <th  className="border p-3">maths</th>
                <th  className="border p-3">100</th>
                <th  className="border p-3">30</th>
                <th  className="border p-3">{(data.maths < 30)? data.maths + "F" : data.maths}</th>
            </tr>

            <tr>
                <th  className="border p-3">sci</th>
                <th  className="border p-3">100</th>
                <th  className="border p-3">30</th>
                <th  className="border p-3">{(data.sci < 30)? data.sci + "F" : data.sci}</th>
            </tr>
            <tr>
                <th  className="border p-3">sst</th>
                <th  className="border p-3">100</th>
                <th  className="border p-3">30</th>
                <th  className="border p-3">{(data.sst < 30)? data.sst + "F" : data.sst}</th>
            </tr>
            <tr>
                <th  className="border p-3">hindi</th>
                <th  className="border p-3">100</th>
                <th  className="border p-3">30</th>
                <th  className="border p-3">{(data.hindi < 30)? data.hindi + "F" : data.hindi}</th>
            </tr>
            <tr>
                <th  className="border p-3">English</th>
                <th  className="border p-3">100</th>
                <th  className="border p-3">30</th>
                <th  className="border p-3">{(data.eng < 30)? data.eng + "F" : data.eng}</th>
            </tr>
            <tr>
                <th colSpan="4" className="bg-green-600 text-white p-2">result Details</th>
            </tr>
            <tr>
                <th className="border p-3" colSpan="2">Total marks</th>
                <td className="border p-3" colSpan="2">{totalmarks}</td>
            </tr>
            <tr>
                <th className="border p-3" colSpan="2">division</th>
                <td className="border p-3" colSpan="2">{division}</td>
            </tr>

            </tbody>
        </table>
        <div className='mb-3 flex gap-2 items-end '>
        <Link href="/manage" className='bg-slate-600 text-white hover:bg-slate-800 ml-10  px-3 py-2 rounded mt-3'>Go Back</Link>
        </div>

    </div>
  )
} 

export default page