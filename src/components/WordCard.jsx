import React from 'react';
import PartOfSpeechIcon from '../icons/PartOfSpeechIcon';

const WordCard = ({ wordData }) => {
  const {
    word,
    definitions,
    etymology,
    synonyms,
    sounds,
    partOfSpeech,
    romanForm,
    latinForm,
    kannadaForm
  } = wordData;

  const capitalizeFirstLetter = (text) => text.charAt(0).toUpperCase() + text.slice(1);

  return (
    <section className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg mb-10 max-w-3xl mx-auto">
      
      {/* Word centered with a box */}
      <h2 className="px-6 py-4 rounded-lg text-4xl font-semibold text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 max-w-fit mb-6 text-center">
        {word}
      </h2>

      {/* Part of Speech Icon */}
      <div className="max-w-fit mb-4">
        <PartOfSpeechIcon type={partOfSpeech} />
      </div>

      {/* Definitions */}
      {definitions && definitions.length > 0 && (
        <div className="mb-6 text-left">
          <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-300 mb-2">Meaning</h3>
          {definitions.length === 1 ? (
            <p className="text-gray-700 dark:text-gray-400 text-lg">
              {capitalizeFirstLetter(definitions[0])}
            </p>
          ) : (
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-400 text-lg">
              {definitions.map((definition, index) => (
                <li key={index}>{capitalizeFirstLetter(definition)}</li>
              ))}
            </ul>
          )}
        </div>
      )}

      {/* Word Forms */}
      {(romanForm || latinForm || kannadaForm) && (
        <div className="mb-6 text-left">
          <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-300 mb-2">Word Forms</h3>
          {romanForm && (
            <p className="text-gray-700 dark:text-gray-400 text-lg">
              <strong>Roman Form:</strong> {romanForm}
            </p>
          )}
          {latinForm && (
            <p className="text-gray-700 dark:text-gray-400 text-lg">
              <strong>Latin Form:</strong> {latinForm}
            </p>
          )}
          {kannadaForm && (
            <p className="text-gray-700 dark:text-gray-400 text-lg">
              <strong>Kannada Form:</strong> {kannadaForm}
            </p>
          )}
        </div>
      )}

      {/* Synonyms */}
      {synonyms && synonyms.length > 0 && (
        <div className="mb-6 text-left">
          <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-300 mb-2">Synonyms</h3>
          <p className="text-gray-700 dark:text-gray-400 text-lg">{synonyms.join(', ')}</p>
        </div>
      )}

      {/* Pronunciation */}
      {sounds && sounds.length > 0 && (
        <div className="mb-6 text-left">
          <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-300 mb-2">Pronunciation</h3>
          {sounds.map((sound, index) => (
            <p key={index} className="text-gray-700 dark:text-gray-400 text-lg">
              <strong>IPA:</strong> {sound.ipa}
            </p>
          ))}
        </div>
      )}

      {/* Etymology */}
      {etymology && (
        <div className="mb-6 text-left">
          <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-300 mb-2">Etymology</h3>
          <p className="text-gray-700 dark:text-gray-400 text-lg">{etymology}</p>
        </div>
      )}
    </section>
  );
};

export default WordCard;
