import React, { useEffect, useState } from 'react'
import axios from 'axios'

const PastProjects = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        axios
        .get('https://ml-fullstack-portfolio.herokuapp.com/past-projects')
        // .get('http://localhost:5555/past-projects')
        .then((res) => setData(res.data[0]))
        // .then((res) => console.log(res.data[0]))
        .catch((err) => console.log(err))
    }, [])

    return (
        <div className='projects'>
            <h3>Past Projects</h3>
            <div className='project-card'>
                <h3>{data.pastName}</h3>
                <h4>{data.pastDescription}</h4>
                <div className='links'>
                    <a href={data.pastLink} target='_blank'>Link to Archives</a>
                </div>
                <img src={data.pastUrl} alt='Project img' />
            </div>
        </div>
    )
}

export default PastProjects