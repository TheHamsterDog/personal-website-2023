import React from 'react';
const workExperience = [
    {
        company: "UmmLabs",
        location: "Georgia, US",
        title: "Full Stack Developer",
        description: "Developed web servers and websites, integrated them using technologies such as Svelte, Nest.js, Socket.io, prisma, and more, and created documentations using postman.",
        type: "Contract/Freelance",
        timeframe: "March 2023 - Present",
        link: ""
    },
    {
        company: "IDS staffing LLC",
        location: "Georgia, US",
        title: "Full Stack Web Developer",
        description: "Developed Ethereum Smart Contracts, integrated them using web3.js, and developed full stack websites using technologies such as Svelte, Koa, MongoDB, and TailwindCSS.",
        type: "Contract/Freelance",
        link: "https://ids.company",
        timeframe: "Oct 2021 - August 2022"
    },
    {
        company: "HUB ALFA",
        location: "India",
        title: "Freelance Senior Full Stack Developer",
        description: "Developed, deployed, and maintained three full stack websites using technologies including React, Node.js, Express, MongoDB, and SCSS.",
        type: "Contract/Freelance",
        link: "https://evolv.today/",
        timeframe: "February 2021 - Present"
    },
];


const Work = (props, ref) => {
    return (<div ref={ref} id="#work" className="home-work">
        <h2>
            Work Experience
        </h2>
        <p className="home-work-info">Hover for more details</p>
        <div className="home-work-container">
            {workExperience.map((work, index) => (
                <div className="home-work-container-each" key={index}>
                    <div className="home-work-container-each-front">

                        <h3>{work.company}</h3>

                        <p className="home-work-container-each-title">{work.title}</p>

                        <p className="home-work-container-each-timeframe">{work.timeframe}</p>

                        <p className="home-work-container-each-description">{work.description}</p>

                    </div>
                    <div className="home-work-container-each-back">
                        <div className="home-work-container-each-back-container">

                            {work.location !== "India" ? <iframe className="home-work-container-each-back-map" title={work.company} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3438881.3820673847!2d-83.19406245!3d32.67852995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f136c51d5f8157%3A0x6684bc10ec4f10e7!2sGeorgia%2C%20USA!5e0!3m2!1sen!2sin!4v1685873851034!5m2!1sen!2sin" width="300" height="200" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> : <iframe className="home-work-container-each-back-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448194.82162352453!2d77.09323125!3d28.6440836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1685873893507!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>}


                            <p className="home-work-container-each-type">Type of work: {work.type}</p>
                        </div>
                    </div>
                    
                </div>
            ))}

        </div>
    </div>)
}

export default React.forwardRef(Work);