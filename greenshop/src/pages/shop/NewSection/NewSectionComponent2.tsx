import React from 'react';

interface NewSectionComponent2Props {
  title: string;
  description: string;
}

const NewSectionComponent2: React.FC<NewSectionComponent2Props> = ({ title, description }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md" role="region" aria-labelledby="new-section-title">
      <h2 id="new-section-title" className="text-xl font-semibold">{title}</h2>
      <p className="mt-2 text-gray-700">{description}</p>
    </div>
  );
};

export default NewSectionComponent2;