import './pTable.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const PTable = () => {

  const rows=[
    {
      id:1,
        pname:"guava",
        ptype:"Fruit",
        spname:"guava",
        temp:"18 c",
        desc:"Good Fruit For a Human"
      
    }
  ]
  return (
        <TableContainer component={Paper} className='lists'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='tableCell'>ID</TableCell>
            <TableCell className='tableCell'>PlantName</TableCell>
            <TableCell className='tableCell'>Plant_Type</TableCell>
            <TableCell className='tableCell'>Scientific_Name</TableCell>
            <TableCell className='tableCell'>Special_Temparature</TableCell>
            <TableCell className='tableCell'>Description</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell className='tableCell'>{row.name}</TableCell>
              <TableCell className='tableCell'>{row.type}</TableCell>
              <TableCell className='tableCell'>{row.sname}</TableCell>
              <TableCell className='tableCell'>{row.temp}</TableCell>
              <TableCell className='tableCell'>{row.desc}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

  )
}

export default PTable;