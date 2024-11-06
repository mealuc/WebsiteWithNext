import React from 'react'
import MovieContainer from '@/app/containers/movie'
import { notFound } from 'next/navigation';
import { getMovie } from '@/services/movie';

async function MoviePage({ params }) {
  
    const movieDetail = await getMovie(params.id)
    console.log(movieDetail);

    if(!movieDetail){
      notFound();
    }

    return <MovieContainer movie={movieDetail} />;

}

export default MoviePage