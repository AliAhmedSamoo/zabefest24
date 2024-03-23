import React, { useState, } from 'react';
import '../App.css';
import '../button.css';
import { message } from 'antd';
import { storage } from '../firebase';
import { v4 as uuid } from 'uuid';
import { ImCross } from "react-icons/im";
import { AiFillEdit } from "react-icons/ai";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



function RegisterAmb() {




  const [esport, setesport] = useState("");
 


  const [otpform, setotpform] = useState("1");
  const [button, setbutton] = useState("true");


  const [Img, setImg] = useState(false)
  

  const [Ambrassadorname, setAmbrassadorname] = useState();
  const [Ambrassadorid, setAmbrassadorid] = useState();
  const [Ambrassadoruniversity, setAmbrassadoruniversity] = useState();
  const [Ambrassadorprogram, setAmbrassadorprogram] = useState();
  const [Ambrassadoryear, setAmbrassadoryear] = useState();
  const [Ambrassadorwhatsapp, setAmbrassadorwhatsapp] = useState();
  const [Ambrassadorimage, setAmbrassadorimage] = useState();
  const [Ambrassadoremail, setAmbrassadoremail] = useState();









  const handleChangeimage = async (e) => {
    console.log(e.target.files[0])
    setImg(e.target.files[0]);



  }






 

  // const registermodule = () => {
  //   sethomee(false)
  //   setotpform("1")
  // }
  const navigate = useNavigate();

  const closeMenu = async () => {
  
      navigate("/");
   
  }



  const becomeaAmbrassador = async (e) => {
    e.preventDefault();




    await setbutton("false");

    const hide = message.loading('Action in progress..', 0);

    const imageidd = uuid();
    await storage.ref(`images/${imageidd}.png`).put(Img);
    const Url = await storage.ref(`images`).child(imageidd + ".png").getDownloadURL();
    await console.log(Url)
    await setAmbrassadorimage(Url);
    await console.log(Ambrassadorimage)


    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    // urlencoded.append("name", Name);
    urlencoded.append("Ambrassadorname", Ambrassadorname);
    urlencoded.append("Ambrassadorid", Ambrassadorid);
    urlencoded.append("Ambrassadoruniversity", Ambrassadoruniversity);
    urlencoded.append("Ambrassadorprogram", Ambrassadorprogram);
    urlencoded.append("Ambrassadoryear", Ambrassadoryear);
    urlencoded.append("Ambrassadorwhatsapp", Ambrassadorwhatsapp);
    urlencoded.append("Ambrassadoremail", Ambrassadoremail);
    urlencoded.append("Ambrassadorimage", Url);




    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    };

    await fetch("https://elegant-singlet-jay.cyclic.app/ambassador", requestOptions)
      .then(response => 
       { message.success('Your Request for becoming Ambassador has been sent', 3)
        navigate("/")
      }
        
        )



    await setbutton("true")
    await setTimeout(hide, 1);
  
    // message.success('Thank you for registration', 1);

  }

  



  return (
    <div className="App">

      <div id='home' style={{ marginTop: '100px' }}></div>
      <header className="App-header">



        <div className='register' >

          <ImCross onClick={closeMenu} className='clossingicon' />
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src='target002.png' loading='lazy' alt='logo' width={"50%"} />

          </div>

         



         
            <label for="chk" aria-hidden="true" >Become a Brand Ambassador</label>
            <form className='form1' onSubmit={becomeaAmbrassador}>
              <input required pattern="[A-Za-z ]+" name="name" onChange={(e) => { setAmbrassadorname(e.target.value) }} placeholder="Enter your Name" />
              <input required pattern="[0-9]{0-9}$" name="name" onChange={(e) => { setAmbrassadorid(e.target.value) }} placeholder="Enter your Registeration ID" />
              <input required pattern="[A-Za-z ]+" name="name" onChange={(e) => { setAmbrassadoruniversity(e.target.value) }} placeholder="Enter your University Name" />
              <input required pattern="[A-Za-z ]+" name="name" onChange={(e) => { setAmbrassadorprogram(e.target.value) }} placeholder="Program" />
              <select name="year" id='year' type='select' onChange={(e) => { setAmbrassadoryear(e.target.value) }} placeholder="Year" >

                <option value="1st Year" disabled selected>Select Year</option>
                <option value="1st Year">1st Year</option>
                <option value="2nd Year">2nd Year</option>
                <option value="3rd Year">3rd Year</option>
                <option value="4th year">4th year</option>
              </select>

              <input required pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" name="email" placeholder="Enter your Email" onChange={(e) => { setAmbrassadoremail(e.target.value) }} />
              <input required pattern="[0][3][0-9]{9}$" name="number" placeholder='Whatsapp 03xxxxxxxxx' onChange={(e) => { setAmbrassadorwhatsapp(e.target.value) }} />
              <div style={{  textAlign: "left", marginTop: '15px' }}>Upload Your Profile Picture</div>
              <input name='photo' id="photo" accept="image/*" style={{ background: "none", padding: '0' }} required type='file' onChange={handleChangeimage} />


              {button === "true" && <>   <button type="submit">PROCEED</button></>}
              {button === "false" && <>   <button className='disable' type="button" onClick={() => { message.info("please wait ") }}>PROCEED</button></>}


            </form>

          



        </div>











      </header>



    </div>
  )
}

export default RegisterAmb