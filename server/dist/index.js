"use strict";

var _express = _interopRequireDefault(require("express"));

var _http = _interopRequireDefault(require("http"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _cors = _interopRequireDefault(require("cors"));

var _config = _interopRequireDefault(require("./config"));

var _job = _interopRequireDefault(require("./api/routes/job.router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();

_mongoose["default"].connect(_config["default"].mongoose.uri, {
  useNewUrlParser: true
})["catch"](function (err) {
  return console.error(err);
});

_mongoose["default"].Promise = global.Promise; // App Setup

app.use((0, _cors["default"])({
  origin: ["http://localhost:3000"]
}));
app.use((0, _morgan["default"])("dev"));
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.get("/", function (req, res) {
  return res.send("Welcome!");
});
app.use("/jobs", _job["default"]);
app.use(function (err, req, res, next) {
  console.log("Error:", err.message);
  res.status(422).json(err.message);
}); // Server Setup

var port = process.env.PORT || 8000;

_http["default"].createServer(app).listen(port, function () {
  console.log("\x1B[32m", "Server listening on: ".concat(port), "\x1B[0m");
});
//# sourceMappingURL=index.js.map