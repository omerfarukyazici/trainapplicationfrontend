import axios from 'axios';

const API_URL="http://localhost:8080/api/v1/trains";

class TrainService{
    saveTrain(train){
        return axios.post(API_URL+"/saveTrain",train)
    }

    getAllTrain(){
        return axios.get(API_URL+"/");
    }

    getTrainById(id){
        return axios.get(API_URL+"/"+id)

    }

    deleteTrain(id){
        return axios.get(API_URL+"/delete/"+id)
    }

    editTrain(train){
        return axios.post(API_URL+"/update/"+train.id,train)
    }

    
    



}
export default new TrainService;