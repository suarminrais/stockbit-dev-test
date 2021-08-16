import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import BannerText from "../../components/banner-text/banner-text.component";
import Spinner from "../../components/spinner/spinner.component";
import { fetchDetailMovieStart } from "../../redux/movie-detail/movie-detail.action";
import { selectMovieDetail, selectMovieDetailOnFetch } from "../../redux/movie-detail/movie-detail.selector";
import { MovieDetailContainer, MovieDetailContent, MovieDetailImg, MovieDetailSeparator } from "./movie-detail.styles";

const MovieDetailPage = ({ detail, onFetch, fetchDetail }) => {
  const { id } = useParams();

  useEffect(() => {
    fetchDetail(id)
  }, [fetchDetail, id]);

  if (onFetch) return <Spinner />

  if (!detail || detail?.Response === "False") return <h1>Opps...</h1>

  return (
    <>
      <BannerText text="Stockbit React Dev Test Detail Page" />
      <MovieDetailContainer>
        <MovieDetailSeparator>
          <MovieDetailImg src={detail?.Poster} alt={detail?.Title} />
        </MovieDetailSeparator>
        <MovieDetailSeparator w={70}>
          <MovieDetailContent>Judul : {detail?.Title}</MovieDetailContent>
          <MovieDetailContent>Tahun : {detail?.Year}</MovieDetailContent>
          <MovieDetailContent>Genre : {detail?.Genre}</MovieDetailContent>
          <MovieDetailContent>Rating : {detail?.imdbRating}</MovieDetailContent>
          <MovieDetailContent>Jumlah Vote : {detail?.imdbVotes}</MovieDetailContent>
          <MovieDetailContent>Director : {detail?.Director}</MovieDetailContent>
          <MovieDetailContent>Negara : {detail?.Country}</MovieDetailContent>
          <MovieDetailContent>Pemeran : {detail?.Actors}</MovieDetailContent>
          <MovieDetailContent>Penghargaan : {detail?.Awards}</MovieDetailContent>
          <MovieDetailContent>Durasi : {detail?.Runtime}</MovieDetailContent>
          <MovieDetailContent>Produksi : {detail?.Production}</MovieDetailContent>
          <MovieDetailContent>Pendapatan : {detail?.BoxOffice}</MovieDetailContent>
          <MovieDetailContent>{detail?.Plot}</MovieDetailContent>
        </MovieDetailSeparator>
      </MovieDetailContainer>
    </>
  )
}

const mapStateToProps = createStructuredSelector({
  detail: selectMovieDetail,
  onFetch: selectMovieDetailOnFetch,
})

const mapDispatchToProps = dispatch => ({
  fetchDetail: (id) => dispatch(fetchDetailMovieStart(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailPage)