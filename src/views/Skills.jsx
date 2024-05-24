import React from 'react';
import PercentageCircle from "@components/PercentageCircle";

const skills = [
    { name: "Git and Github", percentage: '70%' },
    { name: "JavaScript", percentage: '80%' },
    { name: "Python", percentage: '80%' },
    { name: "React", percentage: '80%' },
    { name: "Express", percentage: '80%' },
    { name: "C and C++", percentage: '50%' },
    { name: "Java", percentage: '60%' },
    { name: "Kotlin", percentage: '60%' },
    { name: "Docker", percentage: '60%' },
    { name: "Scrum", percentage: '60%' }
];

function Skills() {
    return (
        <div id="SkillsSection">
            <h2 className='secondTitle'></h2>
            <div className="TwoColumnContainer">
                <div className="skillsCode">
                    <h2 className='secondTitle'>Skills</h2>
                </div>
                <div className="custom-list-cont">
                    <table className="custom-table">
                        <tbody>
                            {skills.map((skill, index) => (
                                <tr key={index}>
                                    <td>{skill.name}</td>
                                    <td><PercentageCircle percentage={skill.percentage} /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Skills;
