import JobController from '../controllers/job.controller';

const router = require("express").Router();

router.get("/", JobController.index);
router.get("/filter", JobController.getFilter);

export default router;
