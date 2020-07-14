import React from 'react'
import skills from '../data/skills'

const SkillList = (props) => {
    return (
        <div id='skill-list-container'>
            {skills.map((el, idx) => {
                return (
                    <div className={el.level} key={idx} >
                        <span>{el.level}: </span>
                        {el.skill.map((el2, idx) => <span key={idx}>{el2}</span>)}
                    </div>
                )
            })}
        </div>
    )
}

export default SkillList