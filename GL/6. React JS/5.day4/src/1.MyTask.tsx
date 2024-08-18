// import React, { useState } from "react";

// function MyTask(){
//     //object
//     type refTask={
//         title:string,
//         description:string,
//         priority:number
//     }

//     //creating a array using usestate - array of objects - reference to refTask
//     const [taskList, setTaskList] = useState<refTask[]>([]);

//     const[taskTitle, setTaskTitle]=useState("");
//     const[taskDescription, setTaskDescription]=useState("");
//     const[taskPriority, setTaskPriority]=useState("");

//     const addTask=(event: React.FormEvent<HTMLFormElement>)=>{
//         event.preventDefault();

//         const newTask:refTask={
//             title:taskTitle,
//             description:taskDescription,
//             priority:taskPriority
//         };
    

//     const multiTask: refTask[]=[
//         {
//             title:taskTitle,
//             description:taskDescription,
//             priority:taskPriority
//         },
//         {
//             title:taskTitle,
//             description:taskDescription,
//             priority:taskPriority
//         }
//     ]

//     setTaskList([...taskList, newTask]);
// }

//     return(
//         <div>
//             <h4>My todo List</h4>
//             <form onSubmit={addTask}>
//             <label>Task Title</label>
//             <input type="text" value={taskTitle} onChange={(e)=>setTaskTitle(e.target.value)}></input>
//             <br></br>

//             <label>Description</label>
//             <input type="text" value={taskDescription} onChange={(e)=>setTaskDescription(e.target.value)}></input>
//             <br></br>

//             <label>Priority</label>
//             {/* <input type="number" value={taskPriority} onChange={(e)=>setTaskPriority(parseInt (e.target.value))}></input> */}
//             <input type="number" value={taskPriority} onChange={(e) => setTaskPriority(parseInt(e.target.value))}></input>

//             <br></br>
//             <button type="submit">Add Task</button>

//             <h4>My Task List</h4>
//             {
//                 [
//                     taskList.map((temp,index=>))
//                 ]
//             }

//             </form>
//             <hr></hr>
            
            
//         </div>
//     )

// }

// export default MyTask;


import React ,{useState}from "react";
import MyTaskDisplay from "./1.MyTaskDisplay";

function MyTask(){
    //object
    type refTask={
    title:string,
    description:string,
    priority:number

};
//creating a array using useState - array of objects-reference to refTask
const[taskList,setTaskList]=useState<refTask[]>([]);

//
const[taskTitle,setTaskTitle]=useState("");
const[taskDescription,setTaskDescription]=useState("");
const[taskPriority,setTaskPriority]=useState(0);

const addTask=(event:React.FormEvent<HTMLFormElement>)=>{

    //any form will have default function-submit the data to teh same page
    //stopping the default function using -preventDefault();
    event.preventDefault();

    //single object
    const newTask:refTask={
        title:taskTitle,
        description:taskDescription,
        priority:taskPriority
    };
    const multiTask:refTask[]=[
        {
            title:taskTitle,
            description:taskDescription,
            priority:taskPriority
        },
        {
            title:taskTitle,
            description:taskDescription,
            priority:taskPriority
        }
    ];
    //spread operator -taking all the values from the array as individual
    //the below line is deleting the old content,and adding the old content as new content
    setTaskList([...taskList,newTask]);
}

const removeTask=(index:number)=>{
    const tempList=[...taskList];
    tempList.splice(index,1);
    setTaskList(tempList);
}

return(

    <div>
        <h4>My Todo List</h4>
        <form onSubmit={addTask}>
            <label>Task Title</label>
            <input title="text" value={taskTitle} onChange={(e)=>setTaskTitle(e.target.value)}/>
            <br/>
            <label>Description</label>
            <input title="text" value={taskDescription} onChange={(e)=>setTaskDescription(e.target.value)}/>
            <br/>
            <label>Priority</label>
            {/* <input title="number" value={taskPriority} onChange={(e)=>setTaskPriority(parseInt(e.target.value))}/> */}
            <input type="number" value={taskPriority} onChange={(e)=>setTaskPriority(parseInt(e.target.value))}/>

            <br/>
            {/* Title:{taskTitle}<br/> //just to check whether the input data is updating or not
            Description:{taskDescription}<br/>
            Priority:{taskPriority}<br/> */}
            <button type="submit">Add Task</button>
            
            <h4>My Task List</h4>
            {
                [
                    taskList.map((temp,index)=>(
                        <div>
                        <MyTaskDisplay title={temp.title} description={temp.description} priority={temp.priority}></MyTaskDisplay>
                        <button type="button" onClick={(e)=>removeTask(index)}>Remove</button>
                        <hr></hr>
                        </div>
                    ))
                ]
                
            }
            
        </form>
    </div>
)
}

export default MyTask;