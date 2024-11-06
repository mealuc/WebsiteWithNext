const API_URL = "https://api.themoviedb.org/3";

const fetchApi = async (pathname, query = "") => {
    const res = await fetch(`${API_URL}${pathname}?api_key=${process.env.API_KEY}${query}`)
        .catch(err => {
            throw new Error(err);
        })

    return res.json();
}

const getTopRatedMovies = async () => {
    return fetchApi("/movie/top_rated", `&page=1`);
  }
  
  const getPopularMovies = async () => {
    return fetchApi("/movie/popular", `&page=1`);
  }
  
  const getCategories = async () => {
    return fetchApi("/genre/movie/list");
  }
  
  const getSingleCategory = async (genreId) => {
    return fetchApi("/discover/movie", `&with_genres=${genreId}`);
  }

  const getMovie = async (movieId) => {
    return fetchApi(`/movie/${movieId}`);
  }

export {
    getTopRatedMovies,
    getPopularMovies,
    getCategories,
    getSingleCategory,
    getMovie
};