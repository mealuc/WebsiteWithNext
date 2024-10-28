import React from 'react';
import Loading from '@/app/components/loading';
import styles from './styles.module.css';

function FeaturedMovieLoading() {
  return (
    <div className={styles.movieWrapper} style={{height: 278}}>
        <Loading />
    </div>
  )
}

export default FeaturedMovieLoading