import React from 'react'

const List = (props) => {
    const { projects } = props
    if (!projects || projects.length === 0) return <p>Adding Old Projects</p>

    return (
        <>
        {projects.map((project) => {
            return (
                <div className='project-card' key={project.id}>
                <h3>{project.pastName}</h3>
                <h4>{project.pastDescription}</h4>
                <div className='links'>
                    <a href={project.pastLink} target='_blank'>Link to Archives</a>
                </div>
                <img src={project.pastUrl} alt='Project img' />
            </div>
            )
        })}
        </>
    )
}

export default List