import path from "path";

if (process.env.NODE_ENV != "production") {
  require("dotenv").config({ path: path.resolve(__dirname, ".env") });
}

process.env.JWT_SECRET =
  "vIfwTsLXk0cazap7qsOA9xW8fYcGfOv56hmK5S8ADvYq6PnOUqR8BDwLT62KvyPc";

module.exports = {
  jwt_secret: process.env.JWT_SECRET || "unsafe_jwt_secret",
  mongoose: {
    uri: process.env.MONGODB_URI || "mongodb://localhost/test",
  },
};
