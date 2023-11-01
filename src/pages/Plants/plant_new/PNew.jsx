import './pnew.scss';
import Navbar from '../../../components/navbar/Navbar';
import Sidebar from '../../../components/sidebar/Sidebar';
import { useState } from 'react';


const PNew = () => {

const [file,setFile]=useState("");

  return (
    <div className='pnew'>
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="top">
          <h1>Add New Plant</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={file ? URL.createObjectURL(file):require('../../../assests/images/noimage.jpg')} alt="" />

            <div className="fileChoose">
                  <input type="file" onChange={e=>setFile(e.target.files[0])} />
              </div>
            
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                  <label>Plant Name</label>
                  <input type="text" placeholder='Enter Plant Name' />
              </div>
              <div className="formInput">
                  <label>Plant type</label>
                  <input type="text" placeholder='Enter the plant Type' />
              </div>
              <div className="formInput">
                  <label>Plant Scientific Name</label>
                  <input type="text" placeholder='Enter the Scientific Name' />
              </div>
              <div className="formInput">
                  <label>Suitable Temparature</label>
                  <input type="text" placeholder='Enter the Correct temp' />
              </div>
              <div className="formnputI">
                  <label>About that Plant</label>
                  <textarea type="text" placeholder='Description about Plant' rows={5} cols={30}/>
              </div>
              <div>
              <button>Save</button>
              </div>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PNew;