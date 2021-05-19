import React from 'react'
import './ReferalBox.css'
function ReferalBox({name,value, percentage}){
    return(
        <div className='box'>
        <h6 style={{color:'#fff'}}>{name}</h6>
        <h6 style={{color:'#2d9cfc'}}>{`+`+percentage+`%`}</h6>
        <h4 style={{color:'#fff'}}>{value}</h4>
       </div>  
    )
}

export default ReferalBox