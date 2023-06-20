import React from 'react';

const tests = {
    IELTS: ['Overall: 8', "Reading: 9", "Listening: 8.5", "Speaking:8", "Writing: 7"],
    "Duolingo English Test": ["Overall: 145", "Conversation: 135", "Production: 130", "Comprehension: 150", "Literacy: 150"],
    "SATs": ["Overall: 1500", "Evidence Based Reading and Writing: 740", "Mathematics: 760"]
}

const achievements = {
    "National Level": [
        "2nd Position in 'Brew the Code' competition hosted by DPS Greater Faridabad 2022",
        "3rd Position in LNCT National Innovative STEM Model Competition 2021",
        "3rd Position in Scientific Nerds MOSAIC-2021 interschool competition",
        "2nd Position in Tethics 2021"
    ],
    "Regional Level": [
        "1st Position in 'Looks and Looms' interschool business-model presentation 2022",
        "2nd Position in Clutch Technocon V1.0 Inter-School gaming competition 2019",
        "3rd Position in Sanskar Valley Tech Fest Quiz 2022-23",
        "3rd Position in Sanskar Valley Tech Fest Web Weavers 2022-23",
        "Honorable mention in DPS Kolar mun December 2022",
        "Verbal Mention in DPS Kolar MUN December 2021"
    ],
    "School Level": [
        "1st Position in inter-house Code Hour 2021-22",
        "2nd Position in inter-house English Debate Competition 2022",
        "2nd Position in Inter-house Science Debate Competition",
        "2nd Position in inter-house Code Hour 2019-20",
        "3rd Position in inter-house extempore competition 2021",
        "Scholar Badge (for academic excellence, 2019-20)"
    ]
};



const TestAndAchievements = (props) => {


    return (
        <div className="home-test">

            <div className="home-test-scores">
                <h2>Test Scores</h2>
                <p>Click for more details</p>
                <div className='home-test-scores-container'>
                    {Object.entries(tests).map(([testName, scores]) => {
                        let [open, setOpen] = React.useState(false)
                        console.log(open)
                        return (
                            <div key={testName}>
                                <h3 onClick={() => setOpen(open => !open)}>{testName}</h3>
                                <ul style={!open ? { height: "0rem" } : { height: '14rem' }}>
                                    {scores.map((score, index) => (
                                        <li key={index}>{score}</li>
                                    ))}
                                </ul>
                                

                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="home-test-achievements">
                <div>
                    <h2>Achievements</h2>
                    <div className="home-test-achievements-container">
                        {Object.entries(achievements).map(([level, positions]) => (
                            <div key={level} className="home-test-achievements-container-level">
                                <h3>{level}</h3>
                                <ul>
                                    {positions.map((position, index) => (
                                        <li key={index}>{position}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>

    );
}

export default TestAndAchievements;
