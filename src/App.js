import './App.css';
import NavBar from './components/menu/navbar/NavBar';
import Form from './components/form/Form';
import Home from './components/home/Home';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";

import data from './json/data.json';

function App() {
  var urlTotal = window.location.href;

    let nombreAerolinea = urlTotal.slice(22)

    console.log(nombreAerolinea)

  return (
    <div className="App">
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        {
          data.map((info) => {
            return (
              <Route path={"/" + info.name} element={<Form nombre={info.name}/>}/>
            )
          })
        }
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
