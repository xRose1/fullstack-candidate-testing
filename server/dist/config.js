"use strict";

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

if (process.env.NODE_ENV != "production") {
  require("dotenv").config({
    path: _path["default"].resolve(__dirname, ".env")
  });
}

process.env.JWT_SECRET = "vIfwTsLXk0cazap7qsOA9xW8fYcGfOv56hmK5S8ADvYq6PnOUqR8BDwLT62KvyPc";
module.exports = {
  jwt_secret: process.env.JWT_SECRET || "unsafe_jwt_secret",
  mongoose: {
    uri: process.env.MONGODB_URI || "mongodb://localhost/test"
  }
};
//# sourceMappingURL=config.js.map