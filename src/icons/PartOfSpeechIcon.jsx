import React from 'react';

const PartOfSpeechIcon = ({ type }) => {
  const getText = () => {
    switch (type) {
      case 'noun':
        return 'Noun';
      case 'verb':
        return 'Verb';
      case 'adj':
        return 'Adjective';
      case 'adv':
        return 'Adverb';
      case 'num':
        return 'Number';
      case 'name':
        return 'Name';
      case 'suffix':
          return 'Suffix';
      default:
        return 'Other';
    }
  };

  return (
    type &&   <div className="px-4 py-2 rounded-lg text-sm font-semibold text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700">
    {getText()}
  </div>
  );
};

export default PartOfSpeechIcon;
