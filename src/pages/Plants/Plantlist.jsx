import './plantlist.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';

const Plantlist = () => {

  
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
              <h1 className="itemTitle">Guava</h1>
              <div className="detailItem">
                <span className="itemKey"> Plant Type : </span>
                <span className='itemValue'>Fruit</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Scientific Name : </span>
                <span className='itemValue'>Guava</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Temparature : </span>
                <span className='itemValue'>15</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Description : </span>
                <span className='itemValue'>Its a Fruit</span>
              </div>
            </div>

          </div>
          
        </div>
        
      </div>
    </div>
  )
}

export default Plantlist