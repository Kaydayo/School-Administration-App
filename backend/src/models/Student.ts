import mongoose from 'mongoose'
import validator from 'validator'
import bcrypt from 'bcryptjs'


const StudentSchema = new mongoose.Schema({
 token: {
  type: String,
  // required: [true, 'Please provide name'],
 },
 Firstname: {
  type: String,
  // required: [true, 'Please provide name'],
  minlength: 2,
  maxlength: 50,
 },
 Lastname: {
  type: String,
  // required: [true, 'Please provide name'],
  minlength: 2,
  maxlength: 50,
 },
 Middlename: {
  type: String,
  // required: [true, 'Please provide name'],
  minlength: 2,
  maxlength: 50,
 },
 email: {
  type: String,
  unique: true,
  // required: [true, 'Please provide email'],
  validate: {
   validator: validator.isEmail,
   message: 'Please provide valid email',
  },
 },
 password: {
  type: String,
  // required: [true, 'Please provide password'],
  minlength: 6
 },
 classes: {
  type: String,
  // required: [true, 'Please provide class']
 },
 Address: {
  type: String,
  // required: [true, 'Please provide address'],
  minlength: 6,
 },
 DOB: {
  type: Date,
  // required: [true, 'Please provide date of birth']
 },
 Nationality: {
  type: String,
  // required: [true, 'Please provide nationality'],
  minlength: 6,
 },
 StateOfOrigin: {
  type: String,
  // required: [true, 'Please provide state of origin']
 },
 Parent: {
  type: String,
  // required: [true, 'Please provide parents name']
 },
 subjects: [{
  subject: String,
  grade: Number,
  teacher: String,
 }],
 // required: [true, 'Please provide subjects']
});




StudentSchema.pre('save', async function () {
 // console.log(this.modifiedPaths());
 // console.log(this.isModified('name'));
 if (!this.isModified('password')) return;
 const salt = await bcrypt.genSalt(10);
 this.password = await bcrypt.hash(this.password, salt);
});

StudentSchema.methods.comparePassword = async function (canditatePassword) {
 const isMatch = await bcrypt.compare(canditatePassword, this.password);
 return isMatch;
};

export default mongoose.model('Student', StudentSchema);