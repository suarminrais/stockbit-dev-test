import axios from "axios";

export const apiCall = async (search, page) => {
  try {
    const {
      data
    } = await axios.get(`https://www.omdbapi.com?apikey=faf7e5bb&s=${search}&page=${page}`);

    return {
      data: data.Search,
      total: data.totalResults
    }
  } catch (error) {
    throw (error)
  }
}

export const apiCallDetail = async (id) => {
  try {
    const {
      data
    } = await axios.get(`https://www.omdbapi.com?apikey=faf7e5bb&i=${id}`);

    return {
      data: data,
    }
  } catch (error) {
    throw (error)
  }
}