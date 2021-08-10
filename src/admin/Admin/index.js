import React from 'react'
import AdminTopbar from '../AdminTopbar'
import AdminSidebar from '../AdminSidebar'
import AdminFooter from '../AdminFooter'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import ListProduct from '../ListProducts'
import AddProduct from '../../pages/AddProduct'
import UpdateProduct from '../../pages/UpdateProduct'
import ListCategory from '../ListCategory'
import Addcategory from '../../pages/AddCategory'
import UpdateCategory from '../../pages/UpdateCategory'
import ListUser from '../ListUser'
import AddUser from '../../pages/AddUser'
import UpdateUser from '../../pages/UpdateUser'
const Admin = (props) => {
    const {sanpham, 
        albums,
        search,
        cate, 
        onAdd, 
        onUpdateProduct, 
        onDelete, 
        onDeleteCategory, 
        onAddCategory, 
        onUpdate, user, 
        hanleDeleteUser, 
        timkem, 
        handleAddUser, 
        handleUpdateUser} =props
    // console.log(user)
    return (
        <Router>
            <div>
                <div id="wrapper">
                <AdminSidebar/>
                <div id="content-wrapper" >
                    <AdminTopbar timkem={timkem}/>
                        <Switch>
                            <Route path="/listproduct" exact component={()=><ListProduct search={search} sanpham={sanpham} cate={cate} albums={albums} onDelete={onDelete}/>}></Route>
                            <Route path="/listproduct/add" exact component={()=><AddProduct cate={cate} onAdd={onAdd}/>}></Route>
                            <Route path="/listproduct/update/:id" exact component={()=><UpdateProduct product={albums} cate={cate} onUpdate={onUpdateProduct}/>}></Route>
                            <Route path="/listcategory" exact component={()=><ListCategory cate={cate} onDeleteCategory={onDeleteCategory}/>}></Route>
                            <Route path="/listcategory/add" exact component={()=><Addcategory onAddCategory={onAddCategory}/>}></Route>
                            <Route path="/listcategory/update/:id" exact component={()=><UpdateCategory abums={cate} onUpdate={onUpdate}/>}></Route>
                            <Route path="/listuser" exact component={()=><ListUser user={user} hanleDeleteUser={hanleDeleteUser}/>}></Route>
                            <Route path="/listuser/add" exact component={()=><AddUser handleAddUser={handleAddUser} />}></Route>
                            <Route path="/listuser/update/:id" exact component={()=><UpdateUser user={user} handleUpdateUser={handleUpdateUser} />}></Route>
                        </Switch>
                    <AdminFooter/>
                </div>
                </div>
            </div>
        </Router>
    )
}

export default Admin
