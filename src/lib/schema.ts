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
})