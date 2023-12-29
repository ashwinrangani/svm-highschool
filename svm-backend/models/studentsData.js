import mongoose from "mongoose";
import moment from 'moment';

const studentData = new mongoose.Schema({
    standard:  String,
    studentname: String,
    rollnumber: String,
    birthdate: String,
    address: String,
    phonenumber: String,
    uid: String,
    year: String,
  });

 studentData.pre('save', async function(){
  this.birthdate = moment(this.birthdate).format('DD-MM-YYYY')
 })

  const Student = mongoose.model("Student", studentData);

  export default Student;