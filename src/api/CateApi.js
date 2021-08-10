import {axiosClient} from "./axiosClient";

const CateApi = {
    getAll(){
        const url = `/categories`;
        return axiosClient.get(url);
    },
    add(data){
        const url = `/categories`;
        return axiosClient.post(url, data)
    },
    remove(id){
        const url = `/categories/${id}`;
        return axiosClient.delete(url)
    },
    update(id, data){
        const url = `/categories/${id}`;
        return axiosClient.put(url, data)
    },
    get(id){
        const url = `/categories/${id}`;
        return axiosClient.get(url);
    },
}
export default CateApi;