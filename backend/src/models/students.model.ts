import mongoose from 'mongoose'
import Subjects from './subject.model'

const StudentSchema = new mongoose.Schema({
    fullname : String,
    userId: String,
    subjects:[{
        subject: String,
        instructor: String,
        grade: Number
    }],
    class: String
})

export default mongoose.model('Student', StudentSchema);