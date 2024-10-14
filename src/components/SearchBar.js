import React, { useState } from 'react';
import { useFilter } from '../context/FilterContext';

const SearchBar = () => {
  const { filter, setFilter } = useFilter();
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 border rounded-full shadow-md flex items-center"
      >
        <span className="mr-4">{filter.city || 'Add location'}</span>
        <span className="mr-4">{filter.guests || 'Add guests'}</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-md mt-2 p-4">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Add location"
              value={filter.city}
              onChange={(e) => setFilter({ ...filter, city: e.target.value })}
              className="w-full mb-2 p-2 border rounded"
            />
            <input
              type="number"
              placeholder="Add guests"
              value={filter.guests || ''}
              onChange={(e) => setFilter({ ...filter, guests: parseInt(e.target.value) || 0 })}
              className="w-full mb-2 p-2 border rounded"
            />
            <button type="submit" className="w-full bg-red-400 text-white p-2 rounded">
              Search
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default SearchBar;