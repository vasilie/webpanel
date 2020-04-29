import React from 'react';
import {useTable} from 'react-table';
import './List.scss';

function Table({columns, data}) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  // Render the UI for your table
  return (
    <table cellSpacing={0} className="list-table " {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

function List({data}) {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Korisnički ID',
        accessor: 'id',
      },
      {
        Header: 'Grad',
        accessor: 'grad',
      },
      {
        Header: 'Status',
        accessor: 'status',
        cell: (row) => <div>{row.status}</div>,
      },
      {
        Header: 'Simptomi',
        accessor: 'simptomi',
      },
    ],
    []
  );

  // const data = React.useMemo(() => makeData(20), []);

  return <Table columns={columns} data={data} />;
}

export default List;
