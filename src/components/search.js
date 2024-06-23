import React, { useState } from 'react';

export default function Search({ onSearch }) {
  const [selectedPracticeArea, setSelectedPracticeArea] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(selectedPracticeArea); // Call prop function with selected area
  };

  return (
    <div>
      <form id="searchForm" onSubmit={handleSubmit}>
        <label>
          Practice Area:
          <select id="practiceArea" value={selectedPracticeArea} onChange={(e) => setSelectedPracticeArea(e.target.value)}>
            <option value="">Select a practice area</option>
            <option value="criminal">Criminal</option>
            <option value="personalInjury">Personal Injury</option>
            <option value="business">Business</option>
          </select>
        </label>
        <br />
        <button type="submit">Find a Lawyer</button>
      </form>
      <div id="lawyerList"></div>
    </div>
  );
}