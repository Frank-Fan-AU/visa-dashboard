import mongoose from "mongoose";

const recordSchema = new mongoose.Schema({
  ifSubmit: { type: String },
  submitTime: { type: String },
  submitPlace: { type: String },
  ifGetVisa: { type: String },
  getVisaTime: { type: String },
  visaOfficer: { type: String },
  ifIncludedCouple: { type: String },
  ifTogether: { type: String },
  major: { type: String },
  majorType: { type: String },
  educationLevel: { type: String },
  schoolType: { type: String },
  ifDIY: { type: String },
  isUser: { type: String },
  infoFrom: { type: String },
});
export const Record =
  mongoose.models?.Record || mongoose.model("Record", recordSchema);
