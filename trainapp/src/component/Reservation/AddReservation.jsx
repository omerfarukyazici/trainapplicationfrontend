import React, { useState } from 'react'
import reservationService from '../../Service/reservation.service';

export const AddReservation = () => {

const [reservation,setReservation]=useState({
    seatNumber:"",
    reservationTime:"",
})
const handleChange=(e)=>{
    const value=e.target.value;
    setReservation({...reservation,[e.target.name]:value});

}
const ReservationRegister=(e)=>{
    e.preventDefault();
    reservationService.saveReservation(reservation).then((res)=>{
        console.log("Reservation Added");

    }).catch((error)=>{
        console.log(error);
    })
}


  return (

    <>
   
    <div className='container'>
     <div className='row'>
         <div className='col-md-6 offset-md-3'>
             <div className='card'>
                 <div className='cardbody'>
                     <form onSubmit={(e)=>ReservationRegister(e)}> 
                         <div className='mb-3'>
                             <label>Enter Seat Number</label>
                             <input type='text'  name='seatNumber' className='form-control' onChange={(e)=>handleChange(e)}/>
 
                         </div>
                         <div className='mb-3'>
                             <label>Enter Reservation Time</label>
                             <input type='date'  name='reservationTime' className='form-control'onChange={(e)=>handleChange(e)} />
 
                         </div>
                         <button className='btn btn-primary col-md-12'>Submit</button>
                     </form>
                 </div>
             </div>
 
         </div>
     </div>
    </div>
    
    </>

  )
}
