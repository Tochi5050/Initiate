import{
    GET_LOGS,
    LOGS_ERROR,
    SET_LOADING,
    ADD_LOG,
    DELETE_LOG,
    UPDATE_LOG,
    SET_CURRENT,
    CLEAR_CURRENT,
    SEARCH_LOGS
} from '../actions/types'

const initialState = {
    logs : null,
    error: null,
    current : null,
    loading : false
}

const logReducers = (state = initialState, action) => {
   switch(action.type){
   
     case GET_LOGS:
         return{
             ...state,
             logs : action.payload,
             loading : false
         }

     case ADD_LOG:
         return{
           ...state,
           logs : [...state.logs, action.payload]
         }

     case DELETE_LOG:
         return{
           ...state,
           logs : state.logs.filter(log => log.id !== action.payload)
         }

     case UPDATE_LOG:
         return{
             ...state,
             logs : state.logs.map(log => log.id === action.payload.id ? action.payload : log)
         }

     case LOGS_ERROR:
         return{
             ...state,
             error : action.payload
         }

     case SET_LOADING:
          return{
              ...state,
              loading : true
          }

    case SET_CURRENT:
        return{
             ...state,
            current : action.payload
            }
            
    case CLEAR_CURRENT:
        return{
            ...state,
            current : null
            }    

    case SEARCH_LOGS:
        return{
         logs : action.payload
        }
    
    default:
          return state
   }
}


export default logReducers