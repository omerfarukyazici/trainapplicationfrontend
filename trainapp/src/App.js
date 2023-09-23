import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';

import {Route, Routes} from 'react-router-dom'
import { Home } from './component/Home';
import { AddTrain } from './component/Train/AddTrain';
import { Passenger } from './component/Passenger/Passenger';
import { EditTrain } from './component/Train/EditTrain';
import { AddPassenger } from './component/Passenger/AddPassenger';
import { Reservation } from './component/Reservation/Reservation';
import { AddReservation } from './component/Reservation/AddReservation';

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Routes>
      <Route path ="/" element={<Home/>}></Route>
      <Route path='/addTrain/' element={<AddTrain/>}></Route>
      <Route path='/editTrain/:id' element={<EditTrain/>}></Route>
      <Route path='/addPassenger/' element={<AddPassenger></AddPassenger>}></Route>
      <Route path ="/passenger" element={<Passenger/>}></Route>
      <Route path='/reservation' element={<Reservation></Reservation>}
></Route>
<Route path='/addReservation/' element={<AddReservation/>}></Route>

   
    </Routes>
    
    </>
   
    
   
  );
}

export default App;
