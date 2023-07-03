import React from 'react';
const experience = {
    Initiatives: [{
        title: "Elect.io",
        link: "",
        timeFrame: "May 2022 - Present",
        description: "Elections are the most important reoccurring event in a democracy. I founded Elect io and created a website for us. Elect io aims to help the masses vote in a more educated manner by matching their opinions against politicians and giving them voting recommendations. This could help sway voters away from voting for political parties simply on a whim or \"because that's who their parents vote for\""
    },
    {
        title: "Extra Quadrata Tech Fest",
        link: "",

        timeFrame: "July 2022 - November 2022",
        description: "I was one of the four core organizers and the \"Primary Parent\" of the Extraquadrata event: DPS Kolar's very first annual tech meet up hosted by and for high schoolers which was held on the 16th of November. Our competitions tested the participants' creativity and logical thinking to response time and sheer skill for tech savvies and people who crave to be."
    },
    {
        title: "JS Bootcamp",

        timeFrame: "2021",
        description: "I started a Javascript Bootcamp to tutor highschool kids across India and prepare them for a career in web development. I was able to teach over 6 kids. The curriculum consisted of HTML, CSS, basic JS, JQuery, and React. It also followed a \"project based learning\" approach: I would teach a concept and then assign the kids a project that uses that concept. "
    }],
    Volunteering: [
        {
            title: "Queer Teen India",
            description: "I am building a full stack website which includes crucial information about the organization and a forum for queer teenagers: a safe, supportive and empowering home for the local LGBTQ+ community. We believe in a world where all people are free to express their gender identity and sexual orientation with pride.",
            link: "",
            timeFrame: "October 2022 - Present"
        }
    ],
    Leadership: [{
        title: "President of the Techno Club, DPS Kolar Road Bhopal",
        description: "Effectively managed the club, adeptly guiding its operations, fostering creativity among members in crafting their projects, captivating audiences through captivating presentations to ignite a keen interest in STEM, and imparted knowledge to aspiring students",
        timeFrame: "2021 - 2023"

    },

    {
        title: "Cyber Director in the Student Council, DPS Kolar Road Bhopal",
        description: "I provided invaluable support to both teachers and students, diligently assisting them with any technical challenges they encountered. Additionally, I actively contributed to fostering a disciplined environment on the school campus.",
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