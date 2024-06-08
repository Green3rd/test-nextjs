'use client';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import { IUser } from '../../../mock/responseQ2';
import './UserTable.css'
import { useState } from 'react';
interface UserTableProps {
  items: IUser[],
  searchText: string,
  searchFrom: string,
}

export function UserTable({
  items,
  searchText,
  searchFrom
}: UserTableProps) {
  const [page, setPage] = useState(1);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const currentPageItems = items.slice()

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item, index) => (
            <TableRow
              key={item.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">{index + 1}</TableCell>
              <TableCell align="right">{item.id}</TableCell>
              <TableCell align="right">{item.name}</TableCell>
              <TableCell align="right">{item.age}</TableCell>
              <TableCell align="right">{item.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        component="div"
        count={items.length}
        rowsPerPage={5}
        page={1}
        rowsPerPageOptions={[]}
        onPageChange={handleChangePage}
      />
    </TableContainer>
  );
}




