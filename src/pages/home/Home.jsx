import React from 'react'
import Sidebar from "../../components/sidebar/Sidebar"
import "./home.scss"
import Navbar from '../../components/navbar/Navbar'
import Widget from '../../components/widgets/Widget'
import Chart from '../../components/chart/Chart'
import Featured from '../../components/featured/Featured'
import Lists from '../../components/table/Lists'


const Home = () => {
  return (
    <div className='home'>
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user"/>
          <Widget type="product"/>
          <Widget type="weather"/>
          <Widget type="email"/>
        </div>
        <div className="charts">
          <Featured/>
          <Chart aspect={2/1} title="Total Signup Monthly"/>
        </div>

        <div className="listContainer">
        <div className="listTitle">Users</div>
          <Lists/>
        </div>
      </div>
    </div>
  )
}

export default Home