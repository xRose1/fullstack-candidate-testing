import mongoose from "mongoose";

// Define the model
const itemSchema = new mongoose.Schema({
  required_skills: [String],
  county: {
    type: String,
  },
  zip: {
    type: Number,
  },
  location: {
    type: String,
  },
  nurse_patient_ratio: {
    type: String,
  },
  job_id: {
    type: Number,
  },
  type: {
    type: String,
  },
  work_schedule: {
    type: String,
  },
  hospital_id: {
    type: Number,
  },
  name: {
    type: String,
  },
  state: {
    type: String,
  },
  created: {
    type: String,
  },
  required_credentials: [String],
  department: [String],
  address: {
    type: String,
  },
  experience: {
    type: String,
  },
  city: {
    type: String,
  },
  description: {
    type: String,
  },
  job_title: {
    type: String,
  },
  hours: [Number],
  salary_range: [Number],
  job_type: {
    type: String,
  },
});

// Export the model
export default mongoose.model("Item", itemSchema);
