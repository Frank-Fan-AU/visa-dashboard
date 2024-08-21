import { z } from "zod";
export const formSchema = z.object({
    submitTime: z.string().optional(),
    endTime: z.string().optional(),
    ifIncludedCouple: z.string({
      required_error: "ifIncludedCouple is required",
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
    educationType:z.string({
      required_error: "ifIncludedCouple is required",
    }),
    submitPlace:z.string({
      required_error: "ifIncludedCouple is required",
    }),
    ifDIY:z.string({
      required_error: "ifIncludedCouple is required",
    }),
    infoFrom:z.string().optional(),
  });