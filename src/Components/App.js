
import People from './people';
import { Route } from "react-router-dom";
import Header from './common/Header';
import FrontPage from './FrontPage';


const App = () => {
  return (
    <div>
    {/* <Route path='/' exact component={FrontPage} /> 
    <Route path='/people' component={People} /> */}
    <FrontPage />
    </div>
  )
}

export default App;
