import React, {Fragment, useEffect} from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import './App.css';
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';
import LogButton from './components/button/LogButton';
import LogModal from './components/modals/LogModal';
import NewTechsModal from './components/modals/NewTechsModal';
import TechModal from './components/modals/TechModal';
import EditLogs from './components/modals/EditLogs';
import {Provider} from 'react-redux'
import store from './store';

const App = () => {

  useEffect(() => {
    //Initialize the js file
    M.AutoInit();
})

  return (
    <Provider store={store}>
    <Fragment>
      <SearchBar/>
      <div className='container'>
      <LogButton/>
      <LogModal/>
      <EditLogs/>
      <NewTechsModal/>
      <TechModal/>
      <Logs/>
      </div>
    </Fragment>
    </Provider>
  );
}

export default App;
