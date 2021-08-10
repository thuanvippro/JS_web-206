import React from 'react'
import firebase from "../../firebase";
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import {useParams} from 'react-router-dom';
const UpdateProducts = ({data,cate,onUpdate}) => {
     const {id} = useParams()
    let history = useHistory();
    const { register, handleSubmit, formState: {errors} } = useForm();
    
    // const onSubmit = (album) => {
    //     // console.log(album)
    //     const updatedAlbum = {
    //         ...data,
    //         ...album
    //     }
    //     onUpdate(updatedAlbum);
    //     history.push("/listproduct");
    // }
    const onSubmit = (album) => {
        // console.log(album.image)
        if(album.image.length == 0  ){
             const newData = {
                ...data,
                ...album,
                image: data.image
                     
              };
              onUpdate(newData)
              history.push("/listproduct");
        }
        else {
            let file = album.image[0];
            let storageRef = firebase.storage().ref(`image/${file.name}`);
            storageRef.put(file).then(function () {
              storageRef.getDownloadURL().then((url) => {
                const newData = {
                  ...album,
                  image: url,
                  id:data.id
                };
                onUpdate(newData)
                history.push("/listproduct");
              });
            });
        }
      
      };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>  
            <center><h2>Thêm sản phẩm</h2></center>
                <div className="form-group mb-2">
                    <label htmlFor="inputEmail3" for="exampleFormControlSelect1">Sửa sản phẩm</label>
                    <input type="text"
                    {...register("name",{required:true})}
                    placeholder="Tên sản phẩm"
                    className="form-control"
                    defaultValue={data.name}
                    />
                    {errors.name && <span>This field is required</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="inputEmail3" for="exampleFormControlSelect1">Loại sản phẩm</label>
                    <select className="custom-select" {...register("categoryId",{required:true})}>
                    {
                        cate.map(e => {
                            return <option value={e.id}>
                                   {e.name}
                            </option>
                        })
                    }
                    </select>
                    {errors.categoryId && <span>This field is required</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlFile1">Chọn image</label>
                    <input type="file" className="form-control-file" 
                    id="exampleFormControlFile1"
                    {...register("image")}
                   />
                    {/* {errors.image && <span>This field is required</span>} */}
                </div>
                <div className="form-group row">
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Mô tả sản phẩm</label>
                        <textarea className="form-control" 
                        id="exampleFormControlTextarea1" 
                        placeholder="Mô tả sản phẩm" rows={3} 
                        {...register("description",{required:true})}
                        defaultValue={data.description} />
                        {errors.description && <span>This field is required</span>}
                    </div>
                </div>
                <div className="form-group mb-2">
                <label htmlFor="exampleFormControlTextarea1">Số lượng sản phẩm</label>
                    <input type="number"
                    placeholder="Số lượng sản phẩm"
                    className="form-control"
                    defaultValue={data.quantity}
                    {...register("quantity",{required:true})}
                    />
                    {errors.price && <span>This field is required</span>}
                </div>
                <div className="form-group mb-2">
                <label htmlFor="exampleFormControlTextarea1">Giá sản phẩm</label>
                    <input type="number"
                    placeholder="Giá sản phẩm"
                    className="form-control"
                    defaultValue={data.price}
                    {...register("price",{required:true})}
                    />
                    {errors.price && <span>This field is required</span>}
                </div>
                <div className="form-group row">
                <div className="col-sm-10">
                    <center><button type="submit" className="btn btn-primary">Update</button></center>
                </div>
                </div>
            </form>
    )
}

export default UpdateProducts
