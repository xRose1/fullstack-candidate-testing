import _ from "lodash";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import NumberFormat from "react-number-format";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const useJobListing = () => {
  const currentJobs = useSelector((state) => {
    return _.chain(state.filteredJobs).value();
  });

  const totalJobs = useSelector((state) =>
    _.chain(state.filteredJobs)
      .flatMap((job) => job.items)
      .size()
      .value()
  );

  const dispatch = useDispatch();

  const sortByLocation = () =>
    dispatch({
      type: "jobs/sortBy",
      orderBy: "city",
    });

  const sortByRole = () =>
    dispatch({
      type: "jobs/sortBy",
      orderBy: "type",
    });

  const sortByDepartment = () =>
    dispatch({
      type: "jobs/sortBy",
      orderBy: "department",
    });

  const sortByEducation = () =>
    dispatch({
      type: "jobs/sortBy",
      orderBy: "required_skills",
    });

  const sortByExperience = () =>
    dispatch({
      type: "jobs/sortBy",
      orderBy: "experience",
    });

  return {
    currentJobs,
    totalJobs,
    sortByLocation,
    sortByRole,
    sortByDepartment,
    sortByEducation,
    sortByExperience,
  };
};

const JobListing = () => {
  const {
    currentJobs,
    totalJobs,
    sortByLocation,
    sortByRole,
    sortByDepartment,
    sortByEducation,
    sortByExperience,
  } = useJobListing();

  const renderJobDetails = (job) => {
    return (
      <table class="w-full table-auto mb-10 text-sm text-left">
        <tbody>
          <tr>
            <td class="pr-3 py-2 whitespace-no-wrap font-bold tracking-wider">
              Department
            </td>
            <td class="px-3 py-2">
              {_.chain(job.department).values().join(", ").value()}
            </td>
            <td rowSpan="3" class="pl-3 py-2 whitespace-no-wrap text-right">
              <div class="flex flex-col ...">
                <div class="pb-2">
                  <button class="h-10 px-4 text-xs text-white border bg-blue-clipboard border-blue-clipboard rounded-lg focus:shadow-outline">
                    Job Details
                  </button>
                </div>
                <div>
                  <button class="h-10 px-4 text-xs text-blue-clipboard border border-blue-clipboard rounded-lg focus:shadow-outline">
                    Save Job
                  </button>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td class="pr-3 py-2 whitespace-no-wrap font-bold tracking-wider">
              Hours / shifts
            </td>
            <td class="px-3 py-2">
              {job.hours[0]} hours / {job.work_schedule}
            </td>
          </tr>
          <tr>
            <td class="pr-3 py-2 whitespace-no-wrap font-bold tracking-wider">
              Summary
            </td>
            <td class="px-3 py-2">{job.description}</td>
          </tr>
        </tbody>
      </table>
    );
  };

  const renderJobs = (jobs) => {
    return _.map(jobs, (job) => (
      <Accordion allowZeroExpanded>
        <AccordionItem key={job.job_id}>
          <AccordionItemHeading>
            <AccordionItemButton>
              <hr />
              <div class="p-2">
                <div class="flex flex-row items-center justify-between mb-1">
                  <div class="flex flex-col">
                    <span class="text-black text-small font-bold pb-1">
                      {job.job_title}
                    </span>
                    <span class="text-grey-500 pt-1 text-xs">
                      {job.job_type} |{" "}
                      <NumberFormat
                        prefix="$"
                        value={job.salary_range[0]}
                        displayType={"text"}
                        dol
                        thousandSeparator={true}
                        renderText={(value) => value}
                      />{" "}
                      -{" "}
                      <NumberFormat
                        prefix="$"
                        value={job.salary_range[1]}
                        displayType={"text"}
                        thousandSeparator={true}
                        renderText={(value) => value}
                      />{" "}
                      an hour | {job.city}
                    </span>
                  </div>
                  <div class="lowercase font-light text-sm flex flex-row items-center justify-start whitespace-no-wrap">
                    <div class="flex flex-row items-center justify-start text-black">
                      <span className="text-grey-500 pt-1 text-xs">
                        {moment(
                          job.created,
                          "YYYY-MM-DDTHH:mm:ss.zz"
                        ).fromNow()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <div class="p-2">{renderJobDetails(job)}</div>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    ));
  };

  const renderHospitalJobs = (currentJobs) => {
    console.log(`rendering currentJobs`);
    return (
      <Accordion allowZeroExpanded>
        {_.map(currentJobs, (hospital) => (
          <AccordionItem key={hospital.name}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div class="flex items-start justify-start p-2 space-x-4">
                  <div class="flex items-start justify-start">
                    <span class="h-6 w-6 bg-gray-300 text-white p-4 flex items-center justify-center rounded-md text-lg font-display font-bold uppercase">
                      {hospital.name.substring(0, 2)}
                    </span>
                  </div>
                  <div class="flex flex-col w-full self-center">
                    <div class="text-sm">
                      {hospital.total_jobs_in_hospital} jobs for {hospital.name}
                    </div>
                  </div>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              {renderJobs(hospital.items)}
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    );
  };

  const renderNoData = () => {
    return (
      <div class="w-full flex items-center justify-start p-4 bg-white dark:bg-grey-800 text-blue-500 shadow p-4">
        <div class="flex-shrink"></div>
        <div class="flex-grow text-center">
          There are no jobs available at this time.
        </div>
      </div>
    );
  };

  return (
    <>
      <div class="flex flex-row items-center justify-between mb-10">
        <div class="flex flex-col">
          <div class="text-sm font-light text-grey-500">
            <NumberFormat
              value={totalJobs}
              displayType={"text"}
              thousandSeparator={true}
              renderText={(value) => <span class="font-bold">{value}</span>}
            />{" "}
            job postings
          </div>
        </div>
        <div class="hidden sm:block text-xs tracking-wider flex flex-row items-center justify-start whitespace-no-wrap">
          <div class="flex flex-row items-center justify-start text-black">
            <ol class="list-none flex flex-row items-center justify-start">
              <li class="mr-2 flex items-center text-gray-400">Sort By</li>
              <li class="flex items-center">
                <a onClick={sortByLocation} class="mr-2" href="#">
                  Location
                </a>
              </li>
              <li class="flex items-center">
                <a onClick={sortByRole} class="mr-2" href="#">
                  Role
                </a>
              </li>
              <li class="flex items-center">
                <a onClick={sortByDepartment} class="mr-2" href="#">
                  Department
                </a>
              </li>
              <li class="flex items-center">
                <a onClick={sortByEducation} class="mr-2" href="#">
                  Education
                </a>
              </li>
              <li class="flex items-center">
                <a onClick={sortByExperience} class="mr-2" href="#">
                  Experience
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
      {currentJobs && currentJobs.length
        ? renderHospitalJobs(currentJobs)
        : renderNoData()}
    </>
  );
};

export default JobListing;
