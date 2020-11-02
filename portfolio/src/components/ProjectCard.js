import React from 'react'

const List = (props) => {
    const { projects } = props
    if (!projects || projects.length === 0) return <p>Adding Projects</p>

    return (
        <>
        {console.log(projects)}
        {projects.map((project) => {
            return (
                <div className='project-card' key={project.id}>
                    <h3>{project.name}</h3>
                    <h4>{project.description}</h4>
                    <div className='links'>
                        <a href={project.source} target='_blank'>Source Code</a>
                        <a href={project.link} target='_blank'>Link to Site</a>
                    </div>
                    <img src={project.url} alt='Project img' />
                </div>
            )
        })}
        </>
    )
}

export default List