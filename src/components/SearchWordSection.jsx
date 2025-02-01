import React, { useState } from 'react';
import WordCard from './WordCard';

const SearchWordSection = () => {
  const [latinForm, setLatinForm] = useState('');
  const [wordData, setWordData] = useState(null);
  const [error, setError] = useState(null);

  // Fetch a word by Latin form from the Express server API
  const fetchWordByLatin = async () => {
    if (!latinForm) {
      setError('Please enter a Latin form');
      return;
    }
    
    setError(null); // Clear previous error

    try {
      const response = await fetch(`http://localhost:5000/api/search-latin?latinForm=${latinForm}`);
      if (response.ok) {
        const data = await response.json();
        setWordData(data); // Set the found word data
      } else {
        const errorData = await response.json();
        setError(errorData.message); // Set error message if word not found
        setWordData(null); // Clear word data on error
      }
    } catch (error) {
      setError('Error fetching word. Please try again later.');
      setWordData(null); // Clear word data on error
    }
  };

  // Handle Enter key press for search
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      fetchWordByLatin();
    }
  };


  return (
    <div className="text-center">
      <section className="mb-8 text-center">
        <input
          type="text"
          className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 p-2 rounded-md w-full shadow-sm focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:outline-none"
          placeholder="Search for a word by Latin form"
          value={latinForm}
          onChange={(e) => setLatinForm(e.target.value)} // Update input value in state
        onKeyDown={handleKeyDown}
        />
      </section>

      <button
        onClick={fetchWordByLatin}
        className="my-4 px-6 py-2 focus:outline-none bg-blue-500 dark:bg-blue-700 text-white font-medium rounded-md hover:bg-blue-600 dark:hover:bg-blue-600 transition"
      >
        Search Word
      </button>

      {/* Show error message */}
      {error && <p className="text-red-500 mt-4">{error}</p>}

      {/* Conditional rendering */}
      {wordData === null ? (
        <section className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg mt-10 mb-10 max-w-3xl mx-auto">
          <p className="text-4xl font-semibold text-gray-900 dark:text-gray-100 mt-6 mb-6 text-center">
            Search a Word
          </p>
        </section>
      ) : (
        <WordCard wordData={wordData} />
      )}
    </div>
  );
};

export default SearchWordSection;
