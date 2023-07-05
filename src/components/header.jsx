import React from 'react'



const Header = (props, ref) => {
    const facts = {
        "Projects Created": "Over 40",
        "Programming Languages": "JavaScript, Python, C++, TypeScript",
        "Technologies Explored": "Web3.js, Next.js, Socket.io",
        "Testing Skills": "Jest ",
        "Collaborations": "Over 5",
        "Frameworks and Libraries": "React, React Native, Express.js, Node.js, Mongoose, Koa, Svelte",
        "Version Control": "Git",
        "Industry Experience": "Worked with 3 organizations",
        "Database Experience": "MongoDB (Mongoose), MySQL",

        "UI/UX Design Skills": "Wireframing, Prototyping, Figma",
    };


    console.log(Object.keys(facts))
    return (
        <div ref={ref} className='home-header' id="#Home">
            <div className='home-header-left'>
                <h1>
                    Shreshth Verma
                </h1>
                <img src="https://res.cloudinary.com/dx73dzg3g/image/upload/v1688586541/personal-website/profile_s2nlkp.webp"
                    alt="Profile Picture" />
                <h2>
                    A MERN stack developer, an entrepreneur, a perpetual student, and an amateur poet.
                </h2>
                <p>
                    Currently enrolled in the University of Sydney as a Dalyell's Scholar, I am an experienced Full Stack Developer with a demonstrated history of working in the industry who is pursuing a bachelor of advanced computing in Computer Science and Computational Data Science.
                    <br /><br />
                     Having worked with three companies, two unregistered NGOs, and on a diverse plethora of projects, I have experience with technologies such as React, React Native, Express.js, Node.js, MongoDB, HTML, CSS, SCSS, JavaScript, and many more.
                </p>
            </div>
            <div className='home-header-right'>
                <div className='home-header-right-info'>
                    {Object.keys(facts).map((a) => {
                        return (
                            <div className='home-header-right-info-each'>
                                <h3 className='home-header-right-info-each-header'>
                                    {a}
                                </h3>
                                <p>
                                    {facts[a]}
                                </p>
                            </div>)
                    })}
                </div>

            </div>

        </div>
    )
}


export default React.forwardRef(Header);