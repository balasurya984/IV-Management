import Navbar1 from "./navbar";
import React, { useState , useEffect} from 'react'
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import '../css/form.css';
import { useNavigate } from 'react-router-dom';

function View()
{

    const [nameList, setNameList] = useState([])
    const [dis,setDis]=useState(false)

    useEffect(() => {
        axios.get('http://localhost:3001/displayform').then((response) => {
            setNameList(response.data)
        })
    },[])

    return(
        <div>
            <Navbar1 />
            <div style={{marginTop:"20px",marginBottom:"40px"}} className="heading">
                <h1 className="heading__title">INDUSTRIAL VISIT TOTAL REGISTARTION</h1>
            </div>

            <Table bordered hover style={{border:"2px solid",width:"700px",marginLeft:"26%",fontSize:"20px",backgroundColor:"#D8D9CF"}}>
            <thead>
                            <tr style={{textAlign:"center"}}>
                                <th >S.No</th>
                                <th>Department</th>
                                <th>Coordinator Name</th>                          
                                <th>Date</th>
                                <th>Place</th>
                            </tr>
                            </thead>
            {nameList.map((val, idx) => {
                return(
                    
                    <tbody>
                            <tr style={{textAlign:"center"}}>
                                <td style={{textAlign:"center"}}>{idx+1}</td>
                                <td style={{textAlign:"center"}}>{val.dept}</td>
                                <td>{val.name}</td>
                                <td>{val.date}</td>
                                <td>{val.place}</td>
                            </tr>
                            </tbody>
                         
            )})}
            
            </Table>


            
            
        </div>
    )
}

export default View;