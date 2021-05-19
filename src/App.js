import React from 'react'
import './App.css';
import Header from './COMPONENT/Header'
import Status from './COMPONENT/STATUS/Status'
import Graph from './COMPONENT/STATUS/GRAPH/Graph'
import Doughnut  from './COMPONENT/STATUS/PIE/Pie';
import LinearProgress from './COMPONENT/STATUS/LINEAR_PROGRESS/Linear_progress'
import Menu from './COMPONENT/MENU/Menu'
import Contact from './COMPONENT/CONTACT/ContactList';
import SendIcon from '@material-ui/icons/Send';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ReferalBox from './COMPONENT/REFERALBOX/ReferalBox';

function App() {
  return (
    <div className="app">
        <div className='app__menu'>
          <Menu/>
        </div>
        <div className='app__body'>
            <div className='app__body__header'>
              <Header/>
            </div>
            <div className='app__body__content'>
                 <div className='app__body__content__data'>


                     <div className='div_1'>
                         <Status title='Total Applications' value='7956' perc='3.59' percColor='#9871ef'  theme='theme_1' val={30}/>
                     </div>

                     <div className='div_2'>
                         <Status title='Shortlisted Candidates' value='7956' perc='3.59' percColor='#2d9cfc'  theme='theme_2' val={50}/> 
                    </div>

                    <div className= 'div_3'>
                        <Status title='Total Applications' value='7956' perc='3.59' percColor='#fb515f'   theme='theme_3' val={70}/> 
                    </div>




                    <div className='div_4'>
                       <div className='div4__header'>
                           <h5 style={{color:'#fff'}}>Applications Received</h5> 
                           <h6>This Year</h6> 
                           <h6>This Week</h6> 
                           <h6>Today</h6> 
                           <MoreHorizIcon/>                      
                       </div>
                          <div >
                           <Graph/>
                          </div>   
                      </div>
                    <div className='div_5'>
                      <div className='div5__header'>
                          <h5 style={{color:'#fff'}}>Total Application</h5>              
                      </div>
                          <LinearProgress  value={50} caption='Application'/>
                          <LinearProgress  value={30} caption='ShortListed'/>
                          <LinearProgress  value={70} caption='Rejected'/>
                          <LinearProgress  value={10} caption='On hold'/>
                          <LinearProgress  value={40} caption='Finalised'/>
                    </div>
                    <div className='div_6'>
                       <div className='div6__header'>
                          <h5 style={{color:'#fff'}}>Referals and Campaign Stats</h5> 
                          <div className='div6__header__right'>
                             <SendIcon/>
                             <div className='div6__header__right__info'>
                                  <h6>40 Campaigns sent in total</h6>
                                  <h6>4 Campaigns sent in last month</h6>
                             </div>
                          </div>             
                       </div>

                       <div className='referal_container'>
                          <ReferalBox name='Users Reached' value={7956} percentage={3.59}/>
                          <ReferalBox name='Referals'      value={662} percentage={9.01}/>
                          <ReferalBox name='Users Reached' value={1478} percentage={39.18}/>
                          <ReferalBox name='Users Reached' value={564} percentage={12.00}/>
                       </div>

                       <div className='referal_button'>
                               <button>Start a New Campaign now</button>
                               <button>Pause All Running Campaigns</button>
                       </div>
                    </div>
                    <div className='div_7'>
                          <div className='div7__header'>
                           <h5 style={{color:'#fff'}}>Open Position By Department</h5>
                           <MoreHorizIcon/>            
                          </div>

                          <div>
                            <Doughnut/>
                          </div>   

                   </div>
                   </div>
                   <div className='app__body__content__contact'>
                     <Contact/>
                   </div>
            </div>
        </div>
    </div>
  );
}

export default App;
