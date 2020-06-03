import React from 'react'

const EducationSingle = (props) => {
    const {name, degree, gradDate, description, coursework, image} = props
    return (
        <div className='single-education'>
        <img alt='columbia' src={image} className='school-image' />
        <h3 className='school-name'>{name}</h3>
        <span className='degree'>{degree},</span> <span className='grad-date'>{gradDate}</span>
        <p className='description'>{description}</p>
        <span>Coursework included </span> <span className='single-technology'>{coursework.map((course, idx) => {
            return idx === coursework.length - 1 ? (<div className='sigle-course'>{course}</div>) :
            (<div className='sigle-course'>{course} - </div>)
    })}</span>
    </div>
    )
}

export default EducationSingle