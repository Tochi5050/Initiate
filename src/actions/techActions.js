import{
    SET_LOADING,
    GET_TECHS,
    ADD_TECH,
    TECHS_ERROR,
    DELETE_TECH 
}from './types'


export const getTechs = () => async dispatch => {
    try {
   setLoading()
   const res = await fetch('/techs')
   const data = await res.json()
   
   dispatch({
       type : GET_TECHS,
       payload : data
   })

  } catch (error) {
      dispatch({
        type : TECHS_ERROR,
        payload : error.response.statusText
      })
        }
}

export const addTech = (tech) => async dispatch => {
    try {
        setLoading()
        const res = await fetch('/techs',{
            method : 'POST',
            body : JSON.stringify(tech),
            headers : {
                'Content-Type' : 'application/json'
            }
        })

        const data = await res.json()

        dispatch({
            type : ADD_TECH,
            payload : data
        })

   } catch (error) {
        dispatch({
            type : TECHS_ERROR,
            payload : error.response.statusText
        })
    }
}

export const deleteTechs = (id) => async dispatch => {
    try {
   setLoading()
   await fetch(`/techs${id}`)
  
   
   dispatch({
       type : DELETE_TECH,
       payload : id
   })

  } catch (error) {
      dispatch({
        type : TECHS_ERROR,
        payload : error.response.statusText
      })
        }
}

export const setLoading = () => {
    return{
         type : SET_LOADING
    }
}