import React, { useState, } from 'react';
import '../App.css';
import '../button.css';
import { message } from 'antd';
import { ImCross } from "react-icons/im";
import { AiFillEdit } from "react-icons/ai";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



function Register() {




  const [teamleadername, setteamleadername] = useState("");
  const [secondparticipantname, setsecondparticipantname] = useState("");
  const [secondpartricipantrollno, setsecondpartricipantrollno] = useState("");
  const [thirdparticipantname, setthirdparticipantname] = useState("");
  const [thirdpartricipantrollno, setthirdpartricipantrollno] = useState("");
  const [fourthparticipantname, setfourthparticipantname] = useState("");
  const [fourthpartricipantrollno, setfourthpartricipantrollno] = useState("");
  const [fivthparticipantname, setfivthparticipantname] = useState("");
  const [fivthpartricipantrollno, setfivthpartricipantrollno] = useState("");
  const [teamleaderemail, setteamleaderemail] = useState("");
  const [participantWhatsapp, setparticipantWhatsapp] = useState("");
  const [selectedmodule, setselectedmodule] = useState("");
  const [givenotp, setgivenotp] = useState();
  const [universityisother, setuniversityisother] = useState("Szabist");
  const [universityisothername, setuniversityisothername] = useState("");
  const [universityisothername1, setuniversityisothername1] = useState("Szabist");
  const [numberofparticipant, setnumberofparticipant] = useState("1");
  const [numberofparticipant2, setnumberofparticipant2] = useState("");
  const [universityrollno, setuniversityrollno] = useState("");
  const [emailverified, setemailverified] = useState(false);
  const [myOtp2, setmyotp] = useState();
  const [module, setmodule] = useState("");
  const [fees, setfee] = useState("");
  const [ticketid, setticketid] = useState("");
  const [esport, setesport] = useState("");
  const [modules, setmodules] = useState(module + esport);




  const [otpform, setotpform] = useState("1");
  const [button, setbutton] = useState("true");


  const [Img, setImg] = useState(false)
  const [html1, sethtml1] = useState(' <tr style="height: 18px;">            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);" colspan="2">                <div>                    <div style="text-align: center;"><span style="font-size: 18pt;"><strong>Ticket                                information</strong></span></div>                </div>            </td>        </tr>        <tr style="height: 18px;">            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                <div>                    <div>Participant Name</div>                </div>            </td>            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                ' + teamleadername + '            </td>        </tr>        <tr style="height: 18px;">            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                <div>                    <div>Participant Reg#</div>                </div>            </td>            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                ' + universityrollno + '            </td>        </tr>        <tr>            <td style="background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                <div>                    <div>Email</div>                </div>            </td>            <td style="background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">' + teamleaderemail + '</td>        </tr>        <tr>   <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                <div>                    <div>                        <div>                            <div>                                <div>                                    <div>Whatsapp</div>                                </div>                            </div>                        </div>                    </div>                </div>            </td>            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                ' + participantWhatsapp + '</td>        </tr>')
  const [html2, sethtml2] = useState(' <tr style="height: 18px;">            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                <div>                    <div>2nd Participant Name</div>                </div>            </td>            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                ' + secondparticipantname + '</td>        </tr>        <tr style="height: 18px;">            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                <div>                    <div>2nd Participant Reg#</div>                </div>            </td>            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                ' + secondpartricipantrollno + '</td>        </tr>')
  const [html3, sethtml3] = useState(' <tr style="height: 18px;">            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                <div>                    <div>3rd Participant Name</div>                </div>            </td>            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                ' + thirdparticipantname + '</td>        </tr>        <tr style="height: 18px;">            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                <div>                    <div>3rd Participant Reg#</div>                </div>            </td>            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                ' + thirdpartricipantrollno + '</td>        </tr>')
  const [html4, sethtml4] = useState('  <tr style="height: 18px;">            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                <div>                    <div>4th Participant Name</div>                </div>            </td>            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                ' + fourthparticipantname + '</td>        </tr>        <tr style="height: 18px;">            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                <div>                    <div>4th Participant Reg#</div>                </div>            </td>            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                ' + fourthpartricipantrollno + '</td>        </tr>')
  const [html5, sethtml5] = useState('<tr style="height: 18px;">            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                <div>                    <div>5th Participant Name</div>                </div>            </td>            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                ' + fivthparticipantname + '</td>        </tr>        <tr style="height: 18px;">            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                <div>                    <div>                        <div>                            <div>5th Participant Roll no.</div>                        </div>                    </div>                </div>            </td>            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                ' + fivthpartricipantrollno + '</td>        </tr>')
  const [html6, sethtml6] = useState('  <tr style="height: 20px;">            <td style="height: 20px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);" colspan="2">                <div>                    <div>                        <div>                            <div style="text-align: center;"><span style="font-size: 18pt;"><strong>University                                        Name</strong></span></div>                            <div style="text-align: center;">                                <div style="text-align: center;">                                    <div>                                        <div>&nbsp;</div>                                    </div>                                </div>                                ' + universityisother + '                            </div>                        </div>                    </div>                </div>            </td>        </tr>        <tr style="height: 18px;">            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);" colspan="2">                <div>                    <div>                        <div>                            <div>                                <div>                                    <div style="text-align: center;"><span                                            style="font-size: 18pt;"><strong>Module</strong></span></div>                                    <div style="text-align: center;">' + modules + '</div>                                </div>                            </div>                        </div>                    </div>                </div>            </td>        </tr>')
  const [html7, sethtml7] = useState(' <tr style="height: 18px;">            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);" colspan="2">                <div>                    <div>                        <div>                            <div>                                <div>                                    <div>                                        <div>                                            <div style="text-align: center;"><span style="font-size: 18pt;"><strong>Fees                                                        to                                                        be paid</strong></span></div>                                            <div style="text-align: center;"><strong>Rs. ' + fees + '/-</strong></div>                                        </div>                                    </div>                                </div>                            </div>                        </div>                    </div>                </div>            </td>        </tr>        <tr style="height: 28px;">            <td style="height: 28px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);" colspan="2">                <div>                    <div>                        <div>                            <div>                                <div>                                    <div style="text-align: center;"><span style="font-size: 14pt;"><strong>Ticket ID :                                                ' + ticketid + '</strong></span></div>                                </div>                            </div>                        </div>                    </div>                </div>            </td>        </tr>')



 








  const checkbox = async (e) => {
    await setselectedmodule(e.target.value)
    await setmodule("");
    await setesport("");
  }


  const sendemailopt = async (e) => {
    await e.preventDefault();
    if (emailverified === false) {
      await setbutton("false");

      const hide = message.loading('Action in progress..', 0);






      const randomNumber = () => {
        return Math.floor(Math.random() * 10);
      };

      const generateOtp = () => {
        let otp = '';
        for (let i = 0; i < 4; i++) {
          otp += randomNumber().toString();
        }
        return otp;
      };


      const myOtp = generateOtp();

      await setmyotp(myOtp)
      // await setbutton("false");


      const url = 'https://api.sendinblue.com/v3/smtp/email';
      const apiKey = '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'; // Replace with your actual API key

      const data = {
        sender: {
          name: 'ZABFEST',
          email: 'aliahmed.samoo.1@gmail.com'
        },
        to: [
          {
            email: teamleaderemail,
            name: teamleadername
          }
        ],
        subject: 'OTP for Registration(ZABEFEST) - ' + teamleadername + '',
        htmlContent: '<p><p>Greetings ' + teamleadername + '!<br><br>To continue with your registration, here is your OTP to be entered:<br><br><span style="font-size: 14pt;"><strong>' + myOtp + '</strong></span><br><br>Kindly do not share your OTP with anyone else and once you are done with registration, please delete your OTP!<br><br>Team Zabefest 2023 thanks for your trust on us and would love to see you in our event. In order to open a world of opportunities, you can continue registration.<br><br>Regards,<br>zabefest23</p></p>'
      };

      const headers = {
        'Content-Type': 'application/json',
        'api-key': apiKey
      };

      await axios.post(url, data, { headers })
        .then (response => {
         setTimeout(hide, 1);
          setotpform("2");
          setbutton("true");

          message.success("OTP has been sent to " + teamleaderemail)
        }

        )
        .catch(error => {
          message.error("Error sending OTP to " + teamleaderemail)
          setbutton("true")
         setTimeout(hide, 1)
          console.log(error)
        }
        );


    } else {
      // await alert("true")
      if (universityisothername1 === "Szabist") {

        await setuniversityisother("Szabist")
        await setuniversityisothername("")

        await setotpform("3")
      } else {
        await setotpform("3")

      }


    }









  }



  const checkopt = async (e) => {
    await e.preventDefault();
    if (myOtp2 == givenotp) {
      await setemailverified(true);
      await setotpform("3");

    }
    else {
      alert("wrong otp")
    }


  }



  const postdata = async (e) => {
    e.preventDefault();



    if (module !== "E-Sports") { await setesport("") }

    await setbutton("false");

    const hide2 = message.loading('Action in progress..', 0);


    if (numberofparticipant === "1") {
      await sethtml2("")
      await sethtml3("")
      await sethtml4("")
      await sethtml5("")
      await setsecondparticipantname("")
      await setsecondpartricipantrollno("")

      await setthirdparticipantname("")
      await setthirdpartricipantrollno("")

      await setfourthparticipantname("")
      await setfourthpartricipantrollno("")

      await setfivthparticipantname("")
      await setfivthpartricipantrollno("")
    } else if (numberofparticipant === "2") {
      await sethtml3("")
      await sethtml4("")
      await sethtml5("")

      await setthirdparticipantname("")
      await setthirdpartricipantrollno("")

      await setfourthparticipantname("")
      await setfourthpartricipantrollno("")

      await setfivthparticipantname("")
      await setfivthpartricipantrollno("")
    } else if (numberofparticipant === "3") {
      await sethtml4("")
      await sethtml5("")

      await setfourthparticipantname("")
      await setfourthpartricipantrollno("")

      await setfivthparticipantname("")
      await setfivthpartricipantrollno("")
    } else if (numberofparticipant === "4") {
      await sethtml5("")

      await setfivthparticipantname("")
      await setfivthpartricipantrollno("")

    }










    const url = 'https://api.sendinblue.com/v3/smtp/email';
    const apiKey = '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'; // Replace with your actual API key

    const data = {
      sender: {
        name: 'ZABFEST',
        email: 'aliahmed.samoo.1@gmail.com'
      },
      to: [
        {
          email: teamleaderemail,
          name: teamleadername
        }
      ],
      subject: 'ZABEFEST-SZABIST 2023 - Registration CONFIRMED!',
      // htmlContent: '<p>Dear '+teamleadername+',<p> <p>We are delighted to inform you that your registration for Zabefest 2023 has been successfully confirmed! We appreciate your interest in our event and are thrilled to have you on board.</p><p> Some useful participation information is given below: </p> <div style="background-color:#E2DEDE;">   <h1 style="text-align: center; border: 1px solid black;margin: 0;">Ticket information</h1> '+html1+ html2+ html3 +html4 +html5+ html6+'</div> <p>Please note that the leader of your team will be required to check in at the ZABEFEST DESK to pay the fees and collect the cards for their team. On the day of the event, no registration-related issues or requests such as expanding your team or adding a member will be addressed. We kindly request that you adhere to this process and contact us before the event day to ensure a smooth and successful event.      </P>   <p>As we gear up for this exciting event, we would like to provide you with some additional details. Here is your Ticket unique ID <h2>'+ticketid+'<h2>, which is unique to your team and extremely sensitive. We kindly request that you do not share this code with anyone as it is essential for verification purposes on the event day. Please note that teams will not be allowed to enter into the competition area without proper verification through the unique ID.</p> <p>Location of the Event: SZABIST 100 campus 3rd Ave, Block 5 Clifton, Karachi,.</p>  <p>In due course, you will receive another email containing the rules and guidelines of the competition you have registered for, as well as general event protocols that you will need to follow on the event day.</p> <p>We cannot wait to welcome you to ZABEFEST 2023, and we assure you that our team will leave no stone unturned to ensure that you have an unforgettable experience.</p> <p>Mark the date, 16th and 17th may 2023, in your calendar, and get ready for an eventful ZABEFEST this year!</p><p>Thank you once again for your participation, and we are eagerly looking forward to seeing you on the event day!</p> <p>Best Regards,</p> <p>Team ZABEFEST, </p> <p>Contact us: zabefest@szabist.pk</p> '
      htmlContent: '<p>Dear ' + teamleadername + ',<p> <p>We are delighted to inform you that your registration for Zabefest 2023 has been successfully confirmed! We appreciate your interest in our event and are thrilled to have you on board.</p><p> Some useful participation information is given below: </p>  <table style="border-collapse: collapse; width: 101.406%; height: 318px;" border="1">    <colgroup>        <col style="width: 50.1736%;">        <col style="width: 49.8264%;">    </colgroup>    <tbody>  ' + html1 + html2 + html3 + html4 + html5 + html6 + html7 + '</tbody></table> <p>Please note that the leader of your team will be required to check in at the ZABEFEST DESK to pay the fees and collect the cards for their team. On the day of the event, no registration-related issues or requests such as expanding your team or adding a member will be addressed. We kindly request that you adhere to this process and contact us before the event day to ensure a smooth and successful event.      </P>   <p>As we gear up for this exciting event, we would like to provide you with some additional details. Here is your Ticket unique ID ' + ticketid + ', which is unique to your team and extremely sensitive. We kindly request that you do not share this code with anyone as it is essential for verification purposes on the event day. Please note that teams will not be allowed to enter into the competition area without proper verification through the unique ID.</p> <p>Location of the Event: SZABIST 100 campus 3rd Ave, Block 5 Clifton, Karachi,.</p>  <p>In due course, you will receive another email containing the rules and guidelines of the competition you have registered for, as well as general event protocols that you will need to follow on the event day.</p> <p>We cannot wait to welcome you to ZABEFEST 2023, and we assure you that our team will leave no stone unturned to ensure that you have an unforgettable experience.</p> <p>Mark the date, 16th and 17th may 2023, in your calendar, and get ready for an eventful ZABEFEST this year!</p><p>Thank you once again for your participation, and we are eagerly looking forward to seeing you on the event day!</p> <p>Best Regards,</p> <p>Team ZABEFEST, </p> <p>Contact us: zabefest@szabist.pk</p> '
      // htmlContent: '<p>sdaf</p>'
    };

    const headers = {
      'Content-Type': 'application/json',
      'api-key': apiKey
    };

    await axios.post(url, data, { headers })
      .then(response => message.success("Ticket has been sent to your email"))
      .catch(error => message.error("Error sending Ticket to your email"));














    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    // urlencoded.append("name", Name);
    urlencoded.append("fees", fees);
    urlencoded.append("teamleadername", teamleadername);
    urlencoded.append("secondparticipantname", secondparticipantname);
    urlencoded.append("secondpartricipantrollno", secondpartricipantrollno);
    urlencoded.append("thirdparticipantname", thirdparticipantname);
    urlencoded.append("thirdpartricipantrollno", thirdpartricipantrollno);
    urlencoded.append("fourthparticipantname", fourthparticipantname);
    urlencoded.append("fourthpartricipantrollno", fourthpartricipantrollno);
    urlencoded.append("fivthparticipantname", fivthparticipantname);
    urlencoded.append("fivthpartricipantrollno", fivthpartricipantrollno);

    urlencoded.append("teamleaderemail", teamleaderemail);
    urlencoded.append("participantWhatsapp", participantWhatsapp);

    urlencoded.append("selectedmodule", selectedmodule);
    urlencoded.append("universityisother", universityisother);
    urlencoded.append("numberofparticipant", numberofparticipant);
    urlencoded.append("universityrollno", universityrollno);
    urlencoded.append("module", modules);
    urlencoded.append("ticketid", ticketid);





    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    };

    await fetch("https://elegant-singlet-jay.cyclic.app/data", requestOptions)
      .then(response => setTimeout(hide2, 1))


    await setbutton("true")

    await message.success('Thank you for registration', 3);

    navigate("/");



  }

  // const registermodule = () => {
  //   sethomee(false)
  //   setotpform("1")
  // }
  const navigate = useNavigate();

  const closeMenu = async () => {
  
      navigate("/");
   
  }





  const subbbbmit =async ()=>{
















    if (module !== "E-Sports") { await setesport("") }
  
  
  
    const waitt2 = async () => {
      if (selectedmodule === "CS Module") {
  
        if (module === "Mobile development" || module === "UI Designing Competition" || module === "Graphic Designing Competition" || module === "AI Projects Exhibition" || module === "Speed coding contest" || module === "Technopreneurship Competition" || module === "Web Developing Competition" || module === "Debugging Competition" || module === "Database Contes" || module === "Game Development") {
          await setfee("1400")
  
        } else if (module === "FYP Display") {
          await setfee("3000")
        } else if (module === "workshops & Career Counselling") {
          await setfee("500")
        } else if (module === "E-Sports") {
          if (numberofparticipant === "1") {
            await setfee("700")
          } else if (numberofparticipant === "2") {
            await setfee("1400")
          } else if (numberofparticipant === "3") {
            await setfee("2100")
          } else if (numberofparticipant === "4") {
            await setfee("2800")
          } else if (numberofparticipant === "5") {
            await setfee("3500")
          }
  
        }
  
      }
    }
    const waitt3 = async () => {
      if (selectedmodule === "ME Module") {
  
        if (module === "LINE FOLLOWING ROBOT LOGIC COMPETITION" || module === "LINE FOLLOWING ROBOT MICROCONTROLLER COMPETITION") {
          await setfee("2500")
        } else if (module === "CATAPULT SHOOTING COMPETITION") {
          await setfee("2000")
        } else if (module === "BALL SHOOTING ROBOT") {
          await setfee("3000")
        } else if (module === "FYD DISPLAY") {
  
          await setfee("4000")
        } else if (module === "START-UP IDEA" || module === "EGG DROP COMPETITION" || module === "STRAW TOWER COMPETITION") {
          await setfee("2500")
        } else if (module === "SPEED CAD COMPETITION") {
          await setfee("2000")
        }
  
      }
    }
  
  
  
  
    const randomNumber = () => {
      return Math.floor(Math.random() * 10);
    };
  
    const generateticketid = () => {
      let ticketid = '';
      for (let i = 0; i < 10; i++) {
        ticketid += randomNumber().toString();
      }
      return ticketid;
    };
  
  
    const myticketid = generateticketid();
  
    await setticketid(myticketid)
  
  
  
    await waitt2();
    await waitt3();
    await setmodules(module + esport)
    await sethtml1(' <tr style="height: 18px;">            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);" colspan="2">                <div>                    <div style="text-align: center;"><span style="font-size: 18pt;"><strong>Ticket                                information</strong></span></div>                </div>            </td>        </tr>        <tr style="height: 18px;">            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                <div>                    <div>Participant Name</div>                </div>            </td>            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                ' + teamleadername + '            </td>        </tr>        <tr style="height: 18px;">            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                <div>                    <div>Participant Reg#</div>                </div>            </td>            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                ' + universityrollno + '            </td>        </tr>        <tr>            <td style="background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                <div>                    <div>Email</div>                </div>            </td>            <td style="background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">' + teamleaderemail + '</td>        </tr>        <tr>   <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                <div>                    <div>                        <div>                            <div>                                <div>                                    <div>Whatsapp</div>                                </div>                            </div>                        </div>                    </div>                </div>            </td>            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                ' + participantWhatsapp + '</td>        </tr>')
    await sethtml2(' <tr style="height: 18px;">            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                <div>                    <div>2nd Participant Name</div>                </div>            </td>            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                ' + secondparticipantname + '</td>        </tr>        <tr style="height: 18px;">            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                <div>                    <div>2nd Participant Reg#</div>                </div>            </td>            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                ' + secondpartricipantrollno + '</td>        </tr>')
    await sethtml3(' <tr style="height: 18px;">            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                <div>                    <div>3rd Participant Name</div>                </div>            </td>            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                ' + thirdparticipantname + '</td>        </tr>        <tr style="height: 18px;">            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                <div>                    <div>3rd Participant Reg#</div>                </div>            </td>            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                ' + thirdpartricipantrollno + '</td>        </tr>')
    await sethtml4('  <tr style="height: 18px;">            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                <div>                    <div>4th Participant Name</div>                </div>            </td>            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                ' + fourthparticipantname + '</td>        </tr>        <tr style="height: 18px;">            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                <div>                    <div>4th Participant Reg#</div>                </div>            </td>            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                ' + fourthpartricipantrollno + '</td>        </tr>')
    await sethtml5('<tr style="height: 18px;">            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                <div>                    <div>5th Participant Name</div>                </div>            </td>            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                ' + fivthparticipantname + '</td>        </tr>        <tr style="height: 18px;">            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                <div>                    <div>                        <div>                            <div>5th Participant Roll no.</div>                        </div>                    </div>                </div>            </td>            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                ' + fivthpartricipantrollno + '</td>        </tr>')
    await sethtml6('  <tr style="height: 20px;">            <td style="height: 20px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);" colspan="2">                <div>                    <div>                        <div>                            <div style="text-align: center;"><span style="font-size: 18pt;"><strong>University                                        Name</strong></span></div>                            <div style="text-align: center;">                                <div style="text-align: center;">                                    <div>                                        <div>&nbsp;</div>                                    </div>                                </div>                                ' + universityisother + '                            </div>                        </div>                    </div>                </div>            </td>        </tr>        <tr style="height: 18px;">            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);" colspan="2">                <div>                    <div>                        <div>                            <div>                                <div>                                    <div style="text-align: center;"><span                                            style="font-size: 18pt;"><strong>Module</strong></span></div>                                    <div style="text-align: center;">' + module + esport + '</div>                                </div>                            </div>                        </div>                    </div>                </div>            </td>        </tr>')
    await sethtml7(' <tr style="height: 18px;">            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);" colspan="2">                <div>                    <div>                        <div>                            <div>                                <div>                                    <div>                                        <div>                                            <div style="text-align: center;"><span style="font-size: 18pt;"><strong>Fees                                                        to                                                        be paid</strong></span></div>                                            <div style="text-align: center;"><strong>Rs. ' + fees + '/-</strong></div>                                        </div>                                    </div>                                </div>                            </div>                        </div>                    </div>                </div>            </td>        </tr>        <tr style="height: 28px;">            <td style="height: 28px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);" colspan="2">                <div>                    <div>                        <div>                            <div>                                <div>                                    <div style="text-align: center;"><span style="font-size: 14pt;"><strong>Ticket ID : ' + myticketid + '</strong></span></div>                                </div>                            </div>                        </div>                    </div>                </div>            </td>        </tr>')
  
  
    if (numberofparticipant === "1") {
      await sethtml2("")
      await sethtml3("")
      await sethtml4("")
      await sethtml5("")
      await setsecondparticipantname("")
      await setsecondpartricipantrollno("")
  
      await setthirdparticipantname("")
      await setthirdpartricipantrollno("")
  
      await setfourthparticipantname("")
      await setfourthpartricipantrollno("")
  
      await setfivthparticipantname("")
      await setfivthpartricipantrollno("")
    } else if (numberofparticipant === "2") {
      await sethtml3("")
      await sethtml4("")
      await sethtml5("")
  
      await setthirdparticipantname("")
      await setthirdpartricipantrollno("")
  
      await setfourthparticipantname("")
      await setfourthpartricipantrollno("")
  
      await setfivthparticipantname("")
      await setfivthpartricipantrollno("")
    } else if (numberofparticipant === "3") {
      await sethtml4("")
      await sethtml5("")
  
      await setfourthparticipantname("")
      await setfourthpartricipantrollno("")
  
      await setfivthparticipantname("")
      await setfivthpartricipantrollno("")
    } else if (numberofparticipant === "4") {
      await sethtml5("")
  
      await setfivthparticipantname("")
      await setfivthpartricipantrollno("")
  
    }
    await setotpform("4");
  
  
  }
  
const otpformsub3 =async(e)=>{



  await e.preventDefault();




  let matches = "";



  if (numberofparticipant === "2") {


    if (secondpartricipantrollno === universityrollno) {
      matches += "2nd "; alert(`Your registration number matches with the registration number of the ${matches}participant. Please use a different registration number to avoid a conflict.`);
    } else {subbbbmit()}



  } else if (numberofparticipant === "3") {

    if (secondpartricipantrollno === universityrollno) {
      matches += "2nd "; alert(`Your registration number matches with the registration number of the ${matches}participant. Please use a different registration number to avoid a conflict.`);
    } else
      if (thirdpartricipantrollno === universityrollno) {
        matches += "3rd "; alert(`Your registration number matches with the registration number of the ${matches}participant. Please use a different registration number to avoid a conflict.`);
      } else
        if (secondpartricipantrollno === thirdpartricipantrollno) {
          alert("2nd participant's registration number matches with the registration number of the 3rd participant. Please use a different registration number to avoid a conflict.");
        } else {subbbbmit()}


  } else



    if (numberofparticipant === "4") {

      if (secondpartricipantrollno === universityrollno) {
        matches += "2nd "; alert(`Your registration number matches with the registration number of the ${matches}participant. Please use a different registration number to avoid a conflict.`);
      } else
        if (thirdpartricipantrollno === universityrollno) {
          matches += "3rd "; alert(`Your registration number matches with the registration number of the ${matches}participant. Please use a different registration number to avoid a conflict.`);
        } else
          if (fourthpartricipantrollno === universityrollno) {
            matches += "4th "; alert(`Your registration number matches with the registration number of the ${matches}participant. Please use a different registration number to avoid a conflict.`);
          } else
            if (secondpartricipantrollno === thirdpartricipantrollno) {
              alert("2nd participant's registration number matches with the registration number of the 3rd participant. Please use a different registration number to avoid a conflict.");
            } else if (secondpartricipantrollno === fourthpartricipantrollno) {
              alert("2nd participant's registration number matches with the registration number of the 4th participant. Please use a different registration number to avoid a conflict.");
            } else if (thirdpartricipantrollno === fourthpartricipantrollno) {
              alert("3rd participant's registration number matches with the registration number of the 4th participant. Please use a different registration number to avoid a conflict.");
            } else {















              if (module !== "E-Sports") { await setesport("") }



              const waitt2 = async () => {
                if (selectedmodule === "CS Module") {

                  if (module === "Mobile development" || module === "UI Designing Competition" || module === "Graphic Designing Competition" || module === "AI Projects Exhibition" || module === "Speed coding contest" || module === "Technopreneurship Competition" || module === "Web Developing Competition" || module === "Debugging Competition" || module === "Database Contes" || module === "Game Development") {
                    await setfee("1400")

                  } else if (module === "FYP Display") {
                    await setfee("3000")
                  } else if (module === "workshops & Career Counselling") {
                    await setfee("500")
                  } else if (module === "E-Sports") {
                    if (numberofparticipant === "1") {
                      await setfee("700")
                    } else if (numberofparticipant === "2") {
                      await setfee("1400")
                    } else if (numberofparticipant === "3") {
                      await setfee("2100")
                    } else if (numberofparticipant === "4") {
                      await setfee("2800")
                    } else if (numberofparticipant === "5") {
                      await setfee("3500")
                    }

                  }

                }
              }
              const waitt3 = async () => {
                if (selectedmodule === "ME Module") {

                  if (module === "LINE FOLLOWING ROBOT LOGIC COMPETITION" || module === "LINE FOLLOWING ROBOT MICROCONTROLLER COMPETITION") {
                    await setfee("2500")
                  } else if (module === "CATAPULT SHOOTING COMPETITION") {
                    await setfee("2000")
                  } else if (module === "BALL SHOOTING ROBOT") {
                    await setfee("3000")
                  } else if (module === "FYD DISPLAY") {

                    await setfee("4000")
                  } else if (module === "START-UP IDEA" || module === "EGG DROP COMPETITION" || module === "STRAW TOWER COMPETITION") {
                    await setfee("2500")
                  } else if (module === "SPEED CAD COMPETITION") {
                    await setfee("2000")
                  }

                }
              }




              const randomNumber = () => {
                return Math.floor(Math.random() * 10);
              };

              const generateticketid = () => {
                let ticketid = '';
                for (let i = 0; i < 10; i++) {
                  ticketid += randomNumber().toString();
                }
                return ticketid;
              };


              const myticketid = generateticketid();

              await setticketid(myticketid)



              await waitt2();
              await waitt3();
              await setmodules(module + esport)
              await sethtml1(' <tr style="height: 18px;">            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);" colspan="2">                <div>                    <div style="text-align: center;"><span style="font-size: 18pt;"><strong>Ticket                                information</strong></span></div>                </div>            </td>        </tr>        <tr style="height: 18px;">            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                <div>                    <div>Participant Name</div>                </div>            </td>            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                ' + teamleadername + '            </td>        </tr>        <tr style="height: 18px;">            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                <div>                    <div>Participant Reg#</div>                </div>            </td>            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                ' + universityrollno + '            </td>        </tr>        <tr>            <td style="background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                <div>                    <div>Email</div>                </div>            </td>            <td style="background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">' + teamleaderemail + '</td>        </tr>        <tr>   <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                <div>                    <div>                        <div>                            <div>                                <div>                                    <div>Whatsapp</div>                                </div>                            </div>                        </div>                    </div>                </div>            </td>            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                ' + participantWhatsapp + '</td>        </tr>')
              await sethtml2(' <tr style="height: 18px;">            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                <div>                    <div>2nd Participant Name</div>                </div>            </td>            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                ' + secondparticipantname + '</td>        </tr>        <tr style="height: 18px;">            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                <div>                    <div>2nd Participant Reg#</div>                </div>            </td>            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                ' + secondpartricipantrollno + '</td>        </tr>')
              await sethtml3(' <tr style="height: 18px;">            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                <div>                    <div>3rd Participant Name</div>                </div>            </td>            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                ' + thirdparticipantname + '</td>        </tr>        <tr style="height: 18px;">            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                <div>                    <div>3rd Participant Reg#</div>                </div>            </td>            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                ' + thirdpartricipantrollno + '</td>        </tr>')
              await sethtml4('  <tr style="height: 18px;">            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                <div>                    <div>4th Participant Name</div>                </div>            </td>            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                ' + fourthparticipantname + '</td>        </tr>        <tr style="height: 18px;">            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                <div>                    <div>4th Participant Reg#</div>                </div>            </td>            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                ' + fourthpartricipantrollno + '</td>        </tr>')
              await sethtml5('<tr style="height: 18px;">            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                <div>                    <div>5th Participant Name</div>                </div>            </td>            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                ' + fivthparticipantname + '</td>        </tr>        <tr style="height: 18px;">            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                <div>                    <div>                        <div>                            <div>5th Participant Roll no.</div>                        </div>                    </div>                </div>            </td>            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                ' + fivthpartricipantrollno + '</td>        </tr>')
              await sethtml6('  <tr style="height: 20px;">            <td style="height: 20px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);" colspan="2">                <div>                    <div>                        <div>                            <div style="text-align: center;"><span style="font-size: 18pt;"><strong>University                                        Name</strong></span></div>                            <div style="text-align: center;">                                <div style="text-align: center;">                                    <div>                                        <div>&nbsp;</div>                                    </div>                                </div>                                ' + universityisother + '                            </div>                        </div>                    </div>                </div>            </td>        </tr>        <tr style="height: 18px;">            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);" colspan="2">                <div>                    <div>                        <div>                            <div>                                <div>                                    <div style="text-align: center;"><span                                            style="font-size: 18pt;"><strong>Module</strong></span></div>                                    <div style="text-align: center;">' + module + esport + '</div>                                </div>                            </div>                        </div>                    </div>                </div>            </td>        </tr>')
              await sethtml7(' <tr style="height: 18px;">            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);" colspan="2">                <div>                    <div>                        <div>                            <div>                                <div>                                    <div>                                        <div>                                            <div style="text-align: center;"><span style="font-size: 18pt;"><strong>Fees                                                        to                                                        be paid</strong></span></div>                                            <div style="text-align: center;"><strong>Rs. ' + fees + '/-</strong></div>                                        </div>                                    </div>                                </div>                            </div>                        </div>                    </div>                </div>            </td>        </tr>        <tr style="height: 28px;">            <td style="height: 28px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);" colspan="2">                <div>                    <div>                        <div>                            <div>                                <div>                                    <div style="text-align: center;"><span style="font-size: 14pt;"><strong>Ticket ID : ' + myticketid + '</strong></span></div>                                </div>                            </div>                        </div>                    </div>                </div>            </td>        </tr>')


              if (numberofparticipant === "1") {
                await sethtml2("")
                await sethtml3("")
                await sethtml4("")
                await sethtml5("")
                await setsecondparticipantname("")
                await setsecondpartricipantrollno("")

                await setthirdparticipantname("")
                await setthirdpartricipantrollno("")

                await setfourthparticipantname("")
                await setfourthpartricipantrollno("")

                await setfivthparticipantname("")
                await setfivthpartricipantrollno("")
              } else if (numberofparticipant === "2") {
                await sethtml3("")
                await sethtml4("")
                await sethtml5("")

                await setthirdparticipantname("")
                await setthirdpartricipantrollno("")

                await setfourthparticipantname("")
                await setfourthpartricipantrollno("")

                await setfivthparticipantname("")
                await setfivthpartricipantrollno("")
              } else if (numberofparticipant === "3") {
                await sethtml4("")
                await sethtml5("")

                await setfourthparticipantname("")
                await setfourthpartricipantrollno("")

                await setfivthparticipantname("")
                await setfivthpartricipantrollno("")
              } else if (numberofparticipant === "4") {
                await sethtml5("")

                await setfivthparticipantname("")
                await setfivthpartricipantrollno("")

              }
              await setotpform("4");
            }



    } else if (numberofparticipant === "5") {

      if (secondpartricipantrollno === universityrollno) {
        matches += "2nd "; alert(`Your registration number matches with the registration number of the ${matches}participant. Please use a different registration number to avoid a conflict.`);
      } else
        if (thirdpartricipantrollno === universityrollno) {
          matches += "3rd "; alert(`Your registration number matches with the registration number of the ${matches}participant. Please use a different registration number to avoid a conflict.`);
        } else
          if (fourthpartricipantrollno === universityrollno) {
            matches += "4th "; alert(`Your registration number matches with the registration number of the ${matches}participant. Please use a different registration number to avoid a conflict.`);
          } else
            if (fivthpartricipantrollno === universityrollno) {
              matches += "5th "; alert(`Your registration number matches with the registration number of the ${matches}participant. Please use a different registration number to avoid a conflict.`);
            } else
              if (secondpartricipantrollno === thirdpartricipantrollno) {
                alert("2nd participant's registration number matches with the registration number of the 3rd participant. Please use a different registration number to avoid a conflict.");
              } else if (secondpartricipantrollno === fourthpartricipantrollno) {
                alert("2nd participant's registration number matches with the registration number of the 4th participant. Please use a different registration number to avoid a conflict.");
              } else if (secondpartricipantrollno === fivthpartricipantrollno) {
                alert("2nd participant's registration number matches with the registration number of the 5th participant. Please use a different registration number to avoid a conflict.");
              } else if (thirdpartricipantrollno === fourthpartricipantrollno) {
                alert("3rd participant's registration number matches with the registration number of the 4th participant. Please use a different registration number to avoid a conflict.");
              } else if (thirdpartricipantrollno === fivthpartricipantrollno) {
                alert("3rd participant's registration number matches with the registration number of the 5th participant. Please use a different registration number to avoid a conflict.");
              } else if (fourthpartricipantrollno === fivthpartricipantrollno) {
                alert("4th participant's registration number matches with the registration number of the 5th participant. Please use a different registration number to avoid a conflict.");
              } else {















                if (module !== "E-Sports") { await setesport("") }



                const waitt2 = async () => {
                  if (selectedmodule === "CS Module") {

                    if (module === "Mobile development" || module === "UI Designing Competition" || module === "Graphic Designing Competition" || module === "AI Projects Exhibition" || module === "Speed coding contest" || module === "Technopreneurship Competition" || module === "Web Developing Competition" || module === "Debugging Competition" || module === "Database Contes" || module === "Game Development") {
                      await setfee("1400")

                    } else if (module === "FYP Display") {
                      await setfee("3000")
                    } else if (module === "workshops & Career Counselling") {
                      await setfee("500")
                    } else if (module === "E-Sports") {
                      if (numberofparticipant === "1") {
                        await setfee("700")
                      } else if (numberofparticipant === "2") {
                        await setfee("1400")
                      } else if (numberofparticipant === "3") {
                        await setfee("2100")
                      } else if (numberofparticipant === "4") {
                        await setfee("2800")
                      } else if (numberofparticipant === "5") {
                        await setfee("3500")
                      }

                    }

                  }
                }
                const waitt3 = async () => {
                  if (selectedmodule === "ME Module") {

                    if (module === "LINE FOLLOWING ROBOT LOGIC COMPETITION" || module === "LINE FOLLOWING ROBOT MICROCONTROLLER COMPETITION") {
                      await setfee("2500")
                    } else if (module === "CATAPULT SHOOTING COMPETITION") {
                      await setfee("2000")
                    } else if (module === "BALL SHOOTING ROBOT") {
                      await setfee("3000")
                    } else if (module === "FYD DISPLAY") {

                      await setfee("4000")
                    } else if (module === "START-UP IDEA" || module === "EGG DROP COMPETITION" || module === "STRAW TOWER COMPETITION") {
                      await setfee("2500")
                    } else if (module === "SPEED CAD COMPETITION") {
                      await setfee("2000")
                    }

                  }
                }




                const randomNumber = () => {
                  return Math.floor(Math.random() * 10);
                };

                const generateticketid = () => {
                  let ticketid = '';
                  for (let i = 0; i < 10; i++) {
                    ticketid += randomNumber().toString();
                  }
                  return ticketid;
                };


                const myticketid = generateticketid();

                await setticketid(myticketid)



                await waitt2();
                await waitt3();
                await setmodules(module + esport)
                await sethtml1(' <tr style="height: 18px;">            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);" colspan="2">                <div>                    <div style="text-align: center;"><span style="font-size: 18pt;"><strong>Ticket                                information</strong></span></div>                </div>            </td>        </tr>        <tr style="height: 18px;">            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                <div>                    <div>Participant Name</div>                </div>            </td>            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                ' + teamleadername + '            </td>        </tr>        <tr style="height: 18px;">            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                <div>                    <div>Participant Reg#</div>                </div>            </td>            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                ' + universityrollno + '            </td>        </tr>        <tr>            <td style="background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                <div>                    <div>Email</div>                </div>            </td>            <td style="background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">' + teamleaderemail + '</td>        </tr>        <tr>   <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                <div>                    <div>                        <div>                            <div>                                <div>                                    <div>Whatsapp</div>                                </div>                            </div>                        </div>                    </div>                </div>            </td>            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                ' + participantWhatsapp + '</td>        </tr>')
                await sethtml2(' <tr style="height: 18px;">            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                <div>                    <div>2nd Participant Name</div>                </div>            </td>            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                ' + secondparticipantname + '</td>        </tr>        <tr style="height: 18px;">            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                <div>                    <div>2nd Participant Reg#</div>                </div>            </td>            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                ' + secondpartricipantrollno + '</td>        </tr>')
                await sethtml3(' <tr style="height: 18px;">            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                <div>                    <div>3rd Participant Name</div>                </div>            </td>            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                ' + thirdparticipantname + '</td>        </tr>        <tr style="height: 18px;">            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                <div>                    <div>3rd Participant Reg#</div>                </div>            </td>            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                ' + thirdpartricipantrollno + '</td>        </tr>')
                await sethtml4('  <tr style="height: 18px;">            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                <div>                    <div>4th Participant Name</div>                </div>            </td>            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                ' + fourthparticipantname + '</td>        </tr>        <tr style="height: 18px;">            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                <div>                    <div>4th Participant Reg#</div>                </div>            </td>            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                ' + fourthpartricipantrollno + '</td>        </tr>')
                await sethtml5('<tr style="height: 18px;">            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                <div>                    <div>5th Participant Name</div>                </div>            </td>            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                ' + fivthparticipantname + '</td>        </tr>        <tr style="height: 18px;">            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                <div>                    <div>                        <div>                            <div>5th Participant Roll no.</div>                        </div>                    </div>                </div>            </td>            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                ' + fivthpartricipantrollno + '</td>        </tr>')
                await sethtml6('  <tr style="height: 20px;">            <td style="height: 20px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);" colspan="2">                <div>                    <div>                        <div>                            <div style="text-align: center;"><span style="font-size: 18pt;"><strong>University                                        Name</strong></span></div>                            <div style="text-align: center;">                                <div style="text-align: center;">                                    <div>                                        <div>&nbsp;</div>                                    </div>                                </div>                                ' + universityisother + '                            </div>                        </div>                    </div>                </div>            </td>        </tr>        <tr style="height: 18px;">            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);" colspan="2">                <div>                    <div>                        <div>                            <div>                                <div>                                    <div style="text-align: center;"><span                                            style="font-size: 18pt;"><strong>Module</strong></span></div>                                    <div style="text-align: center;">' + module + esport + '</div>                                </div>                            </div>                        </div>                    </div>                </div>            </td>        </tr>')
                await sethtml7(' <tr style="height: 18px;">            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);" colspan="2">                <div>                    <div>                        <div>                            <div>                                <div>                                    <div>                                        <div>                                            <div style="text-align: center;"><span style="font-size: 18pt;"><strong>Fees                                                        to                                                        be paid</strong></span></div>                                            <div style="text-align: center;"><strong>Rs. ' + fees + '/-</strong></div>                                        </div>                                    </div>                                </div>                            </div>                        </div>                    </div>                </div>            </td>        </tr>        <tr style="height: 28px;">            <td style="height: 28px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);" colspan="2">                <div>                    <div>                        <div>                            <div>                                <div>                                    <div style="text-align: center;"><span style="font-size: 14pt;"><strong>Ticket ID : ' + myticketid + '</strong></span></div>                                </div>                            </div>                        </div>                    </div>                </div>            </td>        </tr>')


                if (numberofparticipant === "1") {
                  await sethtml2("")
                  await sethtml3("")
                  await sethtml4("")
                  await sethtml5("")
                  await setsecondparticipantname("")
                  await setsecondpartricipantrollno("")

                  await setthirdparticipantname("")
                  await setthirdpartricipantrollno("")

                  await setfourthparticipantname("")
                  await setfourthpartricipantrollno("")

                  await setfivthparticipantname("")
                  await setfivthpartricipantrollno("")
                } else if (numberofparticipant === "2") {
                  await sethtml3("")
                  await sethtml4("")
                  await sethtml5("")

                  await setthirdparticipantname("")
                  await setthirdpartricipantrollno("")

                  await setfourthparticipantname("")
                  await setfourthpartricipantrollno("")

                  await setfivthparticipantname("")
                  await setfivthpartricipantrollno("")
                } else if (numberofparticipant === "3") {
                  await sethtml4("")
                  await sethtml5("")

                  await setfourthparticipantname("")
                  await setfourthpartricipantrollno("")

                  await setfivthparticipantname("")
                  await setfivthpartricipantrollno("")
                } else if (numberofparticipant === "4") {
                  await sethtml5("")

                  await setfivthparticipantname("")
                  await setfivthpartricipantrollno("")

                }
                await setotpform("4");
              }


    }else {subbbbmit()}







  // if (secondpartricipantrollno === universityrollno) {
  //   matches += "2nd "; alert(`Your registration number matches with the registration number of the ${matches}participant. Please use a different registration number to avoid a conflict.`);
  // } else
  //   if (thirdpartricipantrollno === universityrollno) {
  //     matches += "3rd "; alert(`Your registration number matches with the registration number of the ${matches}participant. Please use a different registration number to avoid a conflict.`);
  //   } else
  //     if (fourthpartricipantrollno === universityrollno) {
  //       matches += "4th "; alert(`Your registration number matches with the registration number of the ${matches}participant. Please use a different registration number to avoid a conflict.`);
  //     } else
  //       if (fivthpartricipantrollno === universityrollno) {
  //         matches += "5th "; alert(`Your registration number matches with the registration number of the ${matches}participant. Please use a different registration number to avoid a conflict.`);
  //       } else
  //         if (secondpartricipantrollno === thirdpartricipantrollno) {
  //           alert("2nd participant's registration number matches with the registration number of the 3rd participant. Please use a different registration number to avoid a conflict.");
  //         } else if (secondpartricipantrollno === fourthpartricipantrollno) {
  //           alert("2nd participant's registration number matches with the registration number of the 4th participant. Please use a different registration number to avoid a conflict.");
  //         } else if (secondpartricipantrollno === fivthpartricipantrollno) {
  //           alert("2nd participant's registration number matches with the registration number of the 5th participant. Please use a different registration number to avoid a conflict.");
  //         } else if (thirdpartricipantrollno === fourthpartricipantrollno) {
  //           alert("3rd participant's registration number matches with the registration number of the 4th participant. Please use a different registration number to avoid a conflict.");
  //         } else if (thirdpartricipantrollno === fivthpartricipantrollno) {
  //           alert("3rd participant's registration number matches with the registration number of the 5th participant. Please use a different registration number to avoid a conflict.");
  //         } else if (fourthpartricipantrollno === fivthpartricipantrollno) {
  //           alert("4th participant's registration number matches with the registration number of the 5th participant. Please use a different registration number to avoid a conflict.");
  //         } else {















  //           if (module !== "E-Sports") { await setesport("") }



  //           const waitt2 = async () => {
  //             if (selectedmodule === "CS Module") {

  //               if (module === "Mobile development" || module === "UI Designing Competition" || module === "Graphic Designing Competition" || module === "AI Projects Exhibition" || module === "Speed coding contest" || module === "Technopreneurship Competition" || module === "Web Developing Competition" || module === "Debugging Competition" || module === "Database Contes" || module === "Game Development") {
  //                 await setfee("1400")

  //               } else if (module === "FYP Display") {
  //                 await setfee("3000")
  //               } else if (module === "workshops & Career Counselling") {
  //                 await setfee("500")
  //               } else if (module === "E-Sports") {
  //                 if (numberofparticipant === "1") {
  //                   await setfee("700")
  //                 } else if (numberofparticipant === "2") {
  //                   await setfee("1400")
  //                 } else if (numberofparticipant === "3") {
  //                   await setfee("2100")
  //                 } else if (numberofparticipant === "4") {
  //                   await setfee("2800")
  //                 } else if (numberofparticipant === "5") {
  //                   await setfee("3500")
  //                 }

  //               }

  //             }
  //           }
  //           const waitt3 = async () => {
  //             if (selectedmodule === "ME Module") {

  //               if (module === "LINE FOLLOWING ROBOT LOGIC COMPETITION" || module === "LINE FOLLOWING ROBOT MICROCONTROLLER COMPETITION") {
  //                 await setfee("2500")
  //               } else if (module === "CATAPULT SHOOTING COMPETITION") {
  //                 await setfee("2000")
  //               } else if (module === "BALL SHOOTING ROBOT") {
  //                 await setfee("3000")
  //               } else if (module === "FYD DISPLAY") {

  //                 await setfee("4000")
  //               } else if (module === "START-UP IDEA" || module === "EGG DROP COMPETITION" || module === "STRAW TOWER COMPETITION") {
  //                 await setfee("2500")
  //               } else if (module === "SPEED CAD COMPETITION") {
  //                 await setfee("2000")
  //               }

  //             }
  //           }




  //           const randomNumber = () => {
  //             return Math.floor(Math.random() * 10);
  //           };

  //           const generateticketid = () => {
  //             let ticketid = '';
  //             for (let i = 0; i < 10; i++) {
  //               ticketid += randomNumber().toString();
  //             }
  //             return ticketid;
  //           };


  //           const myticketid = generateticketid();

  //           await setticketid(myticketid)



  //           await waitt2();
  //           await waitt3();
  //           await setmodules(module + esport)
  //           await sethtml1(' <tr style="height: 18px;">            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);" colspan="2">                <div>                    <div style="text-align: center;"><span style="font-size: 18pt;"><strong>Ticket                                information</strong></span></div>                </div>            </td>        </tr>        <tr style="height: 18px;">            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                <div>                    <div>Participant Name</div>                </div>            </td>            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                ' + teamleadername + '            </td>        </tr>        <tr style="height: 18px;">            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                <div>                    <div>Participant Reg#</div>                </div>            </td>            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                ' + universityrollno + '            </td>        </tr>        <tr>            <td style="background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                <div>                    <div>Email</div>                </div>            </td>            <td style="background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">' + teamleaderemail + '</td>        </tr>        <tr>   <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                <div>                    <div>                        <div>                            <div>                                <div>                                    <div>Whatsapp</div>                                </div>                            </div>                        </div>                    </div>                </div>            </td>            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                ' + participantWhatsapp + '</td>        </tr>')
  //           await sethtml2(' <tr style="height: 18px;">            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                <div>                    <div>2nd Participant Name</div>                </div>            </td>            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                ' + secondparticipantname + '</td>        </tr>        <tr style="height: 18px;">            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                <div>                    <div>2nd Participant Reg#</div>                </div>            </td>            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                ' + secondpartricipantrollno + '</td>        </tr>')
  //           await sethtml3(' <tr style="height: 18px;">            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                <div>                    <div>3rd Participant Name</div>                </div>            </td>            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                ' + thirdparticipantname + '</td>        </tr>        <tr style="height: 18px;">            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                <div>                    <div>3rd Participant Reg#</div>                </div>            </td>            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                ' + thirdpartricipantrollno + '</td>        </tr>')
  //           await sethtml4('  <tr style="height: 18px;">            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                <div>                    <div>4th Participant Name</div>                </div>            </td>            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                ' + fourthparticipantname + '</td>        </tr>        <tr style="height: 18px;">            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                <div>                    <div>4th Participant Reg#</div>                </div>            </td>            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                ' + fourthpartricipantrollno + '</td>        </tr>')
  //           await sethtml5('<tr style="height: 18px;">            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                <div>                    <div>5th Participant Name</div>                </div>            </td>            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                ' + fivthparticipantname + '</td>        </tr>        <tr style="height: 18px;">            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                <div>                    <div>                        <div>                            <div>5th Participant Roll no.</div>                        </div>                    </div>                </div>            </td>            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);">                ' + fivthpartricipantrollno + '</td>        </tr>')
  //           await sethtml6('  <tr style="height: 20px;">            <td style="height: 20px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);" colspan="2">                <div>                    <div>                        <div>                            <div style="text-align: center;"><span style="font-size: 18pt;"><strong>University                                        Name</strong></span></div>                            <div style="text-align: center;">                                <div style="text-align: center;">                                    <div>                                        <div>&nbsp;</div>                                    </div>                                </div>                                ' + universityisother + '                            </div>                        </div>                    </div>                </div>            </td>        </tr>        <tr style="height: 18px;">            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);" colspan="2">                <div>                    <div>                        <div>                            <div>                                <div>                                    <div style="text-align: center;"><span                                            style="font-size: 18pt;"><strong>Module</strong></span></div>                                    <div style="text-align: center;">' + module + esport + '</div>                                </div>                            </div>                        </div>                    </div>                </div>            </td>        </tr>')
  //           await sethtml7(' <tr style="height: 18px;">            <td style="height: 18px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);" colspan="2">                <div>                    <div>                        <div>                            <div>                                <div>                                    <div>                                        <div>                                            <div style="text-align: center;"><span style="font-size: 18pt;"><strong>Fees                                                        to                                                        be paid</strong></span></div>                                            <div style="text-align: center;"><strong>Rs. ' + fees + '/-</strong></div>                                        </div>                                    </div>                                </div>                            </div>                        </div>                    </div>                </div>            </td>        </tr>        <tr style="height: 28px;">            <td style="height: 28px; background-color: rgb(236, 240, 241); border-color: rgb(0, 0, 0);" colspan="2">                <div>                    <div>                        <div>                            <div>                                <div>                                    <div style="text-align: center;"><span style="font-size: 14pt;"><strong>Ticket ID : ' + myticketid + '</strong></span></div>                                </div>                            </div>                        </div>                    </div>                </div>            </td>        </tr>')


  //           if (numberofparticipant === "1") {
  //             await sethtml2("")
  //             await sethtml3("")
  //             await sethtml4("")
  //             await sethtml5("")
  //             await setsecondparticipantname("")
  //             await setsecondpartricipantrollno("")

  //             await setthirdparticipantname("")
  //             await setthirdpartricipantrollno("")

  //             await setfourthparticipantname("")
  //             await setfourthpartricipantrollno("")

  //             await setfivthparticipantname("")
  //             await setfivthpartricipantrollno("")
  //           } else if (numberofparticipant === "2") {
  //             await sethtml3("")
  //             await sethtml4("")
  //             await sethtml5("")

  //             await setthirdparticipantname("")
  //             await setthirdpartricipantrollno("")

  //             await setfourthparticipantname("")
  //             await setfourthpartricipantrollno("")

  //             await setfivthparticipantname("")
  //             await setfivthpartricipantrollno("")
  //           } else if (numberofparticipant === "3") {
  //             await sethtml4("")
  //             await sethtml5("")

  //             await setfourthparticipantname("")
  //             await setfourthpartricipantrollno("")

  //             await setfivthparticipantname("")
  //             await setfivthpartricipantrollno("")
  //           } else if (numberofparticipant === "4") {
  //             await sethtml5("")

  //             await setfivthparticipantname("")
  //             await setfivthpartricipantrollno("")

  //           }
  //           await setotpform("4");
  //         }














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

          {otpform === "1" && <>

            <label for="chk" aria-hidden="true" >Personal Info</label>


            <form className='form1'
              onSubmit={sendemailopt}
            >






              <select name="year" id='year' type='select' onChange={(e) => { setuniversityisothername1(e.target.value) }}  >

                <option selected={universityisother === 'Szabist'} value="Szabist">SZABIST</option>
                <option selected={universityisother !== 'Szabist'} value="Other">Other</option>
                {/* <option  value="Szabist">SZABIST</option> */}
                {/* <option  value="Other">Other</option> */}

              </select>


              {universityisothername1 !== "Szabist" && <>
                <input required name="name" placeholder="Name of University" onChange={async (e) => {
                  await setuniversityisothername(e.target.value);
                  await setuniversityisother(e.target.value);

                }} value={universityisothername} />
              </>}
              <input required pattern="[A-Za-z ]+" name="name" onChange={(e) => { setteamleadername(e.target.value) }} value={teamleadername} placeholder="Participant's Name" />

              <input required placeholder="University's Reg#" pattern="[0-9]{0-10}$" value={universityrollno} onChange={(e) => { setuniversityrollno(e.target.value) }} />

              {emailverified === false && <>
                <input required pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" name="email" placeholder="Participant's Email" value={teamleaderemail} onChange={(e) => { setteamleaderemail(e.target.value) }} />
              </>}
              {emailverified === true && <>
                <input disabled required pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" name="email" placeholder="Participant's Email" value={teamleaderemail} onChange={(e) => { setteamleaderemail(e.target.value) }} />

              </>}

              <input required pattern="[0][3][0-9]{9}$" name="number" placeholder='Whatsapp 03xxxxxxxxx' value={participantWhatsapp} onChange={(e) => { setparticipantWhatsapp(e.target.value) }} />



              <table align="center" style={{ width: '100%', alignItems: 'center', textAlign: "left" }}>
                <tbody><tr>
                  <td>
                    <input type="radio" checked={selectedmodule === 'CS Module'} style={{ width: '90%', height: "30px" }} onChange={checkbox} name="category" id="CSC" value="CS Module" required />
                  </td>
                  <td>
                    <div for="CS Module" >CS Module</div>
                  </td>
                </tr>
                  <tr>
                    <td>
                      <input checked={selectedmodule === 'ME Module'} type="radio" name="category" onChange={checkbox} style={{ width: '90%', height: "30px" }} id="ESC" value="ME Module" />
                    </td>
                    <td>
                      <div for="ME Module" >ME Module</div>
                    </td>
                  </tr>
                </tbody></table>



              {button === "true" && <>   <button type="submit">PROCEED</button></>}
              {button === "false" && <>   <button className='disable' type="button" onClick={() => { message.info("please wait ") }}>PROCEED</button></>}



            </form>





          </>}



          {otpform === "2" && <>

            <form className='form1'
              onSubmit={checkopt}
            >

              <label for="chk" aria-hidden="true" >Email Varification</label>






              <input required pattern="[0-9]{4}$" placeholder="Enter OTP" onChange={(e) => { setgivenotp(e.target.value) }} />
              <table align="center" style={{ width: '100%', alignItems: 'center', textAlign: "left" }}>
                <tbody><tr>
                  <td>
                    <div style={{ marginBottom: "50px" }}>An OTP has been sent to your email.
                      <p style={{ fontSize: '1rem',textAlign:"justify",fontStyle:"italic", margin: "2px" }}>In case you have not received the OTP yet, I recommend checking your spam folder for any missed emails. Additionally, kindly ensure that the email address you entered is correct.</p>
                    </div>
                  </td>


                </tr>
                </tbody></table>


              {button === "true" && <>   <button type="submit">PROCEED</button></>}


            </form>
          </>}



          {otpform === "3" && <>

            <form className='form1'
              onSubmit={otpformsub3}
            >







              {selectedmodule === "CS Module" && <>
                <select required name="year" id='year' type='select' onChange={async (e) => {


                  // hide Option 3 and select first visible option



                  setmodule(e.target.value)
                  if (e.target.value === "E-Sports" || e.target.value === "workshops & Career Counselling") {

                    if (e.target.value === "workshops & Career Counselling") { setnumberofparticipant("1") } else {

                      if (esport === "(PUBG)") {

                        setnumberofparticipant("3")
                      }
                      else if (esport === "(CS 1.6)" || esport === "(Valorant)") {

                        setnumberofparticipant("4")
                      }
                      else if (esport === "(FIFA 22)" || esport === "(Tekken 7)") {

                        setnumberofparticipant("1")
                      }


                    }



                  } else { setnumberofparticipant("2") }


                  if (selectedmodule === "CS Module") {

                    if (e.target.value === "Mobile development" || e.target.value === "UI Designing Competition" || e.target.value === "Graphic Designing Competition" || e.target.value === "AI Projects Exhibition" || e.target.value === "Speed coding contest" || e.target.value === "Technopreneurship Competition" || e.target.value === "Web Developing Competition" || e.target.value === "Debugging Competition" || e.target.value === "Database Contes" || e.target.value === "Game Development") {
                      await setfee("1400")


                    } else if (e.target.value === "FYP Display") {
                      await setfee("3000")
                    } else if (e.target.value === "workshops & Career Counselling") {
                      await setfee("500")
                    } else if (e.target.value === "E-Sports") {
                      if (numberofparticipant === "1") {
                        await setfee("700")
                      } else if (numberofparticipant === "2") {
                        await setfee("1400")
                      } else if (numberofparticipant === "3") {
                        await setfee("2100")
                      } else if (numberofparticipant === "4") {
                        await setfee("2800")
                      } else if (numberofparticipant === "5") {
                        await setfee("3500")
                      }

                    }

                  }



                }
                } placeholder="Year" >


                  <option value="" disabled selected>Select Module</option>


                  {/* <option value="select Module" disabled selected>Select Module</option> */}
                  <option selected={module === 'Mobile development'} value="Mobile development">Mobile development</option>
                  <option selected={module === 'Database Contest'} value="Database Contest">Database Contest</option>
                  <option selected={module === 'E-Sports'} value="E-Sports">E-Sports</option>
                  <option selected={module === 'Technopreneurship Competition'} value="Technopreneurship Competition">Technopreneurship Competition</option>
                  <option selected={module === 'FYP Display'} value="FYP Display">FYP Display</option>
                  <option selected={module === 'Graphic Designing Competition'} value="Graphic Designing Competition">Graphic Designing Competition</option>
                  <option selected={module === 'Game Development'} value="Game Development">Game Development</option>
                  <option selected={module === 'Debugging Competition'} value="Debugging Competition">Debugging Competition</option>
                  <option selected={module === 'Web Developing Competition'} value="Web Developing Competition">Web Developing Competition</option>
                  <option selected={module === 'Speed coding contest'} value="Speed coding contest">Speed coding contest</option>
                  <option selected={module === 'AI Projects Exhibition'} value="AI Projects Exhibition">AI Projects Exhibition</option>
                  <option selected={module === 'UI Designing Competition'} value="UI Designing Competition">UI Designing Competition</option>
                  <option selected={module === 'workshops & Career Counselling'} value="workshops & Career Counselling">workshops & Career Counselling</option>


                </select>

              </>}

              {selectedmodule === "ME Module" && <>
                <select required name="year" id='year' type='select' onChange={async (e) => {
                  setmodule(e.target.value)



                  if (e.target.value === "SPEED CAD COMPETITION") {
                    setnumberofparticipant("1")
                  } else if (e.target.value === "STRAW TOWER COMPETITION" || e.target.value === "EGG DROP COMPETITION") {
                    setnumberofparticipant("2")
                  } else { setnumberofparticipant("3") }





                  if (selectedmodule === "ME Module") {

                    if (e.target.value === "LINE FOLLOWING ROBOT LOGIC COMPETITION" || e.target.value === "LINE FOLLOWING ROBOT MICROCONTROLLER COMPETITION") {
                      await setfee("2500")
                    } else if (e.target.value === "CATAPULT SHOOTING COMPETITION") {
                      await setfee("2000")
                    } else if (e.target.value === "BALL SHOOTING ROBOT") {
                      await setfee("3000")
                    } else if (e.target.value === "FYD DISPLAY") {

                      await setfee("4000")
                    } else if (e.target.value === "START-UP IDEA" || e.target.value === "EGG DROP COMPETITION" || e.target.value === "STRAW TOWER COMPETITION") {
                      await setfee("2500")
                    } else if (e.target.value === "SPEED CAD COMPETITION") {
                      await setfee("2000")
                    }

                  }





                }} placeholder="Year" >


                  <option value="" disabled selected>Select Module</option>


                  {/* <option value="select Module" disabled selected>Select Module</option> */}
                  <option selected={module === 'LINE FOLLOWING ROBOT LOGIC COMPETITION'} value="LINE FOLLOWING ROBOT LOGIC COMPETITION">LINE FOLLOWING ROBOT LOGIC COMPETITION </option>
                  <option selected={module === 'LINE FOLLOWING ROBOT MICROCONTROLLER COMPETITION'} value="LINE FOLLOWING ROBOT MICROCONTROLLER COMPETITION">LINE FOLLOWING ROBOT MICROCONTROLLER COMPETITION</option>

                  <option selected={module === 'BALL SHOOTING ROBOT'} value="BALL SHOOTING ROBOT">BALL SHOOTING ROBOT</option>
                  <option selected={module === 'EGG DROP COMPETITION'} value="EGG DROP COMPETITION">EGG DROP COMPETITION</option>
                  <option selected={module === 'FYD DISPLAY'} value="FYD DISPLAY">FYD DISPLAY</option>
                  <option selected={module === 'STRAW TOWER COMPETITION'} value="STRAW TOWER COMPETITION">STRAW TOWER COMPETITION</option>
                  <option selected={module === 'START-UP IDEA'} value="START-UP IDEA">START-UP IDEA</option>
                  <option selected={module === 'CATAPULT SHOOTING COMPETITION'} value="CATAPULT SHOOTING COMPETITION">CATAPULT SHOOTING COMPETITION</option>
                  <option selected={module === 'SPEED CAD COMPETITION'} value="SPEED CAD COMPETITION">SPEED CAD COMPETITION</option>

                </select>
              </>}


              {module === "E-Sports" && <>
                <select required name="year" id='year' type='select' onChange={async (e) => {
                  setesport(e.target.value)
                  if (e.target.value === "(PUBG)") { setnumberofparticipant("3") }
                  if (e.target.value === "(CS 1.6)" || e.target.value === "(Valorant)") { setnumberofparticipant("4") }
                  if (e.target.value === "(FIFA 22)" || e.target.value === "(Tekken 7)") { setnumberofparticipant("1") }

                  if (module === "E-Sports") {
                    if (numberofparticipant === "1") {
                      await setfee("700")
                    } else if (numberofparticipant === "2") {
                      await setfee("1400")
                    } else if (numberofparticipant === "3") {
                      await setfee("2100")
                    } else if (numberofparticipant === "4") {
                      await setfee("2800")
                    } else if (numberofparticipant === "5") {
                      await setfee("3500")
                    }

                  }
                }} placeholder="Year" >
                  <option value="" disabled selected>Select the Game</option>
                  <option selected={esport === '(PUBG)'} value="(PUBG)">PUBG</option>
                  <option selected={esport === '(CS 1.6)'} value="(CS 1.6)">CS 1.6</option>
                  <option selected={esport === '(Valorant)'} value="(Valorant)">Valorant</option>
                  <option selected={esport === '(FIFA 22)'} value="(FIFA 22)">FIFA 22</option>
                  <option selected={esport === '(Tekken 7)'} value="(Tekken 7)">Tekken 7</option>

                </select>

              </>}

              {/* to be seeeeeeeeeeeeeeettttttttttttt */}
              {(selectedmodule === "CS Module" && module !== "") && <>

                <select required name="year" id='year' type='select' onChange={async (e) => {



                  if (module === "E-Sports") {
                    if (e.target.value === "1") {
                      await setfee("700")
                    } else if (e.target.value === "2") {
                      await setfee("1400")
                    } else if (e.target.value === "3") {
                      await setfee("2100")
                    } else if (e.target.value === "4") {
                      await setfee("2800")
                    } else if (e.target.value === "5") {
                      await setfee("3500")
                    }

                  }



                  await setnumberofparticipant(e.target.value)
                  await setnumberofparticipant2(e.target.value)
                }} placeholder="Year" >
                  <option value="" disabled selected>Number of Participants</option>





                  {module === "E-Sports" && <>


                    {(esport === "(PUBG)") && <>

                      <option selected={numberofparticipant2 === '3'} value="3">3</option>
                      <option selected={numberofparticipant2 === '4'} value="4">4</option>


                    </>}
                    {(esport === "(FIFA 22)" || esport === "(Tekken 7)") && <>


                      <option selected={numberofparticipant2 === '1'} value="1">1</option>

                    </>}


                    {(esport === "(CS 1.6)" || esport === "(Valorant)") && <>


                      <option selected={numberofparticipant2 === '4'} value="4">4</option>
                      <option selected={numberofparticipant2 === '5'} value="5">5</option>
                    </>}
                  </>}



                  {module === "workshops & Career Counselling" && <>
                    <option selected={numberofparticipant2 === '1'} value="1">1</option>
                  </>}


                  {(module !== "workshops & Career Counselling" && module !== "E-Sports") && <>
                    <option selected={numberofparticipant2 === '2'} value="2">2</option>
                  </>}












                </select>
              </>}





              {(selectedmodule === "ME Module" && module !== "") && <>

                <select required name="year" id='MEModulenumberofp' type='select' onChange={async (e) => {
                  await setnumberofparticipant(e.target.value)
                  await setnumberofparticipant2(e.target.value)

                  if (selectedmodule === "ME Module") {

                    if (e.target.value === "LINE FOLLOWING ROBOT LOGIC COMPETITION" || e.target.value === "LINE FOLLOWING ROBOT MICROCONTROLLER COMPETITION") {
                      await setfee("2500")
                    } else if (e.target.value === "CATAPULT SHOOTING COMPETITION") {
                      await setfee("2000")
                    } else if (e.target.value === "BALL SHOOTING ROBOT") {
                      await setfee("3000")
                    } else if (e.target.value === "FYD DISPLAY") {

                      await setfee("4000")
                    } else if (e.target.value === "START-UP IDEA" || e.target.value === "EGG DROP COMPETITION" || e.target.value === "STRAW TOWER COMPETITION") {
                      await setfee("2500")
                    } else if (e.target.value === "SPEED CAD COMPETITION") {
                      await setfee("2000")
                    }

                  }

                }} placeholder="Year" >
                  <option value="" disabled selected>Number of Participants</option>

                  {(module !== "STRAW TOWER COMPETITION" && module !== "EGG DROP COMPETITION" && module !== "BALL SHOOTING ROBOT" && module !== "FYD DISPLAY" && module !== "LINE FOLLOWING ROBOT MICROCONTROLLER COMPETITION" && module !== "LINE FOLLOWING ROBOT LOGIC COMPETITION" && module !== "START-UP IDEA" && module !== "CATAPULT SHOOTING COMPETITION") && <>
                    <option selected={numberofparticipant2 === '1'} value="1">1</option>
                  </>}

                  {(module !== "SPEED CAD COMPETITION") && <>
                    {(module !== "FYD DISPLAY" && module !== "BALL SHOOTING ROBOT" && module !== "LINE FOLLOWING ROBOT MICROCONTROLLER COMPETITION" && module !== "LINE FOLLOWING ROBOT LOGIC COMPETITION" && module !== "START-UP IDEA" && module !== "CATAPULT SHOOTING COMPETITION") && <>
                      <option selected={numberofparticipant2 === '2'} value="2">2</option>

                    </>}
                    <option selected={numberofparticipant2 === '3'} value="3">3</option>
                    {(module !== "STRAW TOWER COMPETITION" && module !== "EGG DROP COMPETITION") && <>
                      <option selected={numberofparticipant2 === '2'} value="4">4</option>
                    </>}</>}







                </select>
              </>}





              {numberofparticipant === "2" && <>

                <input value={secondparticipantname} required pattern="[A-Za-z ]+" name="name" onChange={(e) => { setsecondparticipantname(e.target.value) }} placeholder="2nd Participant's Name" />
                <input value={secondpartricipantrollno} required pattern="[0-9]{0-9}$" onChange={(e) => { setsecondpartricipantrollno(e.target.value) }} placeholder="2nd Participant's Reg#" />

              </>}

              {numberofparticipant === "3" && <>
                <input value={secondparticipantname} required pattern="[A-Za-z ]+" name="name" onChange={(e) => { setsecondparticipantname(e.target.value) }} placeholder="2nd Participant's Name" />
                <input value={secondpartricipantrollno} required pattern="[0-9]{0-9}$" onChange={(e) => { setsecondpartricipantrollno(e.target.value) }} placeholder="2nd Participant's Reg#" />

                <input value={thirdparticipantname} required pattern="[A-Za-z ]+" name="name" onChange={(e) => { setthirdparticipantname(e.target.value) }} placeholder="3rd Participant's Name" />
                <input value={thirdpartricipantrollno} required pattern="[0-9]{0-9}$" onChange={(e) => { setthirdpartricipantrollno(e.target.value) }} placeholder="3rd Participant's Reg#" />

              </>}

              {numberofparticipant === "4" && <>
                <input value={secondparticipantname} required pattern="[A-Za-z ]+" name="name" onChange={(e) => { setsecondparticipantname(e.target.value) }} placeholder="2nd Participant's Name" />
                <input value={secondpartricipantrollno} required pattern="[0-9]{0-9}$" onChange={(e) => { setsecondpartricipantrollno(e.target.value) }} placeholder="2nd Participant's Reg#" />

                <input value={thirdparticipantname} required pattern="[A-Za-z ]+" name="name" onChange={(e) => { setthirdparticipantname(e.target.value) }} placeholder="3rd Participant's Name" />
                <input value={thirdpartricipantrollno} required pattern="[0-9]{0-9}$" onChange={(e) => { setthirdpartricipantrollno(e.target.value) }} placeholder="3rd Participant's Reg#" />

                <input value={fourthparticipantname} required pattern="[A-Za-z ]+" name="name" onChange={(e) => { setfourthparticipantname(e.target.value) }} placeholder="4th Participant's Name" />
                <input value={fourthpartricipantrollno} required pattern="[0-9]{0-9}$" onChange={(e) => { setfourthpartricipantrollno(e.target.value) }} placeholder="4th Participant's Reg#" />

              </>}

              {numberofparticipant === "5" && <>
                <input value={secondparticipantname} required pattern="[A-Za-z ]+" name="name" onChange={(e) => { setsecondparticipantname(e.target.value) }} placeholder="2nd Participant's Name" />
                <input value={secondpartricipantrollno} required pattern="[0-9]{0-9}$" onChange={(e) => { setsecondpartricipantrollno(e.target.value) }} placeholder="2nd Participant's Reg#" />

                <input value={thirdparticipantname} required pattern="[A-Za-z ]+" name="name" onChange={(e) => { setthirdparticipantname(e.target.value) }} placeholder="3rd Participant's Name" />
                <input value={thirdpartricipantrollno} required pattern="[0-9]{0-9}$" onChange={(e) => { setthirdpartricipantrollno(e.target.value) }} placeholder="3rd Participant's Reg#" />

                <input value={fourthparticipantname} required pattern="[A-Za-z ]+" name="name" onChange={(e) => { setfourthparticipantname(e.target.value) }} placeholder="4th Participant's Name" />
                <input value={fourthpartricipantrollno} required pattern="[0-9]{0-9}$" onChange={(e) => { setfourthpartricipantrollno(e.target.value) }} placeholder="4th Participant's Reg#" />

                <input value={fivthparticipantname} required pattern="[A-Za-z ]+" name="name" onChange={(e) => { setfivthparticipantname(e.target.value) }} placeholder="5th Participant's Name" />
                <input value={fivthpartricipantrollno} required pattern="[0-9]{0-9}$" onChange={(e) => { setfivthpartricipantrollno(e.target.value) }} placeholder="5th Participant's Reg#" />


              </>}





              {button === "true" && <>   <button type="submit">PROCEED</button></>}
              {/* <button className='disable' type="button" onClick={() => { message.info("please wait ") }}>PROCEED</button> */}


            </form>

          </>}











          {otpform === "4" && <>

            <form className='form1'
              onSubmit={postdata}
            >

              <label for="chk" aria-hidden="true" style={{ marginBottom: '20px' }} >Confirm Ticket</label>






              <div className='confirmTicket' >
                <div>Participant Name </div>
                <div style={{ width: "fit-content" }}>&nbsp;:&nbsp;</div>
                <div style={{ width: 'fit-content' }}> {teamleadername} </div>
              </div>

              <div className='confirmTicket' >
                <div>Participant Reg# </div>
                <div style={{ width: "fit-content" }}>&nbsp;:&nbsp;</div>
                <div style={{ width: 'fit-content' }}> {universityrollno}</div>
              </div>



              {(numberofparticipant === "2" || numberofparticipant === "3" || numberofparticipant === "4" || numberofparticipant === "5") && <>
                <div className='confirmTicket' >
                  <div>2nd Participant Name </div>
                  <div style={{ width: "fit-content" }}>&nbsp;:&nbsp;</div>
                  <div style={{ width: 'fit-content' }}> {secondparticipantname}</div>
                </div>
                <div className='confirmTicket' >
                  <div>2nd Participant Reg# </div>
                  <div style={{ width: "fit-content" }}>&nbsp;:&nbsp;</div>
                  <div style={{ width: 'fit-content' }}> {secondpartricipantrollno}</div>
                </div>
              </>}


              {(numberofparticipant === "3" || numberofparticipant === "4" || numberofparticipant === "5") && <>
                <div className='confirmTicket' >
                  <div>3rd Participant Name </div>
                  <div style={{ width: "fit-content" }}>&nbsp;:&nbsp;</div>
                  <div style={{ width: 'fit-content' }}> {thirdparticipantname}</div>
                </div>

                <div className='confirmTicket' >
                  <div>3rd Participant Reg# </div>
                  <div style={{ width: "fit-content" }}>&nbsp;:&nbsp;</div>
                  <div style={{ width: 'fit-content' }}> {thirdpartricipantrollno}</div>
                </div>
              </>}



              {(numberofparticipant === "4" || numberofparticipant === "5") && <>
                <div className='confirmTicket' >
                  <div>4th Participant Name </div>
                  <div style={{ width: "fit-content" }}>&nbsp;:&nbsp;</div>
                  <div style={{ width: 'fit-content' }}> {fourthparticipantname}</div>
                </div>

                <div className='confirmTicket' >
                  <div>4th Participant Reg# </div>
                  <div style={{ width: "fit-content" }}>&nbsp;:&nbsp;</div>
                  <div style={{ width: 'fit-content' }}> {fourthpartricipantrollno}</div>
                </div>
              </>}



              {numberofparticipant === "5" && <>
                <div className='confirmTicket' >
                  <div>5th Participant Name </div>
                  <div style={{ width: "fit-content" }}>&nbsp;:&nbsp;</div>
                  <div style={{ width: 'fit-content' }}> {fivthparticipantname} </div>
                </div>

                <div className='confirmTicket' >
                  <div>5th Participant Roll no. </div>
                  <div style={{ width: "fit-content" }}>&nbsp;:&nbsp;</div>
                  <div style={{ width: 'fit-content' }}> {fivthpartricipantrollno} </div>
                </div>
              </>}
              <div className='confirmTicket' >
                <div>University </div>
                <div style={{ width: "fit-content" }}>&nbsp;:&nbsp;</div>
                <div style={{ width: 'fit-content' }}>{universityisother}</div>
              </div>



              <div className='confirmTicket' >
                <div>Module </div>
                <div style={{ width: "fit-content" }}>&nbsp;:&nbsp;</div>
                <div style={{ width: 'fit-content' }}>{module + esport}</div>
              </div>


              <div className='confirmTicket' >
                <div>Whatsapp </div>
                <div style={{ width: "fit-content" }}>&nbsp;:&nbsp;</div>
                <div style={{ width: 'fit-content' }}> {participantWhatsapp}</div>
              </div>

              <div className='confirmTicket' >
                <div>Fees to be paid </div>
                <div style={{ width: "fit-content" }}>&nbsp;:&nbsp;</div>

                <div style={{ width: 'fit-content' }}> Rs. {fees}/-</div>
              </div>

              <div className='confirmTicket' style={{ justifyContent: "center" }}>


                <div style={{ width: 'fit-content' }}>{teamleaderemail}</div>
              </div>

              <div className='confirmTicket' style={{ justifyContent: "center" }}>


                <div style={{ width: 'fit-content' }}><h5> Your Ticket Id : {ticketid} </h5></div>
              </div>

              <div className='confirmTicket' style={{ justifyContent: "center" }}>
                <div style={{ width: '0', color: '#fff', display: 'flex',  paddingRight: '4%', position:"absolute", top:"5%",left:"5%" }}><a className='editlink' onClick={() => setotpform("1")}> <AiFillEdit /> Edit</a>
                </div>
              </div>



              {button === "true" && <>   <button fon type="submit">CONFIRM AND SUBMIT</button></>}


            </form>
          </>}
























        </div>











      </header>



    </div>
  )
}

export default Register