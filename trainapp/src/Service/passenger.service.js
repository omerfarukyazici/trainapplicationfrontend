import axios from 'axios';

const BASE_API_URL = "http://localhost:8080/api/v1/passengers"; // Yolcu verileri için farklı bir API URL kullanabilirsiniz.

class PassengerService {
    savePassenger(passenger) {
        return axios.post( BASE_API_URL+"/savePassenger",passenger);
    }

    getAllPassengers() {
        return axios.get(BASE_API_URL+"/");
    }

    getPassengerById(id) {
        return axios.get(BASE_API_URL+ "/" + id);
    }

    deletePassenger(id) {
        return axios.get(BASE_API_URL + "/delete/" + id);
    }

    editPassenger(passenger) {
        return axios.post(BASE_API_URL+ "/update/" + passenger.id, passenger);
    }
}

export default new PassengerService;
