import React, { useEffect, useRef } from "react";

const Search = ({ query, setQuery }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = query; // Sync input value with query
    }
  }, [query]);

  const handleSearch = () => {
    
    const newQuery = inputRef.current.value.trim();
    if (newQuery) {
      setQuery(newQuery);
    }
    else{
      alert('enter city name')
    }
  };

  return (
    <div className="flex gap-2 m-6 md:mt-6">
      <input
        ref={inputRef}
        className="outline-none bg-white md:h-11 h-6 w-full md:w-[300px] rounded-full p-5 md:p-4"
        type="text"
        placeholder="Search"
      />
      <button
        onClick={handleSearch}
        className="cursor-pointer border-none h-10 w-10 p-2 md:h-11 md:w-11 bg-white rounded-full md:p-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
          <path d="M 21 3 C 11.6 3 4 10.6 4 20 C 4 29.3 11.6 37 21 37 C 24.7 37 28.1 35.8 30.9 33.7 L 44 46.9 L 46.9 44.1 L 33.9 31.1 C 36.4 28.1 38 24.2 38 20 C 38 10.6 30.3 3 21 3 Z M 21 5 C 29.2 5 36 11.7 36 20 C 36 28.3 29.2 35 21 35 C 12.7 35 6 28.3 6 20 C 6 11.7 12.7 5 21 5 Z"></path>
        </svg>
      </button>
    </div>
  );
};

export default Search;
