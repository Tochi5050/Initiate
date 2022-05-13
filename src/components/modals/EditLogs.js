import React, {useState, useEffect} from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import {connect} from 'react-redux'
import {updateLogs} from '../../actions/logActions'
import Techoptions from './Techoptions'

const EditLogs = ({updateLogs, current}) => {
  
    const[message, setMessage] = useState('')
    const[attention, setAttention] = useState(false)
    const[tech, setTech] = useState('')
    
    useEffect(() => {
        if(current){
            setMessage(current.message)
            setTech(current.tech)
            setAttention(current.attention)
            
        }
    },[current])
    
    const onSubmit = () =>{
        if(message === "" || tech === ''){
            M.toast({html: 'Please add a log and a tech!'})
        }else{
            const update = {
                id : current.id,
                message,
                attention,
                tech,
                date : new Date()
            }

            updateLogs(update)

            M.toast({html : `An update to the log has been made by ${tech}`})
        }
            
        
    }
  
    return (
        <div id="edit-logs" className="modal" style={editlogStyles}>
        <div className="modal-content">
            <h4>Edit System Log</h4>

        <div className="row">
        <div className="input-field">
            <input type="text" name="message" value={message} onChange={e => setMessage(e.target.value)}/>
            
        </div>
       </div>

       <div className="row">
          <select className="browser-default" name="tech" value={tech} onChange={e => setTech(e.target.value)}>
          <option value="" disabled selected>Select a Technician</option>
          <Techoptions/>
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

const mapStateToProps = state => ({
    current : state.log.current
})

const editlogStyles = {
    width : '75%',
    height : '75%'
}

export default connect(mapStateToProps,{updateLogs})(EditLogs)