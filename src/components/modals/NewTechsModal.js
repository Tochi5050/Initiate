import React, {useState} from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import {connect} from 'react-redux'
import { addTech } from '../../actions/techActions'

function NewTechsModal({addTech}) {

const[firstName, setFirstName] = useState('')
const[lastName, setLastName] = useState('')

const onSubmit = () =>{
    if( firstName === "" || lastName === ''){
        M.toast({html: 'Please add a Firstname & Lastname'})
    }else{
      
        addTech({
          firstName,
          lastName
        })

        M.toast({html: 'New Tech added'})

        setFirstName('')
        setLastName('')
    }
}

  return (
    <div id="new-techs-modal" className="modal" >
       <div className="modal-content">
          <h4>New Technicians</h4>

        <div className="row">
        <div className="input-field">
            <input type="text" name="firstName" value={firstName} onChange={e => setFirstName(e.target.value)}/>
            <label htmlFor="firstName" classNameName='active'>First Name</label>
        </div>
       </div>

       <div className="row">
        <div className="input-field">
            <input type="text" name="lastName" value={lastName} onChange={e => setLastName(e.target.value)}/>
            <label htmlFor="lastName" classNameName='active'>Last Name</label>
        </div>
       </div>

       </div>

    <div class="modal-footer">
      <a href="#!" class="modal-close waves-effect waves-green btn blue" onClick={onSubmit}>Enter</a>
    </div>

    </div>
  )
}



export default connect(null, {addTech})(NewTechsModal)