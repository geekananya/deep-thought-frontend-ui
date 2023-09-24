import {mgmt, head,descr} from './text-content'

function JourneyBoardExpand (){
    return(
        <div>
            <ul>
                <li>
                    <p className='head-font bold600'>{mgmt[0]}</p>
                    <ul>
                        {head.map((h)=> <li>{h}</li>)}
                    </ul>
                </li>
            </ul>
        </div>
    )
}
export default JourneyBoardExpand;