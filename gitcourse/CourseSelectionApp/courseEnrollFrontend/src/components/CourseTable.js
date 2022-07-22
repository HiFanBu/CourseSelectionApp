import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

//const rows = [
  //createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  //createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  //createData('Eclair', 262, 16.0, 24, 6.0),
 // createData('Cupcake', 305, 3.7, 67, 4.3),
 // createData('Gingerbread', 356, 16.0, 49, 3.9),
//];


export default function CourseTable(props) {
    function renderTableCells(){
        return props.courses.map((row, index) => (
            <TableRow
              key={`course-${index+1}`}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index+1}
              </TableCell>
              <TableCell align="right">{row.course_name}</TableCell>
              <TableCell align="right">{row.course_location}</TableCell>
              <TableCell align="right">{row.course_content}</TableCell>
              <TableCell align="right">{row.teacher_id}</TableCell>
              <TableCell align="right">
                <Button color="primary" onClick={() => {props.onActionButtonClick(row.course_name)}}>{props.action}</Button>
              </TableCell>
            </TableRow>
          ));
    }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Course Name</TableCell>
            <TableCell align="right">Course Location</TableCell>
            <TableCell align="right">Course Content</TableCell>
            <TableCell align="right">Teacher ID</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {renderTableCells()  }
        </TableBody>
      </Table>
    </TableContainer>
    
  );
}
