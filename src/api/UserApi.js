import { axiosClient1 } from "./axiosClient";
const UserApi = {
    add(data){
        const url = `/users`;
        return axiosClient1.post(url, data);
    },
    getAll(){
        const url = `/users`;
        return axiosClient1.get(url);
    },
    login(data){
        const url = `/signin`;
        return axiosClient1.post(url, data);
    },
    remove(id){
        const url = `/user/${id}`;
        return axiosClient1.delete(url)
    },
    profile(token, id) {
        const url = `user/${id}`
        return axios.get(url,{
            headers:{
                authorization: `Bearer ${token}`
            }
        })
    },
}
export default UserApi;