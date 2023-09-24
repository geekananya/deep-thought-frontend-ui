import React, {useState} from 'react'
import Header from './Header'
import './SectionWrapper.css'

function SectionWrapper(props) {

    const [isDescribed, setIsDescribed] = useState(true);

    const toggleExpand = () => {
        setIsDescribed(!isDescribed)
    }

    return(
        <>
            <div className={`section ${isDescribed}`}>
                <Header h={props.h} 
                    handleclick={toggleExpand}
                />
                <div className='descr'>
                {isDescribed && (
                    <div className="padding-d">
                        <span className="bold">Description : </span>
                        <span>{props.des}</span>
                    </div>
                )}
                </div>
                {props.children}
            </div>
        </>
    )
}

export default SectionWrapper;