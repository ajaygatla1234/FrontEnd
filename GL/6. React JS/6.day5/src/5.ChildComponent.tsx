import React from "react";
     
interface Props{
    name:string,
    updateCount:()=>void;
}

const ChildComponent:React.FC<Props> = ({name,updateCount})=>{
    return(
        <>
            <h3>Child Component called {name}</h3>
            <button type="button" onClick={updateCount}>Click Me</button>
        </>
    )
}

export default ChildComponent;

