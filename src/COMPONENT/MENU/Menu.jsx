import React from 'react'
import './Menu.css'
import HomeIcon from '@material-ui/icons/Home';
import AssessmentIcon from '@material-ui/icons/Assessment';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import FolderIcon from '@material-ui/icons/Folder';
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';
import PeopleOutlineOutlinedIcon from '@material-ui/icons/PeopleOutlineOutlined';
import ChatIcon from '@material-ui/icons/Chat';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import SettingsIcon from '@material-ui/icons/Settings';
import DeckRoundedIcon from '@material-ui/icons/DeckRounded';

function Menu(){
    return(
        <div className='menu'>
            <DeckRoundedIcon fontSize='large' className='logo'/>
            <div className='menu__function'>
            <div className='menu__function__main'>
               <div className='menu__option menu__option--active'>
                <HomeIcon/>
               </div> 
               <div className='menu__option '>
               <AssessmentIcon/>
               </div>
               <div className='menu__option'>
               <AssignmentOutlinedIcon/>
               </div>
               <div className='menu__option'>
               <FolderIcon/>
               </div>
               <div className='menu__option'>
               <AssignmentTurnedInOutlinedIcon/>
               </div>
               <div className='menu__option'>
               <PeopleOutlineOutlinedIcon/>
               </div>
               <div className='menu__option'>
               <ChatIcon/>
               </div>
               <div className='menu__option'>
               <ExitToAppOutlinedIcon/>
               </div>
            </div>
            <div className='menu__function__setting'>
              <div className='menu__option'>
               <SettingsIcon/>
              </div>
               
            </div>
            </div>
        </div>
    )
}

export default Menu;