import { axiosClient } from "./axiosClient";
const InvoiceApi = {
    add(data){
        const url = `/invoice`;
        return axiosClient.post(url, data);
    },
    getAll(){
        const url = `/invoice`;
        return axiosClient.get(url);
    }
}
export default InvoiceApi;