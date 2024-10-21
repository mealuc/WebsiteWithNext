import FeaturedMovie from './components/featured-movie';
import Movies from '../mocks/movies.json'


export default function Home() {
  return (
    <FeaturedMovie movie={Movies.results[0]} />
  );
}
