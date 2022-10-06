import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponet from './components/NavbarComponet';
import {useEffect, useState} from "react"


// data from the json- server will be fetched, posted and deleted 

function App() {
  const [list, setList] = useState([])
 

  const url ='http://localhost:3000/bookingInfo'

  useEffect(() =>{
    fetch(url)
    .then(res => res.json())
    .then(data => setList(data))
  }
  ,[])

  

  return (
     <NavbarComponet list={list}/>
  );
}

export default App;
