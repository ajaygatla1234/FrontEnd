import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTable } from "react-table";

interface values  {
    id:number,
    departmentName: string,
    departmentDescription : string

}

const DepartmentList :React.FC = () => {

    const[details, setDetails] = useState<values[]>([]);

    const fetchData = async () => {
        const response = await axios.get("http://localhost:8080/api/departments");
        console.log(response.data);
        setDetails(response.data);
    }

    const columns : any = React.useMemo(
        () => [
            {
                Header : "ID",
                accessor : 'id'
            },
            {
                Header : "DEPARTMENT_NAME",
                accessor : 'departmentName'
            },
            {
                Header : "DEPARTMENT_DESCRIPTION",
                accessor : 'departmentDescription'
            }
        ], []
    );

    useEffect(() => {
        fetchData();
    },[]);

    const {headerGroups, rows, prepareRow} = useTable({columns, data:details})
    return (
        <>
            <h1>Departments List</h1>
            <hr />
            <table>
                <thead>
                    {
                        headerGroups.map((headerGroup: { getHeaderGroupProps: () => JSX.IntrinsicAttributes & React.ClassAttributes<HTMLTableRowElement> & React.HTMLAttributes<HTMLTableRowElement>; headers: any[]; }) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {
                                headerGroup.headers.map(column => (
                                    <th style={{background : 'red', color:'white'}} {...column.getHeaderProps()}>
                                        {column.render('Header')}
                                    </th>
                                ))
                            }
                            </tr>
                        ))
                    }
                </thead>
                <tbody>
                    {rows.map(row =>{
                        prepareRow(row);
                        return(
                            <tr {...row.getRowProps()}>
                                {row.cells.map( cell =>{
                                    return(
                                        <td style={{backgroundColor:'whitesmoke', padding : '10px'}}>{cell.render('Cell')}</td>
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

export default DepartmentList;