import React, { useState } from "react";
import { useTable } from "react-table";

const ReactTable1: React.FC<{ columns: any; data: any }> = ({ columns, data }) => {
  const [name, setName] = useState("");

  const { headerGroups, rows, prepareRow } = useTable({ columns, data });

  return (
    <div>
      <h1>React Table Example 1</h1>
      <table>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ReactTable1;
