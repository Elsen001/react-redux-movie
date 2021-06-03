import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPopulate } from '../action/action'
import Film from './Film'

const Films = () => {
    const films = useSelector((state) => state.films)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPopulate())
    }, [])


    return (
        <div className="container">
           {
             films && films.map(film=>(
                   <Film img={film.poster_path} film={film}/>
               ))
           }
        </div>
    )
}

export default Films
