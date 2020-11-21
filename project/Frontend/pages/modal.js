import React from "react";
import axios from "axios";
import { Constants } from "../util/constants";

const Modal = ({ setShowModal }) => {
  let [department, setDepartmentData] = React.useState("");

  const fetchData = React.useCallback(() => {
    axios({
      method: "GET",
      url: `${Constants.WEB_SERVICE_URL}${Constants.WEB_SERVICE_ROUTES.ALL_DEPARTMENTS}`,
    })
      .then((response) => {
        setDepartmentData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  const renderDepartment = (department) => {
    if (!department) {
      return;
    }
    const departmentList = department.map(item => {
      return (
        <div className="mt-5 w-1/4" key={item.key}>
          {item.key} <span className="text-gray-400">{item.doc_count}</span>
      </div>
      )
    })
    return departmentList;
  }

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle h-full w-10/12 mx-12"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <div className="mt-2" onClick={()=>{setShowModal(false)}}>
                <span class="float-right relative bottom-auto"><svg role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="h-6 w-6 text-grey hover:text-grey-darkest"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"></path></svg></span>
                <p className="mt-5 my-4 pb-5 border-b font-bold">Department</p>
                </div>
                <div className="flex flex-wrap">
                  {renderDepartment(department)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
