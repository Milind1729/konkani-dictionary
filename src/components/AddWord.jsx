import React, { useState } from "react";

const AddWord = () => {
  // State for all fields
  const [word, setWord] = useState("");
  const [definitions, setDefinitions] = useState([""]);
  const [etymology, setEtymology] = useState("");
  const [synonyms, setSynonyms] = useState([""]);
  const [sounds, setSounds] = useState([{ ipa: "" }]);
  const [partOfSpeech, setPartOfSpeech] = useState("");
  const [romanForm, setRomanForm] = useState("");
  const [latinForm, setLatinForm] = useState("");
  const [kannadaForm, setKannadaForm] = useState("");

  // Handle adding/removing definitions
  const handleAddDefinition = () => {
    setDefinitions([...definitions, ""]);
  };

  const handleRemoveDefinition = (index) => {
    const updatedDefinitions = definitions.filter((_, i) => i !== index);
    setDefinitions(updatedDefinitions);
  };

  const handleDefinitionChange = (index, value) => {
    const updatedDefinitions = [...definitions];
    updatedDefinitions[index] = value;
    setDefinitions(updatedDefinitions);
  };

  // Handle adding/removing synonyms
  const handleAddSynonym = () => {
    setSynonyms([...synonyms, ""]);
  };

  const handleRemoveSynonym = (index) => {
    const updatedSynonyms = synonyms.filter((_, i) => i !== index);
    setSynonyms(updatedSynonyms);
  };

  const handleSynonymChange = (index, value) => {
    const updatedSynonyms = [...synonyms];
    updatedSynonyms[index] = value;
    setSynonyms(updatedSynonyms);
  };

  // Handle adding/removing sounds
  const handleAddSound = () => {
    setSounds([...sounds, { ipa: "" }]);
  };

  const handleRemoveSound = (index) => {
    const updatedSounds = sounds.filter((_, i) => i !== index);
    setSounds(updatedSounds);
  };

  const handleSoundChange = (index, field, value) => {
    const updatedSounds = [...sounds];
    updatedSounds[index][field] = value;
    setSounds(updatedSounds);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Data to be sent to the API
    const data = {
      word,
      definitions: definitions.filter((def) => def.trim() !== ""),
      etymology,
      synonyms: synonyms.filter((syn) => syn.trim() !== ""),
      sounds: sounds.filter((sound) => sound.ipa.trim() !== ""),
      partOfSpeech,
      romanForm,
      latinForm,
      kannadaForm,
    };

    try {
      // Make the POST request to your API
      const response = await fetch("http://localhost:5000/api/addword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // Parse the response
      const result = await response.json();

      if (response.ok) {
        console.log("Word added successfully:", result);
        alert("Word added successfully!");
      } else {
        console.error("Error adding word:", result.message);
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to connect to the server.");
    }

    // Reset form fields
    setWord("");
    setDefinitions([""]);
    setEtymology("");
    setSynonyms([""]);
    setSounds([{ ipa: "" }]);
    setPartOfSpeech("");
    setRomanForm("");
    setLatinForm("");
    setKannadaForm("");
  };

  return (
    <div className="flex-grow w-full bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex justify-center ">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-full m-12 h-full mx-10">
        <h1 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4 text-center">
          Enter Konkani Word
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Word */}
          <div>
            <label htmlFor="word" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
              Word
            </label>
            <input
              type="text"
              id="word"
              value={word}
              onChange={(e) => setWord(e.target.value)}
              className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200"
              placeholder="Enter the Konkani word"
              required
            />
          </div>

          {/* Definitions */}
          <div>
            <label htmlFor="definitions" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
              Definitions
            </label>
            {definitions.map((definition, index) => (
              <div key={index} className="mb-2">
                <textarea
                  value={definition}
                  onChange={(e) => handleDefinitionChange(index, e.target.value)}
                  className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200"
                  placeholder="Enter a definition"
                  rows="2"
                  required
                ></textarea>
                {index > 0 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveDefinition(index)}
                    className="mt-1 text-sm text-red-500 hover:text-red-600"
                  >
                    Remove Definition
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddDefinition}
              className="text-sm text-blue-500 hover:text-blue-600"
            >
              + Add Another Definition
            </button>
          </div>

          {/* Etymology */}
          <div>
            <label htmlFor="etymology" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
              Etymology
            </label>
            <textarea
              id="etymology"
              value={etymology}
              onChange={(e) => setEtymology(e.target.value)}
              className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200"
              placeholder="Enter the etymology"
              rows="3"
            ></textarea>
          </div>

          {/* Synonyms */}
          <div>
            <label htmlFor="synonyms" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
              Synonyms
            </label>
            {synonyms.map((synonym, index) => (
              <div key={index} className="mb-2">
                <input
                  type="text"
                  value={synonym}
                  onChange={(e) => handleSynonymChange(index, e.target.value)}
                  className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200"
                  placeholder="Enter a synonym"
                />
                {index > 0 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveSynonym(index)}
                    className="mt-1 text-sm text-red-500 hover:text-red-600"
                  >
                    Remove Synonym
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddSynonym}
              className="text-sm text-blue-500 hover:text-blue-600"
            >
              + Add Another Synonym
            </button>
          </div>

          {/* Sounds */}
          <div>
            <label htmlFor="sounds" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
              Pronunciation (IPA)
            </label>
            {sounds.map((sound, index) => (
              <div key={index} className="mb-2">
                <input
                  type="text"
                  value={sound.ipa}
                  onChange={(e) => handleSoundChange(index, "ipa", e.target.value)}
                  className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200"
                  placeholder="Enter IPA pronunciation"
                />
                {index > 0 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveSound(index)}
                    className="mt-1 text-sm text-red-500 hover:text-red-600"
                  >
                    Remove Pronunciation
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddSound}
              className="text-sm text-blue-500 hover:text-blue-600"
            >
              + Add Another Pronunciation
            </button>
          </div>

          {/* Part of Speech */}
          <div>
            <label htmlFor="partOfSpeech" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
              Part of Speech
            </label>
            <input
              type="text"
              id="partOfSpeech"
              value={partOfSpeech}
              onChange={(e) => setPartOfSpeech(e.target.value)}
              className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200"
              placeholder="Enter part of speech (e.g., noun, verb)"
            />
          </div>

          {/* Word Forms */}
          <div>
            <label htmlFor="romanForm" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
              Roman Form
            </label>
            <input
              type="text"
              id="romanForm"
              value={romanForm}
              onChange={(e) => setRomanForm(e.target.value)}
              className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200"
              placeholder="Enter Roman script form"
            />
          </div>
          <div>
            <label htmlFor="latinForm" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
              Latin Form
            </label>
            <input
              type="text"
              id="latinForm"
              value={latinForm}
              onChange={(e) => setLatinForm(e.target.value)}
              className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200"
              placeholder="Enter Latin script form"
            />
          </div>
          <div>
            <label htmlFor="kannadaForm" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
              Kannada Form
            </label>
            <input
              type="text"
              id="kannadaForm"
              value={kannadaForm}
              onChange={(e) => setKannadaForm(e.target.value)}
              className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200"
              placeholder="Enter Kannada script form"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 dark:bg-blue-700 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 dark:hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddWord;