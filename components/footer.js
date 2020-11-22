import React from "react";

export default function Footer() {

  return (
    <div class="w-full bg-white">
      <div class="flex flex-wrap -mx-2 p-6 font-thin">
        <div class="w-full lg:w-1/2 px-2">
          <div class="mt-6 text-xl font-semibold">About us</div>
          <p class="">We are a team of nurses, doctors, technologist and executices dedicated to help nurses find jobs that they love.</p>
          <p class="pt-2">All copyrights reserved &copy; {(new Date().getFullYear())} - Health Explore</p>
        </div>

        <div class="w-full md:w-1/2 lg:w-1/4 px-2 mb-4">
          <div class="mt-6 text-xl font-semibold">Sitemap</div>
            <ul class="">
              <li><a href="#" class="block rounded-md text-base hover:text-white hover:bg-gray-700">Nurses</a></li>
              <li><a href="#" class="block rounded-md text-base hover:text-white hover:bg-gray-700">Employers</a></li>
              <li><a href="#" class="block rounded-md text-base hover:text-white hover:bg-gray-700">Social networking</a></li>
              <li><a href="#" class="block rounded-md text-base hover:text-white hover:bg-gray-700">Jobs</a></li>
            </ul>
        </div>

        <div class="w-full md:w-1/2 lg:w-1/4 px-2 mb-4">
          <div class="mt-6 text-xl font-semibold">Privacy</div>
          <ul class="">
            <li><a href="#" class="block rounded-md text-base hover:text-white hover:bg-gray-700">Terms of use</a></li>
            <li><a href="#" class="block rounded-md text-base hover:text-white hover:bg-gray-700">Privacy policy</a></li>
            <li><a href="#" class="block rounded-md text-base hover:text-white hover:bg-gray-700">Cookie policy</a></li>
          </ul>
        </div>
        
      </div>

    </div>
  );
}
