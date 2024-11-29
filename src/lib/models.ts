import mongoose, { Schema, model, models } from 'mongoose';

const recordSchema = new mongoose.Schema({
  userId: { type: String },
  userEmail: { type: String },
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
  otherInfo: { type: String }
});

export const Record =
  mongoose.models?.Record || mongoose.model("Record", recordSchema);


// Define Mongoose schema for MongoDB
const mongooseMessageSchema = new Schema({
  userAvatar: { type: String, required: true },
  username: { type: String, required: true },
  userId: { type: String, required: true },
  content: { type: String, required: true },
  comments: {
    type: [
      {
        userAvatar: { type: String, required: true },
        username: { type: String, required: true },
        userId: { type: String, required: true },
        content: { type: String, required: true },
        likes: { type: Number, default: 0 },
        updateTime: { type: Date, default: Date.now },
      },
    ],
    default: [],
  },
  likes: { type: Number, default: 0 },
  updateTime: { type: Date, default: Date.now }
});

export const Message = models.Message || model('Message', mongooseMessageSchema);