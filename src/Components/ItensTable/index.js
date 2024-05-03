import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  padding: 10px;
`;

const TableRow = styled.tr`
  background-color: ${(props) => (props.index % 2 === 0 ? '#fff9f9' : '#fff3f3')};
  &:hover {
    cursor : pointer;
  }
`;


const TableCell = styled.td`
  border: 2px solid #00c853;
  padding: 8px;
  text-align: center;
  background-color: #383838;
  color: #FFF;
`;

const TableHeader = styled.thead`
  color: white;
  background-color: #201d1d;
`;

const DeleteButton = styled.button`
  background-color: #f44336;
  color: white;
  border: none;
  cursor: pointer;
  padding: 10px;
  &:hover {
    background-color: #da190b;
  }
`;

const ProductsTable = ({ items, handleDelete, onRowClick  }) => {


  return (
    items && items.length > 0 && (
    <Table>
      <TableHeader>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
          <th>Stock</th>
          <th></th>
        </tr>
      </TableHeader>
      <tbody>
        {items.map((item, index) => (
          <TableRow key={item.id} index={index} onClick={() => onRowClick(item)}>
            <TableCell>{item.id}</TableCell>
            <TableCell>{item.nome}</TableCell>
            <TableCell>R$ {item.valor},00</TableCell>
            <TableCell>{item.quantidade}</TableCell>
            <TableCell>
            <DeleteButton onClick={(event) => {event.stopPropagation(); handleDelete(item.id);}}>
                Delete
              </DeleteButton>
            </TableCell>
          </TableRow>
        ))}
      </tbody>
    </Table>
       )
  );
};

export default ProductsTable;
