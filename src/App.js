import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';


const Shop = () => {
  return(
    <div>
      <div>
          <h1>I am Shop</h1>
      </div>
    </div>
  );
}

const App = () => {

  return (
    <Routes>  {/** Utilizing routing */}
      <Route path='/' element={<Navigation />} >
          <Route index element={<Home />} />     {/**index means that home is the base page */}
          <Route path='shop' element={<Shop />} /> 
          <Route path='auth' element={<Authentication />} /> 
      </Route>
    </Routes>
  );
}

export default App;
