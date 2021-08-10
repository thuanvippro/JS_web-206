import React from 'react'
import AddProducts from '../../admin/AddProducts'



const AddProduct = ({onAdd,cate}) => {
    // console.log(cate)
    return (
        <div>
            <AddProducts cate={cate} onAddProduct={onAdd} />
        </div>
    )
}

export default AddProduct
