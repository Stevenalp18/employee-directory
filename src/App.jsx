//imports
import { useEffect, useState } from "react";
import { renderCard, renderFilteredResults } from "./utility/functions";

import { filterByLetter } from "./utility/filterFunctions";
// function App()

function App() {
  const [data, setData] = useState(null);
  const [name, setName] = useState(null);
  const [filteredResults, setFilteredResults] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users/"
        );
        const dataResponse = await response.json();
        setData(dataResponse);
      } catch (error) {
        setData(null);
        console.log("ERROR: ", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    filterByLetter(data, name, setFilteredResults);
  }, [name]);

  useEffect(() => {
    renderFilteredResults(filteredResults);
  }, [filteredResults]);

  const conditionalRender = () => {
    if (filteredResults !== null) {
      if (filteredResults.length === 0) {
        return (
          <div className="text-lg p-2 bg-red-300/30 rounded-2xl">
            Error: No Search Results Found for '{name}'
          </div>
        );
      }
      return (
        <div className="flex flex-wrap gap-6 justify-center py-4 text-neutral-900">
          <div className="w-full text-center mx-auto">
            Results Found: {filteredResults.length}
          </div>
          {renderFilteredResults(filteredResults)}
        </div>
      );
    }
    return renderCard(data);
  };

  return (
    <>
      <div className="text-center text-4xl pt-6 text-neutral-800 font-semibold">
        Employee Book
      </div>
      <div className="w-full flex justify-center mt-4">
        <input
          type="text"
          placeholder="search by employee name"
          className="px-2 py-1 rounded-xl text-lg w-1/3"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div className="flex flex-wrap gap-6 justify-center py-4 text-neutral-900">
        {conditionalRender()}
      </div>
    </>
  );
}

export default App;
