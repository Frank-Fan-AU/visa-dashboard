import mongoose from "mongoose";

const recordSchema = new mongoose.Schema({
  submitTime: { type: String,  },
  endTime: { type: String, },
  ifIncludedCouple: { type: String, },
  ifTogether: { type: String,  },
  major: { type: String,  },
  majorType: { type: String,  },
  educationLevel: { type: String,  },
  educationType: { type: String, },
  submitPlace: { type: String,  },
  ifDIY: { type: String,  },
  infoFrom: { type: String, },
});
export const Record = mongoose.models?.Record || mongoose.model("Record", recordSchema);