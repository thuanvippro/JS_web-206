import React from 'react'
import AddUsers from '../../admin/AddUsers'

const AddUser = ({handleAddUser}) => {
    return (
        <div>
            <AddUsers onHandleAddUser={handleAddUser} />
        </div>
    )
}

export default AddUser
