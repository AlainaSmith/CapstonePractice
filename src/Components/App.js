import { Route, Routes } from "react-router-dom";
import Header from './common/Header';
import FrontPage from './FrontPage';
import About from './About';
import People from './people';
import Register from "./Register";
import Login from "./Login";
import AndrewHuberman from "./Huberman";

const App = () => {
  return (
    <div>
      {/* <Header /> */}
       <Routes>
       <Route path='/' element={<FrontPage/>}/>
       <Route path='/FrontPage' element={<FrontPage/>}/>
       <Route path='/People' element={<People/>}/>
       <Route path='/About' element={<About/>}/>
       <Route path='/Register' element={<Register/>} />
       <Route path='/Login' element={<Login/>} />
       <Route path='/Huberman' element={<AndrewHuberman/>}/>
       </Routes>
       
    {/* <FrontPage /> */}
    {/* <People />
    <About /> */}
    </div>
  )
}

export default App;
