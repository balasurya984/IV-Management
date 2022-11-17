import Navbar1 from "./navbar";
import '../css/home.css'

function Home(){
    return(
        <div>
            <Navbar1 />
            <div class="container"> 
        <img src="https://media.kongu.edu/images/header.png" alt="" width="1260" height="150"></img>
        <h2 style={{marginTop:"20px",fontSize:"22px"}}><strong> What Are Industrial Visits and Why Industrial Visits Are Important? </strong></h2>
        <p style={{fontSize:"22px",marginLeft:"20px"}}>Industrial visits are tours to manufacturing, production or business sites. They can be for a short duration of time lasting for just a few hours in a day, to long tours spreading over a few days.

            The objectives of industrial visits are to establish a link between theory taught in a classroom and actual practical concepts.

            The importance of industrial visits for college students cannot be undermined. Industrial visits contribute to the holistic learning development of students.</p>
        <h1 style={{textAlign:"center",color:"red"}}>IV Instructions</h1>
        <h3>1) Class Advisors / Academic Coordinators / HODs can add an one page report stating that the students are found to be in good health to  go for industrial visit and they have apparently not fallen sick in recent time. <br></br><br></br>
            2)Students apparently not in good health should be stopped for the visit at the dept. <br></br> <br></br>
            3) Industrial visits will be permitted on Saturdays only.<br></br><br></br>
            4) All students must get permission from their parents.<br></br><br></br>
            5) Industrial vist is allowed for only one day.<br></br><br></br>
            6) All necessory documents  should be submitted before 15 days from the date of IV.<br></br><br></br>
            7) On duty will be provided for IV Coordinators.<br></br><br></br>
            8) Beach side and water side areas are not  permitted.<br></br><br></br>
        </h3>

<div style={{width:"900px"}}>
<h2 style={{textAlign:"center",color:"#002B5B",marginLeft:"45%"}}>Documents to be submitted</h2>

<table style={{backgroundColor:"#497174",fontSize:"22px",marginLeft:"20%",color:"#E5D9B6"}} class="table table-hover ">
  <thead>
    <tr style={{color:"#DEBACE"}}>
      <th scope="col">S.No</th>
      <th scope="col">Document Name</th>
      <th scope="col">Download</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Student List</td>
      <td>< a href="Student List.docx" download="Student List.docx"><button className="btn btn-warning bttn1">Download</button></a></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Approval Form</td>
      <td>< a href="IV_Approval_Form.pdf" download="IV_Approval_Form.pdf"><button className="btn btn-warning bttn1">Download</button></a></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td >IV Incharge (college) </td>
      <td>< a href="IV Incharge.docx" download="IV Incharge.docx"><button className="btn btn-warning bttn1">Download</button></a></td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td >Dispensary</td>
      <td>< a href="Dispensery.docx" download="Dispensery.docx"><button className="btn btn-warning bttn1">Download</button></a></td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td >Hostel Permission Boys</td>
      <td>< a href="Hostel Boys.docx" download="Hostel Boys.docx"><button className="btn btn-warning bttn1">Download</button></a></td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td >Hostel Permission Girls</td>
      <td>< a href="Hostel Girls.docx" download="Hostel Girls.docx"><button className="btn btn-warning bttn1">Download</button></a></td>
    </tr>
    <tr>
      <th scope="row">7</th>
      <td >Bus and Driver Details</td>
      <td>< a href="Bus & Driver details.docx" download="Bus & Driver details.docx"><button className="btn btn-warning bttn1">Download</button></a></td>
    </tr>

  </tbody>
</table>
</div>

<div class="row">
    <div class="col-sm">
    <img src="https://www.klproorkee.co.in/images/visit.jpg"width="390px"></img>
    </div>
    <div class="col-sm">
    <img src="https://tse4.mm.bing.net/th?id=OIP.AoQmR6Y25qDTCyxULSOfwQHaFj&pid=Api&P=0" width="390px"></img>
    </div>
    <div class="col-sm">
    <img src="https://tse1.mm.bing.net/th?id=OIP.YE6Gqn1WFSzd92WZ4StrQwHaFi&pid=Api&P=0" width="390px"></img>
    </div>
  </div>

    </div>    




            <div>
                <a href="case.pdf" download="case.pdf"><button>Download</button></a>
            </div>
        </div>
    )
}

export default Home;