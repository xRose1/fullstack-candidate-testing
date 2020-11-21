import React from "react";
import axios from "axios";
import { Constants } from "../util/constants";
import JobDescription from "./jobDescription";

const JobItems = ({ name }) => {
  let [items, setJobItems] = React.useState([]);
  let [jobDescriptionToggle, setJobDescriptionToggle] = React.useState({});

  const fetchData = React.useCallback(() => {
    axios({
      method: "GET",
      url: `${Constants.WEB_SERVICE_URL}${Constants.WEB_SERVICE_ROUTES.JOB_ITEMS}`,
      params: { jobName: name },
    })
      .then((response) => {
        setJobItems(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  const jobDetailItems = () => {
    if (!items) {
      return;
    }
    const renderJobItems = items.map((item, index) => {
      return (
        <li className='mt-5 my-4 pb-1 border-b' onClick={(event) => { event.stopPropagation(); setJobDescriptionToggle({ ...jobDescriptionToggle, [item.job_id]: !jobDescriptionToggle[item.job_id] })}}>
          <div>
            <div className="font-bold">{item.job_title}</div>
            <div className="float-right mt-1">3 weaks ago</div>
          </div>
          <div className="pt-1 bottom-b pb-4">
            {item.job_type} | {item.salary_range[0]} - {item.salary_range[1]} an
            hour | {item.city}
          </div>
          {jobDescriptionToggle[item.job_id] && <JobDescription name={name} jobId={item.job_id}/>}
        </li>
      );
    });
    return renderJobItems;
  };

  return <div>{jobDetailItems(items)}</div>;
};

export default JobItems;