const baseApi ={
    url:"https://api.themoviedb.org/3",
    key:"eb8628b4f17cb2868849e117a446d83a"
   // https://api.themoviedb.org/3/tv/popular?api_key=eb8628b4f17cb2868849e117a446d83a&page=1
}


export const getCategoryItem =(id) =>(dispatch)=>{
       fetch(`${baseApi.url}/discover/movie?api_key=${baseApi.key}&sort_by=popularity.desc&page=1&with_genres=${id}%7C&with_watch_monetization_types=flatrate`)
       .then(data=>{
           return data.json()
       }).then(res=>{
           dispatch({type:"CATEGORY-ITEM",payload:res.results})
       })
}



export const getCategory = () => (dispatch)=>{
    fetch(`${baseApi.url}/genre/movie/list?api_key=${baseApi.key}`)
    .then(data =>{
        return data.json()
    }).then(res =>{
        dispatch({type:"GET-CATEGORY",payload:res.genres})
    })
}


export const getPopulate = () => (dispatch) =>{
    fetch(`${baseApi.url}/trending/all/day?api_key=${baseApi.key}`)
    .then(data =>{
        return data.json()
    }).then(res =>{
        dispatch({type:"GET-POPULATE",payload:res.results})
    })
}

export const getDetails = (id) => (dispatch)=>{
     fetch(`${baseApi.url}/movie/${id}?api_key=${baseApi.key}`)
     .then(data =>{
         return data.json()
     }).then(res =>{
         dispatch({type:"GET-DETAILS",payload:res})
     })
}

export const searchFilm = (keyword) => (dispatch) =>{
    fetch(`${baseApi.url}/search/movie?api_key=${baseApi.key}&query=${keyword}&page=1`)
    .then(data =>{
        return data.json()
    }).then(res =>{
        dispatch({type:"SEARCH",payload:res.results})
    })
    // https://api.themoviedb.org/3/search/movie?api_key=eb8628b4f17cb2868849e117a446d83a&language=en-US&query=as&page=1&include_adult=false
}