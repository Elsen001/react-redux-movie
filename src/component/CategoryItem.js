import React from 'react'
import { Link } from 'react-router-dom'
import Films from './Films'

const CategoryItem = ({ cate }) => {

    

    return (
        <div className="categoryItem">
         
            <Link to={`/discover/movie/${cate.id}`} className="link">{cate.name}</Link>

        </div>
    )
}

export default CategoryItem
