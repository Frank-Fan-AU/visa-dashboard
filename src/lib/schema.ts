import { z } from "zod";
export const formSchema = z.object({
  _id:z.string().optional(),
  ifSubmit:z.string({
    required_error: "ifSubmit is required",
  }),
  submitTime: z.string(),
  submitPlace:z.string(),
  ifGetVisa:z.string({
    required_error: "ifGetVisa is required",
  }),
  getVisaTime: z.string(),
  visaOfficer: z.string(),
  ifIncludedCouple:z.string({
    required_error: "ifSubmit is required",
  }),
  ifTogether:z.string({
    required_error: "ifIncludedCouple is required",
  }),
  major:z.string().min(1,{ message:"必填，模糊填写也可"}),
  majorType:z.string({
    required_error: "ifIncludedCouple is required",
  }),
  educationLevel:z.string({
    required_error: "ifIncludedCouple is required",
  }),
  schoolType:z.string({
    required_error: "ifIncludedCouple is required",
  }),
  ifDIY:z.string({
    required_error: "ifIncludedCouple is required",
  }),
  isUser:z.string({
    required_error: "ifSubmit is required",
  }),
  infoFrom:z.string().optional(),
  otherInfo:z.string().optional(),
  userId:z.string().optional(),
  userEmail:z.string().optional(),
})


// Define your Zod schema for validation
export const CommentSchema = z.object({
  _id: z.string().optional(),
  userAvatar: z.string().url(),
  username: z.string(),
  userId:z.string().optional(),
  content: z.string(),
  likes: z.number().nonnegative(),
  updateTime: z.preprocess((arg) => (typeof arg === 'string' || arg instanceof Date ? new Date(arg) : arg), z.date())
});

export const MessageSchema = z.object({
  _id: z.string().optional(),
  userId:z.string().optional(),
  userAvatar: z.string().url(),
  username: z.string(),
  content: z.string(),
  comments: z.array(CommentSchema),
  likes: z.number().nonnegative(),
  updateTime: z.preprocess((arg) => (typeof arg === 'string' || arg instanceof Date ? new Date(arg) : arg), z.date())
});
