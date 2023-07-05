
import React, { forwardRef } from 'react';
import CallIcon from '@mui/icons-material/Call';
import HandymanIcon from '@mui/icons-material/Handyman';
import WorkIcon from '@mui/icons-material/Work';
import HomeIcon from '@mui/icons-material/Home';
import WebIcon from '@mui/icons-material/Web';
import HourglassFullIcon from '@mui/icons-material/HourglassFull';


const Navbar = (props) => {
    console.log(props);
    return (<><div className="navbar-outer">
        <div className="navbar">

            <div className="navbar-container">
                <div className="navbar-inner">

                    {["home", "work", "experience", "projects", "skills"].map(a => {

                        return <div className="navbar-inner-each" onClick={() => {
                            window.scrollTo(0, props[a].current.offsetTop)
                        }}>

                            {a === "home" ? <HomeIcon className="navbar-inner-each-icon" /> : a === "work" ? <WorkIcon className="navbar-inner-each-icon" /> : a === "experience" ? <HourglassFullIcon className="navbar-inner-each-icon" /> : a === "projects" ? <WebIcon className="navbar-inner-each-icon" /> : <HandymanIcon className="navbar-inner-each-icon" />}
                            <span className="navbar-inner-each-text">{a}</span>

                        </div>
                    })}
                    <div onClick={(e) => {
                        props.setOpen(open => !open);
                    }} className="navbar-inner-button">
                        <CallIcon className="navbar-inner-each-icon" />
                        <span className="navbar-inner-each-text">Contact</span>
                    </div>
                 
                </div>
            </div>

        </div></div>
        {/* <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
            <SpeedDial

                className='mobile-nav'
                ariaLabel="SpeedDial basic example"
                sx={{ position: 'absolute', bottom: 16, right: 16 }}
                icon={<SpeedDialIcon />}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                    />
                ))}
            </SpeedDial>
        </Box> */}

    </>)
}

export default forwardRef(Navbar)