import { useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import {useNavigate} from "react-router-dom"

// this is where the client will fill in the necessary details


function BookingForm({list}) {
    const[names, setName] = useState("");
    const[location, setLocation] = useState("");
    const[contacts, setContacts] = useState("");
    const url ='http://localhost:3000/bookingInfo'
    // const history = useNavigate()



     const handleSubmit = (event) =>{
        event.preventDefault();
        const newData = {names,location,contacts}
        fetch(url,{
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify(newData)
        }).then(() => console.log("person added to bookList"))
        //history("/list")

    }

  return (
    <div className='color-overlay d-flex justify-content-center algin-item-center'>
        {/* the input form */}
    <Form className='rounded p-4 p-sm-3' onClick={handleSubmit}>

           {/* name input */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name"  
          value={names}
          onChange={(e) => setName(e.target.value)}/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

           {/* location input */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Location</Form.Label>
        <Form.Control type="text" placeholder="Enter Location" 
             value={location}
            onChange={(e) => setLocation(e.target.value)}/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

          {/* contacts input */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Contacts</Form.Label>
        <Form.Control type="text" placeholder="Enter contacts" 
            value={contacts}
            onChange={(e) => setContacts(e.target.value)}/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      {/* submit button */}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  );
}



export default BookingForm