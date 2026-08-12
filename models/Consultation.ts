import mongoose, { Schema, Document } from "mongoose";

export interface IConsultation extends Document {
  refId: string;
  name: string;
  organization: string;
  designation: string;
  email: string;
  phone: string;
  areaOfInterest: string;
  requirement: string;
  status: "new" | "contacted" | "scheduled" | "proposal_sent" | "won" | "lost" | "archived";
  source: "website" | "linkedin" | "referral" | "other";
  internalNotes?: string;
  createdAt: Date;
  updatedAt: Date;
}

let counter = 0;

const ConsultationSchema: Schema = new Schema(
  {
    refId: { type: String, unique: true },
    name: { type: String, required: true },
    organization: { type: String, required: true },
    designation: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    areaOfInterest: { type: String, required: true },
    requirement: { type: String, required: true },
    status: {
      type: String,
      enum: ["new", "contacted", "scheduled", "proposal_sent", "won", "lost", "archived"],
      default: "new",
    },
    source: {
      type: String,
      enum: ["website", "linkedin", "referral", "other"],
      default: "website",
    },
    internalNotes: { type: String },
  },
  { timestamps: true }
);

// Auto-generate reference ID before saving
ConsultationSchema.pre("save", async function () {
  if (!this.refId) {
    const year = new Date().getFullYear();
    const count = await mongoose.model("Consultation").countDocuments();
    this.refId = `CONS-${year}-${String(count + 1).padStart(4, "0")}`;
  }
});

export default mongoose.models.Consultation ||
  mongoose.model<IConsultation>("Consultation", ConsultationSchema);
