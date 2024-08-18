import React, { useState } from "react";
import axios from "axios";

interface Todo{
    userId:number,
    id:number,
    title:string,
    completed:boolean
}

const AxiosExample:React.FC=()=>{
    const [posts, setPosts]=useState<Todo[]>([]);

    const fetchData = async()=>{
        const response = await axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
        console.log(response.data);
        setPosts(response.data);
    }

    return(
        <div>
            <h5>Axios Example</h5>
            <button type="button" onClick={fetchData}>Get Data</button>
            <br></br>
            {
                posts.map((temp)=>(
                    <p>
                        Id : {temp.id} <br></br>
                        Title : {temp.title}<br></br>
                    </p>
                    
                ))
            }
        </div>
    )

    
}

export default AxiosExample;