export const reducer = (state, action) => {

    switch (action.type){
        case  "DISPLAY_DATA":
            return {
                ...state,
                hits:action.payload.hits,
                nbPages: action.payload.nbPages,
            }
        case "LOADING":
            return {
                ...state,
                isLoading: true,
            }
        
        case "DELETE_DATA":
            return {
                ...state,
                hits: state.hits.filter((elem) => elem.objectID !== action.payload),
            };

        case "SEARCH_BLOGS": 
            return {
                ...state,
                query: action.payload,
            }
        

        
        default :
            return state
    }
}
