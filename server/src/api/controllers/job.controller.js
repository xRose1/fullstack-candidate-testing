import Job from '../models/job.model';
import Item from '../models/item.model';
import {filter} from '../constants';

exports.index = (req, res, next) => {
  Job.find()
    .populate('items')
    .exec()
    .then((jobs) => {
      if (jobs) {
        return res.status(200).send({
          success: true,
          message: 'Data fetched successfully!',
          jobs: jobs,
        });
      } else {
        return res.status(404).send({
          success: false,
          message: 'Jobs not found!',
        });
      }
    })
};

exports.getFilter = (req, res, next) => {
  return res.status(200).send({
    success: true,
    message: 'Data fetched successfully!',
    filter: filter,
  });
}