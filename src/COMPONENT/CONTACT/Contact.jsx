import React from 'react'
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import { IconButton } from '@material-ui/core'
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import './Contact.css'

function Contact({name}){
    return(
                <div className='contact_list'>
                    <div className='contact_name'>
                      <PersonOutlineOutlinedIcon/>
                      <h4>{name}</h4> 
                    </div>
                    <div>
                    <IconButton className='contact_button'>
                        <EmailIcon fontSize='small' className='message'/>
                    </IconButton>
                    <IconButton>
                        <PhoneIcon fontSize='small' className='call'/>
                    </IconButton>
                    </div>

                </div>
    )
}

export default Contact