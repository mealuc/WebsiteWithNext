import React from 'react'
import FeaturedMovie from '@/app/components/featured-movie';
import Categories from '@/app/components/categories';
import MoviesSection from '@/app/components/movies-section';


function HomeContainer({ topRatedMovies = [], popularMovies = [], categories = [], selectedCategory }) {

  return (
    <div>
      <FeaturedMovie
        movie={topRatedMovies[0]}
      />
      <Categories
        categories={categories.slice(0, 8)}
      />
      {selectedCategory.movies.length > 0 && (
        <MoviesSection
          title={categories.find(genre => (`${genre.id}` === selectedCategory.id)).name}
          movies={selectedCategory.movies}
        />
      )}
      <MoviesSection
        title="Top Rated Films"
        movies={topRatedMovies.slice(0, 7)}
      />
      <MoviesSection
        title="Popular Films"
        movies={popularMovies.slice(0, 7)}
      />
    </div>
  )
}

export default HomeContainer