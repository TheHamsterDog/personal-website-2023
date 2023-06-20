import Link from "next/link"
import React from "react";
const projects = [
    {
        title: "Covid Help",
        link: "https://covidhelp.shreshthverma.me",
        description: "A web app that aims tp help disadvantaged people fund their medicare expenses",
        technologiesUsed: "MongoDB(Mongoose), Node.JS, Express, React, Redux, SCSS, Material UI, JavaScript, MailJet",
        image: "/covidhelp.png"
    },
    {
        title: "Elect.io",
        link: "https://electio-v4sys.ondigitalocean.app/",
        description: "It is a web app that seeks to help the masses vote in a more educated manner by matching their opinions against politicians",
        technologiesUsed: "MongoDB(Mongoose), Node.JS, Express, React, Redux, SCSS, Material UI, JavaScript, MailJet",
        image: "/electio.png"
    },

    {
        title: "Extra Quadrata Tech Fest Website",
        link: "https://extraquadrata.dpskolar.org/",
        description: "The website for the first ever extra quadrata tech fest that, among other things, allowed schools to register their teams, and view and confirm their registrations.",
        technologiesUsed: "MongoDB(Mongoose), Next.js, SCSS, Material UI, JavaScript, MailJet",
        image: "/extraquadrata.png"
    },
    {
        title: "Socizilla",
        link: "https://socizilla.shreshthverma.me",
        description: "It is a social media platform that has a lot of features like real time messaging, AI post tagging, and more.",
        technologiesUsed: "MongoDB(Mongoose), Cloudinary, Node.JS, Express, React, Redux, Socket.io, SCSS, Material UI, JavaScript, MailJet",
        image: "/socizilla.png"
    },

    {
        title: "Retain",
        link: "https://retain.shreshthverma.me/",
        description: "It is a note-keeping PWA that has almost every feature that one could ask for like labels, search, offline data storage, art and image storage, and so on.",
        technologiesUsed: "React, SCSS, Material UI, JavaScript",
        image: "/retain.png"
    },

    {
        title: "Les Voyages Progressifs",
        link: "https://dps-kolar-road-bhopal-code-hour.github.io/TechFest/",
        description: "A website for a fictitious travel agency that employs various frontend design methodologies",
        technologiesUsed: "HTML, SCSS, JavaScript, Maplibre",
        image: "/voyages.png"
    },
    {
        title: "Custom Blog Site",
        link: "https://blog.shreshthverma.me/",
        description: "A simple blog site that has features such as nested comments, admin rights, likes, dislikes, and more",
        technologiesUsed: "MongoDB(Mongoose), Node.JS, Express, React, Redux, SCSS, Material UI, JavaScript, MailJet",
        image: "/blog.png"
    },
    {
        title: "Surveys",
        link: "https://survey.shreshthverma.me/",
        description: "A survey-taking website that I created back in 10th grade.",
        technologiesUsed: "HTML, SCSS, JavaScript, React, Redux, SCSS, NodeJS, Express, Material UI",
        image: "/surveys.png"
    },
    {
        title: "PurseX",
        link: "https://github.com/PURSE-X/mobile-client",
        image: "/pursex.png",
        description: "An alternative to popular fintech apps that allows users to buy and sell stocks on their own. The link only shows the github repository of the mobile client",
        technologiesUsed: "React Native, Redux, Express, NodeJS, MongoDB, and more",
    }
]
const Projects = (props, ref) => {
    let [selected, setSelected] = React.useState(3);
    return (<div ref={ref} className="home-projects">
        <h2 className="home-projects-title">
            Featured Projects
        </h2>
        <p className="home-projects-description">
            Click on centered project to visit it and on non-centered projects to center them.
        </p>
        <div className="home-projects-container">
            {
                projects.map((project, index) => {
                    return <div href={project.link}
                        onClick={() => {
                            if(selected === index){
                                window.open(project.link)
                            }
                            setSelected(index)
                            
                        }}
                        style={{
                            transition: "all 0.2s"
                        }}
                        className={"home-projects-container-each home-projects-container-each-" + ((index + 1) - selected)}>
                        <img src={project.image || "https://images.unsplash.com/photo-1528072164453-f4e8ef0d475a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"} className={"home-projects-container-each-background"} />
                        <div className="home-projects-container-each-container">
                            <div className="home-projects-container-each-container-inner">
                                <h3>{project.title}</h3>
                                <p>
                                    {project.description}
                                </p>
                                <h4>
                                    Technologies Used
                                </h4>
                                <div className="home-projects-container-each-inner-tech">
                                    {project.technologiesUsed.split(', ').map(a => {
                                        return (<span>{a}</span>)
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>

                })
            }
        </div>
    </div >)
}

export default React.forwardRef(Projects);