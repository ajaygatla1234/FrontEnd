import React, { useCallback, useState } from "react";
import ChildComponent from "./5.ChildComponent";

const ParentComponent: React.FC = () =>{

    const[count, setCount]=useState(0);

    const updateCount = useCallback(()=>{
        setCount(prevCount => prevCount+1);
    }, []);

    return(
        <>
            <h3>Parent Component Count : {count}</h3>
            <ChildComponent name="Jack" updateCount={updateCount}></ChildComponent>
        </>
    )
}

export default ParentComponent;