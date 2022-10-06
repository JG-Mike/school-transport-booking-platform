//this is were the list of people who have booked will be shown
import Table from 'react-bootstrap/Table';

function BookedListCard({students}){



return(
    <>
    <h2>list</h2>
    <Table striped bordered hover variant="blue">
      <thead>
        <tr>
          <th>Name</th>
          <th>Location</th>
          <th>Contacts</th>
        </tr>
      </thead>
      <tbody>
        {students.map(data =>
        <tr key={data.id}>
            <td>{data.names}</td>
            <td>{data.location}</td>
            <td>{data.contacts}</td>
        </tr>) 
        }
      </tbody>
    </Table>
    </>

)
}

export default BookedListCard