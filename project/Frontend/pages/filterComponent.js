import React from "react";
import axios from "axios";
import Modal from "./modal";
import { Constants } from "../util/constants";

function FilterComponent({ title, filterRoute, showMore = false }) {
  let [filterData, setFilterData] = React.useState("");
  let [showModal, setShowModal] = React.useState(false);

  const fetchData = React.useCallback(() => {
    axios({
      method: "GET",
      url: `${Constants.WEB_SERVICE_URL}${filterRoute}`,
    })
      .then((response) => {
        setFilterData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  const renderFilterData = (filterData) => {
    if (!filterData) {
      return;
    }
    const jobDetailItems = filterData.map((filterItem) => {
      return (
        <div className="mt-5" key={filterItem.key}>
          <span>{filterItem.key}</span>
          <span className="pl-2 text-xs text-gray-400">{filterItem.doc_count}</span>
        </div>
      );
    });
    return jobDetailItems;
  };

  return (
    <div className="App mb-3 box-border p-4 border-4 border-solid bg-white appearance-none block py-3 px-4 leading-tight text-gray-700 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none">
      <div className="font-semibold">{title}</div>
      {renderFilterData(filterData)}
      {showMore && <div className="mt-5 text-blue-500" onClick={() => {setShowModal(!showModal)}}>Show more</div>}
      {showModal && <div>{<Modal department={filterData}/>}</div>}
    </div>
  );
}

export default FilterComponent;
