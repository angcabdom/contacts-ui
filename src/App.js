import './App.css';
import Contacts from './Contacts.js'

function App() {

  const c = [{
      name: "Alexander",
      phone: "666777888"
    },
    {
      name: "Thomas",
      phone: "123456789"
    }
  ]
  return (
    <div className="App">
      <h1>Contact App</h1>
      <Contacts contacts={c}/> 
    </div>
  );
}

export default App;
