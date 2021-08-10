import React from 'react'
import {Link} from 'react-router-dom';
const ListCategory = ({cate, onDeleteCategory}) => {
    return (
        <>
        <div className="container-fluid">
        {/* Page Heading */}
        <h1 className="h3 mb-2 text-gray-800">Tables</h1>
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6><Link to="/listcategory/add" >Thêm danh mục</Link></h6>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Description</th>
                    <th>Start date</th>
                    <th>Action</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                  <th>#</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Description</th>
                    <th>Start date</th>
                    <th>Action</th>
                    <th>Action</th>
                  </tr>
                </tfoot>
                <tbody>
                    {cate.map((item, index)=>{
                        return(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{item.name}</td>
                                <td><img width="120" height="100" src={item.image} alt=""/></td>
                                <td>{item.description}</td>
                                <td>2011/06/27</td>
                                <td><button type="button" className="btn btn-sm btn-outline-secondary"><Link to={`listcategory/update/${item.id}`}>Sửa</Link></button></td>
                                <td><button type="button" className="btn btn-sm btn-outline-secondary" 
                                       onClick={() => onDeleteCategory(item.id)}>Delete</button></td>
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

export default ListCategory
