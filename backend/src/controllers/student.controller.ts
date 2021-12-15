import Student from '../models/Student';
import { Request, Response } from 'express'

export const getAllStudents = async (req: Request, res: Response) => {
 console.log('its working')
 // const students = await Student.find()
 try {
  const students = await Student.find();

  // console.log(students)
  res.status(200).json({ message: 'successful', students })
 } catch (err) {
  console.log(err)
  res.status(400).send('student nor dey here')
 }
}

export const getSingleStudent = async (req: Request, res: Response) => {
 console.log('its working')
 try {
  const student = await Student.findOne({ _id: req.params.id }).select('-password');
  if (!student) {
   throw new Error(`No user with id : ${req.params.id}`);
  }

  // console.log(students)
  res.status(200).json({ message: 'successful', student })
 } catch (err) {
  console.log(err)
  res.status(400).send('student nor dey here')
 }
}

export const updateStudent = async (req: Request, res: Response) => {
 const id = req.params.id
 console.log(id)
 try {
  // const lastStudent = await Student.find().sort({_id: -1}).limit(1)
  // // data.pin = lastStudent.pin? lastStudent.pin ++:1;
  // console.log(lastStudent)
  const students = await Student.findOneAndUpdate({_id: id}, req.body, {new:true})
  res.status(200).json({ message: 'successful', students })
 } catch (err: any) {
  console.log(err)
  res.status(400).send(err.message)
 }
}

export const deleteStudent = async (req: Request, res: Response) => {
 const { id } = req.params;

 const student = await Student.findOne({ _id: id });

 if (!student) {
  throw new Error(`No product with id : ${id}`)
 }

 await student.remove();
 res.status(200).json({ message: 'successfully deleted student' })
};

