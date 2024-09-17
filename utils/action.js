"use server"

import Student from "@/models/Student";
import DbConnect from "./DbConnect"
import { redirect } from "next/navigation";
import { join } from "path";
import { writeFile } from "fs/promises";

export async function insertResult(formdata){
DbConnect();

//image upload work
let Image = formdata.get("dp");
let bytes = await Image.arrayBuffer();
let buffer = Buffer.from(bytes);
let path = join("./public", "student_dp", Image.name);
await writeFile(path, buffer);





    let data ={
        name:formdata.get("name"),
        fatherName:formdata.get("fatherName"),
        schoolName:formdata.get("schoolName"),
        maths:formdata.get("maths"),
        sci:formdata.get("sci"),
        sst:formdata.get("sst"), 
        hindi:formdata.get("hindi"),
        eng:formdata.get("eng"),
        dp:Image.name,

    }
    let newdata = await Student.create(data);
    redirect("/manage");


}
export async function DeleteStudent(id,formData){
    DbConnect();
    
    await Student.findByIdAndDelete(id);
    redirect("/manage");

}