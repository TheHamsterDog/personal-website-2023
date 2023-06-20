import React from 'react';
const experience = {
    Initiatives: [{
        title: "Elect.io",
        link: "",
        timeFrame: "May 2022 - Present",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        title: "Extra Quadrata Tech Fest",
        link: "",

        timeFrame: "July 2022 - November 2022",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        title: "JS Bootcamp",

        timeFrame: "2021",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }],
    Volunteering: [
        {
            title: "Queer Teen India",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            link: "",
            timeFrame: "October 2022 - Present"
        }
    ],
    Leadership: [{
        title: "President of the Techno Club, DPS Kolar Road Bhopal",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        timeFrame: "2021 - 2023"

    },

    {
        title: "Cyber Director in the Student Council, DPS Kolar Road Bhopal",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        timeFrame: "2021 - 2023"

    }]
}

const Experience = (props, ref) => {
    const [state, setState] = React.useState('Leadership');
    return (
        <div ref={ref} className="home-experience">
            <h2>Other Experiences</h2>
            <div className="home-experience-options">
                <div className="home-experience-options-selector" style={{ transition: "all 0.3s", transform: state === "Leadership" ? "" : state === "Initiatives" ? "translateX(100%)" : "translateX(200%)" }} ></div>
                {['Leadership', 'Initiatives', 'Volunteering'].map(a => {
                    return (<button className="home-experience-options-each" onClick={() => {
                        setState(a)
                    }}>
                        {a}
                    </button>)
                })}



            </div>

            {
                Object.keys(experience).map(a => {
                    let style = a === "Leadership" ? state === "Leadership" ? { transform: 'translateX(0)' } : state === "Initiatives" ? { transform: 'translateX(-100%)' } : { transform: 'translateX(-200%)' } : a === "Initiatives" ? state === "Leadership" ? { transform: 'translateX(100%)' } : state === "Initiatives" ? { transform: 'translateX(0%)' } : { transform: 'translateX(-100%)' } : state === "Leadership" ? { transform: 'translateX(200%)' } : state === "Initiatives" ? { transform: 'translateX(100%)' } : { transform: 'translateX(0%)' }
                    return (<div className='home-experience-each' style={style} >

                        {
                            experience[a].map(b => {
                                return (
                                    <div className='home-experience-each-each'>
                                        <h3>
                                            {b.title}
                                        </h3>
                                        <p>
                                            {b.description}
                                        </p>
                                        <span>
                                            {b.timeFrame}
                                        </span>
                                    </div>)
                            })
                        }
                    </div>)

                })
            }
        </div >
    )
}

export default React.forwardRef(Experience);