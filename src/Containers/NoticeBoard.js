import { useState } from 'react';
import plus from '../assets/icons/plus.svg'
import cross from '../assets/icons/cross.png'
import './NoticeBoard.css'

function NoticeBoard(){

    const [notice, setNotice] = useState(false);
    const [icon, setIcon] = useState(plus);

    const showNotice = () => {
        
        if(notice){
            setIcon(plus);  //false
        }
        else
        {
            setIcon(cross); //true
        }
        setNotice(!notice);
    }

    return(
        <div className="notice-board"> 
            <div className="notice header">
                <img className="shownotice" onClick={showNotice} src={icon} alt="show-notice"></img>
                <p>Notice Board</p>
            </div>
            {notice && <p className='notice-board-exp'></p>}
        </div>
    )
}

export default NoticeBoard;