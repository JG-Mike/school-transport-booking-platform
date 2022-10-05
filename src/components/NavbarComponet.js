import HomePage from './HomePage';
import BookingPage from './BookingPage';
import About from './About';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";

function NavbarComponet() {
    return(
      <Router>
        <div className="NavBar">
    <Navbar bg="dark" variant={"dark"} expand="lg">
      <Container fluid>
        {/* <Navbar.Brand href="#">School Transport Booking</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to= {"/homePage"}>Home</Nav.Link>
            <Nav.Link as={Link} to= {"/about"}>About</Nav.Link>
            <Nav.Link as={Link} to= {"/bookingPage"}>Book Now</Nav.Link>
          
          </Nav>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    <div>
        <Routes>
          <Route path="/homePage" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/bookingPage" element={<BookingPage />} />
        </Routes>
    </div>

    </Router>
    )
}
 export default NavbarComponet