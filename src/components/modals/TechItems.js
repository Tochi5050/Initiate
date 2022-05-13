import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { deleteTechs } from '../../actions/techActions'

const TechItems = ({tech, deleteTechs}) => {

const onDelete = (e) => {
  deleteTechs(tech.id)
}

  return (
    <li class="collection-item">
        <div>
            {tech.firstName} {tech.lastName}
            <a href="#!" class="secondary-content grey-text" onClick={onDelete}>
                <i class="material-icons">delete</i>
            </a>
        </div>
    </li>
  )
}

TechItems.propTypes = {
    tech : PropTypes.object.isRequired
}

export default connect(null, {deleteTechs})(TechItems)