import React from 'react'
import firebase from "../../firebase";
import {useForm} from "react-hook-form";
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
const AddCategorys = ({onAddCate}) => {
    console.log("ok")
    let history = useHistory();
    const { register, handleSubmit, formState: {errors} } = useForm();
    // const onSubmit = data => {
        
    //     onAddCate(data)
    //     history.push("/listcategory");
    // }
    const onSubmit = (data) => {
        uuidv4();
        let file = data.image[0];
        let storageRef = firebase.storage().ref(`image/${file.name}`);
        storageRef.put(file).then(function () {
          storageRef.getDownloadURL().then((url) => {
            const newData = {
              ...data,
              image: url
            };
            onAddCate(newData)
            history.push("/listcategory");
          });
        });
      };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>  
            <center><h2>Thêm danh mục</h2></center>
                <div className="form-group mb-2">
                    <label htmlFor="inputEmail3" for="exampleFormControlSelect1">Tên danh mục</label>
                    <input type="text"
                    {...register("name",{required:true})}
                    placeholder="Tên danh mục"
                    className="form-control"
                    />
                    {errors.name && <span>This field is required</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlFile1">Chọn image</label>
                    <input type="file" 
                    className="form-control-file" 
                    id="exampleFormControlFile1"
                    {...register("image",{required:true})}
                     />
                </div>
                <div className="form-group row">
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Mô tả sản phẩm</label>
                        <textarea className="form-control" 
                        id="exampleFormControlTextarea1" 
                        placeholder="Mô tả danh mục" rows={3} 
                        {...register("description",{required:true})}
                        defaultValue={""} />
                        {errors.description && <span>This field is required</span>}
                    </div>
                </div>
                <div className="form-group row">
                <div className="col-sm-10">
                    <center><button type="submit" className="btn btn-primary">Thêm</button></center>
                </div>
                </div>
            </form>
    )
}

export default AddCategorys
