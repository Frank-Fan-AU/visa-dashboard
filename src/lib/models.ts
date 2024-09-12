import mongoose from "mongoose";

const recordSchema = new mongoose.Schema({
  userId: { type: String },
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
const docSchema = new mongoose.Schema({
  categoryId: String,
  authorId: String,
  title: String,
  content: String,
});
const docCategoriesSchema = new mongoose.Schema({
  title: String,
  slug: String,
  img: String,
});
export const Record =
  mongoose.models?.Record || mongoose.model("Record", recordSchema);

export const Doc = mongoose.models?.Doc || mongoose.model("Doc", docSchema);
export const DocCategories =
  mongoose.models?.DocCategories ||
  mongoose.model("DocCategories", docCategoriesSchema);
