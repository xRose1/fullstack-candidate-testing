import _ from "lodash";
import { useSelector, shallowEqual } from "react-redux";

/* utils */
import { absoluteUrl } from '../middleware/utils';

import { initializeStore } from "../store";

import Nav from "../components/nav";

import Searchbar from "../components/searchbar";
import JobListing from "../components/jobListing";
import CategoryFilter from "../components/categoryFilter";
import Footer from "../components/footer";

const useJobStatistics = () => {
  const totalJobs = useSelector((state) =>
    _.chain(state.filteredJobs)
      .flatMap((job) => job.items)
      .size()
      .value()
  );

  return { totalJobs };
};

const IndexPage = (props) => {
  const { totalJobs } = useJobStatistics();
  return (
    <div>
      <Nav />
      <main>
        <div class="max-w-7xl mx-auto pb-6 sm:px-3 sm:py-5 lg:px-5">
          <div class="sm:px-0">
            <div class="flex flex-col leading-none text-black antialiased">
              <Searchbar />
              <div class="flex-1 flex bg-gray-100">
                <div class="hidden sm:block w-80 pt-6">
                  <CategoryFilter title="Job Type" categoryName="job_type" />
                  <CategoryFilter
                    title="Department"
                    categoryName="department"
                  />
                  <CategoryFilter
                    title="Work Schedule"
                    categoryName="work_schedule"
                  />
                  <CategoryFilter
                    title="Experience"
                    categoryName="experience"
                  />
                </div>
                <div class="flex-1 h-full pt-6 px-4 overflow-scroll">
                  <div class="w-full mb-4 bg-white py-6">
                    <div class="p-5">
                      <JobListing />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

/* getServerSideProps */
export async function getServerSideProps(context) {
  const reduxStore = initializeStore();
  const { dispatch } = reduxStore;

  const { req } = context;
  const { origin } = absoluteUrl(req);

  const baseApiUrl = `${origin}/api`;

  const jobsApi = await fetch(`${baseApiUrl}/jobs`);
  const jobs = await jobsApi.json();


  dispatch({
    type: "jobs/loaded",
    jobs: jobs,
    lastUpdate: Date.now(),
  });

  return { props: { initialReduxState: reduxStore.getState() } };
}

export default IndexPage;
