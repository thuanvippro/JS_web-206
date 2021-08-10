import React from 'react'
import AddCategorys from '../../admin/AddCategorys'

const Addcategory = ({onAddCategory}) => {
    return (
        <div>
            <AddCategorys onAddCate={onAddCategory}/>
        </div>
    )
}

export default Addcategory
