import "./FormGetList.css";
import React, { useEffect , useState } from "react";
import Modal from "./Modal";
import axios from "axios";
import ProvinceList from "./ProvinceList";
import { CSVLink } from "react-csv";
import { click } from "@testing-library/user-event/dist/click";


function FormGetList(props) {
    var li = [];
    li = li.concat(props.all_temples.chumporn);
    li = li.concat(props.all_temples.chaengrai);
    li = li.concat(props.all_temples.trang);
    li = li.concat(props.all_temples.trat);
    li = li.concat(props.all_temples.uttaradit);

    const csvData = li.map((item) => [item]);
    const [openModal, setopenModal] = useState(false);
    
    return (
        <div className="left_page">
            <div className="fixposition">
                <form >
                    <fieldset >
                        <ProvinceList province={props.province} setProvince={props.setProvince} all_temples={props.all_temples}/>
                    </fieldset>
                </form>
                <nav >
                    <a>
                        <div>
                            <ul id="UwuLink" >
                                <li><CSVLink class="btn" data={csvData} filename={"data.csv"} >ดาวน์โหลด</CSVLink></li>
                                <li ><a class="btn" href="https://github.com/underpoom/ToC">Source Code</a></li>
                                {/* "https://github.com/underpoom/my-app" */}
                                
                                <li><button id="show-modal-btn"  onClick={() => setopenModal(true)} > Regular Expression </button></li>
                            </ul>
                        </div>
                        
                    </a>
                </nav>
            </div>
            <div className="regex_content">
                <Modal open={openModal} onClose={()=>setopenModal(false)}/>
            </div>   
        </div>
    );
}

export default FormGetList;