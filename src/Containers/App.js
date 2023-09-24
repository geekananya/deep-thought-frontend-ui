import React, {Component} from 'react'
import NavBar from '../Components/NavBar'
import Body from './Body'
import './App.css'

class App extends Component{
  render(){
    return(
      <div>
        <NavBar/>
        <Body/>
      </div>
    )
  }
}

export default App;