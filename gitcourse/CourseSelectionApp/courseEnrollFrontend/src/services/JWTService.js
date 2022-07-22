import axios from "../axios";

export const JWTService = {
    login: (username,password) => {
        return axios.post('/api/token/',{
            username: username,
            password
        });

    },

};