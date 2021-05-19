import React from 'react'
import './Status.css'
import Progress from './PROGRESS/Progress'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function Status(props){
return(
<div className='div_1_child'>
  <div className='div_header'>
   <h4>{props.title}</h4>
   <h6><MoreHorizIcon/></h6>
  </div>
  <div className='value'>
   <div className='value_figure'>

     <div>
      <h4>{props.value}</h4>
      <h5 style={{color:props.percColor}}>{`+${props.perc}% `}</h5>
     </div>
    </div>
    <div className='value_graph'>
       <Progress val={props.val} color={props.color} theme={props.theme}/>
    </div>
 </div>
</div>  
)
}

export default Status
