"use client";

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

// Define the props for the Select component
interface SelectProps {
  options: string[];
  value: string;
  onValueChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  required?: boolean;
}

const Select: React.FC<SelectProps> = ({
  options,
  value,
  onValueChange,
  placeholder = 'Select an option',
  label,
  required = false
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (selectedValue: string) => {
    onValueChange(selectedValue);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full pt-5">
      {label && (
        <label className="block text-sm mb-1">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div 
        className="relative"
        onBlur={() => setTimeout(() => setIsOpen(false), 200)}
      >
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex justify-between items-center 
            bg-transparent border border-[#2D2E2D] rounded-md 
            px-3 py-3 text-sm 
            focus:outline-none"
        >
          <span className="text-white">
            {value || placeholder}
          </span>
          <ChevronDown className="text-gray-400" size={16} />
        </button>

        {isOpen && (
          <ul 
            className="absolute z-10 mt-1 w-full 
               shadow-lg rounded-md 
              max-h-60 overflow-auto 
              border border-[#2D2E2D] bg-[#2D2E2D] "
          >
            {options.map((option) => (
              <li
                key={option}
                onClick={() => handleSelect(option)}
                className="px-3 py-2 hover:bg-gray-800 
                  cursor-pointer text-sm 
                  text-white
                  first:rounded-t-md last:rounded-b-md"
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Select;