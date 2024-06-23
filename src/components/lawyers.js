import React from 'react';
import Header from './header';

export default function Lawyers({ lawyers, showAllLawyersHeader }) {
  return (
    <div>
      {showAllLawyersHeader && <Header />}
      <h2>Our Advocates</h2>
      <div id="lawyerList" className="row">
        {lawyers.map((lawyer) => (
          <div key={lawyer.name} className="col-md-4 lawyer">
            <img src={lawyer.image} alt={lawyer.name} className="img-fluid rounded-circle mb-3" />
            <div><h2>{lawyer.name}</h2></div>
            <div>{getPracticeAreaLabel(lawyer.practiceArea)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function getPracticeAreaLabel(practiceArea) {
  switch (practiceArea) {
    case "criminal":
      return "Criminal";
    case "personalInjury":
      return "Personal Injury";
    case "business":
      return "Business";
    default:
      return "Unknown";
  }
}