import mongoose from 'mongoose'

const TeacherSchema = new mongoose.Schema({
    fullname: String,
    userId: String,
    class: [String],
    subjects: [String]
})

export default mongoose.model('Teacher', TeacherSchema);