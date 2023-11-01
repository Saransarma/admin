import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import YardOutlinedIcon from '@mui/icons-material/YardOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import CloudIcon from '@mui/icons-material/Cloud';
import PersonIcon from '@mui/icons-material/Person';
import PsychologyIcon from '@mui/icons-material/Psychology';
import {Link} from 'react-router-dom';


const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
            <Link to="/" style={{textDecoration:"none"}}>
            <span className="logo">AGRO</span>
            </Link>
        </div>
        <hr />
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li>
                    <DashboardIcon className="icon"/>
                    <span>DashBoard</span>
                </li>
                <p className="title">USERS</p>
                <Link to="/users" style={{textDecoration:"none"}}>
                <li>
                    <PersonOutlineOutlinedIcon className="icon"/>
                    <span>Users</span>
                </li>
                </Link>
                
                <p className="title">PRODUCT</p>
                <Link to="/plants" style={{textDecoration:"none"}}>

                <li>
                    <YardOutlinedIcon className="icon"/>
                    <span>Plants</span>
                </li>
                </Link>

                
                <li>
                    <CloudIcon className="icon"/>
                    <span>Weather</span>
                </li>
                <p className="title">SERVICES</p>
                <li>
                    <SettingsIcon className="icon"/>
                    <span>Settings</span>
                </li>
                <li>
                    <PsychologyIcon className="icon"/>
                    <span>Logs</span>
                </li>
                <li>
                    <HelpOutlinedIcon className="icon"/>
                    <span>Help</span>
                </li>
                <p className="title">SERVICES</p>
                <li>
                    <PersonIcon className="icon"/>
                    <span>Profile</span>
                </li>
                <li>
                    <LogoutOutlinedIcon className="icon"/>
                    <span>Log out</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption"></div>
            <div className="colorOption"></div>
        </div>
    </div>
  )
}

export default Sidebar;