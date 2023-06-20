import Link from 'next/link';
import React, { forwardRef } from 'react';


const Navbar = (props) => {
    let [open, setOpen] = React.useState(true)
    console.log(props);
    return (<div className="navbar-outer">
        <input type="checkbox" defaultChecked="true" id='nav' />
        <div className="navbar">

            <div className="navbar-container">
                <div className="navbar-inner">

                    {["home", "work", "experience", "projects", "skills"].map(a => {

                        return <div className="navbar-inner-each" onClick={() => {
                            window.scrollTo(0, props[a].current.offsetTop)
                        }}>{a}</div>
                    })}
                    <div onClick={(e)=>{
                        props.setOpen(open=>!open);
                    }} className="navbar-inner-button">
                        Contact
                    </div>
                    <label className="navbar-ball" htmlFor='nav' onClick={() => setOpen(!open)}>

                    </label >
                </div>
            </div>

        </div></div>)
}

export default forwardRef(Navbar)