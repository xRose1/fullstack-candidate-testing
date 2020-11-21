import React from "react";
import axios from "axios";
import { Constants } from "../util/constants";

const JobDescription = ({ name, jobId }) => {
  let [jobDescription, setJobDescription] = React.useState({});
  const fetchData = React.useCallback(() => {
    axios({
      method: "GET",
      url: `${Constants.WEB_SERVICE_URL}${Constants.WEB_SERVICE_ROUTES.JOB_DESCRIPTION}`,
      params: { jobName: name, jobId },
    })
      .then((response) => {
        setJobDescription(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  const renderJobDescription = (jobDescription) => {
    const department = jobDescription.department;
    if (!jobDescription || !department) {
      return;
    }
    return (
      <div>
        <div className="w-full lg:flex pb-2">
          <div className="lg:w-1/3 font-bold">Department:</div>
          <div className="lg:w-1/3">{department.join()}</div>
        </div>
        <div className="w-full lg:flex pb-2">
          <div className="lg:w-1/3 font-bold">Hours/ shifts:</div>
          <div className="lg:w-1/3">
            {jobDescription.hours} / {jobDescription.work_schedule}
          </div>
        </div>
        <div className="w-full lg:flex pb-2">
          <div className="lg:w-1/3 font-bold">Summary:</div>
          <div className="lg:w-1/3">{jobDescription.description}</div>
          <div className="lg:w-1/3 lg:text-right">
            <div className="lg:w-full mr-5 inline-block">
              <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
                Job details
              </button>
            </div>
            <div className="lg:w-full lg:pl-6 inline-block">
              <button className="mt-2 bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white py-2 px-2 border border-blue-500 hover:border-transparent rounded">
                Save job
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return <div>{renderJobDescription(jobDescription)}</div>;
};

export default JobDescription;
