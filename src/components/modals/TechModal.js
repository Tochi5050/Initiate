import React, {useEffect} from 'react'
import TechItems from './TechItems'
import {connect} from 'react-redux'
import {getTechs} from '../../actions/techActions'

function TechModal({tech : {techs, loading}, getTechs}) {
  
  
  
  useEffect(()=> {
      getTechs()
      //eslint-disable-next-line
  },[])

  
  
    return (
    <div id="techs-modal" className="modal" >
         <div className="modal-content">
             <h4>Technician List</h4>
    <ul className="collection">
        {
            !loading && techs !== null && techs.map(tech => 
                <TechItems tech={tech} key={tech.id}/>)}
        
    </ul>
         </div>
    </div>
  )
}

const mapStateToProps = state => ({
    tech : state.tech
})

export default connect(mapStateToProps,{getTechs})(TechModal)

