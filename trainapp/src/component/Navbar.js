import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>


        


<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to ="/"class="nav-link active" aria-current="page" href="#">Home</Link>
        </li>
        <li class="nav-item">
          <Link to="/addTrain" class="nav-link" href="#">Add Train</Link>
        </li>
        <li class="nav-item">
          <Link to="/reservation" class="nav-link" href="#">Reservation</Link>
        </li>
        <li class="nav-item">
          <Link to="/addReservation" class="nav-link" href="#">Add Reservation</Link>
        </li>
        <li class="nav-item">
          <Link to="/passenger" class="nav-link" href="#">Passenger</Link>
        </li>
        <li class="nav-item">
          <Link to="/addPassenger" class="nav-link" href="#">Add Passenger</Link>
        </li>
       
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}
export default Navbar
