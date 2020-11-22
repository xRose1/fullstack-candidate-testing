import _ from "lodash";
import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import NumberFormat from "react-number-format";
import Modal from "react-modal";

Modal.setAppElement("#__next");

const customStyles = {
  content: {
    inset: "100px",
    height: "auto",
    padding: "0px",
  },
};

const useCategoryFilter = (categoryName) => {
  const jobsPerCategory = useSelector((state) => {
    return _.chain(state.filteredJobs)
      .flatMap((job) => {
        console.log(job);
        return _.isString(job.items[0][categoryName])
          ? job.items
          : _.flatMap(job.items, (job2) =>
              _.toArray(
                _.forEach(job2[categoryName], (value) => {
                  var clone = _.clone(job2);
                  clone[categoryName] = value;
                  return clone;
                })
              )
            );
      })
      .groupBy((x) =>
        _.isObject(x)
          ? x.hasOwnProperty(categoryName)
            ? x[categoryName]
            : x
          : x
      )
      .map((value, key) => {
        return { key: key, doc_count: value.length };
      })
      .orderBy((x) => x.doc_count, "desc")
      .value();
  }, shallowEqual);

  return {
    jobsPerCategory,
  };
};

const CategoryFilter = (props) => {
  const { title, categoryName, maxCategories = 10 } = props;

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const openModal = () => {
    setIsOpen(true);
  };

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    //subtitle.style.color = "#f00";
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const { jobsPerCategory } = useCategoryFilter(categoryName);

  const renderCategories = (categories) => {
    return _.take(categories, maxCategories).map((category) => (
      <div class="flex items-center px-3 pb-2" key={category.key}>
        <div class="font-light text-sm">{category.key}</div>
        <div class="flex-1 text-xs pl-2">
          <NumberFormat
            value={category.doc_count}
            displayType={"text"}
            thousandSeparator={true}
            renderText={(value) => (
              <div class="uppercase text-gray-600 pt-1 text-xs">{value}</div>
            )}
          />
        </div>
      </div>
    ));
  };

  const renderNoData = () => {
    return (
      <div class="w-full flex items-center justify-start p-4 bg-white dark:bg-grey-800 text-blue-500 shadow p-4">
        <div class="flex-shrink"></div>
        <div class="flex-grow text-center">There are no categories.</div>
      </div>
    );
  };

  return (
    <div class="bg-white mb-5">
      <div class="flex items-baseline px-3 pb-1 pt-3 font-semibold">
        <div class="flex-1 text-sm uppercase">{title}</div>
      </div>
      <div class="pt-2">
        {jobsPerCategory && jobsPerCategory.length
          ? renderCategories(jobsPerCategory)
          : renderNoData()}
        {maxCategories < jobsPerCategory.length && (
          <>
            <div class="flex items-center px-3 pb-2">
              <div class="flex-1 text-sm">
                <a href="#" onClick={openModal}>
                  Show more
                </a>
              </div>
            </div>

            <Modal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              contentLabel="Example Modal"
              style={customStyles}
            >
              <div class="modal-content h-auto">
                <div class="modal-header border-b-1 border-b p-5">
                  <h3 class="text-xl font-semibold inline">{categoryName}</h3>
                  <button
                    class="modal-close btn btn-transparent float-right"
                    onClick={closeModal}
                  >
                    <svg
                      stroke="currentColor"
                      fill="none"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      size="18"
                      class="stroke-current"
                      height="18"
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </div>

                <div class="max-w-screen-xl mx-auto px-8">
                  <div class="-mx-4 flex flex-wrap">
                    {_.map(jobsPerCategory, (category) => (
                      <div class="w-full p-1 sm:w-1/4" key={category.key}>
                        <div class="">
                          <span class="font-light text-sm">{category.key}</span>
                          <span class="flex-1 text-xs pl-2">
                            <NumberFormat
                              value={category.doc_count}
                              displayType={"text"}
                              thousandSeparator={true}
                              renderText={(value) => (
                                <span class="text-gray-600 pt-1 text-xs">
                                  {value}
                                </span>
                              )}
                            />
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Modal>
          </>
        )}
      </div>
    </div>
  );
};

export default CategoryFilter;
