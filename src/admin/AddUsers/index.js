import React from 'react'
import {useForm} from "react-hook-form";
import { useHistory } from 'react-router-dom';

const AddUsers = ({onHandleAddUser}) => {
    let history = useHistory();
    const { register, handleSubmit, formState: {errors} } = useForm();
    const onSubmit = data => {
        
        onHandleAddUser(data)
        history.push("/listuser");
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>  
            <center><h2>Thêm user</h2></center>
                <div className="form-group mb-2">
                    <label htmlFor="inputEmail3" for="exampleFormControlSelect1">Tên user</label>
                    <input type="text"
                    {...register("name",{required:true})}
                    placeholder="name"
                    className="form-control"
                    />
                    {errors.name && <span>This field is required</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlFile1">Nhập email</label>
                    <input type="email" 
                    className="form-control" 
                    placeholder="email"
                    {...register("email",{required:true})}
                     />
                    {errors.email && <span>This field is required</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlFile1">Password</label>
                    <input type="password" 
                    className="form-control" 
                    placeholder="password"
                    id="exampleFormControlFile1"
                    {...register("password",{required:true})}
                     />
                    {errors.email && <span>This field is required</span>}
                </div>
                <div className="form-check">
                    <input className="form-check-input"
                     type="checkbox"
                     defaultValue id="flexCheckDefault"
                     {...register("qtv")}
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                    Chọn làm quản trị
                    </label>
                </div>
                <div className="form-group row">
                <div className="col-sm-10">
                    <center><button type="submit" className="btn btn-primary">Thêm</button></center>
                </div>
                </div>
            </form>
    )
}

export default AddUsers
