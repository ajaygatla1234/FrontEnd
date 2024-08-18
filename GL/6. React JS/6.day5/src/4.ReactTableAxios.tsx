import React, {useState, useMemo} from "react";
import { useTable } from "react-table";
import axios from "axios";
import { access } from "fs";

interface Todo{
    userId: number,
    id:number,
    title:string,
    completed:boolean
}

const ReactTableAxios:React.FC = () => {
    const [posts, setPosts]=useState<Todo[]>([]);

    const fetchData = async()=>{
        
        const response = await axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
        console.log(response.data);
        setPosts(response.data);
    }

    const columns:any=React.useMemo(
    () => [
        {
            Header:'ID',
            accessor:'id'
        },
        {
            Header:"Title",
            accessor:"title"
        }
    ], []
    );

    //preparing the useTable
    const{  headerGroups, rows, prepareRow}=useTable({columns,data:posts});

    return(
        <>
            <h1>React Table with Axios</h1>
            <button type="button" onClick={fetchData}>Get Data</button>
            <hr></hr>
            <table>
                <thead>
                    {
                        headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getFooterGroupProps()}>
                                {
                                    headerGroup.headers.map(column => (
                                        <th style={{backgroundColor:'red', color:"white"}} {...column.getHeaderProps()}>
                                            {column.render('Header')}</th>
                                    ))
                                }
                                </tr>
                        ))
                    }
                </thead>
                <tbody>
                    {rows.map(row => {
                        prepareRow(row);
                        return(
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell=>{
                                    return(
                                        <td style={{ backgroundColor: "whitesmoke", padding: "10px" }}>{cell.render("Cell")}</td>

                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default ReactTableAxios;