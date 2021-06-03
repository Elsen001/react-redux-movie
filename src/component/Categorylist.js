import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getCategoryItem, searchFilm } from '../action/action';
import Category from './Category';
import Films from './Films';
import Search from './Search';

const Categorylist = () => {
    const films = useSelector((state) => state.films)
    const dispatch = useDispatch()
    const {id} = useParams()

    useEffect(() => {

            dispatch(getCategoryItem(id))
        
    }, [films])
    return (
        <div>
            <Films/>
        </div>
    )
}

export default Categorylist
