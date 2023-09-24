import React from 'react'
import JB from './JourneyBoard'
import Proj from './ProjectSection'
import SideBar from './NoticeBoard'
import blueicons from '../assets/blue-icons.png'
import expandarrow from '../assets/icons/expand.svg'
import './Body.css'

class Body extends React.Component{

    constructor(){
        super();
        this.state = {
            expand: false,
            classList: ["jb-contract", "head-contract"]
        }
    }

    toggleState =(event)=>{
        if(this.state.expand){
            this.setState({
                expand: false,
                classList: ["jb-contract", "head-contract"]
            })
        }
        else{
            this.setState({
                expand: true,
                classList: ["jb-expand", "head-expand"]
            })
        }
        event.currentTarget.classList.toggle("flip-img");
    }
    render(){
        const {expand, classList} = this.state;
        return(
            <div>
                <button className='submit button'>Submit Task</button>
                <img className='blue-icons' src={blueicons} alt="blue-icons"></img>
                <JB expand={expand} jbclass={classList[0]} headclass={classList[1]}/>
                <button className='expand-button' onClick ={this.toggleState}>
                    <img src={expandarrow} alt="expand"></img>
                </button>
                <Proj/>
                <SideBar/>
            </div>
        )
    }


    // render(){
    //     return(
    //         <div>
    //             <button className='submit button'>Submit Task</button>
    //             <img className='blue-icons' src={blueicons} alt="blue-icons"></img>
    //             <JB jbclass="this.state.classList[0]" headclass="this.state.classList[1]"/>
    //             <Proj/>
    //             {/* <SideBar/> */}
    //         </div>
    //     )
    // }
}

export default Body;