import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  ariaLabel?: string;
}

const Button: React.FC<ButtonProps> = ({ label, ariaLabel, ...props }) => {
  return (
    <button
      aria-label={ariaLabel}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;