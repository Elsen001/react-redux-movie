import React from 'react'
import { Link } from 'react-router-dom'
import Films from './Films'

const Film = ({ film, img }) => {
    const url = `https://image.tmdb.org/t/p/w500/`

    return (
        <>
                <div className="item">
                    <img src={`${url}${img}`} alt="" />
                    <h2>{film.name?film.name:film.original_title}</h2>
                    <h4>IMDB {film.vote_average}</h4>
                    <Link className="link" to={`/movie/${film.id}`}>Get Details</Link>
                </div>
                </>
    )
}

export default Film
