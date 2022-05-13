import React from 'react'

function LogButton() {
  return (
    <div className="fixed-action-btn">
    <a href ="#log-modal" className="btn-floating btn-large waves-effect waves-light blue modal-trigger">
    <i className="material-icons">add</i>
    </a>
    <ul>
    <li><a href="#techs-modal" className="btn-floating green modal-trigger"><i class="material-icons">person</i></a></li>
    <li><a href="#new-techs-modal" className="btn-floating red darken-1 modal-trigger"><i class="material-icons">person_add</i></a></li>
    </ul>
    </div>
  )
}

export default LogButton