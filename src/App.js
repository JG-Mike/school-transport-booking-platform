import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponet from './components/NavbarComponet';
import {useEffect, useState} from "react"


// data from the json- server will be fetched, posted and deleted 

function App() {
  const [list, setList] = useState([])
 

  // const url ='http://localhost:3000/bookingInfo'
  const url ="https://transport-data-list.herokuapp.com/bookingInfo"

  useEffect(() =>{
    fetch(url)
    .then(res => res.json())
    .then(data => setList(data))
  }
  ,[list])

  

  return (
     <NavbarComponet list={list}/>
  );
}

export default App;
