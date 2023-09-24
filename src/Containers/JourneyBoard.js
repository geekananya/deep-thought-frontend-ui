import React from 'react'
import JourneyBoardExpand from './JourneyBoardExpand'
import './JourneyBoard.css'

export default function JourneyBoard (props){
    return(
        <div className={`jb ${props.jbclass} head-font`}>
            <div className={`head ${props.headclass} head-font`}>
                {
                    props.expand ?  <p className='head-text'>Journey Board</p> : false
                }
            </div>
            {
                props.expand ?  <JourneyBoardExpand/> : <div className='jb-1 color-blue flex'><p>1</p></div>
            }
        </div>
    )
}
