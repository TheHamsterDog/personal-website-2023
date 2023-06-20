const skills = [["Web3.js", '1 year', 20], ["JavaScript", '4 years', 80], ["Express.js", "3 years", 70], ["Node.js", "3 years", 70],
["Next.js", "2 years", 50],
["Git & Github", "4 years", 80],
["MySQL", "3 years", 70],
["MongoDB", "4 years", 80],
["C++", "4 years", 80],
["Jest", "Minimal Experience", 0],
["Data Structures and Algorithms", "4 years", 80],
["Python", "2 years", 50],
["HTML", "6 years", 100], ["CSS", "6 years", 100], ["SCSS", "3 years", 70], ["React", "3 years", 70],
["Socket.io", "2 years", 50], ["Redux", "3 years", 70], ["React Native", "2 years", 50], ["Svelte", "1 year", 40]]

import React from 'react';

const Skills = (props, ref) => {
    return (
        <div ref={ref} className="home-skills">
            <h2 className="home-skills-header">
                My Skills
            </h2>
            <div className="home-skills-container">
                {
                    skills.map(skill => {
                        return (
                            <div className="home-skills-container-each">
                                <h3>{skill[0]}</h3>
                                <div className="home-skills-container-each-progress" style={{ width: ((20 + ((skill[2] * 80) / 100))) + "%" }}></div>
                                <p>{skill[1]}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default React.forwardRef(Skills);