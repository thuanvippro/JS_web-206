import React from 'react'
import Products from '../../component/Products'
const Product = ({albums, cate, catepro, product, addToCart, allProduct, postsPerPage, totalPosts, nextpage, temm, timm, search, sanpham, nextpagess, nextpages, handleProCate}) => {
    return (
        <div>
            <Products albums={albums}
                    allProduct={allProduct}
                    catepro={catepro}
                    handleProCate={handleProCate}
                    cate={cate}
                    timm={timm}
                    temm={temm}
                    search={search}
                    data={product}
                    sanpham={sanpham}
                    nextpages={nextpages}
                    nextpagess={nextpagess}
                    addToCart={addToCart}
                    postsPerPage={postsPerPage}
                    totalPosts={totalPosts}
                    nextpage={nextpage}
                    />
        </div>
    )
}

export default Product
