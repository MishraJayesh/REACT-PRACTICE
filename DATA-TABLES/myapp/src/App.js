//import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useTable } from 'react-table';

function App() {
  const data = React.useMemo(
    () => [
      {
        col1: '1',
      },
      {
        col1: '2', 
      },
      {
        col1: '3',    
      },
      {
        col1: '4',      
      },
      {
        col1: '5',
      },
      {
        col1: '6',
      },
      {
        col1: '7',
      },
      {
        col1: '8',
      },
      {
        col1: '9',
      },
      {
        col1: '10',
      },
      {
        col1: '11',
      },
      {
        col1: '12',
      },
      {
        col1: '13',
      },
      {
        col1: '14',
      },
      {
        col1: '15', 
      },
      {
        col1: '16',    
      },
      {
        col1: '17',      
      },
      {
        col1: '18',
      },
      {
        col1: '19',
      },
      {
        col1: '20',
      },
      {
        col1: '21',
      },
      {
        col1: '22', 
      },
      {
        col1: '23',    
      },
      {
        col1: '24',      
      },
      {
        col1: '25',
      },
      {
        col1: '26',
      },
      {
        col1: '27',
      },
      {
        col1: '28',
      },
      {
        col1: '29',
      },
      {
        col1: '30',
      },
      {
        col1: '31',
      },
      {
        col1: '32',
      },
      {
        col1: '33',
      },
      {
        col1: '34',
      },
      {
        col1: '35', 
      },
      {
        col1: '36',    
      },
      {
        col1: '37',      
      },
      {
        col1: '38',
      },
      {
        col1: '39',
      },
      {
        col1: '40',
      },
      {
        col1: '41',
      },
      {
        col1: '42', 
      },
      {
        col1: '43',    
      },
      {
        col1: '44',      
      },
      {
        col1: '45',
      },
      {
        col1: '46',
      },
      {
        col1: '47',
      },
      {
        col1: '48',
      },
      {
        col1: '49',
      },
      {
        col1: '50',
      },
      {
        col1: '51',
      },
      {
        col1: '52',
      },
      {
        col1: '53',
      },
      {
        col1: '54',
      },
      {
        col1: '55', 
      },
      {
        col1: '56',    
      },
      {
        col1: '57',      
      },
      {
        col1: '58',
      },
      {
        col1: '59',
      },
      {
        col1: '60',
      },
      {
        col1: '61',
      },
      {
        col1: '62', 
      },
      {
        col1: '63',    
      },
      {
        col1: '64',      
      },
      {
        col1: '65',
      },
      {
        col1: '66',
      },
      {
        col1: '67',
      },
      {
        col1: '68',
      },
      {
        col1: '69',
      },
      {
        col1: '70',
      },
      {
        col1: '71',
      },
      {
        col1: '72',
      },
      {
        col1: '73',
      },
      {
        col1: '74',
      },
      {
        col1: '75', 
      },
      {
        col1: '76',    
      },
      {
        col1: '77',      
      },
      {
        col1: '78',
      },
      {
        col1: '79',
      },
      {
        col1: '80',
      },
      {
        col1: '81',
      },
      {
        col1: '82',
      },
      {
        col1: '83',
      },
      {
        col1: '84',
      },
      {
        col1: '85',
      },
      {
        col1: '86',
      },
      {
        col1: '87',
      },
      {
        col1: '88',
      },
      {
        col1: '89',
      },
      {
        col1: '90',
      },
      {
        col1: '91',
      },
      {
        col1: '92',
      },
      {
        col1: '93',
      },
      {
        col1: '94',
      },
      {
        col1: '95',
      },
      {
        col1: '96',
      },
      {
        col1: '97',
      },
      {
        col1: '98',
      },
      {
        col1: '99',
      },
      {
        col1: '100',
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
