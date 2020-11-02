import React, { useEffect, useState } from 'react'
import axios from 'axios'

const PastProjects = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        axios
        .get('https://ml-fullstack-portfolio.herokuapp.com/past-projects')
        .then((res) => setData(res.data[0]))
        // .then((res) => console.log(res.data[0]))
        .catch((err) => console.log(err))
    }, [])

    return (
        <div className='projects'>
            <h3>Past Projects</h3>
            <div className='project-card'>
                <h3>{data.pastName}</h3>
                <p>{data.pastDescription}</p>
                <img src={data.pastUrl} alt='Project img' />
            </div>
        </div>
    )
}

export default PastProjects