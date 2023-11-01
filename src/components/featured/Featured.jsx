import "./feature.scss";
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

const Featured = () => {
  return (
    <div className='feature'>
      <div className="top">
        <h1 className="title">Total Users</h1>
        <MoreVertOutlinedIcon fontSize="small"/>
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={3}/>
        </div>
        <p className="title">Total Users Open Today</p>
        <p className="totalNumber">320</p>
        
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Today Target</div>
            <div className="itemResult positive">
              <KeyboardArrowDownOutlinedIcon fontSize="small"/>
              <div className="itemCount">
                115
              </div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult negative">
              <KeyboardArrowDownOutlinedIcon fontSize="small"/>
              <div className="itemCount">
                115
              </div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <KeyboardArrowDownOutlinedIcon fontSize="small"/>
              <div className="itemCount">
                115
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured