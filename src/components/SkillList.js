import React from 'react'
import skills from '../data/skills'

const SkillList = (props) => {
    return (
        <div id='skill-list-container'>
            {skills.map((el, idx) => {
                return (
                    <div className='skill-level' key={idx} >
                        <div className='skill-level-container'>
                            <div>{el.level}: </div>
                        </div>
                        <div className='single-skill-container'>
                            {el.skill.map((el2, idx) => <div className='single-skill' key={idx}>{el2}</div>)}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default SkillList