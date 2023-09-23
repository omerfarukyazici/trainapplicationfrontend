import axios from 'axios';

const BASE_API_URL = "http://localhost:8080/api/v1/reservations"; // Rezervasyon verileri için farklı bir API URL kullanabilirsiniz.

class ReservationService {
    saveReservation(reservation) {
        return axios.post(BASE_API_URL + "/saveReservation", reservation);
    }

    getAllReservations() {
        return axios.get(BASE_API_URL + "/");
    }

    getReservationById(id) {
        return axios.get(BASE_API_URL + "/" + id);
    }

    deleteReservation(id) {
        return axios.delete(BASE_API_URL + "/delete/" + id);
    }

    editReservation(reservation) {
        return axios.put(BASE_API_URL + "/update/" + reservation.id, reservation);
    }
}

export default new ReservationService();
