import React, { useEffect } from 'react'
import reservationService from '../../Service/reservation.service';
import { useState
 } from 'react';
import { Link } from 'react-router-dom';
 
export const Reservation = () => {
  
  const [reservationList,setReservationList]=useState([]);

  useEffect(()=>{
    init();
  },
  [])

  const init=()=>{


    reservationService
    .getAllReservations()
    .then((res)=>{
        console.log(res.data);
        setReservationList(res.data);
    })
    .catch((error)=>{
        console.log(error);
    }
    
    );



    
  }
  
  const deleteReservation=(id)=>{

    reservationService.deleteReservation(id).then((res)=>{
        console.log("deleted");
    init();        }).catch((error)=>{
        console.log(error);
    });

}
  
    return (
        <div className="container mt-3">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Seat Number No</th>
                      <th scope='col'>Reservation Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reservationList.map((p, num) => (
                      <tr key={num}>
                        <td>{num + 1}</td>
                        <td>{p.seatNumber}</td>
                        <td>{p.reservationTime}</td>
                        <td>
                          <Link to={"editReservation/"+p.id} className="btn btn-sm btn-primary">
                            Edit
                          </Link>
                          <button onClick={()=>deleteReservation(p.id)} className="btn btn-sm btn-danger ms-1">
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  )
}
export default Reservation;
