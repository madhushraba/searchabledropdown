import React, { useState } from "react";
import "./App.css";

const options = [
  "Apple",
  "Banana",
  "Berry",
  "Cherry",
  "Donuts",
  "Elderberry",
  "Fig",
  "Grape",
  "Guava",
  "Honeydew",
  "Ice",
  "Jackfruit",
];

function SearchableDropdown() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="input">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <select value={selectedOption}
               onChange={handleSelectChange}>
        <option value="">Select an option</option>
        {filteredOptions.map((option) => ( 
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SearchableDropdown;
