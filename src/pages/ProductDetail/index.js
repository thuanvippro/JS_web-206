import React from 'react'
import {useParams} from 'react-router-dom';
import ProductsDetail from '../../component/ProductsDetail';

const ProductDetail = ({product, addToCart }) => {
    const {id} = useParams();
    const album = product.find(item => item.id ===id);
    // console.log(album)
    return (
        <div>
            <ProductsDetail data={album} addToCart={addToCart}  />
        </div>
    )
}

export default ProductDetail
