import React, { useEffect, useState } from "react";
import axios from 'axios';

const UseEffectHook = () => {
    const [post, setPost] = useState([]);

    // componentDidMount
    // useEffect(() => {
    //     axios.get('https://jsonplaceholder.typicode.com/posts/').then((res) => {
    //         console.log(res.data);
    //         setPost(res.data);
    //     }).catch(err => {
    //         console.log(err);
    //     });
    // });

    //componentDidUpdate
    // useEffect(() => 
    // {

    // }, [stateData]);

    //componentWillUnmount
    // useEffect(() => {

    // }, []);

    //ternary operator
    const postList = post.length ? (post.map(info => {
        return (
            <React.Fragment key={info.id}>
                <p>Body: {info.body}</p>
            </React.Fragment>
        )
    })) : (<p>No Posts Yet</p>)
    
    return (
        <>
        {postList}
        </>
    )
}

export default UseEffectHook;