"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Define the model
var itemSchema = new _mongoose["default"].Schema({
  required_skills: [String],
  county: {
    type: String
  },
  zip: {
    type: Number
  },
  location: {
    type: String
  },
  nurse_patient_ratio: {
    type: String
  },
  job_id: {
    type: Number
  },
  type: {
    type: String
  },
  work_schedule: {
    type: String
  },
  hospital_id: {
    type: Number
  },
  name: {
    type: String
  },
  state: {
    type: String
  },
  created: {
    type: String
  },
  required_credentials: [String],
  department: [String],
  address: {
    type: String
  },
  experience: {
    type: String
  },
  city: {
    type: String
  },
  description: {
    type: String
  },
  job_title: {
    type: String
  },
  hours: [Number],
  salary_range: [Number],
  job_type: {
    type: String
  }
}); // Export the model

var _default = _mongoose["default"].model("Item", itemSchema);

exports["default"] = _default;
//# sourceMappingURL=item.model.js.map