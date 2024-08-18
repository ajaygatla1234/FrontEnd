import React, { useState } from "react";
import axios from "axios";

interface Todo{
    id:number,
    title:string,
    body:string
}

const AxiosExample1:React.FC=()=>{
    const [posts, setPosts]=useState<Todo[]>([]);

    const fetchData = async()=>{
        const response = await axios.get<Todo[]>('https://jsonplaceholder.typicode.com/posts');
        console.log(response.data);
        setPosts(response.data);
    }

    return(
        <div>
            <h5>Axios Example</h5>
            <button type="button" onClick={fetchData}>Get Data</button>
            <br></br>
            <hr></hr>
            {
                posts.map((temp)=>(
                    <p>
                        <b>Id</b> : {temp.id} <br></br>
                        <b>Title</b> : {temp.title}<br></br>
                        <b>Body</b> : {temp.body}
                        <hr></hr>
                    </p>
                    
                ))
            }
        </div>
    )

    
}

export default AxiosExample1;