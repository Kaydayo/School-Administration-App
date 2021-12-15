import Student from '../models/Student';
import {Request, Response, NextFunction} from 'express'
import jwt from 'jsonwebtoken'

export const register = async (req:Request, res:Response) => {
 const { email, Firstname, Lastname, password, Middlename } = req.body;
console.log('I was here')

 try {
  if (!(Firstname && password && email && Lastname)) {
   res.status(400).send('all fields are required')
  }

  const studentAlreadyExists = await Student.findOne({ email, Firstname, Lastname })
  if (studentAlreadyExists) {
   throw new Error('Email already exists');
  }


  const students = await Student.create({ email, Firstname, Lastname, password, Middlename })
 

  // Create token
  const token = jwt.sign(
   { email },
   process.env.TOKEN_KEY as string,
   {
    expiresIn: "2hr",
   }
  )
  
  // save student token
  students.token = token;

  res.status(200).json({ message: 'successful', data: { email, Firstname, Lastname, password, Middlename, token} })
 } catch (err: any) {
  console.log('i came to this route')
  res.status(400).send(err.message)
 }
}

export const login = async (req:Request, res:Response) => {
 const { email, password } = req.body;

 if (!email || !password) {
  throw new Error('Please provide email and password');
 }
 const student = await Student.findOne({ email });

 if (!student) {
  throw new Error('Invalid Credentials');
 }

 try {
  const isPasswordCorrect = await student.comparePassword(password);
  if (!isPasswordCorrect) {
   throw new Error('Invalid Credentials');
  }
  // Create token
  const { email } = student
  const token = jwt.sign(
   { user_id: student._id, email },
   process.env.TOKEN_KEY as string,
   {
    expiresIn: "2h",
   }
  );

  // save student token
  student.token = token;
  const { Firstname, DOB, Lastname } = student

  res.status(200).json({ email, Firstname, Lastname, DOB, token });
 } catch (err) {
  console.log(err)
  res.status(400).send('student nor dey here')
 }
};

export const logout = async (req:Request, res:Response) => {
 try{
  res.cookie('token', 'logout', {
   httpOnly: true,
   expires: new Date(Date.now() + 1000),
  });
  res.status(200).json({ msg: 'student logged out!' })
 } catch(err){
  console.log(err)
  res.status(400).send('student nor dey here')
 }
};