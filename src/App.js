import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { FilterProvider } from './context/FilterContext';
import Header from './components/Header';
import StayList from './components/StayList';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <FilterProvider>
        <div className="container mx-auto px-4">
          <Header />
          <main className="mt-8">
            <StayList />
          </main>
        </div>
      </FilterProvider>
    </QueryClientProvider>
  );
};

export default App;