import React from "react";
import axios from "axios";
import JobItems from "./jobItems";
import { Constants } from "../util/constants";

const jobComponent = () => {
  let [jobs, setJobsData] = React.useState("");
  let [jobItemsToggle, setJobItemsToggle] = React.useState({});

  const fetchData = React.useCallback(() => {
    axios({
      method: "GET",
      url: `${Constants.WEB_SERVICE_URL}${Constants.WEB_SERVICE_ROUTES.JOBS}`,
    })
      .then((response) => {
        setJobsData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  const jobTitle = (jobs) => {
    if (!jobs) {
      return;
    }
    const renderJobs = jobs.map((data) => {
      let liClassName = "my-4 pb-1 flex";
      if(jobItemsToggle[data.name]) {
        liClassName = "my-4 pb-3 border-b flex";
      }
      return (
        <div
          key={data.name + data.total_jobs_in_hospital}
          onClick={() =>
            setJobItemsToggle({
              ...jobItemsToggle,
              [data.name]: !jobItemsToggle[data.name],
            })
          }
        >
          <li className={liClassName}>
            <div className="circle w-1/2 bg-gray-500 text-white rounded bg-white flex items-center justify-center">
              {((data.name).slice(0,2)).toUpperCase()}
            </div>
            <div className="lg:w-1/2 ml-5 pt-2">
              {data.total_jobs_in_hospital} for {data.name}
            </div>
          </li>
          {jobItemsToggle[data.name] && <JobItems name={data.name} />}
        </div>
      );
    });
    return renderJobs;
  };

  return (
    <div>
      <div className="flex p-1 pt-5">
        <div className="lg:mr-40 lg:w-1/4">7,753 job postings</div>
        <div className="flex hidden lg:block">
          <ul className="flex">
          <li className="text-gray-400 mr-5">Sort by</li>
            <li className="mr-5">Location</li>
            <li className="mr-5">Role</li>
            <li className="mr-5">Department</li>
            <li className="mr-5">Education</li>
            <li>Experience</li>
          </ul>
        </div>
      </div>
      <div className="mt-12">
        <ul>{jobTitle(jobs)}</ul>
      </div>
    </div>
  );
};

export default jobComponent;
