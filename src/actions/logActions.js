import {
    GET_LOGS,
    LOGS_ERROR,
    SET_LOADING,
    ADD_LOG,
    DELETE_LOG,
    UPDATE_LOG,
    SET_CURRENT,
    CLEAR_CURRENT
} from './types'

export const getLogs = () => async dispatch => {
  try {
      setLoading()

   const res = await fetch('/logs')
   const data = await res.json()

   dispatch({
       type : GET_LOGS,
       payload : data
   })

  } catch (error) {
      dispatch({
          type : LOGS_ERROR,
          payload : error.response.data
      })
  }
}

export const addLogs = (log) => async dispatch =>{
    try {
        setLoading()
  
     const res = await fetch('/logs', {
         method : 'POST',
         body : JSON.stringify(log),
         headers : {
             'Content-type' : 'application/json'
         }
     })

     const data = await res.json()
  
     dispatch({
         type : ADD_LOG,
         payload : data
     })
  
    } catch (error) {
        dispatch({
            type : LOGS_ERROR,
            payload : error.response.data
        })
    }
  }

  export const deleteLogs = (id) => async dispatch => {
    try {
        setLoading()
  
     await fetch(`/logs/${id}`, {
         method : 'DELETE'
     })
     dispatch({
         type : DELETE_LOG,
         payload : id
     })
  
    } catch (error) {
        dispatch({
            type : LOGS_ERROR,
            payload : error.response.data
        })
    }
  }

  export const updateLogs = (log) => async dispatch => {
    try {
        setLoading()
  
     const res = await fetch(`/logs/${log.id}`, {
         method : 'PUT',
         body: JSON.stringify(log),
         headers : {
             'Content-Type' :  'application/json'
         }

     })

     const data = await res.json()

     dispatch({
         type : UPDATE_LOG,
         payload : data
     })
  
    } catch (error) {
        dispatch({
            type : LOGS_ERROR,
            payload : error.response.data
        })
    }
  }

 export const setCurrent = log => {
      return{
          type : SET_CURRENT,
          payload : log
      }
  }

 export const clearCurrent = () => {
     return{
         type : CLEAR_CURRENT
     }
 }

 export const searchLogs = (text) => async dispatch => {
    try {
        setLoading()
  
     const res = await fetch(`/logs?q=${text}`)
     const data = await res.json()
  
     dispatch({
         type : GET_LOGS,
         payload : data
     })
  
    } catch (error) {
        dispatch({
            type : LOGS_ERROR,
            payload : error.response.data
        })
    }
  }

export const setLoading = () => {
   return{
       type : SET_LOADING
   }
}