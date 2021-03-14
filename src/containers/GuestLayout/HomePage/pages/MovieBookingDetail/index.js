import React, {useEffect} from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import {actMovieDetailsAPI} from './modules/action';
import MovieDetail from './components/MovieDetail';
import Footer from '../../components/Footer';
import Loader from '../../../../../components/Loader';
import TheaterGroup from '../../components/TheaterGroup';

export default function MovieBookingDetail() {
  const { id } = useParams();

  console.log(id);

  const movie = useSelector(
    (state) => ({
      loading: state.movieDetailsReducer.loading,
      data: state.movieDetailsReducer.data,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(actMovieDetailsAPI(id))
    
  }, [dispatch, id]);
  const {loading} = movie;
  if(loading) return <Loader />
  return (
    <div>
      <MovieDetail movie={movie}/>
      <TheaterGroup />
      <Footer />
    </div>
  );
}
