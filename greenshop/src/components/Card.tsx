import React from 'react';

interface CardProps {
  title: string;
  content: string;
  imageUrl?: string;
  ariaLabel?: string;
}

const Card: React.FC<CardProps> = ({ title, content, imageUrl, ariaLabel }) => {
  return (
    <div
      className="bg-white shadow-md rounded-lg p-4"
      role="region"
      aria-label={ariaLabel}
      tabIndex={0}
    >
      {imageUrl && <img src={imageUrl} alt={title} className="rounded-t-lg" />}
      <h2 className="text-lg font-semibold mt-2">{title}</h2>
      <p className="text-gray-700 mt-1">{content}</p>
    </div>
  );
};

export default Card;