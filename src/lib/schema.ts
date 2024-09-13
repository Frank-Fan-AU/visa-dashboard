import { z } from "zod";
export const newFormSchema = z.object({
  ifSubmit:z.string({
    required_error: "ifSubmit is required",
  }),
  submitTime: z.string().optional(),
  submitPlace:z.string().optional(),
  ifGetVisa:z.string({
    required_error: "ifGetVisa is required",
  }),
  getVisaTime: z.string().optional(),
  visaOfficer: z.string().optional(),
  ifIncludedCouple:z.string({
    required_error: "ifSubmit is required",
  }),
  ifTogether:z.string({
    required_error: "ifIncludedCouple is required",
  }),
  major:z.string().optional(),
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