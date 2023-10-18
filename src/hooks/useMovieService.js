import axios from "axios";
import { useState } from "react";

const BASE_URL = "https://moviesdatabase.p.rapidapi.com";

const CONFIG = {
  headers: {
    "X-RapidAPI-Key": "API_KEY",
    "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
  },
};

export const useMovieService = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const getUpcomingMovies = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get(`${BASE_URL}/titles/x/upcoming`, CONFIG);
      setData(response.data.results);
    } catch (e) {
      console.error(e);
    }

    setIsLoading(false);
  };

  const getMoviesByTitle = async (title) => {
    setIsLoading(true);

    try {
      const response = await axios.get(
        `${BASE_URL}/titles/search/title/${title}`,
        CONFIG
      );
      console.log(response);
      setData(response.data.results);
    } catch (e) {
      console.error(e);
    }

    setIsLoading(false);
  };

  return {
    isLoading,
    data,
    getUpcomingMovies,
    getMoviesByTitle,
  };
};
