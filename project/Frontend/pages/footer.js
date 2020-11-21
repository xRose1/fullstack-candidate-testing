const footer = () => {
  return (
    <div className="w-full flex">
      <div className="w-2/4">
        <div className="font-bold">About us</div>
        <div className="mt-5">
          We are team of nurses, doctors, technologists and executives dedicated
          to help nurses find jobs that they love
          <div className="mt-5">All copyrights reserved © 2020 - Health Explore</div>
        </div>
      </div>
      <div className="w-1/5 ml-6">
        <div className="font-bold">Sitemap</div>
        <div>
          <ul>
            <li className="mt-5">Nurses</li>
            <li className="mt-5">Employers</li>
            <li className="mt-5">Social Networking</li>
            <li className="mt-5">Jobs</li>
          </ul>
        </div>
      </div>
      <div className="w-1/5">
        <div className="font-bold">Privacy</div>
        <div>
          <ul>
            <li className="mt-5">Terms of use</li>
            <li className="mt-5">Privacy policy</li>
            <li className="mt-5">Cookie policy</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default footer;
