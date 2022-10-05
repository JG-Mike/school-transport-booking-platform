import './App.css';
import HomePage from './components/HomePage';
import BookingPage from './components/BookingPage';
import About from './components/About';

function App() {
  return (
    <div className="NavBar">
      <HomePage/>
      <BookingPage/>
      <About/>
    </div>
  );
}

export default App;
