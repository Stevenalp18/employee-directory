// Render Filtered Results Card function

export const renderFilteredResults = (data) => {
  if (data !== null) {
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
    });
  }
  return renderCard(data);
};

// render card function

export const renderCard = (data) => {
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
                <a href={`tel:${phone}`} className="material-symbols-outlined">
                  call
                </a>
              </div>
            </div>
          </div>
        );
      });
    };
    return renderData();
  } else if (data == null) {
    return <div>data is null</div>;
  }
};
