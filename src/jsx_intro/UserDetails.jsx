// import React from 'react';
// import { useEffect } from 'react'
import userImg from "../images/geegstack.png";
import { useParams } from 'react-router';


const UserDetails = () => {
    let params = useParams();
    return (
        <article className="user">
            <img src = {userImg} alt="userImg" width="200px" />        
            <h1 style={{color: "red", fontSize: "2rem"}}>{params.userId}</h1>       
            <hr />
            <p>This is a student of Geegstack Academy studying {"Software Development"}</p>
        </article>
    );
}

export default UserDetails;