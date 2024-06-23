import React, { useState } from 'react';
import Header from './header';
import Search from './search';
import Lawyers from './lawyers';

export default function Home({ lawyers }) {
  const [filteredLawyers, setFilteredLawyers] = useState([]); // Empty array as initial value

  const handleSearch = (selectedArea) => {
    if (!lawyers) return;
    const newFilteredLawyers = lawyers.filter((lawyer) => lawyer.practiceArea === selectedArea);
    setFilteredLawyers(newFilteredLawyers);
  };

  return (
    <div>
      <Header />
      <Search onSearch={handleSearch} />
      {filteredLawyers.length > 0 && <Lawyers lawyers={filteredLawyers} />}
    </div>
  );
}
