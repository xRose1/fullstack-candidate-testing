import React, { useState } from "react";
import { Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";

const Job = (props) => {
  const { data } = props;
  const [expanded, setExpanded] = useState(false);

  const getAgo = (timestamp) => {
    const date = new Date(timestamp);
    const d = Math.floor((new Date().getTime() - date.getTime()) / 1000);

    const min = 60;
    const hour = min * 60;
    const day = hour * 24;
    const week = day * 7;

    if (d < min * 1) {
      return {
        value: `just before`,
        next: min - d,
      };
    } else if (d < hour) {
      const minutes = Math.floor(d / min);
      return `${minutes} minutes ago`;
    } else if (d < day) {
      const hours = Math.floor(d / hour);
      return `${hours} hour${hours > 1 ? `s` : ``} ago`;
    } else if (d < week) {
      const days = Math.floor(d / day);
      return `${days} day${days > 1 ? `s` : ``} ago`;
    } else {
      const weeks = Math.floor(d / week);
      return `${weeks} week${weeks > 1 ? `s` : ``} ago`;
    }
  };

  return (
    <div className="pl-2 pr-2">
      <Grid
        container
        className="border-t border-gray-300 border-solid mt-2 cursor-pointer position-relative"
        onClick={() => setExpanded(!expanded)}
      >
        <Grid item md={10}>
          <label className="font-bold text-sm mb-0 mt-2 d-block">
            {data.job_title}
          </label>
          <label className="text-sm">
            {`${data.job_type} | $${data.salary_range[0]} - $${data.salary_range[1]} an hour | ${data.city}`}
          </label>
        </Grid>
        <Grid item md={2} className="text-right pr-4">
          <label className="mt-4 text-sm">{getAgo(data.created)}</label>
        </Grid>
      </Grid>

      {expanded && (
        <div className="mt-4">
          <Grid container spacing={3}>
            <Grid item lg={10}>
              <Grid container spacing={3}>
                <Grid item md={4}>
                  <label className="font-bold text-sm">{"Department"}</label>
                </Grid>
                <Grid item md={8}>
                  <p className="text-sm">{data.department.join(",")}</p>
                </Grid>
                <Grid item md={4}>
                  <label className="font-bold text-sm">
                    {"Hours / shifts"}
                  </label>
                </Grid>
                <Grid item md={8}>
                  <p className="text-sm">
                    {`${data.hours[0]} hours / ${data.work_schedule}`}
                  </p>
                </Grid>
                <Grid item md={4}>
                  <label className="font-bold text-sm">{"Summary"}</label>
                </Grid>
                <Grid item md={8}>
                  <p className="text-sm">{data.description}</p>
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={2} className="pt-3 text-right">
              <Button
                variant="contained"
                color="primary"
                className="m-1 text-sm"
              >
                {"Job details"}
              </Button>
              <Button
                variant="outlined"
                color="primary"
                className="m-1 text-sm"
              >
                {"Save job"}
              </Button>
            </Grid>
          </Grid>
        </div>
      )}
    </div>
  );
};

Job.propTypes = {
  data: PropTypes.any,
};

export default Job;