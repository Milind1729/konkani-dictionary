// src/components/RandomWordSection.js
import React, { useState, useEffect } from 'react';
import WordCard from './WordCard';
import { db } from '../firebase'; // Import Firebase configuration
import { collection, getDocs } from 'firebase/firestore';

const RandomWordSection = () => {
  const [wordData, setWordData] = useState(null);
  

  // Function to fetch data from Firestore and store in localStorage
  const fetchRandomWord = async () => {
    try {
      // Check if data exists in localStorage
      const storedData = localStorage.getItem('konkaniWords');
      if (storedData) {
        console.log('Using stored data from localStorage');
        const wordsArray = JSON.parse(storedData);
        // Pick a random word from the stored data
        const randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
        setWordData(randomWord);
        localStorage.setItem('randomWord', JSON.stringify(randomWord)); // Store the random Word 
      } else {
        // Fetch data from Firestore if not available in localStorage
        const wordsRef = collection(db, 'konkaniWords');
        const querySnapshot = await getDocs(wordsRef);
        const wordsArray = querySnapshot.docs.map((doc) => doc.data());

        console.log('Fetched data from Firestore');
        // Pick a random word from the Firestore data
        const randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];

        setWordData(randomWord);
        localStorage.setItem('randomWord', JSON.stringify(randomWord)); 
        // Store the fetched data in localStorage for future use
        localStorage.setItem('konkaniWords', JSON.stringify(wordsArray));
      }
    } catch (error) {
      console.error('Error fetching random word:', error);
    }
  };
  useEffect(() => {
    // Check if wordData is already stored in localStorage
    const randomWord = localStorage.getItem('randomWord');
    if (randomWord) {
      setWordData(JSON.parse(randomWord));
    }
    else{
      fetchRandomWord();  // Fetch an initial random word
    }
  }, []);

  

  return (
    <div className=" flex-grow w-full bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 mx-auto p-4 min-h-full overflow-x-hidden ">
 
    <div className="text-center">
      <button
        onClick={fetchRandomWord}
        className="mt-6 px-6 py-2 focus:outline-none  bg-blue-500 dark:bg-blue-700 text-white font-medium rounded-md hover:bg-blue-600 dark:hover:bg-blue-600 transition"
      >
        Get Random Word
      </button>
      <WordCard wordData={wordData || {}} />
      
    </div>
    </div>
  );
};

export default RandomWordSection;
