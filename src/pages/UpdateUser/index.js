import React from 'react'
import {useParams} from 'react-router-dom';
import UpdateUsers from '../../admin/UpdateUsers'

const UpdateUser = ({user, handleUpdateUser}) => {
    const {id} = useParams();
    const  data = user.find(ad => ad.id === +id);
    return (
        <div>
            <UpdateUsers ad={data} handleUpdateUser={handleUpdateUser}/>
        </div>
    )
}

export default UpdateUser
