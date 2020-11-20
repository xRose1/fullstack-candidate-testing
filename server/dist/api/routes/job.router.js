"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _job = _interopRequireDefault(require("../controllers/job.controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = require("express").Router();

router.get("/", _job["default"].index);
router.get("/filter", _job["default"].getFilter);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=job.router.js.map