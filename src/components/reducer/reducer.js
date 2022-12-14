export const reducer = (state, action) => {

    switch (action.type){
        case  "DISPLAY_DATA":
            return {
                ...state,
                hits:action.payload.hits,
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
        
        /*
        case "DISPLAY_PREV_PAGE":
            return {
                ...state,
                page: 0,
                nbPages: 50,
            }

            
        case "DISPLAY_NEXT_PAGE":
            return {
                ...state,
                page: 0,
                nbPages: 50,
            }

        */
        
        default :
            return state
    }
}
