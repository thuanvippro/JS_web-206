import React from 'react'
import {useParams} from 'react-router-dom';
import UpdateProducts from '../../admin/UpdateProducts';

const UpdateProduct = ({product, cate, onUpdate}) => {
    const {id} = useParams();
    const album = product.find(item => item.id === id);
    return (
        <div>
            { album ?<UpdateProducts data={album} cate={cate} onUpdate={onUpdate} />: ''}
             
            
        </div>
    )
}

export default UpdateProduct