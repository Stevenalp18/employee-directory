import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);
  const [name, setName] = useState("");
  const [filteredResults, setFilteredResults] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users/"
        );
        const dataResponse = await response.json();
        // console.log(dataResponse);
        setData(dataResponse);
      } catch (error) {
        setData(null);
        console.log("ERROR: ", error);
      }
    };

    fetchData();
  }, []);

  const filterByName = (name) => {
    if (data !== null) {
      const results = data.find(
        (item) => item.name.toLowerCase() === name.toLowerCase()
      );
      if (results) {
        setFilteredResults(results);
      } else {
        setFilteredResults(null);
      }
    }
  };

  useEffect(() => {
    filterByName(name);
  }, [name]);

  const renderCard = () => {
    if (data !== null) {
      const renderData = () => {
        return data.map((item) => {
          const {
            id,
            name,
            username,
            email,
            phone,
            address: { street, suite, city, zipcode },
          } = item;
          return (
            <div
              key={id}
              className="py-6 px-4 text-center w-auto rounded-2xl flex flex-col gap-6 bg-white"
            >
              <div>{name}</div>
              <div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png"
                  width={100}
                  height={100}
                  className="rounded-full m-auto"
                />
              </div>
              <div>Employee ID# {id}</div>
              <div>Username: {username}</div>
              <div>
                Address: <br />
                {street}, {suite}
                <br />
                {city}, {zipcode}
              </div>
              <div className="flex flex-row gap-3 justify-center">
                <div>
                  <a
                    href={`mailto:${email}`}
                    className="material-symbols-outlined"
                  >
                    email
                  </a>
                </div>
                <div>
                  <a
                    href={`tel:${phone}`}
                    className="material-symbols-outlined"
                  >
                    call
                  </a>
                </div>
              </div>
            </div>
          );
        });
      };
      //
      return renderData();
    } else if (data == null) {
      return <div>data is null</div>;
    }
  };

  const renderFilteredResults = () => {
    if (filteredResults !== null) {
      const {
        id,
        name,
        username,
        email,
        phone,
        address: { street, suite, city, zipcode },
      } = filteredResults;

      return (
        <div
          key={id}
          className="py-6 px-4 text-center w-auto rounded-2xl flex flex-col gap-6 bg-white"
        >
          <div>{name}</div>
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png"
              width={100}
              height={100}
              className="rounded-full m-auto"
            />
          </div>
          <div>Employee ID# {id}</div>
          <div>Username: {username}</div>
          <div>
            Address: <br />
            {street}, {suite}
            <br />
            {city}, {zipcode}
          </div>
          <div className="flex flex-row gap-3 justify-center">
            <div>
              <a href={`mailto:${email}`} className="material-symbols-outlined">
                email
              </a>
            </div>
            <div>
              <a href={`tel:${phone}`} className="material-symbols-outlined">
                call
              </a>
            </div>
          </div>
        </div>
      );
    }
  };

  useEffect(() => {
    renderFilteredResults();
  }, [filteredResults]);

  const conditionalRender = () => {
    if (filteredResults) {
      return renderFilteredResults();
    } else if (!filteredResults) {
      return renderCard();
    }
  };
  return (
    <>
      <div className="text-center text-4xl pt-6 text-neutral-800 font-semibold">
        Employee Book
      </div>
      <div className="w-full flex justify-center mt-4">
        <input
          type="text"
          placeholder="employee name"
          className="px-2 py-1 rounded-xl text-lg w-1/3"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      {/* <div className="text-center py-2">Current Visual Input: {name}</div>
      <div className="text-center py-2">
        Current Filtered Results: <br /> {JSON.stringify(filteredResults)}
      </div> */}

      <div className="flex flex-wrap gap-6 justify-center py-4 text-neutral-900">
        {/* {filteredResults !== null ? (
          <> {renderFilteredResults()}</>
        ) : (
          renderCard()
        )} */}
        {conditionalRender()}
      </div>
      {/* <div className="flex flex-wrap gap-6 justify-center py-4 text-neutral-900">
        {renderCard()}
      </div> */}
    </>
  );
}

export default App;
