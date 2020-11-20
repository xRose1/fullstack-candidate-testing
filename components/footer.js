import React from "react";

const Footer =  () => {
  return (
    <div className="w-full mt-8 p-8 bg-white grid grid-cols-8 gap-4">
      <div className="col-span-4">
        <h1 className="font-bold mb-2">About US</h1>
        <h1 className="my-2">
          We are a team of nurses, doctors, technologists and executives dedicated to help nurses find jobs that they love.
        </h1>
        <h1 className="my-2">
          All copyrights reserved @ 2020 - Health Explore
        </h1>
      </div>
      <div className="col-span-2">
        <h1 className="font-bold mb-2">Sitemap</h1>
        <h1>
          Nureses<br/>
          Employers<br/>
          Social networking<br/>
          Jobs<br/>
        </h1>
      </div>
      <div className="col-span-2">
        <h1 className="font-bold mb-2">Privacy</h1>
        <h1>
          Terms of use<br/>
          Privacy policy<br/>
          Cookie policy<br/>
        </h1>
      </div>
    </div>
  )
}
export default Footer;
