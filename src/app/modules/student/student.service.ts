import { Student } from "./student.Interface";
import { StudentModel } from "./student.model";

export const createStudentIntoDB = async(student : Student) =>{
   const result = await StudentModel.create(student)
   return result
}


export const studentServices ={
   createStudentIntoDB,
 }