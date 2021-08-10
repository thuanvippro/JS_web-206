import React from 'react'
import Arriv from '../../component/Arriv'
import Special from '../../component/Special'
import {Link} from 'react-router-dom';
import NextPages from '../../component/NextPages';
const HomePage = ({sanpham, addToCart, search, temm, nextpages, postsPerPage}) => {
    return (
        <div>
            {search.length > 0 ?(
                     <div className="container">
                     <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                         {sanpham.map((item, index)=>{
                             return(
                                 <div className="col">
                                     
                                     <div className="content_box"><Link to={`product/detail/${item.id}`}>
                                         <img src={item.image} className="img-responsive" alt="" />
                                         </Link>
                                         <div><span className="item_price"><h4><Link to={`product/detail/${item.id}`} >{item.name}</Link></h4></span></div>
                                         <div className="grid_1 simpleCart_shelfItem">
                                         <div className="item_add"><span className="item_price"><h6 onClick={() => addToCart(item)}>${item.price}</h6></span></div>
                                         <div className="item_add"><button onClick={() => addToCart(item)} >add to cart</button></div>
                                         </div>
                                     </div>
                                     
                                 </div>
                             )
                         })}
                     </div>
                     <NextPages postsPerPage={postsPerPage} temm={temm} nextpages={nextpages}/>
                     </div>
                    
                ):(
                    <div className="container">
                        <Arriv/>
                        <Special/>
                    </div>
                   
                )}
        </div>
    )
}

export default HomePage
