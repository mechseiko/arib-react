import React from 'react';
import '../App.scss'

const Job = ({companyName, jobTitle, companyLogo,jobType, pubDate}) => {
    return (
        <article>
            <img src={companyLogo} alt="companyLogo" />
            <h1>{jobTitle}</h1>
            <h1>{companyName}</h1>
            <ul>
                <li>{jobType}</li>
                <li>{pubDate}</li>
            </ul>
        </article>
    );
}

export default Job;