import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../css/navstyle.css";

export default function Navbar1()
{
    return(
        <>
        <Navbar style={{borderRadius:"0% 0% 20px 20px",backgroundColor:"#0A043C"}} sticky="top" expand="lg">
            <Container fluid>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="home" to="/home">Home</Link>
                        <Link className="link" to="/uploadform">Register</Link>
                        <Link className="link" to="/displayform">View</Link>                        
                        <Link style={{color:"red"}} className="link nav11" to="/logout">Logout</Link>   
                    </Nav>
                </Navbar.Collapse>

            </Container>

        </Navbar>
        </>
    )
}