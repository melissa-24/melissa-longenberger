import React, { useEffect, useState } from 'react'

import List from './PastCard'
import withListLoading from './withListLoading'

const PastProjects = () => {

    const ListLoading = withListLoading(List)
    const [appState, setAppState] = useState({
        loading: false,
        projects: null,
    })

    useEffect(() => {
        setAppState({ loading: true })
        const baseURL = `https://ml-fullstack-portfolio.herokuapp.com/past-projects`
        // const baseURL = `http://localhost:5555/past-projects`
        fetch(baseURL)
            .then((res) => res.json())
            .then((projects) => {
                setAppState({ loading: false, projects: projects.data})
            })
    }, [setAppState])

    return (
        <div className='projects'>
            <h2>Past Projects</h2>
            <h4>Projects in this list are no longer being updated or hosted in most cases</h4>
            <ListLoading isLoading={appState.loading} projects={appState.projects} />
        </div>
    )
}

export default PastProjects