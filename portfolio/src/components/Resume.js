import React from 'react'

const Resume = () => {

    return (
        <div className='resume'>
            <h2>Virtual Resume</h2>
            <div className='resume-parts'>
                <div className='skills-education'>
                    <div className='skills'>
                        <h3>Skills</h3>
                        <table>
                            <tr>
                                <td>HTML5</td>
                                <td>NodeJs</td>
                                <td>Cypress</td>
                            </tr>
                            <tr>
                                <td>CSS3</td>
                                <td>Express</td>
                                <td>PostgreSQL</td>
                            </tr>
                            <tr>
                                <td>LESS</td>
                                <td>Databases</td>
                                <td>Python</td>
                            </tr>
                            <tr>
                                <td>JS</td>
                                <td>RestFull API</td>
                            </tr>
                            <tr>
                                <td>React</td>
                                <td>MySQL</td>
                            </tr>
                            <tr>
                                
                                
                            </tr>
                        </table>
                    </div>
                    <div className='education'>
                        <h3>Education</h3>
                        <table>
                            <tr>
                                <th>School</th>
                                <th>Course of Study</th>
                                <th>Graduation Date</th>
                            </tr>
                            <tr>
                                <td>Lambda School</td>
                                <td>Full Stack Web Developer Track</td>
                                <td>3/2021</td>
                            </tr>
                            <tr>
                                <td>Dutchess Community College</td>
                                <td>AS Business Administration</td>
                                <td>2014</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className='positions'>
                    <h3>Work History</h3>
                    <table>
                        <tr>
                            <th>Team Leader - Lambda School</th>
                            <th>7/2020-Present</th>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                * Reviewed student code and provide feedback on areas of improvement.
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                * Led daily standup meetings, facilitating the sharing of ideas and progress.
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                * Taught extra workshops for students to assist in extra skills or providing extra help
                            </td>
                        </tr>
                        <tr>
                            <th>Owner - BeeDev Services</th>
                            <th>4/2020</th>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                * Contract based small business designing Full Stack Websites
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <h4>Last updated Nov 2020</h4>
        </div>
    )
}

export default Resume