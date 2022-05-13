import PropTypes from 'prop-types'
import React from 'react'
import Moment from 'react-moment'
import M from 'materialize-css'
import { deleteLogs, setCurrent} from '../../actions/logActions'
import {connect} from 'react-redux'

const Logitems = ({log, deleteLogs, setCurrent}) => {
 
  const onDelete = () => {
    deleteLogs(log.id)

    M.toast({html : 'Log item successfully deleted'})
  }


  return (
    
    <div>
        <a href="#edit-logs" 
        className={`modal-trigger ${log.attention ? 'red-text' : 'blue-text'}`} 
        onClick={() => setCurrent(log)}
        >
          {log.message}  
        </a><br/>
        <span className='grey-text'>
            
            
            <span className='black-text'>ID #{log.id}</span>{' '}last updated by <span className='black-text'>{log.tech}</span>{' '}
            <Moment fromNow>{log.date}</Moment>
            

            <a href="#!" className='secondary-content' onClick={onDelete}>
            <i className="material-icons grey-text">delete</i>
            </a>

            
            </span>
        
        
    </div>
  )
}

Logitems.propTypes = {
  log: PropTypes.object.isRequired,
  deleteLogs : PropTypes.func.isRequired,
  setCurrent : PropTypes.func.isRequired
}



export default connect(null, {deleteLogs, setCurrent})(Logitems)