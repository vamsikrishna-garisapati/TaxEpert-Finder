import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [allData, setAllData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Fetch all data once and filter locally
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get("https://taxexpert-data.glitch.me/accountants");
        setAllData(response.data);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to fetch data. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (e) => {
    const searchTerm = e.target.value.trim();
    setQuery(searchTerm);

    if (!searchTerm) {
      setResults([]);
      return;
    }

    // Filter results locally based on the query (case-insensitive)
    const filteredResults = allData.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setResults(filteredResults);
  };

  const handleResultClick = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <div className="relative w-full md:w-2/3 lg:w-1/2 mx-auto">
      {/* Search Input */}
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search for Chartered Accountants..."
        className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
      />

      {/* Loader for fetching data */}
      {isLoading && !query && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md rounded-lg p-3 text-center">
          <p className="text-gray-500">Loading data...</p>
        </div>
      )}

      {/* Results List */}
      {!isLoading && query && results.length > 0 && (
        <ul className="absolute top-full left-0 w-full bg-white shadow-lg rounded-lg mt-1 z-10 overflow-hidden">
          {results.map((item) => (
            <li
              key={item.id}
              onClick={() => handleResultClick(item.id)}
              className="px-4 py-3 hover:bg-blue-100 cursor-pointer flex items-center"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <h3 className="font-semibold text-gray-800">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.specialization}</p>
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* No Results */}
      {!isLoading && query && results.length === 0 && !error && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md rounded-lg p-3 text-center">
          <p className="text-gray-500">No results found for "{query}".</p>
        </div>
      )}

      {/* Error Message */}
      {!isLoading && error && (
        <div className="absolute top-full left-0 w-full bg-red-100 border border-red-500 text-red-700 rounded-lg p-3 mt-1 text-center">
          {error}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
