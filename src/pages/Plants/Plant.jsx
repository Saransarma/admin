import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import './plant.scss';
import Plantlist from './Plantlist';

const Plant = () => {
  return (
    <div className='plist'>
      <Sidebar/>
      <div className="pplistContainer">
      <Navbar/>
      <Plantlist/>
      </div>
    </div>
  )
}

export default Plant;