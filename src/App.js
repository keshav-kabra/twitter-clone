import './App.css';
import React from 'react';
import { Sidebar } from './Sidebar';


class App extends React.Component {
  render(){
    return(
      <div className="app">
        
        <Sidebar />
      </div>
    )
    

  }
}

export default App;
