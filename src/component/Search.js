import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPopulate, searchFilm } from '../action/action'

const Search = () => {
    const [keyword,setKeyword] = useState("")
    const dispatch = useDispatch()
    const films = useSelector((state) => state.films)


    const onChange = (e) =>{
        setKeyword(e.target.value)
    }

    useEffect(()=>{
        if(keyword.length>0){
            dispatch(searchFilm(keyword))
        }else{
            dispatch(getPopulate())
        }
    },[keyword])

    
      
   

    return (
        <>
        <div className="searchDiv">
                <input onChange={onChange} value={keyword} type="text" placeholder="Search movies..." />
        </div>
        </>
    )
}

export default Search
