import { axiosClient } from './axiosClient';

const ProductApi = {
    getAll(){
        //?_expand=category
        const url = `/products?_expand=category`;
        return axiosClient.get(url);
    },
    add(data){
        const url = `/products`;
        return axiosClient.post(url, data);

    },
    remove(id){
        const url = `/products/${id}`;
        return axiosClient.delete(url);
    },
    get(id){
        const url = `/products/${id}`;
        return axiosClient.get(url);
    },
    update(id, data){
        const url = `/products/${id}`;
        return axiosClient.put(url, data);
    }
}
export default ProductApi;