import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

function Home() {

    const [listOfPosts, setListOfPosts] = useState([]);
    let history = useHistory();

    useEffect( () => {
        axios.get("http://localhost:3001/workouts").then( (response) => {
            console.log(response);
            setListOfPosts(response.data);
        });
    }, []);

    // key is index in array, value is value (refer to console log to see that array)
    return (
        <div>
            {listOfPosts.map((value, key) => {
            return ( 
                <div className="post" onClick={() => {history.push(`/post/${value.id}`)}}>  
                    <div className="title">{value.title}</div>
                    <div className="body">{value.workoutText}</div>
                    <div className="footer">{value.username}</div>
                </div>
				);
            })} 
        </div>
    )
}

export default Home
