import Student from '../models/students.model'
import {Request, Response} from 'express'

export const getStudentSubjects = async(req:Request, res:Response) => {
    try{
        const subject = await Student.findOne({userId:req.params.id});
        if (!subject) {
            throw new Error(`No user with id : ${req.params.id}`);
           }
        res.status(201).json({message:"successful", subject})
    }
    catch(err){
        console.log(err)
    res.status(400).send('Not Found')
    }
}

export const getAllStudentsSubjects = async(req:Request, res:Response) => {
    try{
        const subject = await Student.find();
        res.status(201).json({message:"successful", subject})
    }
    catch(err){
        console.log(err)
        res.status(400).send('Not Found')
    
    }
}
   
   

export const updateStudentSubjects = async(req:Request, res:Response) =>{
    try{
        const subject = await Student.findOneAndUpdate({userId:req.params.id}, {
            $push: {
                subjects: req.body
            }
        }, {new:true})
        res.status(200).json({ message: 'successful', subject })
    }
    catch (err: any) {
        console.log(err)
        res.status(400).send(err.message)
    }
    
}
