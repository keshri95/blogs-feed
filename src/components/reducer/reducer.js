export const reducer = (state, action) => {

    switch (action.type){
        case  "DISPLAY_DATA":
            return {
                ...state,
                hits:action.payload.hits,
                nbPages: action.payload.nbPages,
                isLoading: true,
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
        
        case "DISPLAY_PREV_PAGE":
            let ignoreNegPage = state.page
            {ignoreNegPage <= 0 ? (ignoreNegPage = 0) : (ignoreNegPage--)}
            return {
                ...state,
                page: ignoreNegPage,
            }

            
        case "DISPLAY_NEXT_PAGE":
            let ignoreOutOfNextPage = state.page ++;

            if (ignoreOutOfNextPage >= state.nbPages){
                ignoreOutOfNextPage = 0
            }
            return {
                ...state,
                page: ignoreOutOfNextPage,
            }

        
        default :
            return state
    }
}
