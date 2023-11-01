import './pdtable.scss'
import { DataGrid } from '@mui/x-data-grid';
import {plantColumn,inputPlant} from '../../formSource'
import {Link} from 'react-router-dom';





const Datatable = () => {

  const actionColumn=[
    {field:"action",headerName:"Action",width:200,renderCell:()=>{
      return(
        <div className='cellAction'>
          <Link to="/plants/plantId" style={{textDecoration:"none"}}>
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
        rows={inputPlant}
        columns={plantColumn.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
        
    </div>
  )
}

export default Datatable;