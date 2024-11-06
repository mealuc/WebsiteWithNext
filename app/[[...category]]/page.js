import HomeContainer from "@/app/containers/home";
import {
  getTopRatedMovies,
  getPopularMovies,
  getCategories,
  getSingleCategory
} from "@/services/movie";


async function HomePage({ params }) {

  let selectedCategory;

  const [{ results: topRatedMovies }, { results: popularMovies }, { genres: categories }] =
    await Promise.all([
      getTopRatedMovies(),
      getPopularMovies(),
      getCategories()
    ])

  if (params.category?.length > 0) {
    const { results } = await getSingleCategory(params.category[0]);
    selectedCategory = results;
  }

  return (
    <HomeContainer
      categories={categories}
      topRatedMovies={topRatedMovies}
      popularMovies={popularMovies}
      selectedCategory={{
        id: params.category?.[0] ?? '',
        movies: selectedCategory ? selectedCategory.slice(15, 21) : []
      }} />
  );
}

export default HomePage