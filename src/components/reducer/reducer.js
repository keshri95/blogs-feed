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
        
        default :
            return state
    }

}
