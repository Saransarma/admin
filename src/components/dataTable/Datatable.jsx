import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import {userColumn,userRows} from '../../datatablesource'
import {Link} from 'react-router-dom';




const Datatable = () => {

  const actionColumn=[
    {field:"action",headerName:"Action",width:200,renderCell:()=>{
      return(
        <div className='cellAction'>
          <Link to="/users/userId" style={{textDecoration:"none"}}>
          <div className='viewButton'>View</div>
          </Link>
          <div className="deleteButton">Delete</div>
        </div>
      )
    }}
  ]

  return (
    <div className='datatable'>
        <div style={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={userRows}
        columns={userColumn.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
        
    </div>
  )
}

export default Datatable;