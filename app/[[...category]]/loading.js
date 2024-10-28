import React from 'react'
import CategoriesLoading from '@/app/components/categories/loading'
import FeaturedMovieLoading from '@/app/components/featured-movie/loading'
import MoviesSectionLoading from '../components/movies-section/loading'

function Loading() {
  return (
    <div>
        <FeaturedMovieLoading />
        <CategoriesLoading />
        <MoviesSectionLoading />
        <MoviesSectionLoading />
    </div>
  )
}

export default Loading