import React from 'react'
import firebase from "../../firebase";
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
const UpdateCategorys = ({item, updatecate}) => {
    // console.log(item)
    let history = useHistory();
    const { register, handleSubmit, formState: {errors} } = useForm();
    
    // const onSubmit = (album) => {
    //     // console.log(album)
    //     const updatedCate = {
    //         ...item,
    //         ...album
    //     }
    //     updatecate(updatedCate);
    //     history.push("/listcategory");
    // }
    const onSubmit = (album) => {
        if(album.image.length == 0){
            const newData = {
                ...item,
                ...album,
                image:item.image
              };
              updatecate(newData)
              history.push("/listcategory");
        }else{
            let file = album.image[0];
            let storageRef = firebase.storage().ref(`image/${file.name}`);
            storageRef.put(file).then(function () {
            storageRef.getDownloadURL().then((url) => {
                const newData = {
                ...album,
                image: url,
                id:item.id
                };
                updatecate(newData)
                history.push("/listcategory");
            });
            });
        }
      };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>  
            <center><h2>Sửa danh mục</h2></center>
                <div className="form-group mb-2">
                    <label htmlFor="inputEmail3" for="exampleFormControlSelect1">Tên danh mục</label>
                    <input type="text"
                    {...register("name",{required:true})}
                    placeholder="Tên danh mục"
                    className="form-control"
                    defaultValue={item.name}
                    />
                    {errors.name && <span>This field is required</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlFile1">Chọn image</label>
                    <input type="file" 
                    className="form-control-file" 
                    id="exampleFormControlFile1" 
                    {...register("image")}/>
                </div>
                <div className="form-group row">
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Mô tả sản phẩm</label>
                        <textarea className="form-control" 
                        id="exampleFormControlTextarea1" 
                        placeholder="Mô tả danh mục" rows={3} 
                        {...register("description",{required:true})}
                        defaultValue={item.description} />
                        {errors.description && <span>This field is required</span>}
                    </div>
                </div>
                <div className="form-group row">
                <div className="col-sm-10">
                    <center><button type="submit" className="btn btn-primary">Sửa</button></center>
                </div>
                </div>
            </form>
    )
}

export default UpdateCategorys
