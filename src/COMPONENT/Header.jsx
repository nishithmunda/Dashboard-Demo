import React from 'react'
import './Header.css'
import { Avatar} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'

function Header(){
    return( 
    <div className='header'>

     <div className='header__left'>
       <h4>Dashboard</h4>
       <h5>DATE</h5>
     </div>
     <div className='header__right'>
                 <div className='header__info'>
                    <h4>John Bayer</h4>
                    <Avatar src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSI3A23ZoZyQ9TgWdTOJSXLClX08sYm25C-Q&usqp=CAU'}/>
                </div>
        
                <div className="header__input">
                <button>+ ADD</button>  
                <SearchIcon/>
                <input placeholder="Search for Application" type="text"></input>
            </div>
     </div>

    </div>  
    )
}

export default Header;