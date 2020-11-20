import mongoose from "mongoose";

const Schema = mongoose.Schema;
const jobSchema = new Schema({
  total_jobs_in_hospital: Number,
  name: String,
  job_title: String,
  items: [{
    type: Schema.Types.ObjectId,
    ref: 'Item'
  }]
});

module.exports = new mongoose.model('Job', jobSchema);

