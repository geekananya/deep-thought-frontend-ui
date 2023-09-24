import info from '../assets/icons/info.png'

function Header(props){
    return(
        <div className='header'>
            <p className='heading-black'>{props.h}</p>
            <img className='icon' 
                src={info} 
                alt="show-info" 
                width='32px'
                onClick={props.handleclick}
                ></img>          
        </div>
    )
}

export default Header;