import './single.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Chart from '../../components/chart/Chart';
import Lists from '../../components/table/Lists';
import {userColumn,userRows} from '../../datatablesource';

const Single = () => {

  
  return (
    <div className='single'>
      <Sidebar />
      <div className="singleContainer">
        <Navbar/>
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src={require('../../assests/images/fa.jpg')} alt="" className="itemImg" />
            </div>
            <div className="details">
              <h1 className="itemTitle">{userRows}</h1>
              <div className="detailItem">
                <span className="itemKey">{userColumn} : </span>
                <span className='itemValue'>Jaffna</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Telephoone No : </span>
                <span className='itemValue'>0768669760</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Email : </span>
                <span className='itemValue'>si@gmail.com</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Premium : </span>
                <span className='itemValue'>NoPremium</span>
              </div>
            </div>

          </div>
          <div className="right">
            <Chart aspect={3/1} title="User Spending"/>
          </div>
        </div>
        <div className="bottom">
          <Lists />
        </div>
      </div>
    </div>
  )
}

export default Single