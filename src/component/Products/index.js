import React from 'react'
import {Link} from 'react-router-dom';
import NextPage from '../NextPage/NextPage';
import NextPages from '../NextPages';
import NextPagess from '../NextPagess';
const Products = ({albums, catepro, cate, data, addToCart, allProduct, postsPerPage, totalPosts, nextpage, temm, search, sanpham, timm, nextpagess, nextpages, handleProCate}) => {
    // console.log(cate)
    
    return (
        <div>
            <div className="container">
                <div className="women_main">
                {/* start sidebar */}
                <div className="col-md-3 s-d">
                    <div className="w_sidebar">
                    <div className="w_nav1">
                        <h4> <a href="" onClick={(e)=> allProduct(e)} >All</a></h4>
                        {cate.map((item, index) => {
                            return(
                                <ul key={index}>
                                <li><a href="#" onClick={()=>handleProCate(item.id)} >{item.name} 1</a></li>
                            </ul>
                            )
                        })}
                    </div>
                    </div>
                </div>
                {/* start content */}
                <div className="col-md-9 w_content">
                    <div className="women">
                    <a href="#"><h4>Enthecwear - <span>{albums.length}</span> </h4></a>
                    <ul className="w_nav">
                        <li>Sort : </li>
                        <li><a className="active" href="#">popular</a></li> |
                        <li><a href="#">new </a></li> |
                        <li><a href="#">discount</a></li> |
                        <li><a href="#">price: Low High </a></li> 
                        <div className="clear" />	
                    </ul>
                    <div className="clearfix" />	
                    </div>
                    {/* grids_of_4 */}
                    <div className="album py-5 bg-light">
                {/* {if(search.length > 0){

                }else
                } */}
                     <div className="container">
                     <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                         {catepro.map((item, index)=>{
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
                     <NextPagess postsPerPage={postsPerPage} timm={timm} nextpagess={nextpagess}/>
                     </div>
                    
                </div>
                </div>
                <div className="clearfix" />
                </div>
            </div>
        </div>
    )
}

export default Products
