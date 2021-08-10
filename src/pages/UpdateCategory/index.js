import React from 'react'
import {useParams} from 'react-router-dom';
import UpdateCategorys from '../../admin/UpdateCategorys';

const UpdateCategory = ({abums, onUpdate}) => {
    // console.log('abums',abums)
    const {id} = useParams();
    // console.log('id',id)
    const data = abums.find(item => item.id === +id);
    // console.log('data', data)
    // console.log(id)
    return (
        <div>
            { data ? <UpdateCategorys item={data} updatecate={onUpdate}/> : ''}
            
        </div>
    )
}

export default UpdateCategory
