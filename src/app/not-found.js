"use client"
import React from 'react';

const NotFound = (props) => {

    return (
        <div className="notfound">
    
            <div className="notfound-container">
                <div style={{ overflow: 'hidden', }}>
                    <div className="notfound-rage text1-1">
                        404!!!
            </div>
                    <div className="notfound-details text2-3">
                        You're lost, pal!
            </div></div>
                <div className="notfound-message text3-3">
                    It looks like the webpage that you landed on doesn't exist!
            </div>
                <div className="notfound-navigation">
                    <button className="notfound-navigation-button text3-2" onClick={() => {
                        document.location.href = "/";
                    }}>Home</button>
                   
                </div>
            </div>
        </div>);

}

export default NotFound;