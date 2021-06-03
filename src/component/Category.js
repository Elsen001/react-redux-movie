import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCategory } from '../action/action'
import CategoryItem from './CategoryItem'

const Category = () => {
    const category = useSelector((state) => state.category)
    const dispatch = useDispatch()
    

    useEffect(() => {
        dispatch(getCategory())
        
    }, [])
    
    
    return (
        <div className="category">
            <h1>Category</h1>
            {category.map(cate=>(
                <CategoryItem key={cate.id} cate={cate}/>
            ))}
        </div>
    )
}


export default Category
