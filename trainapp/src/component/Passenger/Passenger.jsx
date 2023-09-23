import React, { useEffect, useState } from 'react'
import passengerService from '../../Service/passenger.service';
import { Link } from 'react-router-dom';
export const Passenger = () => {




    const [passengerList,setPassengerList]=useState([]);



useEffect(()=>{
    init();
},[]);


const init=()=>{


    passengerService
    .getAllPassengers()
    .then((res)=>{
        console.log(res.data);
        setPassengerList(res.data);
    })
    .catch((error)=>{
        console.log(error);
    })
}



const deletePassenger=(id)=>{
    passengerService.deletePassenger(id).then((res)=>{
        console.log("Delete Succefully");
        init();

    })
    .catch((error)=>{
        console.log(error);
    });
}
  return (
    <>
      
    <div className='container mt-3'>
        <div className='row'>
            <div className='col-md-12'>
                <div className='card'>
                    <div className='card-body'>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th scope='col'>#</th>
                                    <th scope='col'>Name</th>
                                    <th scope='col'>Surname</th>
                                    <th scope='col'>Gender</th>
                                    <th scope='col'>Birthdate</th>
                                    <th scope='col'>Email</th>
                                    <th scope='col'>Number</th>




                                </tr>
                            </thead>
                            <tbody>
                            {passengerList.map((p, num) => (
    <tr key={num}>
        <td>{num + 1}</td>
        <td>{p.name}</td>
        <td>{p.surname}</td>
        <td>{p.gender}</td>
        <td>{p.birthDate}</td>
        <td>{p.email}</td>
        <td>{p.number}</td>
        <td>
            <Link to={"editPassenger/" + p.id} className="btn btn-sm btn-primary">
                Edit
            </Link>
            <button onClick={() => deletePassenger(p.id)} className='btn btn-sn btn-danger ms-1'>
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
    </>
  )
}

export default Passenger;