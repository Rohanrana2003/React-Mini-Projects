/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";

function Page() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [text, setText] = useState('')


    const handleSubmit = (e) =>{
        e.preventDefault();
        setName(e.target[0].value);
        setEmail(e.target[1].value);
        setText(e.target[2].value);

        console.log(name, email, text)
    }

    const handleCall = () =>{
        console.log('call')
    }

    const handleMsg = () =>{
        console.log('msg')
    }

    const handleEmail = () =>{
        console.log('email')        
    }

  return (
    <div className="page">
        <div className="heading">
            <h1>CONTACT US</h1>
            <p>LET'S CONNECT: WE'RE HERE TO HELP, AND WE'D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT, YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA
            </p>
        </div>

        <div className="section">

            <div className="left">

                <div className="buttons">
                    <button onClick={handleMsg}>
                        <img src="Public/msg.png" alt="" />VIA SUPPORT CHAT</button>
                    <button onClick={handleCall}>
                        <img src="Public/phone.png" alt="" />
                        VIA CALL</button>
                </div>

                <button onClick={handleEmail} id="email"> <img id="msg" src="Public/msg.png" alt="" /> VIA EMAIL FORM </button>

                <div className="form">
                    <form onSubmit={handleSubmit} action="">
                        <p id="name">Name</p>
                        <input type="text" />
                        <br />
                        <p id="mail">Email </p>
                        <input type="text" />
                        <br />
                        <p id="text">Text</p>
                        <textarea ></textarea>
                        <br />
                        <button id="submit" type="submit">Submit</button>
                    </form>
                    
                </div>

            </div>

            <div className="right">
                <img id="girl" src="Public/mainLogo.svg" alt="" />
            </div>
        </div>

        <div>
            <p>Name = {name}</p>
            <p>Email = {email}</p>
            <p>Text = {text}</p>

        </div>
      
    </div>
  )
}

export default Page
