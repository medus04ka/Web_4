import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080/webik4/api/entries'
});

const entryAPI = {
    async getEntries(token) {
        return axiosInstance.get('', {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
    },
    async checkEntry(x,y,r,token) {
        return axiosInstance.post('', {x,y,r}, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
    },
    async clearEntries(token) {
        return axiosInstance.delete('', {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
    }
}

export default entryAPI;
