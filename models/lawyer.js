import mongoose from "mongoose";
 const Schema = mongoose.Schema;
const lawyerSchema = new Schema({
  name: {
    type: String,
    required:true
  },
  position: {
    type: String,
    required:true

  },
  image: {
    type: String,
    required:true
  },
  Dob: {
    type: String,
    required:true
  },

  TermOfOffice: {
    type: String,
    required:true
  },
});
export default mongoose.model("lawyer", lawyerSchema);