import {useState} from 'react'
import Logo from './Logo.svg'
import User from './user.svg'
import './header.modules.css'
import  Burger from './burger.svg'
import Registration from './user.svg'

const ItHeader = () => {
  const {user, setUser}=useState('wertyui')

  console.log(user);
  
  return (
    <>
    <div style={{height:'80px',display:'flex', justifyContent:'space-between',alignItems:'center', padding:'0 36px',boxShadow: '0px 4px 4px 0px #00000040'}}>
        <div>
            <img src={Logo}/>
        </div>

        <div style={{display:'flex', columnGap:'24px'}}  className='div__nav'>
            <div style={{font:'Inter', fontSize:'24px', fontWeight:'500'}} className='nav'>Каталог</div>
            <div style={{font:'Inter', fontSize:'24px', fontWeight:'500'}} className='nav'>Корзина</div>
        </div>

        <div className='div__button' >
           {!user && <button   style={{width:'110px', height:'36px',borderRadius:'8px', backgroundColor:'rgb(36, 221, 19)', color:'white', boxShadow:'0px 4px 4px 0px #00000040',font:'Inter', fontSize:'16px', fontWeight:'700', border:'none' }} >Войти</button>}
           {user && <img src={Registration}/>}
        </div>

        <div className='burger'>
          <img src={Burger} />
        </div>
        
    </div>
    </>
  )
}

export default ItHeader
