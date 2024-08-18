import React, { useState } from "react";
import axios from "axios";

interface Todo{
    id:number,
    name:string,
    username:string,
    email:string
}

const AxiosExample2:React.FC=()=>{
    const [posts, setPosts]=useState<Todo[]>([]);

    const fetchData = async()=>{
        const response = await axios.get<Todo[]>('https://jsonplaceholder.typicode.com/users');
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
                        <b>Name</b> : {temp.name}<br></br>
                        <b>Username</b> : {temp.username}<br></br>
                        <b>email</b> : {temp.email}
                        <hr></hr>
                    </p>
                    
                ))
            }
        </div>
    )

    
}

export default AxiosExample2;