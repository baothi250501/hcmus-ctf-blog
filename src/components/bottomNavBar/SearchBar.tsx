// components/SearchBar.tsx

import React, { useState } from 'react';

const SearchBar: React.FC = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <div className="bg-gray-200 p-4">
      <div className="flex items-center justify-between">
        <div className="flex w-full items-center">
          <input
            type="text"
            placeholder="Tìm kiếm..."
            className="flex-grow rounded-l border px-2 py-1 focus:border-blue-500 focus:outline-none"
          />
          <button
            className="px-2 text-gray-600 hover:text-[#1C6758]"
            onClick={toggleFilter}
          >
            Filter
          </button>
        </div>
      </div>
      {isFilterOpen && (
        <div className="mt-2 space-x-2">
          <button className="h-5 w-28 rounded-2xl bg-[#1C6758] text-white">
            Thời gian
          </button>
          <button className="h-5 w-28 rounded-2xl bg-[#1C6758] text-white">
            Filter 2
          </button>
          {/* <button className="h-5 w-28 rounded-2xl bg-[#1C6758] text-white">
            Filter 3
          </button> */}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
