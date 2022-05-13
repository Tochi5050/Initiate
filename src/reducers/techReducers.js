import{
    SET_LOADING,
    GET_TECHS,
    ADD_TECH,
    TECHS_ERROR,
    DELETE_TECH 
}from '../actions/types'

const initialState = {
    techs : null,
    error : null,
    loading : false
}

const techReducers = (state = initialState, action) => {
   switch(action.type){
    case GET_TECHS:
        return{
            ...state,
            techs : action.payload,
            loading : false
        }
    case TECHS_ERROR:
        return{
            ...state,
            error : action.payload
        }
    
    case SET_LOADING:
        return{
               ...state,
               loading : true
        }
        case ADD_TECH:
            return{
                ...state,
                techs : [...state.techs, action.payload],
                loading : false
            }
        case DELETE_TECH:
            return {
                type : DELETE_TECH,
                techs : state.techs.filter(tech => tech.id !== action.payload)
            }
    
    
    default:
    return state
   }
}

export default techReducers