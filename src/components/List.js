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
    <table cellspacing={0} className="list-table " {...getTableProps()}>
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

function List() {
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
  const data = [
    {id: '000001', grad: 'Beograd', status: 'Testiran', simptomi: '-'},
    {
      id: '000002',
      grad: 'Kragujevac',
      status: 'Zaražen',
      simptomi: 'Jaki simptomi',
    },
    {id: '000003', grad: 'Subotica', status: 'Nije testiran', simptomi: '-'},
    {id: '000004', grad: 'Vranje', status: 'Zaražen', simptomi: 'Bez simptoma'},
    {id: '000005', grad: 'Valjevo', status: 'Preminuo', simptomi: '-'},
    {id: '000006', grad: 'Vranje', status: 'Zaražen', simptomi: 'Bez simptoma'},
    {id: '000007', grad: 'Vranje', status: 'Zaražen', simptomi: 'Bez simptoma'},
    {id: '000008', grad: 'Vranje', status: 'Zaražen', simptomi: 'Bez simptoma'},
    {id: '000009', grad: 'Vranje', status: 'Zaražen', simptomi: 'Bez simptoma'},
    {id: '000010', grad: 'Vranje', status: 'Zaražen', simptomi: 'Bez simptoma'},
    {id: '000011', grad: 'Vranje', status: 'Zaražen', simptomi: 'Bez simptoma'},
    {id: '000012', grad: 'Vranje', status: 'Zaražen', simptomi: 'Bez simptoma'},
    {id: '000013', grad: 'Vranje', status: 'Zaražen', simptomi: 'Bez simptoma'},
    {id: '000014', grad: 'Vranje', status: 'Zaražen', simptomi: 'Bez simptoma'},
    {id: '000015', grad: 'Vranje', status: 'Zaražen', simptomi: 'Bez simptoma'},
    {id: '000016', grad: 'Vranje', status: 'Zaražen', simptomi: 'Bez simptoma'},
    {id: '000017', grad: 'Vranje', status: 'Zaražen', simptomi: 'Bez simptoma'},
    {id: '000018', grad: 'Vranje', status: 'Zaražen', simptomi: 'Bez simptoma'},
    {id: '000019', grad: 'Vranje', status: 'Zaražen', simptomi: 'Bez simptoma'},
    {id: '000020', grad: 'Vranje', status: 'Zaražen', simptomi: 'Bez simptoma'},
  ];
  // const data = React.useMemo(() => makeData(20), []);

  return <Table columns={columns} data={data} />;
}

export default List;
