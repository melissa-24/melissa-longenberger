import React, { useEffect, useState } from 'react'

import List from './ProjectCard'
import withListLoading from './withListLoading'

const Projects = () => {

    const ListLoading = withListLoading(List)
    const [appState, setAppState] = useState({
        loading: false,
        projects: null,
    })

    useEffect(() => {
        setAppState({ loading: true })
        const baseURL = `https://ml-fullstack-portfolio.herokuapp.com/projects`
        // const baseURL = `http://localhost:5555/projects`
        fetch(baseURL)
            .then((res) => res.json())
            .then((projects) => {
                setAppState({ loading: false, projects: projects.data})
            })
    }, [setAppState])

    return (
        <div className='projects'>
            <h2>Current Projects</h2>
            <h4>Projects on this page are live and in many cases still being updated as needed</h4>
            <ListLoading isLoading={appState.loading} projects={appState.projects} />
        </div>
    )
}

export default Projects