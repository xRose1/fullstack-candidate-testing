"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema;
var jobSchema = new Schema({
  total_jobs_in_hospital: Number,
  name: String,
  job_title: String,
  items: [{
    type: Schema.Types.ObjectId,
    ref: 'Item'
  }]
});
module.exports = new _mongoose["default"].model('Job', jobSchema);
//# sourceMappingURL=job.model.js.map