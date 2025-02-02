import React, { useState,useEffect } from 'react';
import WordCard from './WordCard';
import DynamicSearchBar from './DynamicSearchBar';


const SearchWordSection = () => {
  const [wordData, setWordData] = useState(null);

  useEffect(() => {
      // Check if lastSearchedWord is already stored in localStorage
      const lastSearchedWord = localStorage.getItem('lastSearchedWord');
      if (lastSearchedWord) {
        setWordData(JSON.parse(lastSearchedWord));
      }
    }, []);


  return (
    <div className="text-center">
      <DynamicSearchBar setWordData={setWordData}/>
      {wordData === null ? (
        <section className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg mt-10 mb-15 max-w-3xl mx-auto">
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
