import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { getDetails } from '../action/action'
import Films from './Films'

const Details = () => {
    const {id} =  useParams()
    const film = useSelector((state) => state.film)
    const dispatch = useDispatch()
    const history=useHistory()
    const url = `https://image.tmdb.org/t/p/w500/`

    useEffect(() => {
        dispatch(getDetails(id))
    }, [])


    return (
        <>
            <div  className="film">
                <div className="top">
                  <img src={`${url}${film.poster_path}`} alt=""/>
                  <h1>{film.original_title?film.original_title:film.name}</h1>
                  
                </div>
                <div className="content">
                    <p>{film.overview}</p>
                    <h3>Date: {film.release_date}</h3>
                    <h3>IMDB: {film.vote_average}</h3>
                    <h3>Populate: {film.popularity}</h3>
                </div>
            </div>

                </>
    )
}

export default Details
