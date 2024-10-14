import React from 'react';
import { useStays } from '../hooks/useStays';
import { useFilter } from '../context/FilterContext';
import StayCard from './StayCard';

const StayList = () => {
  const { filter } = useFilter();
  const { data: stays, isLoading, isError } = useStays(filter);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching stays</div>;
  if (!stays || stays.length === 0) return <div>No stays found</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {stays.map((stay) => (
        <StayCard key={stay.id} stay={stay} />
      ))}
    </div>
  );
};

export default StayList;