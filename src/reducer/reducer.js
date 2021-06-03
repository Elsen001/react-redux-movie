const initialState ={
    category:[],
    films:[],
    film:{},

}

export const reducer = (state=initialState,action)=>{
    switch(action.type){
        case "GET-CATEGORY":
            return {
                ...state,
                category:action.payload
            }
        case "GET-POPULATE":
            return{
                ...state,
                films:action.payload
            }  
        case "GET-DETAILS":
            return{
                ...state,
                film:action.payload
            }   
        case "SEARCH":
            return{
                ...state,
                films:action.payload
            }  
        case "CATEGORY-ITEM":
            return{
                ...state,
                films:action.payload
            }      

            default:return state
    }
}
