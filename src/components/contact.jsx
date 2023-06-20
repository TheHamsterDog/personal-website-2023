"use client";

import React from 'react';
import CancelIcon from '@mui/icons-material/Cancel';
import axios from 'axios';

const Contact = (props) => {
    const [state, setState] = React.useState({
        submitted: false,
        userInfo: {
            email: "",
            name: "",
            message: "",
            Subject: ""
        }
    });
    console.log(state);
    return (
        <div style={{ transition: 'all 0.2s' }} className={props.open ? 'contact-open contact' : 'contact-close contact'}>

            <form className={state.submitted ? 'contact-form-submitted' : 'contact-form'} onSubmit={async (e) => {

                e.preventDefault();

                setState(state => ({ ...state, submitted: true, }));
                try {

                    const request = await axios.post('https://api.web3forms.com/submit', new FormData(e.target));

                    console.log("submitted")
                }
                catch (err) {

                    console.log(err);

                }
            }}>
                {state.submitted ? <div>
                    <CancelIcon className='contact-form-close' onClick={() => {
                        props.setOpen(false);
                    }} />
                    <h2>Thanks for reaching out!</h2>
                    <p>I will try to get back to you as soon as possible!</p>
                </div> :

                    <>
                        <input type="hidden" name="access_key" style={{ display: 'none' }} value="0a291a78-948a-40f4-a6a4-2fce6aeb94dc" />
                        <CancelIcon className='contact-form-close' onClick={() => {
                            props.setOpen(false);
                        }} />
                        <h2>Contact me</h2>

                        <div className='contact-form-each'>
                            <input value={state.userInfo.email} onChange={(e) => {
                                setState((state) => ({ ...state, userInfo: { ...state.userInfo, email: e.target.value } }))
                            }} type="email" name="email" placeholder=" " id='email' />
                            <label htmlFor="email" >Your Email</label>
                        </div>

                        <div className='contact-form-each'>
                            <input
                                value={state.userInfo.name} onChange={(e) => {
                                    setState((state) => ({ ...state, userInfo: { ...state.userInfo, name: e.target.value } }))
                                }}
                                type="text" name="name" placeholder=" " id='name' />
                            <label htmlFor="name">Your Name</label>
                        </div>

                        <div className='contact-form-each'>
                            <input
                                value={state.userInfo.Subject} onChange={(e) => {
                                    setState((state) => ({ ...state, userInfo: { ...state.userInfo, Subject: e.target.value } }))
                                }}
                                type="text" name="Subject" placeholder=" " id='Subject' />
                            <label htmlFor="Subject">Subject</label>
                        </div>
                        <div className='contact-form-each'>
                            <textarea name="message" onInput={(e) => {
                                if (e.target.value === "") {

                                    e.target.style.height = "3rem";
                                }
                                else if (e.target.clientHeight < e.target.scrollHeight && e.target.clientHeight < 200) {
                                    e.target.style.height = "auto";
                                    e.target.style.height = e.target.scrollHeight + "px"
                                }

                            }} id='message' placeholder=' ' value={state.userInfo.message} onChange={(e) => {
                                setState((state) => ({ ...state, userInfo: { ...state.userInfo, message: e.target.value } }))
                            }} />
                            <label htmlFor="message" >Message</label>
                        </div>


                        <div><button type='submit'>Submit</button></div>

                    </>}


            </form>
        </div>
    )
}

export default Contact;