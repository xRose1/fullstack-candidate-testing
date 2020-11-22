import React from "react";
import { useSelector, useDispatch } from "react-redux";

const useSearchBar = () => {
  const dispatch = useDispatch();

  const searchJobKeywords = (e) =>
    dispatch({
      type: "jobs/searchKeyword",
      searchQuery: e.target.value,
    });

  return {
    searchJobKeywords,
  };
};

const SearchBar = () => {
  const { searchJobKeywords } = useSearchBar();
  return (
    <div class="border-solid border-1 border-white-242 flex items-center">
      <div class="flex-1 flex relative text-gray-600 focus-within:text-gray-400">
        <span class="absolute inset-y-0 left-0 sm:left-8 flex items-center pl-2">
          <button
            type="submit"
            class="p-1 focus:outline-none focus:shadow-outline"
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              class="w-6 h-6"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
        </span>
        <input
          type="search"
          onChange={searchJobKeywords}
          name="q"
          class="flex flex-1 py-6 pl-10 sm:pl-20 text-sm text-black"
          placeholder="Search for any job, title, keywords or company"
          autoComplete="off"
        />
      </div>
    </div>
  );
};

export default SearchBar;