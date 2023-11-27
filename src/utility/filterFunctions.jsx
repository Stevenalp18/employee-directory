// filter by letter function
export const filterByLetter = (data, letter, setFilteredResults) => {
  if (data !== null) {
    const results = data.filter((item) => {
      return item.name.toLowerCase().includes(letter.toLowerCase());
    });
    if (results) {
      setFilteredResults(results);
    }
  }
};
