import React, { useState, } from 'react';
import { Collapse, Card, Image } from 'antd';
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BsArrowUpSquare } from "react-icons/bs"
import { BackTop } from 'antd';

import Index from "./pages/Index"
import About from "./pages/About"
import Register from './pages/register';
import RegisterAmb from './pages/RegisterAmb';
import Admin from './pages/Admin';

const { Panel } = Collapse;
function App() {
  const [click, setClick] = useState(false)
  const closeMenu = async () => {
    await setClick(false)
  }
  const handleClick = () => { setClick(!click) }
  return (<>
    <div className='header'>
      <nav className='navbar'>
        <a href='/' >
          <img src='target001.png' />
        </a>
        <div className='hamburger' onClick={handleClick}>
          {click ? (<FaTimes size={30} style={{ color: '#999' }} />)
            : (<FaBars size={30} style={{ color: '#999' }} />)}

        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li >
            <Link className='nav-item' active="active" to="home" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>HOME</Link>
          </li>
          <li >
            <Link className='nav-item' active="active" to="about" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>ABOUT US</Link>
          </li>

          <li >
            <Link className='nav-item' active="active" to="modules" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>MODULES</Link>
          </li>
          <li >
            <Link className='nav-item' active="active" to="fees" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>FEES STRUCTURE</Link>
          </li>
          <li >
            <Link className='nav-item' active="active" to="SCHEDULE" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>SCHEDULE</Link>
          </li>
          <li >
            <Link className='nav-item' active="active" to="ambassadors" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>AMBASSADOR</Link>
          </li>

          <li >
            <Link className='nav-item' active="active" to="team" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>OUR TEAM</Link>
          </li>

        </ul>
      </nav>


    </div>



    <BrowserRouter>
      <div className='Background'>




        <Routes>

          <Route path='/' element={<Index />} />
          <Route path='/about' element={<About />} />
          <Route path='/register' element={<Register />} />
          <Route path='/registerambrassador' element={<RegisterAmb />} />
          <Route path='/admin' element={<Admin />} />


        </Routes>
        <BackTop>
          <div className='backtotop' ><BsArrowUpSquare style={{ height: '100%', width: '100%' }} /></div>
        </BackTop>



      </div>
    </BrowserRouter>





    <div className="App">











      <div className='Footer'>

        <div className='subfooter'><h3>ABOUT US</h3>
          SZABIST Engineering Festival “ZAB E-FEST” is an interuniversity yearly mega event organized by the SZABIST University Computer Sciences, Mechatronics Engineering, and Robotics & Artificial Intelligence departments along with the collaboration of the ORIC Department. Since its inception in 2017, it has been an integral part of SZABIST's annual events. Students from universities nationally and internationally are invited to showcase their projects, skills, and capabilities by participating in competitions in modules of their choice.</div>

        <div className='subfooter'><h3>CONTACT INFO</h3>
          <b>Address</b>: SZABIST 100 campus 3rd Ave, Block 5 Clifton, Karachi, Karachi City, Sindh 75600.<br />

          <b>Phone</b>: 92-21 111-922-478<br />
          <b>Email</b>: zabefest@szabist.pk</div>


        {/* <div className='subfooter'><h3>IMPORTANT LINK</h3>


          <li className='nav-item'>
            <Link active="active" to="home" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>HOME</Link>
          </li>
          <li className='nav-item'>
            <Link active="active" to="about" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>ABOUT US</Link>
          </li>

          <li className='nav-item'>
            <Link active="active" to="modules" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>MODULES</Link>
          </li>
          <li className='nav-item'>
            <Link active="active" to="fees" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>FEES STRUCTURE</Link>
          </li>
          <li className='nav-item'>
            <Link active="active" to="ambassadors" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>AMBASSADOR</Link>
          </li>

          <li className='nav-item'>
            <Link active="active" to="team" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>OUR TEAM</Link>
          </li>



        </div> */}
      </div>
      <div style={{ color: 'white', backgroundColor: '#060018', paddingBottom: '10px', paddingTop: '10px', fontSize: '1rem', boxShadow: '0 0 1px 1px #fff' }}>Copyright ©2023 All rights reserved. SZABIST | ZAB E-Fest</div>


    </div >

  </>
  );
}

export default App;
