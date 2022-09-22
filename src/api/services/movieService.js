import axios from "axios";

const apiUrl = "http://localhost:3000/";

const getAllMovies = async () => {
  try {
    const response = await axios
      .get(`${apiUrl}movies`)
      .then((result) => {
        return result.data;
      })
      .catch((error) => console.error(error));
    return response;
  } catch (error) {
    console.log(error);
  }
};

const deleteMovie = async (_id) => {
  try {
    const response = await axios
      .delete(`${apiUrl}movie/${_id}`)
      .then((result) => {
        return result.data;
      })
      .catch((error) => console.error(error));
    return response;
  } catch (error) {
    console.log(error);
  }
};

const addNewMovie = async ({ Title, Year, Director }) => {
  try {
    const response = await axios
      .post(`${apiUrl}movie`, {
        Title: Title,
        Year: Year,
        Director: Director,
      })
      .then((result) => {
        return result.data;
      })
      .catch((error) => console.error(error));
    return response;
  } catch (error) {
    console.log(error);
  }
};

const updateMovie = async ({ Title, Year, Director, _id }) => {
  try {
    const response = await axios
      .put(`${apiUrl}movie`, {
        _id: _id,
        Title: Title,
        Year: Year,
        Director: Director,
      })
      .then((result) => {
        return result.data;
      })
      .catch((error) => console.error(error));
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const MovieService = {
  getAllMovies,
  deleteMovie,
  updateMovie,
  addNewMovie,
};
