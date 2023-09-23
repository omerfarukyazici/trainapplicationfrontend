import React, { useState } from 'react'
import passengerService from '../../Service/passenger.service'

export const AddPassenger=()=> {


    const [passenger,setPassenger]=useState({

        name:"",
        surname:"",
        gender:"",
        birthDate:"",
        email:"",
        number:""
    })
    
const handleChange=(e)=>{
    const value=e.target.value;
    setPassenger({...passenger,[e.target.name]:value});

}



const PassengerRegister=(e)=>{
    e.preventDefault();
    passengerService.savePassenger(passenger).then((res)=>{
        console.log("Passenger Added");

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
                    <form onSubmit={(e)=>PassengerRegister(e)}> 
                        <div className='mb-3'>
                            <label>Enter Name</label>
                            <input type='text'  name='name' className='form-control' onChange={(e)=>handleChange(e)}/>

                        </div>
                        <div className='mb-3'>
                            <label>Enter Surname</label>
                            <input type='text'  name='surname' className='form-control'onChange={(e)=>handleChange(e)} />

                        </div>
                        <div className='mb-3'>
                            <label>Enter Gender</label>
                            <input type='text'  name='gender' className='form-control'onChange={(e)=>handleChange(e)} / >

                        </div>
                        <div className='mb-3'>
                            <label>Enter Birthdate</label>
                            <input type='date'  name='birthDate' className='form-control' onChange={(e)=>handleChange(e)}/ >

                        </div>
                        <div className='mb-3'>
                            <label>Enter Email</label>
                            <input type='text'  name='email' className='form-control'onChange={(e)=>handleChange(e)}/ >
                            

                        </div>
                        <div className='mb-3'>
                            <label>Enter Number</label>
                            <input type='text'  name='number' className='form-control' onChange={(e)=>handleChange(e)}/ >

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
