import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import BannerText from '../../components/banner-text/banner-text.component';
import MovieItem from '../../components/movie-item/movie-item.component';
import SearchField from '../../components/searchfield/searchfield.component'
import { useScroll } from '../../hook/useScroll';
import { fetchMovieStart } from '../../redux/movies/movies.action';
import { selectMovieMore, selectMovies } from '../../redux/movies/movies.selector';
import { HomePageContainer } from './homepage.styles';

const HomePage = ({ more, movies, fetchMovies }) => {
  const [search, setSearch] = useState('super');
  const page = useScroll(more);

  useEffect(() => {
    fetchMovies(search, page)
  }, [fetchMovies, page, search]);

  return (
    <>
      <BannerText text="Stockbit React Dev Test" />
      <SearchField setCallback={setSearch} />
      <HomePageContainer>
        {
          movies?.map((i) => <MovieItem key={i.imdbID} id={i.imdbID} title={i.Title} year={i.Year} poster={i.Poster} />)
        }
      </HomePageContainer>
    </>
  )
};

const mapStateToProps = createStructuredSelector({
  movies: selectMovies,
  more: selectMovieMore,
})

const mapDispatchToProps = dispatch => ({
  fetchMovies: (search, page) => dispatch(fetchMovieStart({ search, page }))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)