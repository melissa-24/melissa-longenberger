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
        // const baseURL = `https://ml-fullstack-portfolio.herokuapp.com/past-projects`
        const baseURL = `http://localhost:5555/past-projects`
        fetch(baseURL)
            .then((res) => res.json())
            .then((projects) => {
                setAppState({ loading: false, projects: projects.data})
            })
    }, [setAppState])

    return (
        <div className='projects'>
            <h3>Past Projects</h3>
            <ListLoading isLoading={appState.loading} projects={appState.projects} />
        </div>
    )
}

export default PastProjects