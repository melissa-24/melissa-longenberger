import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const Projects = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        axios
        .get('https://ml-fullstack-portfolio.herokuapp.com/projects')
        // .get('http://localhost:5555/projects')
        .then((res) => setData(res.data[0]))
        .catch((err) => console.log(err))
    }, [])

    return (
        <div className='projects'>
            <h2>Current Projects</h2>
            <div className='project-card'>
                <h3>{data.name}</h3>
                <h4>{data.description}</h4>
                <div className='links'>
                    <a href={data.source} target='_blank'>Source Code</a>
                    <a href={data.link} target='_blank'>Link to Site</a>
                </div>
                <img src={data.url} alt='Project img' />
            </div>
        </div>
    )
}

export default Projects