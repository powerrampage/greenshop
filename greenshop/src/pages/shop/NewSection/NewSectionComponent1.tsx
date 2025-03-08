import React from 'react';

interface NewSectionComponent1Props {
  title: string;
  description: string;
}

const NewSectionComponent1: React.FC<NewSectionComponent1Props> = ({ title, description }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-md" role="region" aria-labelledby="new-section-title">
      <h2 id="new-section-title" className="text-xl font-semibold">{title}</h2>
      <p className="mt-2 text-gray-700">{description}</p>
    </div>
  );
};

export default NewSectionComponent1;