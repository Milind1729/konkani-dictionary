import React, { useState } from 'react';

const DynamicSearchBar = () => {
    const [query, setQuery] = useState(''); // Tracks search query
    const [suggestions, setSuggestions] = useState([]); // Tracks suggestions
    const [isOpen, setIsOpen] = useState(false); // Controls whether suggestions are shown
  
    const allItems = ['Apple', 'Banana', 'Cherry', 'Date', 'Grapes', 'Mango', 'Peach']; // Your full list of items
  
    // Function to filter suggestions based on query
    const handleSearch = (e) => {
      const value = e.target.value;
      setQuery(value);
      if (value) {
        const filtered = allItems.filter((item) =>
          item.toLowerCase().includes(value.toLowerCase())
        );
        setSuggestions(filtered);
        setIsOpen(true); // Show the dropdown when typing
      } else {
        setSuggestions([]);
        setIsOpen(false); // Hide the dropdown if search is empty
      }
    };
  
    // Function to handle selection of an item from suggestions
    const handleSelect = (item) => {
      setQuery(item); // Set the search input to the selected item
      setSuggestions([]); // Clear the suggestions
      setIsOpen(false); // Hide the dropdown
    };
  
    return (
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Search..."
          className="border px-4 py-2 w-full rounded-md"
        />
        {isOpen && query && suggestions.length > 0 && (
          <ul className="absolute left-0 right-0 mt-1 bg-white shadow-md rounded-md z-10">
            {suggestions.map((item, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => handleSelect(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
};

export default DynamicSearchBar;
