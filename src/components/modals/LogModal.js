import React, {useState} from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import {connect} from 'react-redux'
import { addLogs } from '../../actions/logActions'
import Techoptions from './Techoptions'

function LogModal({addLogs}) {

const[message, setMessage] = useState('')
const[attention, setAttention] = useState(false)
const[tech, setTech] = useState('')


const onSubmit = () =>{
    if(message === "" || tech === ''){
        M.toast({html: 'Please add a log and a tech!'})
    }else{

    const newLogs = {
      message,
      tech,
      attention,
      date : new Date()
    }

    addLogs(newLogs)

    M.toast({html: `Log added successfully by ${tech}`})
      
      
       setMessage('')
       setAttention(false) 
       setTech('')
    }
}


  return (
    <div id="log-modal" className="modal" style={modalStyles}>
        <div className="modal-content">
            <h4>Enter System Log</h4>

        <div className="row">
        <div className="input-field">
            <input type="text" name="message" value={message} onChange={e => setMessage(e.target.value)}/>
            <label htmlFor="Log Message" classNameName='active'>Log Message</label>
        </div>
       </div>

       <div className="row">
          <select className="browser-default" name="tech" value={tech} onChange={e => setTech(e.target.value)}>
          <option value="" disabled selected>Select a Technician</option>
          <Techoptions />
          </select>
       </div>

       <div className="row">
       <label>
        <input type="checkbox" 
        value={attention}
        checked={attention}
        onClick={e => {setAttention(!attention)}}
        />
        <span>Needs attention?</span>
      </label> 
       </div>
    </div>

    <div class="modal-footer">
      <a href="#!" class="modal-close waves-effect waves-green btn blue" onClick={onSubmit}>Enter</a>
    </div>
    </div>
  )
}



const modalStyles = {
    width : '75%',
    height : '75%'
}

export default connect(null, {addLogs})(LogModal)