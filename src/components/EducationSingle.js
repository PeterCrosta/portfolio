import React from 'react'


const EducationSingle = (props) => {
    const {name, degree, gradDate, description, coursework, image} = props
    return (
        <div className='single-education double-border'>
        <img alt={name} src={image} className='school-image' />
        <div className='school-container'>
            <h3 className='school-name title'>{name}</h3>
            <div className='degree-grad-container'>
                <span className='degree'>{degree}</span> <span className='grad-date'>{gradDate}</span>
            </div>
            <p className='description'>{description}</p>
            <div className='subjects-container'>
            <span className='subjects'>Subjects included: </span> <span className='single-technology'>{coursework.map((course, idx) => {
                return idx === coursework.length - 1 ? (<span key={idx} className='sigle-course'>{course}</span>) :
                (<span key={idx} className='sigle-course'>{course} - </span>)
                })}</span>
            </div>

        </div>
    </div>
    )
}

export default EducationSingle