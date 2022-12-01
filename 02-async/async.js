const axios = require("axios");

const fetchData = async (id) => {
  const results = await axios.get(`http://localhost:5000/note/${id}`);
  return results.data;
};
module.exports = fetchData;
