import HomePage from './HomePage';
import BookingPage from './BookingPage';
import List from './List';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";

function NavbarComponet({list}) {
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

            {/* linking the home pages link to the correct routes */}
            <Nav.Link as={Link} to= {"/homePage"}>Home</Nav.Link>
            <Nav.Link as={Link} to= {"/list"}>List</Nav.Link>
            <Nav.Link as={Link} to= {"/bookingPage"}>Book Now</Nav.Link>
          
          </Nav>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    <div>
      
      {/* linking the routes to the right components */}
        <Routes>
          <Route exact path="/homePage" element={<HomePage />} />
          <Route path="/list" element={<List list={list} />} />
          <Route path="/bookingPage" element={<BookingPage />} />
        </Routes>
    </div>

    </Router>
    )
}
 export default NavbarComponet