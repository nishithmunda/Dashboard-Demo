import React from 'react'
import './ContactList.css'
import Contact from './Contact'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function ContactList(){
    return(
        <div className='contact'>
            <div className='contact__info'>
            <div className='image_container'>
              <div className='image_header'>
                 <h6>Hello John Bayer</h6>
                 <h6>You have 10 New Application Today!</h6>
              </div>
              <div className='image'>

              </div>
            </div>
            <div className='candidate_list'>
                <div className='contact__header'>
                    <h4>New Applicants</h4>
                    <ArrowForwardIosIcon fontSize='small'/>
                </div>
                
                <div className='to_contact'>
                  <Contact name='Rosie Metts.'/>
                  <Contact name='Jamie Laurenson'/>
                  <Contact name='Jamie Laurenson'/>
                  <Contact name='Elizabeth Hurton'/>
                  <Contact name='Danny Watson'/>
                  <Contact name='Reha Scarlett'/>
                  <Contact name='Elizabeth Hurton'/>
                  <Contact name='Jamie Laurenson'/>
                  <Contact name='Jamie Laurenson'/>
                  <Contact name='Danny Watson'/>
                </div>

            </div>
            </div>
        </div>
    )
        
    
}

export default ContactList