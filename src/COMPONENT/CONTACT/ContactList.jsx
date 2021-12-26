import React from 'react'
import './ContactList.css'
import Contact from './Contact'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function ContactList(){

    const contactList=[
        {   
            id:1,
            name:`Rosie Metts`
        },
        {
            id:2,
            name:`Jamie Laurenson`
        },
        {
            id:3,
            name:`Jamie Laurenson`
        },
        {
            id:4,
            name:`Elizabeth Hurton`
        },
        {
            id:5,
            name:`Danny Watson`
        },
        {
            id:6,
            name:`Reha Scarlett`
        },
        {
            id:7,
            name:`Elizabeth Hurton`
        },
        {
            id:8,
            name:`Jamie Laurenson`
        },
        {
            id:9,
            name:`Jamie Laurenson`
        },
        {
            id:10,
            name:`Danny Watson`
        }
    ]
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
                  {
                      contactList.map((res,ind)=>(
                        <Contact name={res?.name} key={ind}/>
                      ))
                  }
                </div>

            </div>
            </div>
        </div>
    )
        
    
}

export default ContactList