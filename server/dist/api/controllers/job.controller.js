"use strict";

var _job = _interopRequireDefault(require("../models/job.model"));

var _item = _interopRequireDefault(require("../models/item.model"));

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

exports.index = function (req, res, next) {
  _job["default"].find().populate('items').exec().then(function (jobs) {
    if (jobs) {
      return res.status(200).send({
        success: true,
        message: 'Data fetched successfully!',
        jobs: jobs
      });
    } else {
      return res.status(404).send({
        success: false,
        message: 'Jobs not found!'
      });
    }
  });
};

exports.getFilter = function (req, res, next) {
  return res.status(200).send({
    success: true,
    message: 'Data fetched successfully!',
    filter: _constants.filter
  });
};
//# sourceMappingURL=job.controller.js.map