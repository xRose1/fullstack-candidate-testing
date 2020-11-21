const footer = () => {
  return (
    <div className="w-full lg:flex">
      <div className="lg:w-2/4">
        <div className="font-bold">About us</div>
        <div className="mt-5">
          We are team of nurses, doctors, technologists and executives dedicated
          to help nurses find jobs that they love
          <div className="mt-5 mb-5">All copyrights reserved © 2020 - Health Explore</div>
        </div>
      </div>
      <div className="lg:w-1/5 lg:ml-6">
        <div className="font-bold">Sitemap</div>
        <div>
          <ul>
            <li className="mt-5 hover:underline"><a href="#">Nurses</a></li>
            <li className="mt-5 hover:underline"><a href="#">Employers</a></li>
            <li className="mt-5 hover:underline"><a href="#">Social Networking</a></li>
            <li className="mt-5 mb-5 hover:underline"><a href="#">Jobs</a></li>
          </ul>
        </div>
      </div>
      <div className="lg:w-1/5">
        <div className="font-bold">Privacy</div>
        <div>
          <ul>
            <li className="mt-5 hover:underline"><a href="#">Terms of use</a></li>
            <li className="mt-5 hover:underline"><a href="#">Privacy policy</a></li>
            <li className="mt-5 hover:underline"><a href="#">Cookie policy</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default footer;
