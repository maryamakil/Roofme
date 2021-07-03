import logo from './logo.svg';
import './App.css';
import Nav from "./Components/Nav";
import Bien from "./Pages/Bien";

function App() {
  return (
    <div className="bg-light">
      <Nav />
      <div className="mt-3 mb-5">
        <div className="container">
          <Bien />
        </div>
      </div>
    </div>
  );
}

export default App;
