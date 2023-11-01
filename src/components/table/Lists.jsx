import './table.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Lists = () => {

  const rows=[
    {
      id:1,
      name:"Saran",
      location:"Jaffna",
      telno: "0768669760",
      email: "si@gmail.com",
      date:"1.10.2023",
      premium:"Premium",
    }
  ]
  return (
        <TableContainer component={Paper} className='lists'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='tableCell'>ID</TableCell>
            <TableCell className='tableCell'>UserName</TableCell>
            <TableCell className='tableCell'>Location</TableCell>
            <TableCell className='tableCell'>TelephoneNo</TableCell>
            <TableCell className='tableCell'>Email</TableCell>
            <TableCell className='tableCell'>Joined_Date</TableCell>
            <TableCell className='tableCell'>Premium</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell className='tableCell'>{row.name}</TableCell>
              <TableCell className='tableCell'>{row.location}</TableCell>
              <TableCell className='tableCell'>{row.telno}</TableCell>
              <TableCell className='tableCell'>{row.email}</TableCell>
              <TableCell className='tableCell'>{row.date}</TableCell>
              <TableCell className='tableCell'>
                <span className={`premium ${row.premium}`}>{row.premium}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

  )
}

export default Lists;