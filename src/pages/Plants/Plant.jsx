import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar';
import './plant.scss';
import Navbar from '../../components/navbar/Navbar';
import PView from './plant_view/PView';


const Plant = () => {
  return (
    <div className='plist'>
      <Sidebar/>
      <div className="plistContainer">
        <Navbar/>         
        <PView/>  
      </div>
    </div>
  )
}

export default Plant;