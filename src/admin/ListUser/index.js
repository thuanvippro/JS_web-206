import React from 'react'
import {Link} from 'react-router-dom';
const ListUser = ({user, hanleDeleteUser}) => {
    return (
        <>
            <div className="container-fluid">
            {/* Page Heading */}
            <h1 className="h3 mb-2 text-gray-800">Tables</h1>
            <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6><Link to="/listuser/add" >Thêm user</Link></h6>
            </div>
            <div className="card-body">
                <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>administrators</th>
                        <th>Start date</th>
                        <th>Action</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tfoot>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>administrators</th>
                        <th>Start date</th>
                        <th>Action</th>
                        <th>Action</th>
                    </tr>
                    </tfoot>
                    <tbody>
                        {user.map((item, index)=>{
                            return(
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.qtv}</td>
                                    <td>2011/06/27</td>
                                    <td><button type="button" className="btn btn-sm btn-outline-secondary"><Link to={`listuser/update/${item.id}`}>Sửa</Link></button></td>
                                    <td><button type="button" className="btn btn-sm btn-outline-secondary" 
                                        onClick={() => hanleDeleteUser(item.id)} >delete</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default ListUser
