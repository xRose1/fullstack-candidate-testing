import { Seeder } from "mongoose-data-seed";
import Job from '../src/api/models/job.model';

class JobSeeder extends Seeder {
  async shouldRun() {
    return Job.countDocuments()
      .exec()
      .then((count) => count === 0);
  }

  async run() {
    return Job.create(data);
  }
}

const data = [
  {
    "total_jobs_in_hospital": 8,
    "name": "Mammoth Hospital",
    "job_title": "LPN Charge Nurse",
    "items": [
      "5fb7d2cbe009f527f405aa87",
      "5fb7d2cbe009f527f405aa88",
      "5fb7d2cbe009f527f405aa89",
      "5fb7d2cbe009f527f405aa8a",
      "5fb7d2cbe009f527f405aa8b",
      "5fb7d2cbe009f527f405aa8c",
      "5fb7d2cbe009f527f405aa8d",
      "5fb7d2cbe009f527f405aa8e",
    ]
  },
  {
    "total_jobs_in_hospital": 7,
    "name": "Fountain Valley Rgnl Hosp And Med Ctr - Euclid",
    "job_title": "Certified Nurse Anesthetist",
    "items": [
      "5fb7d2cbe009f527f405aa8f",
      "5fb7d2cbe009f527f405aa90",
      "5fb7d2cbe009f527f405aa91",
      "5fb7d2cbe009f527f405aa92",
      "5fb7d2cbe009f527f405aa93",
      "5fb7d2cbe009f527f405aa94",
      "5fb7d2cbe009f527f405aa95",
    ]
  },
  {
    "total_jobs_in_hospital": 6,
    "name": "Stanislaus Surgical Hospital",
    "job_title": "Plastic Surgery Nurse Practitioner",
    "items": [
      "5fb7d2cbe009f527f405aa96",
      "5fb7d2cbe009f527f405aa97",
      "5fb7d2cbe009f527f405aa98",
      "5fb7d2cbe009f527f405aa99",
      "5fb7d2cbe009f527f405aa9a",
      "5fb7d2cbe009f527f405aa9b",
    ]
  },
  {
    "total_jobs_in_hospital": 8,
    "name": "Eastside Medical Center",
    "job_title": "Ambulatory Pacu Nurse",
    "items": [
      "5fb7d2cbe009f527f405aa9c",
      "5fb7d2cbe009f527f405aa9d",
      "5fb7d2cbe009f527f405aa9e",
      "5fb7d2cbe009f527f405aa9f",
      "5fb7d2cbe009f527f405aaa0",
      "5fb7d2cbe009f527f405aaa1",
      "5fb7d2cbe009f527f405aaa2",
      "5fb7d2cbe009f527f405aaa3",
    ]
  },
  {
    "total_jobs_in_hospital": 7,
    "name": "Candler County Hospital",
    "job_title": "Psychiatric Nurse Practitioner",
    "items": [
      "5fb7d2cbe009f527f405aaa4",
      "5fb7d2cbe009f527f405aaa5",
      "5fb7d2cbe009f527f405aaa6",
      "5fb7d2cbe009f527f405aaa7",
      "5fb7d2cbe009f527f405aaa8",
      "5fb7d2cbe009f527f405aaa9",
      "5fb7d2cbe009f527f405aaaa",
    ]
  },
  {
    "total_jobs_in_hospital": 7,
    "name": "Jerold Phelps Community Hospital",
    "job_title": "Scrub Nurse",
    "items": [
      "5fb7d2cbe009f527f405aaab",
      "5fb7d2cbe009f527f405aaac",
      "5fb7d2cbe009f527f405aaad",
      "5fb7d2cbe009f527f405aaae",
      "5fb7d2cbe009f527f405aaaf",
      "5fb7d2cbe009f527f405aab0",
      "5fb7d2cbe009f527f405aab1",
    ]
  },
  {
    "total_jobs_in_hospital": 8,
    "name": "Porterville Developmental Center",
    "job_title": "Emergency Room Registered Nurse",
    "items": [
      "5fb7d2cbe009f527f405aab2",
      "5fb7d2cbe009f527f405aab3",
      "5fb7d2cbe009f527f405aab4",
      "5fb7d2cbe009f527f405aab5",
      "5fb7d2cbe009f527f405aab6",
      "5fb7d2cbe009f527f405aab7",
      "5fb7d2cbe009f527f405aab8",
      "5fb7d2cbe009f527f405aab9",
    ]
  },
  {
    "total_jobs_in_hospital": 9,
    "name": "Miller County Hospital",
    "job_title": "Legal Nurse Consultant",
    "items": [
      "5fb7d2cbe009f527f405aaba",
      "5fb7d2cbe009f527f405aabb",
      "5fb7d2cbe009f527f405aabc",
      "5fb7d2cbe009f527f405aabd",
      "5fb7d2cbe009f527f405aabe",
      "5fb7d2cbe009f527f405aabf",
      "5fb7d2cbe009f527f405aac0",
      "5fb7d2cbe009f527f405aac1",
      "5fb7d2cbe009f527f405aac2",
    ]
  },
  {
    "total_jobs_in_hospital": 5,
    "name": "Piedmont Rockdale Hospital",
    "job_title": "BSN Nurse",
    "items": [
      "5fb7d2cbe009f527f405aac3",
      "5fb7d2cbe009f527f405aac4",
      "5fb7d2cbe009f527f405aac5",
      "5fb7d2cbe009f527f405aac6",
      "5fb7d2cbe009f527f405aac7",
    ]
  },
  {
    "total_jobs_in_hospital": 2,
    "name": "Jefferson Hospital",
    "job_title": "Cardiovascular Nurse",
    "items": [
      "5fb7d2cbe009f527f405aac8",
      "5fb7d2cbe009f527f405aac9",
    ]
  },
  {
    "total_jobs_in_hospital": 4,
    "name": "Union General Hospital",
    "job_title": "Home Care Nurse",
    "items": [
      "5fb7d2cbe009f527f405aaca",
      "5fb7d2cbe009f527f405aacb",
      "5fb7d2cbe009f527f405aacc",
      "5fb7d2cbe009f527f405aacd",
    ]
  },
  {
    "total_jobs_in_hospital": 5,
    "name": "Tulane - Lakeside Hospital",
    "job_title": "LPN Primary Care",
    "items": [
      "5fb7d2cbe009f527f405aace",
      "5fb7d2cbe009f527f405aacf",
      "5fb7d2cbe009f527f405aad0",
      "5fb7d2cbe009f527f405aad1",
      "5fb7d2cbe009f527f405aad2",
    ]
  },
  {
    "total_jobs_in_hospital": 4,
    "name": "Warm Springs Medical Center",
    "job_title": "Head OR Nurse",
    "items": [
      "5fb7d2cbe009f527f405aad3",
      "5fb7d2cbe009f527f405aad4",
      "5fb7d2cbe009f527f405aad5",
      "5fb7d2cbe009f527f405aad6",
    ]
  },
  {
    "total_jobs_in_hospital": 6,
    "name": "St. James Behavioral Health Hospital",
    "job_title": "Public Health Nurse",
    "items": [
      "5fb7d2cbe009f527f405aad7",
      "5fb7d2cbe009f527f405aad8",
      "5fb7d2cbe009f527f405aad9",
      "5fb7d2cbe009f527f405aada",
      "5fb7d2cbe009f527f405aadb",
      "5fb7d2cbe009f527f405aadc",
    ]
  },
  {
    "total_jobs_in_hospital": 6,
    "name": "Tulane Medical Center",
    "job_title": "LPN RN Telemetry",
    "items": [
      "5fb7d2cbe009f527f405aadd",
      "5fb7d2cbe009f527f405aade",
      "5fb7d2cbe009f527f405aadf",
      "5fb7d2cbe009f527f405aae0",
      "5fb7d2cbe009f527f405aae1",
      "5fb7d2cbe009f527f405aae2",
    ]
  },
  {
    "total_jobs_in_hospital": 5,
    "name": "Franklin Foundation Hospital",
    "job_title": "Bone Marrow Transplant Nurse",
    "items": [
      "5fb7d2cbe009f527f405aae3",
      "5fb7d2cbe009f527f405aae4",
      "5fb7d2cbe009f527f405aae5",
      "5fb7d2cbe009f527f405aae6",
      "5fb7d2cbe009f527f405aae7",
    ]
  },
  {
    "total_jobs_in_hospital": 4,
    "name": "Physicians Medical Center",
    "job_title": "Anesthesiology Crna",
    "items": [
      "5fb7d2cbe009f527f405aae8",
      "5fb7d2cbe009f527f405aae9",
      "5fb7d2cbe009f527f405aaea",
      "5fb7d2cbe009f527f405aaeb",
    ]
  },
  {
    "total_jobs_in_hospital": 5,
    "name": "Indiana University Health Transplant",
    "job_title": "Obstetrics Nurse",
    "items": [
      "5fb7d2cbe009f527f405aaec",
      "5fb7d2cbe009f527f405aaed",
      "5fb7d2cbe009f527f405aaee",
      "5fb7d2cbe009f527f405aaef",
      "5fb7d2cbe009f527f405aaf0",
    ]
  },
  {
    "total_jobs_in_hospital": 6,
    "name": "Abrom Kaplan Memorial Hospital",
    "job_title": "Burn Unit RN",
    "items": [
      "5fb7d2cbe009f527f405aaf1",
      "5fb7d2cbe009f527f405aaf2",
      "5fb7d2cbe009f527f405aaf3",
      "5fb7d2cbe009f527f405aaf4",
      "5fb7d2cbe009f527f405aaf5",
      "5fb7d2cbe009f527f405aaf6",
    ]
  },
  {
    "total_jobs_in_hospital": 8,
    "name": "St. James Parish Hospital",
    "job_title": "Assistant Nurse Manager",
    "items": [
      "5fb7d2cbe009f527f405aaf6",
      "5fb7d2cbe009f527f405aaf7",
      "5fb7d2cbe009f527f405aaf8",
      "5fb7d2cbe009f527f405aaf9",
      "5fb7d2cbe009f527f405aafa",
      "5fb7d2cbe009f527f405aafb",
      "5fb7d2cbe009f527f405aafc",
      "5fb7d2cbe009f527f405aafd",
    ]
  }
];

export default JobSeeder;