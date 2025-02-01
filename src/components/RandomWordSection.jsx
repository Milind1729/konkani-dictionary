// src/components/RandomWordSection.js
import React, { useState, useEffect } from 'react';
import WordCard from './WordCard';

const RandomWordSection = () => {
  const [wordData, setWordData] = useState(null);

  // Fetch a random word from the Express server API
  const fetchRandomWord = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/random-word'); 
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setWordData(data); 
      } else {
        console.error('Failed to fetch random word');
      }
    } catch (error) {
      console.error('Error fetching random word:', error);
    }
  };

  useEffect(() => {
    fetchRandomWord();  // Fetch an initial random word
  }, []);

  return (
    <div className=" flex-grow w-full bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 mx-auto p-4 min-h-full overflow-x-hidden ">
 
    <div className="text-center">
      <button
        onClick={fetchRandomWord}
        className=" my-10 px-6 py-2 focus:outline-none  bg-blue-500 dark:bg-blue-700 text-white font-medium rounded-md hover:bg-blue-600 dark:hover:bg-blue-600 transition"
      >
        Get Random Word
      </button>
      <WordCard wordData={wordData || {}} />
      
    </div>
    </div>
  );
};

export default RandomWordSection;
