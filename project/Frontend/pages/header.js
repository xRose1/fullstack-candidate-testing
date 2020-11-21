const header = () => {
  return (
    <div>
      <div className="p-4 shadow rounded bg-white">
        <ul className="flex">
          <li className="mr-10">
            <a
            className="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4 font-bold"
              href="#"
            >
              HEALTH EXPLORE
            </a>
          </li>
          <li className="mr-2">
            <a
            className="inline-block border border-white rounded hover:border-gray-200 text-black hover:bg-gray-200 py-2 px-4"
              href="#"
            >
              PROFILE
            </a>
          </li>
          <li className="mr-2">
            <a
            className="inline-block border border-white rounded hover:border-gray-200 text-black hover:bg-gray-200 py-2 px-4"
              href="#"
            >
              JOBS
            </a>
          </li>
          <li className="mr-2">
            <a
            className="inline-block border border-white rounded hover:border-gray-200 text-black hover:bg-gray-200 py-2 px-4"
              href="#"
            >
              PROFESSIONAL NETWORK
            </a>
          </li>
          <li className="mr-2">
            <a
            className="inline-block border border-white rounded hover:border-gray-200 text-black hover:bg-gray-200 py-2 px-4"
              href="#"
            >
              LOUNGE
            </a>
          </li>
          <li className="mr-24">
            <a className="inline-block py-2 px-4 text-black" href="#">
              SALARY
            </a>
          </li>
          <li className="mr-4 border-solid border-2 border-blue-500 rounded-md">
            <a className="inline-block py-2 px-4 text-blue-500" href="#">
              CREATE JOB
            </a>
          </li>
          <li>
            <div className="circle bg-blue-500 text-white rounded-full bg-white flex items-center justify-center">PR</div>
          </li>
          <li className="mr-2">
            <a className="inline-block py-2 px-4 text-black" href="#">
              LOGOUT
            </a>
          </li>
        </ul>
      </div>
      <div className="w-full mt-3 mb-4 md:mb-0 px-3">
        <input
          id="search-bs-class"
          className="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
          type="text"
          placeholder="Search for any job, title, keywords, or company"
        />
      </div>
    </div>
  );
};

export default header;
