import React from 'react';

const StayCard = ({ stay }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-md">
      <img src={stay.photo} alt={stay.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          {stay.superHost && (
            <span className="text-xs font-semibold uppercase bg-gray-200 rounded-full px-2 py-1">
              Super Host
            </span>
          )}
          <span className="text-sm text-gray-500">{stay.type} · {stay.beds} beds</span>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="ml-1">{stay.rating}</span>
          </div>
        </div>
        <h3 className="text-lg font-semibold mb-2">{stay.title}</h3>
      </div>
    </div>
  );
};

export default StayCard;