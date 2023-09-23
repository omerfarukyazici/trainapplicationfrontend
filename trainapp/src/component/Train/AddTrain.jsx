import React, { useState } from 'react'
import TrainService from '../../Service/train.service';
import trainService from '../../Service/train.service';



export const AddTrain = () => {



const [train,setTrain] =useState({
    trainNo:"",
    destinationTime:"",
    departureTime:"",
    destinationPoint:"",
    departurePoint:"",
    capacity:"",
    price:""


})

const handleChange=(e)=>{
    const value=e.target.value;
    setTrain({...train,[e.target.name]:value});

}

const TrainRegister=(e)=>{
    e.preventDefault();
    trainService.saveTrain(train).then((res)=>{
        console.log("Train Added");

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
                    <form onSubmit={(e)=>TrainRegister(e)}> 
                        <div className='mb-3'>
                            <label>Enter Train No</label>
                            <input type='text'  name='trainNo' className='form-control' onChange={(e)=>handleChange(e)}/>

                        </div>
                        <div className='mb-3'>
                            <label>Enter Destination Time</label>
                            <input type='date'  name='destinationTime' className='form-control'onChange={(e)=>handleChange(e)} />

                        </div>
                        <div className='mb-3'>
                            <label>Enter Departure Time</label>
                            <input type='date'  name='departureTime' className='form-control'onChange={(e)=>handleChange(e)} / >

                        </div>
                        <div className='mb-3'>
                            <label>Enter Destination Point</label>
                            <input type='text'  name='destinationPoint' className='form-control'onChange={(e)=>handleChange(e)}/ >
                            

                        </div>
                        <div className='mb-3'>
                            <label>Enter Departure Point</label>
                            <input type='text'  name='departurePoint' className='form-control' onChange={(e)=>handleChange(e)}/ >

                        </div>
                        <div className='mb-3'>
                            <label>Enter Capatiy</label>
                            <input type='text'  name='capacity' className='form-control'onChange={(e)=>handleChange(e)} / >

                        </div>
                        <div className='mb-3'>
                            <label>Enter Price</label>
                            <input type='text'  name='price' className='form-control' / >

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
