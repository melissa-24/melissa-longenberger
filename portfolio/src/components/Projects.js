import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Projects = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        axios
        .get('https://ml-fullstack-portfolio.herokuapp.com/projects')
        .then((res) => setData(res.data[0]))
        // .then((res) => console.log(res.data[0]))
        .catch((err) => console.log(err))
    }, [])

    return (
        <div className='projects'>
            <h3>Current Projects</h3>
            <div className='project-card'>
                <h3>{data.name}</h3>
                <p>{data.description}</p>
                <img src={data.url} alt='Project img' />
            </div>
        </div>
    )
}

export default Projects