import { useQuery } from 'react-query';
import axios from 'axios';

const fetchStays = async () => {
  const { data } = await axios.get('/stays.json');
  return data;
};

export const useStays = (filter) => {
  return useQuery('stays', fetchStays, {
    select: (data) => {
      return data.filter(
        (stay) =>
          stay.city.toLowerCase().includes(filter.city.toLowerCase()) &&
          stay.maxGuests >= filter.guests
      );
    },
  });
};