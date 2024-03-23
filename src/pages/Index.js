import React, { useState } from 'react'
import { FaLocationArrow, FaCalendarDay } from 'react-icons/fa'
import { Collapse, Image } from 'antd';
import '../App.css';
import '../button.css';
import { NavLink as Link } from 'react-router-dom';

const { Panel } = Collapse;
var Scroll = require('react-scroll');

var Element = Scroll.Element;


function Index() {


  // ss
  const [days, setdays] = useState(true)
  // const handleClick = () => setClick(!click)
  // const [click, setClick] = useState(false)



  return (
    <div className="App">


      <div id='home' style={{ marginTop: '100px' }}></div>
      <div className='bg2'>

        <div className='bg'>



          <div style={{ width: '90%', display: 'flex', justifyContent: "space-between",paddingTop:"7.5vh" }} >


            <img className='bgimg1' src='Szabist Logo.png' loading='lazy' alt='logo' />
            <img src='target002.png' loading='lazy' alt='img' className='bgimg2' width={"300px"} height={"100%"} />
            <img src='logo.png' className='bgimg3' loading='lazy' alt='logo' />

          </div>


          <div id='home' className='uperdiv' >


            <div style={{ width: '95%', fontSize: '70%' }}>
              <h5 >Inter University Competition Organized by
                Departments of Computer Science | Mechatronics
                Engineering | Robotics andArtificial Intelligence
              </h5>

              <h4 >16th and 17th May 2023</h4>
              <h3 >
                UPTO RS. 1.5 MILLION CASH PRIZES</h3>
              <Link to="/register" className="animated-button1">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <h3 style={{ margin: '5px' }}> REGISTER NOW</h3>
              </Link>
              {/* <button className='regiterbutton' onClick={registermodule} >REGISTER NOW</button> */}

            </div>
          </div>

        </div>


        <div id='about' className='aboutus'>



          <div className='aboutpra'>

            <div >
              <h2 style={{
                // background: "rgb(95, 34, 43)",
                background: "linear-gradient(90deg, rgba(95, 34, 43, 1) 0%, rgba(8, 17, 59, 1) 100%)",
                color: '#fff',
                padding: '10px',
                marginBottom: '10px',
                fontSize:"1em"
              }}>ABOUT</h2>
            </div>
            <p className='aboutusparraa'>SZABIST Engineering Festival “ZAB E-FEST” is an interuniversity yearly mega event organized by the SZABIST
              University Computer Sciences, Mechatronics Engineering,
              and Robotics &amp; Artificial Intelligence departments along
              with the collaboration of the ORIC Department. Since its
              inception in 2017, it has been an integral part of SZABIST's
              annual events. Students from universities nationally and
              internationally are invited to showcase their projects, skills,
              and capabilities by participating in competitions in
              modules of their choice.
            </p>
            <p className='aboutusparraa'>ZAB E-FEST aligns itself with SZABIST’s core cultural
              values of serving society and community at large, by
              providing a platform for the youth of Pakistan to showcase
              their talents and skills in fierce competitions, displaying
              cutting-edge technology and presenting it innovatively.
              For that, this year we have introduced modules
              incorporating “Robotics and Artificial Intelligence” &amp;
              “Technopreneurship”, as it provides the perfect
              opportunity for students to think outside the box and
              solve real-world problems simultaneously. Moreover, the
              addition of Panel Talks, Career Counseling Sessions, and
              Workshops allows students to gain exposure to future
              technologies and learn how things are evolving with the
              help of industry leaders.</p>

            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around' }}>
              <div className="caption">
                <FaLocationArrow />
                <h5 style={{ margin: '0' }}>Where</h5>
                <p style={{ margin: '0' }}>Szabist Main Campus</p>
              </div>

              <div className="caption">
                <FaCalendarDay />
                <h5>When</h5>
                <p style={{ margin: '0' }}>May 16-17, 2023</p>
              </div>
            </div>


          </div>

          <div className='aboutimg' >
            <Image className='aboutimg2' src="zb4.jpg" width="50%" loading='lazy' alt="" />
            <Image className='aboutimg2' src="zb5.jpg" width="50%" loading='lazy' alt="" />
            <Image className='aboutimg2' src="zb6.jpg" width="50%" loading='lazy' alt="" />
            <Image className='aboutimg2' src="zb3.jpg" width="50%" loading='lazy' alt="" />

            <Image className='aboutimg2' src="zb2.jpg" width="33%" loading='lazy' alt="" />
            <Image className='aboutimg2' src="zb1.jpg" width="50%" height="100%" loading='lazy' alt="" />
          </div>
        </div>



        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: "space-around", width: '95%' }}>
          <h1 id='modules' className='section-heading'>CS MODULES</h1>
          <div style={{
            display: "flex",
            flexWrap: 'wrap',
            paddingBottom: "2%",

            textAlign: 'left',
            fontSize: '80%',
            flexDirection: 'row',
            paddingBottom: "2%",
            alignSelf: "center"

          }}>
            <div className='mainmodulediv'  >
              <div className='mainmoduledivimg'>
                <img src='icon/icon1-png.png' className='iconnn' width={"150px"} height={"130px"} loading='lazy' alt='icon' />
              </div>
              <div>
                <h4 style={{ margin: '0' }}>Mobile development</h4>
                <div >
                  Unleash your creativity and coding skills inmobile app development! Build innovative appsthat cater to today's needs and stand a chanceto win exciting prizes
                </div>
              </div>
            </div>
            <div className='mainmodulediv'  ><div className='mainmoduledivimg'><img src='icon/icon2-png.png' className='iconnn' width={"100%"} height={"100%"} loading='lazy' alt='icon' /> </div><div><h4 style={{ margin: '0' }}>Game Development</h4> <div >Calling out all the game developers to showcasethere game designing and development skills. Itinvolves concept generation, design, build &model characters and maps.The best performerwill be awarded with exicting prizes</div></div></div>
            <div className='mainmodulediv'  ><div className='mainmoduledivimg'><img src='icon/icon3-png.png' className='iconnn' width={"100%"} height={"100%"} loading='lazy' alt='icon' /> </div><div><h4 style={{ margin: '0' }}>Database Contest</h4> <div >A database competition is an event whereparticipants are invited to design, develop, anddemonstrate their skills in creating effective andefficient database .</div></div></div>
            <div className='mainmodulediv'  ><div className='mainmoduledivimg'><img src='icon/icon4-png.png' className='iconnn' width={"100%"} height={"100%"} loading='lazy' alt='icon' /> </div><div><h4 style={{ margin: '0' }}>Debugging Competition</h4> <div >Always like to solve problems? Get this greatopportunity to showcase your debugging skills inthis E-Fest and win exciting prizes!</div></div></div>
            <div className='mainmodulediv'  ><div className='mainmoduledivimg'><img src='icon/icon5-png.png' className='iconnn' width={"100%"} height={"100%"} loading='lazy' alt='icon' /> </div><div><h4 style={{ margin: '0' }}>E-Sports</h4> <div >Do you consider yourself a Pro Gamer? Why notput your skills to test as the ZAB E-FEST will be ashowdown for all the gamers to compete in theirfavourite games and win exciting prizes! Thegames include CS:GO, PUBG, FIFA, Tekken etc.</div></div></div>
            <div className='mainmodulediv'  ><div className='mainmoduledivimg'><img src='icon/icon6-png.png' className='iconnn' width={"100%"} height={"100%"} loading='lazy' alt='icon' /> </div><div><h4 style={{ margin: '0' }}>Web Developing Competition</h4> <div >Whether you're a seasoned web developer or juststarting in the field, the Web Dev Challenge 2023is an excellent opportunity to grow your skillsand get recognized. So what are you waiting for?Sign up now and show us what you've got!</div></div></div>
            <div className='mainmodulediv'  ><div className='mainmoduledivimg'><img src='icon/icon7-png.png' className='iconnn' width={"100%"} height={"100%"} loading='lazy' alt='icon' /> </div><div><h4 style={{ margin: '0' }}>Technopreneurship Competition</h4> <div >Participants will be able to showcase theirbusiness ideas to experts in the technologicalsector and hone their entrepreneurial skills</div></div></div>

            <div className='mainmodulediv'  ><div className='mainmoduledivimg'><img src='icon/icon8-png.png' className='iconnn' width={"100%"} height={"100%"} loading='lazy' alt='icon' /> </div><div><h4 style={{ margin: '0' }}>Speed coding contest</h4> <div >Can you code? Participate in speed coding thisE-fest and unveil your coding skills. Write outa full program in a certain time frame and geta chance to win exciting prizes</div></div></div>
            <div className='mainmodulediv'  ><div className='mainmoduledivimg'><img src='icon/icon21-png.png' className='iconnn' width={"100%"} height={"100%"} loading='lazy' alt='icon' /> </div><div><h4 style={{ margin: '0' }}>FYP Display</h4> <div >Final year project display is a greatopportunity for students to showcase theirresearch, skills and creativity to the academiccommunity.</div></div></div>
            <div className='mainmodulediv'  ><div className='mainmoduledivimg'><img src='icon/icon10-png.png' className='iconnn' width={"100%"} height={"100%"} loading='lazy' alt='icon' /> </div><div><h4 style={{ margin: '0' }}>AI Projects Exhibition</h4> <div >Students who have utilized the power of AI tobuild something useful will exhibit theirprojects and skills to the people who haveachieved milestones in the 'ArtificialIntelligence' domain of Computer Science.</div></div></div>
            <div className='mainmodulediv'  ><div className='mainmoduledivimg'><img src='icon/icon11-png.png' className='iconnn' width={"100%"} height={"100%"} loading='lazy' alt='icon' /> </div><div><h4 style={{ margin: '0' }}>Graphic Designing Competition</h4> <div >Unleash your creativity and showcase yourdesigning skills in a thrilling GraphicDesigning competition. Join the competitionand bring your vision to life by creating user-friendly graphics.</div></div></div>
            <div className='mainmodulediv'  ><div className='mainmoduledivimg'><img src='icon/icon12-png.png' className='iconnn' width={"100%"} height={"100%"} loading='lazy' alt='icon' /> </div><div><h4 style={{ margin: '0' }}>UI Designing Competition</h4> <div >Get ready to showcase your design talent!Our UI/UX competition invites you to createstunning interfaces using HTML and CSS.Compete with other participants and impressthe judges for a chance to win prizes andrecognition</div></div></div>
            <div className='mainmodulediv'  ><div className='mainmoduledivimg'><img src='icon/icon13-png.png' className='iconnn' width={"100%"} height={"100%"} loading='lazy' alt='icon' /> </div><div><h4 style={{ margin: '0' }}>workshops & Career Counselling</h4> <div >Students may struggle with communicationwhen working with other professionals in theirfield. A workshop contact can aid in developingeffective communication skills. Careercounseling can also assist students in jobsearching and understanding the job marketfor new graduates.</div></div></div>
          </div>

          <h1  className='section-heading'>ME MODULES</h1>
          <div style={{
            display: "flex",
            flexWrap: 'wrap',
            textAlign: 'left',
            fontSize: '80%',
            flexDirection: 'row',
            alignSelf: "center"
          }}>


            <div className='mainmodulediv'  ><div className='mainmoduledivimg'><img src='icon/icon14-png.png' className='iconnn' width={"100%"} height={"100%"} loading='lazy' alt='icon' /> </div><div><h4 style={{ margin: '0' }}>LINE FOLLOWING ROBOT COMPETITION</h4> <div >The robots will be capable to follow theassigned black line track/s. There are twocategories: logic based and microcontroller</div></div></div>
            <div className='mainmodulediv'  ><div className='mainmoduledivimg'><img src='icon/icon15-png.png' className='iconnn' width={"100%"} height={"100%"} loading='lazy' alt='icon' /> </div><div><h4 style={{ margin: '0' }}>BALL SHOOTING ROBOT</h4> <div >Participants will create an autonomousrobot that would be shooting the balls onrespective cards.</div></div></div>
            <div className='mainmodulediv'  ><div className='mainmoduledivimg'><img src='icon/icon16-png.png' className='iconnn' width={"100%"} height={"100%"} loading='lazy' alt='icon' /> </div><div><h4 style={{ margin: '0' }}>EGG DROP COMPETITION</h4> <div >The team will be creating a protectivelanding craft for raw egg/s. The eggwould be dropped from specified height.</div></div></div>
            <div className='mainmodulediv'  ><div className='mainmoduledivimg'><img src='icon/icon17-png.png' className='iconnn' width={"100%"} height={"100%"} loading='lazy' alt='icon' /> </div><div><h4 style={{ margin: '0' }}>STRAW TOWER COMPETITION</h4> <div >The Team would be given two hours toconstruct tower using Straws etc</div></div></div>
            <div className='mainmodulediv'  ><div className='mainmoduledivimg'><img src='icon/icon21-png.png' className='iconnn' width={"100%"} height={"100%"} loading='lazy' alt='icon' /> </div><div><h4 style={{ margin: '0' }}>FYD DISPLAY</h4> <div >A well-presented display of the final yearprojects related to mechatronics field(Robotics, Automation, Fluid Mechanics,Heat Transfer, Al etc).</div></div></div>
            <div className='mainmodulediv'  ><div className='mainmoduledivimg'><img src='icon/icon18-png.png' className='iconnn' width={"100%"} height={"100%"} loading='lazy' alt='icon' /> </div><div><h4 style={{ margin: '0' }}>START-UP IDEA</h4> <div >A well-presented business Start-up idearelated to any field</div></div></div>
            <div className='mainmodulediv'  ><div className='mainmoduledivimg'><img src='icon/icon19-png.png' className='iconnn' width={"100%"} height={"100%"} loading='lazy' alt='icon' /> </div><div><h4 style={{ margin: '0' }}>CATAPULT SHOOTING COMPETITION</h4> <div >Contestants will design and construct acatapult / trebuchet that will launch atennis ball to hit five different targets atdifferent heights.</div></div></div>
            <div className='mainmodulediv'  ><div className='mainmoduledivimg'><img src='icon/icon20-png.png' className='iconnn' width={"100%"} height={"100%"} loading='lazy' alt='icon' /> </div><div><h4 style={{ margin: '0' }}>SPEED CAD COMPETITION</h4> <div >The participants would be given an objectof complex geometries. They would berequired to design a replica of it.</div></div></div>

          </div>



        </div>





        <Element id='fees' name="myScrollToElement" className='feess' >



          <h1 className='section-heading'>FEES STRUCTURE</h1>




          <h2 className='section-heading-2' style={{marginTop:"10vh"}}>CS Modules</h2>
          <div className="subpart">
            {/* <h3 className='feeheadingpc' style={{
              background: "rgb(95, 34, 43)",
              color: '#fff',
              padding: '10px',
              marginBottom: '10px',
              width: '20px',
              alignItems: 'center',
              justifyContent: 'center'
            }}>C<br />S<br />&nbsp;&nbsp; <br />M<br />O<br />D<br />U<br />L<br />E<br />S</h3> */}
            <div className="first ">
              <div className='subbb'>
                <div>
                  <img src='icon/icon11-png.png' loading='lazy' alt='icon' width={"100%"} height={"100%"} />
                </div>
                <div className="para">RS . 700/- (per head)                      <p>Graphic designer Competition</p>
                </div>
              </div>

              <div className='subbb'>
                <div>
                  <img src='icon/icon4-png.png' loading='lazy' alt='icon' width={"100%"} height={"100%"} />
                </div>
                <div className="para">
                  RS . 700/- (per head)                      <p>Debugging Competition</p>
                </div>
              </div>
              <div className='subbb'>
                <div>
                  <img src='icon/icon1-png.png' loading='lazy' alt='icon' width={"100%"} height={"100%"} />
                </div>
                <div className="para">
                  RS . 700/- (per head)                      <p>Mobile development</p>
                </div>
              </div>
              <div className='subbb'>
                <div>
                  <img src='icon/icon2-png.png' loading='lazy' alt='icon' width={"100%"} height={"100%"} />
                </div>
                <div className="para">
                  RS . 700/- (per head)                      <p>Game development</p>
                </div>
              </div>

              <div className='subbb'>
                <div>
                  <img src='icon/icon7-png.png' loading='lazy' alt='icon' width={"100%"} height={"100%"} />
                </div>
                <div className="para">
                  RS . 1400/-(Team of 2)
                  <p>Technopreneur Competition</p>
                </div>
              </div>


            </div>



            <div className=" second">
              <div className='subbb'>
                <div>
                  <img src='icon/icon9 -png.png' loading='lazy' alt='icon' width={"100%"} height={"100%"} />
                </div>
                <div className="para">
                  RS.3000/-(Team of 2)
                  <p>FYP Display</p>
                </div>
              </div>
              <div className='subbb'>
                <div>
                  <img src='icon/icon5-png.png' loading='lazy' alt='icon' width={"100%"} height={"100%"} />
                </div>
                <div className="para">
                  Rs. 700/- (per head)                      <p>E-Sports</p>
                </div>
              </div>
              <div className='subbb'>
                <div>
                  <img src='icon/icon3-png.png' loading='lazy' alt='icon' width={"100%"} height={"100%"} />
                </div>
                <div className="para">
                  RS.1400/-(Team of 2)
                  <p>DataBase Competition</p>
                </div>
              </div>
              <div className='subbb'>
                <div>
                  <img src='icon/icon10-png.png' loading='lazy' alt='icon' width={"100%"} height={"100%"} />
                </div>
                <div className="para">
                  RS.1400/-(Team of 2)
                  <p> AI Projects Exhibition</p>
                </div>
              </div>
              <div className='subbb'>
                <div>
                  <img src='icon/icon13-png.png' loading='lazy' alt='icon' width={"100%"} height={"100%"} />
                </div>
                <div className="para">
                  Rs. 500/- (per workshop)
                  <p>Workshops & Career Counseling</p>
                </div>
              </div>

            </div>


            <div className="third">

              <div className='subbb'>
                <div>
                  <img src='icon/icon12-png.png' loading='lazy' alt='icon' width={"100%"} height={"100%"} />
                </div>
                <div className="para">
                  RS. 700/- (per head)
                  <p>UI Designing Competition</p>
                </div>
              </div>
              <div className='subbb'>
                <div>
                  <img src='icon/icon6-png.png' loading='lazy' alt='icon' width={"100%"} height={"100%"} />
                </div>
                <div className="para">
                  RS. 700/- (per head)
                  <p>Web development Competition</p>
                </div>
              </div>
              <div className='subbb'>
                <div>
                  <img src='icon/icon8-png.png' loading='lazy' alt='icon' width={"100%"} height={"100%"} />
                </div>
                <div className="para">
                  RS. 700/- (per head)
                  <p>Speed Coding Competition</p>
                </div>
              </div>

            </div>

          </div>



          <h2 className='section-heading-2'>ME Modules</h2>

          <div className="subpart">
{/* 
            <h3 className='feeheadingpc' style={{
              background: "rgb(95, 34, 43)",
              background: "linear-gradient(90deg, rgba(95, 34, 43, 1) 0%, rgba(8, 17, 59, 1) 100%)",
              color: '#fff',
              padding: '10px',
              //  paddingBottom:'0px',
              //  paddingTop:'0px',
              marginBottom: '10px',
              width: '20px',
              //  height:'100%',
              borderRadius: "5px 0 0 5px",
              alignItems: 'center',
              justifyContent: 'center'
            }}>M<br />E<br />&nbsp;&nbsp; <br />M<br />O<br />D<br />U<br />L<br />E<br />S</h3> */}

            <div className="first ">


              <div className='subbb'>
                <div>
                  <img src='icon/icon9 -png.png' loading='lazy' alt='icon' width={"100%"} height={"100%"} />
                </div>
                <div className="para">RS . 4000/- (Per Team)
                  <p>FYP Display</p>
                </div>
              </div>

              <div className='subbb'>
                <div>
                  <img src='icon/icon14-png.png' loading='lazy' alt='icon' width={"100%"} height={"100%"} />
                </div>
                <div className="para">
                  RS . 2500/- (Per Team)
                  <p>Line Following Robot (Microcontroller)</p>
                </div></div>
              <div className='subbb'>
                <div>
                  <img src='icon/icon20-png.png' loading='lazy' alt='icon' width={"100%"} height={"100%"} />
                </div>
                <div className="para">
                  RS . 1000/- (Per Team)
                  <p>Speed CAD Modeling Competition</p>
                </div></div>

            </div>



            <div className=" second">
              <div className='subbb'>
                <div>
                  <img src='icon/icon16-png.png' loading='lazy' alt='icon' width={"100%"} height={"100%"} />
                </div>
                <div className="para">
                  RS. 500/- (Per Team)
                  <p>Egg Drop Competition</p>
                </div></div>
              <div className='subbb'>
                <div>
                  <img src='icon/icon17-png.png' loading='lazy' alt='icon' width={"100%"} height={"100%"} />
                </div>
                <div className="para">
                  RS. 500/- (Per Team)
                  <p>Straws Tower Competition</p>
                </div></div>
              <div className='subbb'>
                <div>
                  <img src='icon/icon19-png.png' loading='lazy' alt='icon' width={"100%"} height={"100%"} />
                </div>
                <div className="para">
                  RS. 2000/- (Per Team)
                  <p>Catapult</p>
                </div></div>

            </div>


            <div className="third">
              <div className='subbb'>
                <div>
                  <img src='icon/icon15-png.png' loading='lazy' alt='icon' width={"100%"} height={"100%"} />
                </div>
                <div className="para">
                  RS. 3000/- (Per team)
                  <p>Ball Shooting Robot</p>
                </div></div>
              <div className='subbb'>
                <div>
                  <img src='icon/icon14-png.png' loading='lazy' alt='icon' width={"100%"} height={"100%"} />
                </div>
                <div className="para">
                  RS. 2500/- (Per team)
                  <p>Line Following Robot(Logic Based)</p>
                </div></div>
              <div className='subbb'>
                <div>
                  <img src='icon/icon11-png.png' loading='lazy' alt='icon' width={"100%"} height={"100%"} />
                </div>
                <div className="para">
                  RS. 500/- (Per team)
                  <p>Start-Up Idea</p>
                </div></div>

            </div>

          </div>




        </Element>


        <Element id='SCHEDULE' name="myScrollToElement" style={{ width: '95%' }}><h1 className='section-heading'>EVENT SCHEDULE</h1>

          <div className="days">
            {days === true && <>   <h3 className='left'>Day 1</h3> <h3 onClick={() => { setdays(false) }} className='rightd'>Day 2</h3></>}
            {days === false && <>  <h3 className='leftd' onClick={() => { setdays(true) }}>Day 1</h3> <h3 className='right'>Day 2</h3></>}
          </div>


          {days === true && <>

            <Collapse style={{ width: '100%', color: 'white', backgroundColor: "white", marginBottom: '50px' }} accordion>


              <Panel style={{ color: 'white' }} header={<><h3>Opening Cermony</h3><div>{/*  11:30 AM - Onwords */}</div></>} key="1">
                <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>


                  <div>There arge many variations ohf passages of sorem gpsum ilable, but the majority have suffered alteration in some form, by ected humour, or randomised words whi.rere arge many variations ohf passages of sorem gpsum ilable</div>

                </div>


              </Panel>

              <Panel style={{ color: 'white' }} header={<><h3>Panel Talks</h3><div>{/*  11:30 AM - Onwords */}</div></>} key="2">





                <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>


                  <div>There arge many variations ohf passages of sorem gpsum ilable, but the majority have suffered alteration in some form, by ected humour, or randomised words whi.rere arge many variations ohf passages of sorem gpsum ilable</div>

                </div>




              </Panel>

              <Panel style={{ color: 'white' }} header={<><h3>Career Counselling</h3><div>{/*  11:30 AM - Onwords */}</div></>} key="3">
                <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>


                  <div>There arge many variations ohf passages of sorem gpsum ilable, but the majority have suffered alteration in some form, by ected humour, or randomised words whi.rere arge many variations ohf passages of sorem gpsum ilable.</div>
                </div>


              </Panel>

            </Collapse> </>}
          {days === false && <>

            <Collapse style={{ width: '100%', color: 'white', backgroundColor: "white", marginBottom: '50px' }} accordion>


              <Panel style={{ color: 'white' }} header={<><h3>e-Sport</h3><div>{/*  11:30 AM - Onwords */}</div></>} key="1">
                <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>


                  <div>There arge many variations ohf passages of sorem gpsum ilable, but the majority have suffered alteration in some form, by ected humour, or randomised words whi.rere arge many variations ohf passages of sorem gpsum ilable</div>

                </div>


              </Panel>

              <Panel style={{ color: 'white' }} header={<><h3>Closing Ceremony</h3><div>{/*  11:30 AM - Onwords */}</div></>} key="2">





                <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>


                  <div>There arge many variations ohf passages of sorem gpsum ilable, but the majority have suffered alteration in some form, by ected humour, or randomised words whi.rere arge many variations ohf passages of sorem gpsum ilable</div>

                </div>




              </Panel>

              <Panel style={{ color: 'white' }} header={<><h3>Dinner</h3><div>{/*  11:30 AM - Onwords */}</div></>} key="3">
                <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>


                  <div>There arge many variations ohf passages of sorem gpsum ilable, but the majority have suffered alteration in some form, by ected humour, or randomised words whi.rere arge many variations ohf passages of sorem gpsum ilable.</div>
                </div>


              </Panel>

            </Collapse>
          </>}
        </Element>


        <div className='sponsors'>
          <h3 className='section-heading margin-top-5'>Our Top Sponsors</h3>
          <div className='spimages'>
            <img src='sp1.jpg' loading='lazy' alt='img' width={"80px"} height={"80px"} />
            <img src='sp2.jpg' loading='lazy' alt='img' width={"80px"} height={"80px"} />
            <img src='sp3.jpg' loading='lazy' alt='img' width={"260px"} height={"80px"} />
            <img src='sp4.jpg' loading='lazy' alt='img' width={"80px"} height={"80px"} />
            <img src='sp5.jpg' loading='lazy' alt='img' width={"80px"} height={"80px"} />

            <img src='sp6.jpg' loading='lazy' alt='img' width={"80px"} height={"80px"} />
            <img src='sp7.jpg' loading='lazy' alt='img' width={"80px"} height={"80px"} />
            <img src='sp8.jpg' loading='lazy' alt='img' width={"80px"} height={"80px"} />
            <img src='sp9.jpg' loading='lazy' alt='img' width={"80px"} height={"80px"} />


          </div>
        </div>


        <h1 class="section-heading margin-top-5 width-95" >OUR TEAM</h1>

        <Element id='ambassadors' name="myScrollToElement" style={{ width: '95%' }}>
          
          <div className='center'>
            <p>Want to become a brand ambassador ? click button below.</p>
            <Link className='regiterbutton' to="/registerambrassador" >Become a Brand Ambrassador</Link>
          </div>
        </Element>


        <Element id='team' name="myScrollToElement" style={{ width: '95%' }}>




          <div className='ourteam'>

            <div className='color2'>

              {/* <div style={{ display: 'flex' }}> */}

              {/* <div className='boss'>
          <img className='userimagessboss' src={"/images/image-0000.jpg"} loading='lazy' alt='bossimage' />
          <h1 > Muhammad Yousuf Chohan</h1>
          <h3>President</h3>


        </div> */}
              <div className='boss'>
                <div className="teamofupper" style={{ backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/zabefest-23.appspot.com/o/Screenshot%202023-04-16%20202656.jpg?alt=media&token=73ab988b-8c5c-430a-aaca-62c79e16904e')" }}>
                  <h1>Muhammad Yousuf Chohan</h1>
                  <p>President</p></div>
              </div>
              {/* <div className='boss'>
          <img className='userimagessboss' src={"/images/image-000.jpg"} loading='lazy' alt='bossimage' />
          <h1 > Abdul Sami Sehol</h1>
          <h3>General secretary</h3>


        </div> */}

              {/* </div> */}






              <div className='employers'>
                <div style={{ backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/zabefest-23.appspot.com/o/Screenshot%202023-04-16%20202459.jpg?alt=media&token=fd67a9cf-a4c5-47d9-9a41-6e063089df87')" }} className="teamofupper2">
                  <h1>Abdul Sami Sehol </h1>
                  <p>General Secretary CS</p>
                </div>
                <div style={{ backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/zabefest-23.appspot.com/o/Screenshot%202023-04-16%20195117.jpg?alt=media&token=c8f29509-c9b9-48c5-a92c-20067d155d0f')" }} className="teamofupper2">
                  <h1>Eesha Junaid Vohra</h1>
                  <p>General Secretary ME</p>
                </div>
                <div style={{ backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/zabefest-23.appspot.com/o/Screenshot%202023-04-16%20200414.jpg?alt=media&token=814a0da2-96d1-469c-9da4-3091214b3f92')" }} className="teamofupper2">
                  <h1>Muhammad Umer Uzair</h1>
                  <p>Treasurer </p>
                </div>
                <div style={{ backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/zabefest-23.appspot.com/o/Screenshot%202023-04-16%20200734.jpg?alt=media&token=7307a679-4da4-4ed0-9ce5-eecc0fe88f34')" }} className="teamofupper2">
                  <h1>Samra Hussain</h1>
                  <p>Deputy <br/> General Secretary ME</p>
                </div>
              </div>






              <div className='secondteam1'>

                {/* to be seeeeeeeeeeeeeeettttttttttttt */}



                <div className='employersdetails2'>
                  <img className='userimagess' src={"/images/image-004.jpg"} loading='lazy' alt='bossimage' />
                  <h2 >Dua Gul Muhammad</h2>
                  <h4>Module Lead CS</h4>
                </div>


                <div className='employersdetails2'>
                  <img className='userimagess' src={"/images/image-005.jpg"} loading='lazy' alt='bossimage' />
                  <h2>Faique Ali Makhdoom</h2>
                  <h4>Module Lead</h4>
                </div>


                <div className='employersdetails2'>
                  <img className='userimagess' src={"/images/i.jpg"} loading='lazy' alt='bossimage' />
                  <h2 > Hasnain Umer</h2>
                  <h4>Module Lead ME</h4>
                </div>

                <div className='employersdetails2'>
                  <img className='userimagess' src={"/images/im.jpg"} loading='lazy' alt='bossimage' />
                  <h2 > Osama Sodha </h2>
                  <h4>Module Co-Lead ME</h4>
                </div>




                <div className='employersdetails2'>
                  <img className='userimagess' src={"/images/a1.jpg"} loading='lazy' alt='bossimage' />
                  <h2 > Ali Shahzad</h2>
                  <h4>Logistics rep</h4>
                </div>

                <div className='employersdetails2'>
                  <img className='userimagess' src={"/images/aaai.jpg"} loading='lazy' alt='bossimage' />
                  <h2 > tasawar Mohsin</h2>
                  <h4>Logistics rep</h4>
                </div>

                <div className='employersdetails2'>
                  <img className='userimagess' src={"/images/aaaaa1.jpg"} loading='lazy' alt='bossimage' />
                  <h2 > Mushk-e-Zehra</h2>
                  <h4>Creatives Head</h4>
                </div>



                <div className='employersdetails2'>
                  <img className='userimagess' src={"/images/1.jpg"} loading='lazy' alt='bossimage' />
                  <h2 > Faiza Farooq</h2>
                  <h4>Director Corporate Affairs</h4>
                </div>


                <div className='employersdetails2'>
                  <img className='userimagess' src={"/images/as1.jpg"} loading='lazy' alt='bossimage' />
                  <h2 > Sobia Rizwan</h2>
                  <h4>Director PR </h4>
                </div>



                {/* to be seeeeeeeeeeeeeeettttttttttttt */}



                <div className='employersdetails2'>
                  <img className='userimagess' src={"/images/image-001.jpg"} loading='lazy' alt='bossimage' />
                  <h2 > Usman Gujjar</h2>
                  <h4>Director HR</h4>
                </div>


                <div className='employersdetails2'>
                  <img className='userimagess' src={"/images/image-0002.jpg"} loading='lazy' alt='bossimage' />
                  <h2 >Hamza Ihsan</h2>
                  <h4>Director Logistics</h4>
                </div>

                <div className='employersdetails2'>
                  <img className='userimagess' src={"/images/aai.jpg"} loading='lazy' alt='bossimage' />
                  <h2 > Ammar Rashid Qureshi</h2>
                  <h4>Director Creatives</h4>
                </div>

                <div className='employersdetails2'>
                  <img className='userimagess' src={"/images/image-003.jpg"} loading='lazy' alt='bossimage' />
                  <h2>Muhammad Sufyan Mallick</h2>
                  <h4>Director Operations</h4>
                </div>


                <div className='employersdetails2'>
                  <img className='userimagess' src={"/images/ia.jpg"} loading='lazy' alt='bossimage' />
                  <h2>Hassaan Ahmed Khan</h2>
                  <h4>Director Corporate Affairs</h4>
                </div>
              </div>
            </div>
          </div>
          <h5
            style={{
              background: "rgb(95, 34, 43)",
              background: "linear-gradient(90deg, rgba(95, 34, 43, 1) 0%, rgba(8, 17, 59, 1) 100%)",
              color: '#fff',
              padding: '10px',
            }}>CS MODULES HEADS</h5>
          <div style={{ backgroundColor: '#fff', marginBottom: '10px' }} className='secondteam'>

            <div className='employersdetails2'>
              <img className='userimagess2' src={"/images/image-007.jpg"} loading='lazy' alt='bossimage' />
              <h2>Hafsa Laeeq</h2>
              <h4>FYP Display Module Head</h4>
            </div>

            <div className='employersdetails2'>
              <img className='userimagess2' src={"/images/image-006.jpg"} loading='lazy' alt='bossimage' />
              <h2>Deepak Kumar Jeswani</h2>
              <h4>FYP Display Module Head</h4>
            </div>

            <div className='employersdetails2'>
              <img className='userimagess2' src={"/images/image-008.jpg"} loading='lazy' alt='bossimage' />
              <h2>Sandesh Lal</h2>
              <h4>Mobile Development Module Head</h4>
            </div>

            <div className='employersdetails2'>
              <img className='userimagess2' src={"/images/image-009.jpg"} loading='lazy' alt='bossimage' />
              <h2>Nimerta Bai</h2>
              <h4>Mobile Development Module Co-Head</h4>
            </div>

            <div className='employersdetails2'>
              <img className='userimagess2' src={"/images/image-010.jpg"} loading='lazy' alt='bossimage' />
              <h2>Zabloon Albert</h2>
              <h4>Speed Coding Module Head</h4>
            </div>

            <div className='employersdetails2'>
              <img className='userimagess2' src={"/images/image-011.jpg"} loading='lazy' alt='bossimage' />
              <h2>Moaz Javed Khan</h2>
              <h4>Speed Coding Module Co-Head</h4>
            </div>

            <div className='employersdetails2'>
              <img className='userimagess2' src={"https://snipstock.com/assets/cdn/png/1bb2753d14e5d8dd7fecbf7f1beb2621.png"} loading='lazy' alt='bossimage' />
              <h2>Hamza Khan</h2>
              <h4>Debugging Competition Module Head</h4>
            </div>

            <div className='employersdetails2'>
              <img className='userimagess2' src={"/images/image-012.jpg"} loading='lazy' alt='bossimage' />
              <h2>Muhammad Ammar Thahim</h2>
              <h4>Debugging Competition Module Co-Head</h4>
            </div>

            <div className='employersdetails2'>
              <img className='userimagess2' src={"https://snipstock.com/assets/cdn/png/1bb2753d14e5d8dd7fecbf7f1beb2621.png"} loading='lazy' alt='bossimage' />
              <h2>Affan Khurram</h2>
              <h4>Game Development Module Head</h4>
            </div>

            <div className='employersdetails2'>
              <img className='userimagess2' src={"/images/image-013.jpg"} loading='lazy' alt='bossimage' />
              <h2>Shivam Kumar</h2>
              <h4>Game Development Module Co-Head</h4>
            </div>

            <div className='employersdetails2'>
              <img className='userimagess2' src={"/images/image-014.jpg"} loading='lazy' alt='bossimage' />
              <h2>Sejal Sitani</h2>
              <h4>UI Designing Competition Module Head</h4>
            </div>

            <div className='employersdetails2'>
              <img className='userimagess2' src={"/images/image-015.jpg"} loading='lazy' alt='bossimage' />
              <h2>Laksh Jiwani</h2>
              <h4>UI Designing Competition Module Co-Head</h4>
            </div>

            <div className='employersdetails2'>
              <img className='userimagess2' src={"/images/image-016.jpg"} loading='lazy' alt='bossimage' />
              <h2>Muhammad Saif Ur Rehman (Saif Altaf)</h2>
              <h4>Workshop & Career Counseling Module Head</h4>
            </div>

            <div className='employersdetails2'>
              <img className='userimagess2' src={"/images/image-017.jpg"} loading='lazy' alt='bossimage' />
              <h2>Soban Mallick</h2>
              <h4>Workshop & Career Counseling Module Co-Head</h4>
            </div>

            <div className='employersdetails2'>
              <img className='userimagess2' src={"/images/image-018.jpg"} loading='lazy' alt='bossimage' />
              <h2>Yousuf Shah</h2>
              <h4>E-Sports Module Head</h4>
            </div>

            <div className='employersdetails2'>
              <img className='userimagess2' src={"/images/image-019.jpg"} loading='lazy' alt='bossimage' />
              <h2>Yousuf Hyder</h2>
              <h4>E-Sports Module Co-Head</h4>
            </div>

            <div className='employersdetails2'>
              <img className='userimagess2' src={"/images/image-020.jpg"} loading='lazy' alt='bossimage' />
              <h2>Emaan Fatima Khan</h2>
              <h4>Database Competition Module Head</h4>
            </div>

            <div className='employersdetails2'>
              <img className='userimagess2' src={"/images/image-021.jpg"} loading='lazy' alt='bossimage' />
              <h2>Ali Ain</h2>
              <h4>Database Competition Module Co-Head</h4>
            </div>

            <div className='employersdetails2'>
              <img className='userimagess2' src={"/images/image-022.jpg"} loading='lazy' alt='bossimage' />
              <h2>Arisha Arbani</h2>
              <h4>Graphic Design Competition Module Head</h4>
            </div>

            <div className='employersdetails2'>
              <img className='userimagess2' src={"/images/image-023.jpg"} loading='lazy' alt='bossimage' />
              <h2>Muzzammil Ishaq</h2>
              <h4>Graphic Design Competition Module Co-Head</h4>
            </div>

            <div className='employersdetails2'>
              <img className='userimagess2' src={"/images/image-024.jpg"} loading='lazy' alt='bossimage' />
              <h2>Syed Arham Abdullah</h2>
              <h4>Web Development Competition Module Head</h4>
            </div>

            <div className='employersdetails2'>
              <img className='userimagess2' src={"/images/image-025.jpg"} loading='lazy' alt='bossimage' />
              <h2>Rabia Memon</h2>
              <h4>Web Development Competition Module Co-Head</h4>
            </div>

            <div className='employersdetails2'>
              <img className='userimagess2' src={"/images/image-026.jpg"} loading='lazy' alt='bossimage' />
              <h2>Muhammad Heeban Mallick</h2>
              <h4>AI Projects Exhibition Module Head</h4>
            </div>

            <div className='employersdetails2'>
              <img className='userimagess2' src={"https://snipstock.com/assets/cdn/png/1bb2753d14e5d8dd7fecbf7f1beb2621.png"} loading='lazy' alt='bossimage' />
              <h2>Taha Naushad</h2>
              <h4>AI Projects Exhibition Module Co-Head</h4>
            </div>

            <div className='employersdetails2'>
              <img className='userimagess2' src={"/images/image-027.jpg"} loading='lazy' alt='bossimage' />
              <h2>Aisha Faheem</h2>
              <h4>Technopreneur-ship Module Head</h4>
            </div>

            <div className='employersdetails2'>
              <img className='userimagess2' src={"/images/image-028.jpg"} loading='lazy' alt='bossimage' />
              <h2>Abdul Moeed Siddiqui</h2>
              <h4>Technopreneur-ship Module Co-Head</h4>
            </div>





          </div>



          <h5 style={{
            background: "rgb(95, 34, 43)",
            background: "linear-gradient(90deg, rgba(95, 34, 43, 1) 0%, rgba(8, 17, 59, 1) 100%)",
            color: '#fff',
            padding: '10px',
            margin: "0",
          }}>ME MODULES HEADS</h5>

          <div style={{ backgroundColor: '#fff', marginBottom: '10px' }} className='secondteammecha'>


            <div className='employersdetails2'>
              <img className='userimagess2' src={"/images/imagem-006.jpg"} loading='lazy' alt='bossimage' />
              <h2>Ayesha Khan</h2>
              <h4>LFR (microcontroller) Module Head</h4>
            </div>

            <div className='employersdetails2'>
              <img className='userimagess2' src={"/images/imagem-007.jpg"} loading='lazy' alt='bossimage' />
              <h2>Minam Khan</h2>
              <h4>LFR (microcontroller) Module co-Head</h4>
            </div>




            <div className='employersdetails2'>
              <img className='userimagess2' src={"/images/imag-014.jpg"} loading='lazy' alt='bossimage' />
              <h2>Hasan Anees</h2>
              <h4>LFR (logic based) Module Head</h4>
            </div>

            <div className='employersdetails2'>
              <img className='userimagess2' src={"/images/imag-015.jpg"} loading='lazy' alt='bossimage' />
              <h2>M. hussain</h2>
              <h4>LFR (logic based) Module co-Head</h4>
            </div>

            <div className='employersdetails2'>
              <img className='userimagess2' src={"/images/imagea-016.jpg"} loading='lazy' alt='bossimage' />
              <h2>Sheheryar Fareed</h2>
              <h4>FYP Display Module Head</h4>
            </div>

            <div className='employersdetails2'>
              <img className='userimagess2' src={"/images/imagea-017.jpg"} loading='lazy' alt='bossimage' />
              <h2>Ammar Shabbir</h2>
              <h4>FYP Display Module co-Head</h4>
            </div>

            <div className='employersdetails2'>
              <img className='userimagess2' src={"/images/imagea-018.jpg"} loading='lazy' alt='bossimage' />
              <h2>M.Kashif</h2>
              <h4>Ball shooting robot Module Head</h4>
            </div>

            <div className='employersdetails2'>
              <img className='userimagess2' src={"/images/imagea-019.jpg"} loading='lazy' alt='bossimage' />
              <h2>M.Furqan </h2>
              <h4>Ball shooting robot Module Co-Head</h4>
            </div>

            <div className='employersdetails2'>
              <img className='userimagess2' src={"/images/imagea-020.jpg"} loading='lazy' alt='bossimage' />
              <h2>Abdul Momin</h2>
              <h4>Speed CAD Module Head</h4>
            </div>

            <div className='employersdetails2'>
              <img className='userimagess2' src={"/images/imagea-021.jpg"} loading='lazy' alt='bossimage' />
              <h2>Moiz ullah khan</h2>
              <h4>Speed CAD Module Co-Head</h4>
            </div>

            <div className='employersdetails2'>
              <img className='userimagess2' src={"/images/imagea-022.jpg"} loading='lazy' alt='bossimage' />
              <h2>Mubeen Raza</h2>
              <h4>Catapult Competition Module Head</h4>
            </div>

            <div className='employersdetails2'>
              <img className='userimagess2' src={"/images/imagea-023.jpg"} loading='lazy' alt='bossimage' />
              <h2>Faaiz Raza Zaidi</h2>
              <h4>Catapult Competition Module Co-Head</h4>
            </div>

            <div className='employersdetails2'>
              <img className='userimagess2' src={"/images/imagea-024.jpg"} loading='lazy' alt='bossimage' />
              <h2>Burhanuddin Ali</h2>
              <h4>Egg Drop competition Module Head</h4>
            </div>

            <div className='employersdetails2'>
              <img className='userimagess2' src={"/images/imagea-025.jpg"} loading='lazy' alt='bossimage' />
              <h2>Eeqan Arif</h2>
              <h4>Egg Drop competition Module Co-Head</h4>
            </div>

            <div className='employersdetails2'>
              <img className='userimagess2' src={"/images/imagea-026.jpg"} loading='lazy' alt='bossimage' />
              <h2>Anum Abbas Zaidi</h2>
              <h4>Straw tower Competition Module Head</h4>
            </div>

            <div className='employersdetails2'>
              <img className='userimagess2' src={"/images/imagea-001.jpg"} loading='lazy' alt='bossimage' />
              <h2>Hussain Murtaza</h2>
              <h4>Straw tower Competition Module Co-Head</h4>
            </div>

            <div className='employersdetails2'>
              <img className='userimagess2' src={"/images/imagea-027.jpg"} loading='lazy' alt='bossimage' />
              <h2>Maaz Shahid</h2>
              <h4>Start-up Idea Module Head</h4>
            </div>

            <div className='employersdetails2'>
              <img className='userimagess2' src={"/images/imagea-028.jpg"} loading='lazy' alt='bossimage' />
              <h2>Azan Khan</h2>
              <h4>Start-up Idea Module Co-Head</h4>
            </div>





          </div>







        </Element>

      </div>




    </div>
  )
}

export default Index