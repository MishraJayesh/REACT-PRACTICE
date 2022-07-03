//import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useTable } from 'react-table';

function App() {
  const data = React.useMemo(
    () => [
      {
        col1: 'A',
      },
      {
        col1: 'B', 
      },
      {
        col1: 'C',    
      },
      {
        col1: 'D',      
      },
      {
        col1: 'E',
      },
      {
        col1: 'F',
      },
      {
        col1: 'G',
      },
      {
        col1: 'H',
      },
      {
        col1: 'I',
      },
      {
        col1: 'J',
      },
      {
        col1: 'K',
      },
      {
        col1: 'L',
      },
      {
        col1: 'M',
      },
      {
        col1: 'N',
      },
      {
        col1: 'O', 
      },
      {
        col1: 'P',    
      },
      {
        col1: 'Q',      
      },
      {
        col1: 'R',
      },
      {
        col1: 'S',
      },
      {
        col1: 'T',
      },
      {
        col1: 'U',
      },
      {
        col1: 'V',
      },
      {
        col1: 'W',
      },
      {
        col1: 'X',
      },
      {
        col1: 'Y',
      },
      {
        col1: 'Z',
      },
    ],
    []
  )

  const columns = React.useMemo(
    () => [
      {
        Header: 'Column 1',
        accessor: 'col1',
      },
    ],
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data })

  return (
    <table {...getTableProps()} style={{ border: 'doubled 3px blue' }}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th
                {...column.getHeaderProps()}
                style={{
                  borderBottom: 'dotted 3px red',
                  background: 'aliceblue',
                  color: 'black',
                  fontWeight: 'bold',
                }}
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      padding: '10px',
                      border: 'dashed 3px gray',
                      background: 'papayawhip',
                    }}
                  >
                    {cell.render('Cell')}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
export default App;
