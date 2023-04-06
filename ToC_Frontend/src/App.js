import logo from './logo.svg';
import './App.css';
import CallsAPI from "./components/callsAPI";
import React, { Component, useState, useEffect } from "react";
import ContactList from "./components/ProvinceList";
import FormGetList from './components/FormGetList';
import CSVcontent from './components/CSVcontent';
import axios from "axios";

const App = () => {
  const [province, setProvince] = useState([]);
  var all_temples = CallsAPI()


  console.log(province);

  
  if(!all_temples){
    console.log("first load")
    return (
      
      <div>
        <h1 className="App-header">กำลังโหลด...</h1>
      </div>
    );
  }
  return (
    <div>
      <h1 className="App-header">รายชื่อวัดในจังหวัดชุมพร, เชียงราย, ตรัง, ตราด, อุตรดิตถ์</h1>
      <div className='page-background'>
        <div className='page-grid'>
          <FormGetList province={province} setProvince={setProvince} all_temples={all_temples}/>
          <CSVcontent province={province} setProvince={setProvince} all_temples={all_temples}/>
        </div>
      </div>
    </div>
  );
}

export default App;
