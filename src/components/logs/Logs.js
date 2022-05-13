import React, {useEffect} from 'react'
import Logitems from './Logitems'
import Preloader from '../layout/Preloader'
import {connect} from 'react-redux'
import {getLogs} from '../../actions/logActions'
import PropTypes from 'prop-types'



function Logs({log : {logs,loading}, getLogs }) {

useEffect(() => {
    getLogs()
    //eslint-disable-next-line
},[])



if(loading || logs === null){
   return <Preloader/>
}

return (
    <ul className="collection with-header" >
     <li className="collection-header"><h5 className='center'><b>System Logs</b></h5></li>
        {!loading && logs.length === 0 ? (<p className="center">Please log in your updates</p>) : (logs.map(log => 
            <li class="collection-item"><Logitems log={log}/></li>
            ))}
    </ul>
  )
}

Logs.propTypes = {
    log : PropTypes.object.isRequired

}

const mapStateToProps = state => ({
   log : state.log
})


export default connect(mapStateToProps, {getLogs})(Logs)

