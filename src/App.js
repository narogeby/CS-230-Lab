import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar.js';
import Card from './Card.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>CS 230L</h1>
      <h2>Section - 002</h2>
      <p>WVU ID: 800384058</p>
      <p>Hi,  I am Nathanson Gageby</p>
      <table>
        <tr>
          <td><Card /></td>
          <td><Card /></td>
          <td><Card /></td>
        </tr>
      </table>
    </div>
  );
}

export default App;
