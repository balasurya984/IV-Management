import React, { useState , useEffect} from 'react'
// import { useNavigate } from 'react-router'
import axios from 'axios'; 
import '../css/form.css';
import Navbar1 from './navbar';
import { Navigate } from 'react-router';
import { useNavigate } from 'react-router-dom';

// import FileBase64 from 'react-file-base64';


    const UploadForm = () => {
        // const navigate=useNavigate()
        const [name,setName]=useState('')
        const [roll,setRoll]=useState('')
        const [email,setEmail]=useState('')
        const [dept,setDept]=useState('')
        const [section,setSection]=useState('')
        const [date,setDate]=useState('')
        const [place,setPlace]=useState('')
        const [staff,setStaff]=useState('')
        // const [image1,setImg1]=useState('')
        const [photo,setPhoto]=useState(null)
        const Navigate = useNavigate();

        const handleSubmit = async (e)=>{
           
         
            
         e.preventDefault()
         const formData = new FormData ()
         formData.append('name',name)
         formData.append('roll',roll)
         formData.append('email',email)
         formData.append('dept',dept)
         formData.append('section',section)
         formData.append('date',date)
         formData.append('place',place)
         formData.append('staff',staff)
         formData.append('photo',photo)
         const config=  {
            headers:{
                'Content-Type':'multipart/form-data'
            }
        }
        const data = await axios.post('http://localhost:3001/uploadform',formData,config)
        console.log(data.data)
        Navigate('/displayform')
        }
    
    return(
        <div>
            <Navbar1 />
            <div  style={{fontSize:"18px"}}>
                <div className="main-container">
                  <div className="heading">
                    <h1 className="heading__title">UPLOAD THE INDUSTRIAL VISIT DETAILS</h1>
                    <p className="heading__credits">📌 Make sure that IV Co-Ordinator only upolads details 📌</p>
                  </div>
                  <div className="cards">
                    <div className="card1 card-1">

                      <form >
                        <div className="form-group row">
                            <label  className="col-sm-3 col-form-label" ><strong>Name</strong></label>
                            <div className="col-sm-10" style={{paddingLeft:"30px",paddingTop:"4px"}}>
                            <input style={{width:"500px",height:"30px",borderRadius:"20px",paddingLeft:"10px",paddingRight:"10px",background:"white",marginLeft:"30px"}}  type="text"  value={name} onChange={e => setName(e.target.value)} className="form-control-plaintext"  />
                            </div>
                        </div>
  
                        <div className="form-group row">
                            <label  className="col-sm-3 col-form-label"> <strong>Roll no.</strong></label>
                            <div className="col-sm-10" style={{paddingLeft:"30px",paddingTop:"8px"}}>
                            <input style={{width:"500px",height:"30px",borderRadius:"20px",paddingLeft:"10px",paddingRight:"10px",background:"white",marginLeft:"30px"}} type="text"  value={roll} onChange={e => setRoll(e.target.value)} className="form-control-plaintext"  />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label  className="col-sm-3 col-form-label" ><strong>Email</strong></label>
                            <div className="col-sm-10" style={{paddingLeft:"30px",paddingTop:"4px"}}>
                            <input style={{width:"500px",height:"30px",borderRadius:"20px",paddingLeft:"10px",paddingRight:"10px",background:"white",marginLeft:"30px"}}  type="email"  value={email} onChange={e => setEmail(e.target.value)} className="form-control-plaintext"  />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label  className="col-sm-3 col-form-label"> <strong>Department</strong></label>
                            <div className="col-sm-10" style={{paddingLeft:"30px",paddingTop:"8px"}}>
                            <input style={{width:"500px",height:"30px",borderRadius:"20px",paddingLeft:"10px",paddingRight:"10px",background:"white",marginLeft:"30px"}} type="text"  value={dept} onChange={e => setDept(e.target.value)} className="form-control-plaintext"  />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label  className="col-sm-3 col-form-label"> <strong>Section</strong></label>
                            <div className="col-sm-10" style={{paddingLeft:"30px",paddingTop:"8px"}}>
                            <input style={{width:"500px",height:"30px",borderRadius:"20px",paddingLeft:"10px",paddingRight:"10px",background:"white",marginLeft:"30px"}} type="text"  value={section} onChange={e => setSection(e.target.value)} className="form-control-plaintext"  />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label  className="col-sm-3 col-form-label"> <strong>Date</strong></label>
                            <div className="col-sm-10" style={{paddingLeft:"30px",paddingTop:"8px"}}>
                            <input style={{width:"500px",height:"30px",borderRadius:"20px",paddingLeft:"10px",paddingRight:"10px",background:"white",marginLeft:"30px"}} type="date"  value={date} onChange={e => setDate(e.target.value)} className="form-control-plaintext"  />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label  className="col-sm-3 col-form-label"> <strong>Place</strong></label>
                            <div className="col-sm-10" style={{paddingLeft:"30px",paddingTop:"8px"}}>
                            <input style={{width:"500px",height:"30px",borderRadius:"20px",paddingLeft:"10px",paddingRight:"10px",background:"white",marginLeft:"30px"}} type="text"  value={place} onChange={e => setPlace(e.target.value)} className="form-control-plaintext"  />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label  className="col-sm-3 col-form-label"> <strong>Staff</strong></label>
                            <div className="col-sm-10" style={{paddingLeft:"30px",paddingTop:"8px"}}>
                            <input style={{width:"500px",height:"30px",borderRadius:"20px",paddingLeft:"10px",paddingRight:"10px",background:"white",marginLeft:"30px"}} type="text"  value={staff} onChange={e => setStaff(e.target.value)} className="form-control-plaintext"  />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-5 col-form-label"> <strong>Final Documentation</strong></label>
                            <div className="col-sm-10" style={{paddingLeft:"30px",paddingTop:"8px"}}>
                            <input type="file" className='form-control'onChange={e => setPhoto(e.target.files[0])} style={{width:"500px",height:"35px",borderRadius:"20px",paddingLeft:"10px",paddingRight:"10px",background:"white",marginLeft:"30px"}} />
                            </div>
                            {/* <FileBase64
                            type="file" value={image1}
                                multiple={ false }
                                onDone={ ({base64}) => setImg1({ ...image1,
                                image1: base64}) } /> */}

                        </div>
                
                        <br />
                        <div className="card__apply">
                             <div className=' btn1'><button  className="btn btn-success btn-lg" onClick={handleSubmit}>Submit</button></div>
                        </div>
                     </form>
        
                     </div>      
                  </div>
                </div>
            </div>            
        </div>
    )
}

export default UploadForm;