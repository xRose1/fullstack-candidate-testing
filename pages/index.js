import React, { useState, useEffect } from "react";
import Head from "next/head";
import NavBar from "../components/navbar";
import FilterSection from "../components/filerSection";
import Hospital from "../components/hospital";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Grid from "@material-ui/core/Grid";
import Dialog from "@material-ui/core/Dialog";
import Card from "@material-ui/core/Card";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Filter from "../components/filter";

export default function Home() {
  const [jobs, setJobs] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [filters, setFilters] = useState({});
  const [filterDetails, setFilterDetails] = useState({
    title: "",
    filters: [],
  });
  const totalCount = jobs.reduce(
    (total, item) => total + item.total_jobs_in_hospital,
    0
  );

  const fetchData = async () => {
    const jobsResponse = await fetch("/api/jobs");
    setJobs(await jobsResponse.json());
    const filtersResponse = await fetch("/api/filters");
    setFilters(await filtersResponse.json());
  };

  useEffect(fetchData, []);

  const onShowMore = (data) => {
    setFilterDetails(data);
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <div className="bg-gray-200">
        <div className="w-100 pt-3">
          <Card className="bg-white mt-3 ml-3 mr-3 p-3">
            <FontAwesomeIcon icon={faSearch} className="w-4 h-4 d-inline" />
            <input
              type="text"
              className="d-inline ml-2"
              placeholder="Search for any job, title, keywords or company"
            />
          </Card>
          <div className="p-3">
            <Grid container spacing={3}>
              <Grid item md={3} className="d-none d-sm-block">
                {Object.keys(filters).map((key) => (
                  <FilterSection
                    key={key}
                    filters={filters[key]}
                    title={key.replace("_", " ").toUpperCase()}
                    showDetails={onShowMore}
                  />
                ))}
              </Grid>
              <Grid item md={9}>
                <Card className="mt-3 p-3">
                  <div className="mt-4 mb-3">
                    <label className="font-bold">{totalCount}</label>
                    <label className="ml-2">{"job postings"}</label>
                  </div>
                  {jobs.map((item) => (
                    <Hospital hospital={item} key={item.name} />
                  ))}
                </Card>
              </Grid>
            </Grid>
          </div>

          <Dialog
            open={openDialog}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            maxWidth={"lg"}
          >
            <DialogTitle id="alert-dialog-title">
              {filterDetails.title}
            </DialogTitle>
            <DialogContent>
              <div className="row">
                {filterDetails.filters.map((item) => (
                  <div className="col-md-3" key={item.key}>
                    <Filter item={item} />
                  </div>
                ))}
              </div>
            </DialogContent>
          </Dialog>
        </div>
        <footer className="p-5 bg-white">
          <Grid container spacing={3} className="p-3">
            <Grid item md={6}>
              <label className="text-lg font-bold mb-2 mt-2">
                {"About Us"}
              </label>
              <p className="text-sm mt-1 text-gray-700 d-block">
                {
                  "We are a team of nurses, doctors, technologies and executives dedicated to help nurses find jobs that they love"
                }
              </p>
              <p className="text-sm mt-1 text-gray-700 d-block">
                {"All copyrights © reserved 2020 - Health Explore"}
              </p>
            </Grid>
            <Grid item md={3}>
              <label className="text-lg font-bold mb-2 mt-2">{"Sitemap"}</label>
              <a href="/#" className="text-sm mt-1 text-gray-700 d-block">
                {"Nurses"}
              </a>
              <a href="/#" className="text-sm mt-1 text-gray-700 d-block">
                {"Employers"}
              </a>
              <a href="/#" className="text-sm mt-1 text-gray-700 d-block">
                {"Social networking"}
              </a>
              <a href="/#" className="text-sm mt-1 text-gray-700 d-block">
                {"Jobs"}
              </a>
            </Grid>
            <Grid item md={3}>
              <label className="text-lg font-bold mb-2 mt-2">{"Privacy"}</label>
              <a href="/#" className="text-sm mt-1 text-gray-700 d-block">
                {"Terms of use"}
              </a>
              <a href="/#" className="text-sm mt-1 text-gray-700 d-block">
                {"Privacy policy"}
              </a>
              <a href="/#" className="text-sm mt-1 text-gray-700 d-block">
                {"Cookie policy"}
              </a>
            </Grid>
          </Grid>
        </footer>
      </div>
    </>
  );
}
