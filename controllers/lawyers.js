import Lawyer from "../models/lawyer.js";
export const getAllawyer = async (req, res) => {
  let lawyer;
  try {
    lawyer = await Lawyer.find({});
  } catch {
    res.status(500).json({ message: err.message });
  }
  return res.status(200).json({ data: lawyer });
};
export const postlawyer = async (req, res) => {
  const { name, image, position, Dob, TermOfOffice } = req.body;
  const newlawyer = new Lawyer({
    name,
    image,
    position,
    Dob,
    TermOfOffice,
  });
  try {
    await newlawyer.save();
  } catch (err) {
    console.log(err);
  }
  res.status(200).json({ data: newlawyer });
};
