import React from 'react'
import Genres from '@/mocks/genres.json'
import Movies from '@/mocks/movies.json';
import FeaturedMovie from '@/app/components/featured-movie';
import Categories from '@/app/components/categories';
import MoviesSection from '@/app/components/movies-section';


function HomeContainer({ selectedCategory }) {

  return (
    <div>
      <FeaturedMovie movie={Movies.results[0]} />
      <Categories categories={Genres.genres.slice(0, 8)}/>
      {selectedCategory.movies.length > 0 && (
      <MoviesSection title={Genres.genres.find(genre => ( `${genre.id}` === selectedCategory.id)).name} movies={selectedCategory.movies}/>
      )}
      <MoviesSection title="Popular Films" movies={Movies.results.slice(0, 7)}/>
      <MoviesSection title="Your Favorites" movies={Movies.results.slice(7, 15)}/>
    </div>
  )
}

export default HomeContainer