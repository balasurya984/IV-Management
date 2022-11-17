import Navbar1 from "./navbar";
import React, { useState , useEffect} from 'react'
import axios from 'axios';
import '../css/form.css';
import { useNavigate } from 'react-router-dom';

function Display()
{
    // const [newName, setNewName] = useState('')
    const [select,setSelect]=useState('')
    const [nameList, setNameList] = useState([])
    const [dis,setDis]=useState(false)
    const Navigate = useNavigate();


        useEffect(() => {
            axios.get('http://localhost:3001/displayform').then((response) => {
                setNameList(response.data)
            })
        },[])

    // const updateName = (_id) => {
    //     axios.put('http://localhost:3001/displayform',{id: _id, newName:newName})
    // }



     const deleteName = async (e,id) => {
        e.preventDefault()
        const data = await axios.delete(`http://localhost:3001/delete/${id}`)
        console.log(data.data)
        Navigate('/home')


    //  const dispRoll =  

    
    }
    const handleFilter =async()=>{
       setDis(true)
        let v = select.toLowerCase()
        const data =await nameList.filter(f=> f.roll.toLowerCase().includes(v) )
        console.log(data)
        await setNameList(data)
    }

    return(
        <div>
            <Navbar1 />
            <div className="heading">
                <h1 className="heading__title">INDUSTRIAL VISIT DETAILS</h1>
                <p className="heading__credits">📌 Make sure that the details are correct 📌</p>
            </div>
            <div className="cards">
            <div className="card3 card-5">
                <h2 style={{textAlign:"center"}}>Enter the Registered Roll Number to view the IV details</h2>
                <input value={select} onChange={e=>setSelect(e.target.value)}  type="text" placeholder="Roll Number" style={{width:"300px",height:"38px",borderRadius:"20px",paddingLeft:"20px",paddingRight:"20px",background:"white",marginLeft:"25%"}} /><br />
                <div style={{marginLeft:"15px"}} className=' card__apply'>
                    <button onClick={handleFilter} className="btn btn-info">Submit</button>
                </div> 
            </div>
            </div>
            {dis && <>
            {nameList.map((val, key) => {
                return(
                     <div key={key}> 
                     <div className="main-container">
                     
                     <div className="cards">
                     <div className="card2 card-1" style={{height:"900px"}}>
                        <h2>Name: {val.name} 
                            {/* <input type="text" placeholder="New Name" 
                            onChange={e => setNewName(e.target.value)} /> 
                            <button onClick={()=> updateName(val._id)} > Update</button>  */}
                        </h2>
                        <h2>Roll no.: {val.roll}</h2> 
                        <h2>Email : {val.email}</h2>
                        <h2>Department : {val.dept}</h2>
                        <h2>Section : {val.section}</h2>
                        <h2>Date : {val.date}</h2>
                        <h2>Place : {val.place}</h2>
                        <h2>Staff : {val.staff}</h2>
                        <h2>Documentation : <button className="btn btn-secondary"><a style={{textDecoration:"none",color:"white"}} href={val.image}>Click to View</a></button></h2>
                        <button className="btn btn-danger" onClick={(e)=> deleteName(e,val._id)}>Delete</button>
                     </div>
                     </div>
                     </div>
                     </div>
            )})}
            </>
            }
        </div>
    )
}

export default Display;