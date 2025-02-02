import React, { useState } from 'react';
import { db } from '../firebase'; // Import Firebase configuration
import { collection, getDocs } from 'firebase/firestore';

const DynamicSearchBar = ({setWordData}) => {
    const [query, setQuery] = useState(''); // Tracks search query
    const [suggestions, setSuggestions] = useState([]); // Tracks suggestions
    const [isOpen, setIsOpen] = useState(false); // Controls whether suggestions are shown

    const capitalizeFirstLetter = (text) => text.charAt(0).toUpperCase() + text.slice(1);
  
    const fetchSuggestions = async (e) => {
      const value = e.target.value;
      setQuery(value);
    
      if (value) {
        // Check for data in localStorage first
        const storedData = localStorage.getItem('konkaniWords');
        if (storedData) {
          console.log('Using stored data from localStorage');
          const wordsArray = JSON.parse(storedData);
          // Ensure wordsArray is valid and filter out invalid objects
          const validWords = wordsArray.filter(word => word && word.latinForm);
          // Filter based on matching the query as a prefix (sun sequence match)
          const filtered = validWords.filter((item) =>
            item.latinForm.toLowerCase().startsWith(value.toLowerCase())
          );
          setSuggestions(filtered);
          setIsOpen(true);
        } else {
          // Fetch data from Firestore if not available in localStorage
          const wordsRef = collection(db, 'konkaniWords');
          try {
            const querySnapshot = await getDocs(wordsRef);
            const wordsArray = querySnapshot.docs.map((doc) => doc.data());
            console.log('Fetched data from Firestore');
            // Ensure wordsArray is valid and filter out invalid objects
           const validWords = wordsArray.filter(word => word && word.latinForm);
            // Filter based on matching the query as a prefix (sub string match)
            const filtered = validWords.filter((item) =>
              item.latinForm.toLowerCase().startsWith(value.toLowerCase())
            );
            setSuggestions(filtered);
            setIsOpen(true);
    
            // Store the fetched data in localStorage for future use
            localStorage.setItem('konkaniWords', JSON.stringify(wordsArray));
          } catch (error) {
            console.error("Error fetching data from Firestore:", error);
            setSuggestions([]);
            setIsOpen(false);
          }
        }
      } else {
        setSuggestions([]);
        setIsOpen(false);
      }
    };
  
    // Function to handle selection of an item from suggestions
    const handleSelect = (item) => {
      setQuery(capitalizeFirstLetter(item.latinForm)); // Set the search input to the selected item
      setWordData(item);
      localStorage.setItem('lastSearchedWord', JSON.stringify(item)); 
      setSuggestions([]); // Clear the suggestions
      setIsOpen(false); // Hide the dropdown
    };

    return (
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={fetchSuggestions}
          placeholder="Search a Konkani Word By Latin Form"
          className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 p-2 rounded-md w-full shadow-sm focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:outline-none"
        />
       {isOpen && query && suggestions.length > 0 && (
    <ul className="absolute left-0 right-0 mt-2 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 border border-[#7babdb] dark:border-[#5eafdc] rounded-md z-10 shadow-lg">
      {suggestions.map((item, index) => (
        <li
          key={index}
          className="px-4 py-2 hover:bg-[#bee2ff] dark:hover:bg-[#6187ae29] text-[#2e30319d] dark:text-[#f1faf9] cursor-pointer transition duration-200"
          onClick={() => handleSelect(item)}
        >
          {capitalizeFirstLetter(item.latinForm)+" ("+item.word+")"}
        </li>
      ))}
    </ul>
  )}
      </div>
    );
};

export default DynamicSearchBar;
