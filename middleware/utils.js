import _ from "lodash";

/*
 * @params {request} extracted from request response, {setLocalhost} your localhost address
 * @return {object} objects of protocol, host and origin
 */
export function absoluteUrl(req, setLocalhost) {
  var protocol = "https:";
  var host = req
    ? req.headers["x-forwarded-host"] || req.headers["host"]
    : window.location.host;
  if (host.indexOf("localhost") > -1) {
    if (setLocalhost) host = setLocalhost;
    protocol = "http:";
  }
  return {
    protocol: protocol,
    host: host,
    origin: protocol + "//" + host,
    url: req,
  };
}

const filterJobsByKeyword = (arr, substr) => {
  return _.filter(
    arr,
    _.flow(
      _.identity,
      _.values,
      _.join,
      _.toLower,
      _.partialRight(_.includes, substr)
    )
  );
};

export function prepareFilteredJobsView(jobs, searchQuery, sortBy) {
  searchQuery = _.lowerCase(searchQuery) || "";

  var filteredJobsView = [];
  _.forEach(jobs, (hospital) => {
    var filteredItems = _.sortBy(
      filterJobsByKeyword(hospital.items, searchQuery),
      sortBy
    );
    filteredJobsView.push({
      ...hospital,
      total_jobs_in_hospital: filteredItems.length,
      items: filteredItems,
    });
  });

  return _.filter(filteredJobsView, (h) => h.total_jobs_in_hospital > 0);
}
