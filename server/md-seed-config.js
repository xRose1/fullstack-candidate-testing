import mongoose from "mongoose";
import Jobs from "./seeders/jobs.seeder";
import Items from "./seeders/items.seeder";

const mongoURL = process.env.MONGODB_URI || "mongodb://localhost/test";

/**
 * Seeders List
 * @type {Object}
 */
export const seedersList = {
  Items,
  Jobs,
};
/**
 * Connect to mongodb implementation
 * @return {Promise}
 */
export const connect = async () =>
  await mongoose.connect(mongoURL, { useNewUrlParser: true });
/**
 * Drop/Clear the database implementation
 * @return {Promise}
 */
export const dropdb = async () => mongoose.connection.db.dropDatabase();
