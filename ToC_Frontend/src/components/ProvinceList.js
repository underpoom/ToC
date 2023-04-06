import "./ProvinceList.css";
import CSVcontent from "./CSVcontent";
import React, { useState, useEffect } from "react";
import axios from "axios";


function ProvinceList(props) {

  const [checked, setChecked] = useState([]);
  
  const [message, setMessage] = useState([]);

  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value]; //***** */
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1); ///**** */
    }
    setChecked(updatedList);

  };


  const checkedItems = checked.length
    ? checked.reduce((total, item) => {
        return total + ", " + item;
      })
    : "";


  const handleSubmit = (event) => {
      event.preventDefault();

      const checkedList = checkedItems.split(',').map(item => item.trim());
      
      setMessage(checkedList);

      props.setProvince(checkedList);
  
  }
  return (
    <div >
      <div className="form1" >
        <input type="checkbox" id="chumporn" onChange={handleCheck} name="interest" value="chumporn" />
        <label htmlFor="chumporn">ชุมพร</label>
      </div>
      <div className="form1" >
        <input type="checkbox" id="chaengrai" onChange={handleCheck} name="interest" value="chaengrai" />
        <label htmlFor="chaengrai">เชียงราย</label>
      </div>
      <div className="form1" >
        <input type="checkbox" id="trang" onChange={handleCheck} name="interest" value="trang" />
        <label htmlFor="trang">ตรัง</label>
      </div>
      <div className="form1" >
        <input type="checkbox" id="trat" onChange={handleCheck} name="interest" value="trat" />
        <label htmlFor="trat">ตราด</label>
      </div>
      <div className="form1" >
        <input type="checkbox" id="uttaradit" onChange={handleCheck} name="interest" value="uttaradit" />
        <label htmlFor="uttaradit" >อุตรดิตถ์</label>
      </div>
      <div className="container">
        <button type="submit" onClick={handleSubmit} className="round-border-button" >ค้นหา</button>
      </div>
    </div>
  );
}

export default ProvinceList;