import React, { useEffect, useState } from 'react';
import trainService from '../Service/train.service';
import { Link } from 'react-router-dom';

export const Home = () => {
  const [trainList, setTrainList] = useState([]);

  useEffect(() => {
    init();
    
  }, []);

  const init=()=>{

    trainService
    .getAllTrain()
    .then((res) => {
      console.log(res.data);
      setTrainList(res.data);
    })
    .catch((error) => {
      console.log(error);
    });

  }
  


  const deleteTrain=(id)=>{
    trainService.deleteTrain(id).then((res)=>{
        console.log("Delete succesfully");
        init();

    }).catch((error)=>{
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
                    <th scope="col">Train No</th>
                    <th scope="col">Destination Point</th>
                    <th scope="col">Departure Point</th>
                    <th scope="col">Destination Time</th>
                    <th scope="col">Departure Time</th>
                    <th scope="col">Capacity</th>
                    <th scope="col">Price</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {trainList.map((p, num) => (
                    <tr key={num}>
                      <td>{num + 1}</td>
                      <td>{p.trainNo}</td>
                      <td>{p.destinationPoint}</td>
                      <td>{p.departurePoint}</td>
                      <td>{p.destinationTime}</td>
                      <td>{p.departureTime}</td>
                      <td>{p.capacity}</td>
                      <td>{p.price}</td>
                      <td>
                        <Link to={"editTrain/"+p.id} className="btn btn-sm btn-primary">
                          Edit
                        </Link>
                        <button onClick={()=>deleteTrain(p.id)} className="btn btn-sm btn-danger ms-1">
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
  );
};
export default Home;