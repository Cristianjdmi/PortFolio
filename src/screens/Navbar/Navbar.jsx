import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import hamBtn from  './hamburger-menu.svg';

const Navbar = () => {
    const [showLinks,setShowLinks] = useState(true)
    const [showBtn , setShowBtn] = useState(false)

    let handleClick = ()=>{
        setShowLinks(!showLinks);
    }

    window.addEventListener('resize',(e)=> {
        if (e.target.innerWidth > 768) {
            setShowBtn (false)
            setShowLinks(true)
        }else{
            setShowBtn (true)
            setShowLinks(false)
        }
    })

    useEffect(()=>{
        if (window.innerWidth > 768) {
            setShowBtn (false)
            setShowLinks(true)
        }else{
            setShowBtn (true)
            setShowLinks(false)
        }
    },[])
  return (
    <div className='navbar-container'>
        <div className='navbar-name'>
            <div>Cristian Ghali</div>
            {showBtn && (<img alt='Hambuger menu' src={hamBtn} onClick={handleClick} />)}
        </div>
        {showLinks && ( <div className='navbar-links-container'>
            <a href='#home'>Home</a>
            <a href='#aboutme'>About Me</a>
            <a href='#Linguaggi'>Linguaggi</a>
            <a href='#portfolio'>Portfolio</a>
            <a href='#contact'>Contatto</a>
        </div>)}
       
    </div>
  )
}

export default Navbar
