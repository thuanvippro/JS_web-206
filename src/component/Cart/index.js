import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import {useForm} from "react-hook-form";
const Cart = ({cart, removeCart, tru, cong, addToOrder}) => {
  const { register, handleSubmit, formState: {errors} } = useForm();
  const onSubmit = data => {
    addToOrder(data, ...cart)
    
  }
  const [total, setTotal] = useState("");
  useEffect(() => {
    const getTotal = () => {
      const res = cart.reduce((pre, item) => {
        return pre + (item.price * item.quantity)
      }, 0)
      setTotal(res)
    }
    getTotal()
  }, [cart])
  
    return (
        <div className="container">
        <div className="check">	 
          <div className="col-md-3 cart-total">
            <Link className="continue" to="/product">Continue to basket</Link>
            <div className="price-details">
              <h3>Price Details</h3>
              <span>Total</span>
              <span className="total1">${total}</span>
              <span>Discount</span>
              <span className="total1">---</span>
              <span>Delivery Charges</span>
              <span className="total1">---</span>
              <div className="clearfix" />				 
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>  
              <div>
              <ul className="total_price">
                <li className="last_price"> <h4>TOTAL</h4></li>	
                <li className="last_price"><input type="text"
                                                  defaultValue={total}
                                                  {...register("total",{required:true})}
                                                  className="form-control"
                                            />
                </li>
                <div className="clearfix"> </div>
              </ul>
              <div className="clearfix" />
              <a className="order" > <button type="submit">Place Order</button></a>
              <ul className="total_price">
                <li className="last_price"> <h4>Name :</h4></li>	
                <li className="last_price"><input type="text"
                                                 placeholder="Tên người mua"
                                                 {...register("name",{required:true})}
                                                  className="form-control"
                                            />
                                            {errors.name && <span>This field is required</span>}
                </li>
                <div className="clearfix"> </div>
              </ul>
              <ul className="total_price">
                <li className="last_price"> <h4>Address :</h4></li>	
                <li className="last_price"><input type="text"
                                                 placeholder="Địa chỉ nhận"
                                                 {...register("address",{required:true})}
                                                  className="form-control"
                                            />
                                            {errors.address && <span>This field is required</span>}
                </li>
                <div className="clearfix"> </div>
              </ul>
              </div>
            </form>
          </div>
          <div className="col-md-9 cart-items">
            <h1>My Shopping Bag ({cart.length})</h1>
            { cart.map((item, index) =>{
                return(
                    <div className="cart-header" key={item._id}>
                        <div className="close1" onClick={()=> removeCart(item.id)}></div>
                        <div className="cart-sec simpleCart_shelfItem">
                        <div className="cart-item cyc">
                            <img src={item.image} className="img-responsive" alt="" />
                        </div>
                        <div className="cart-item-info">
                            <h3>{item.name}</h3>
                            <ul className="qty">
                            <li><p>Size : 5</p></li>
                            <li>
                              <button onClick={()=> tru(index)}>-</button>
                                <p>{item.quantity}</p>
                              <button onClick={()=> cong(index)}>+</button>
                            </li>
                            </ul>
                            <div className="delivery">
                            <p>${item.price}</p>
                            <div className="clearfix" />
                            </div>	
                        </div>
                        <div className="clearfix" />
                        </div>
              </div>
                )
            })}	
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>
    )
}

export default Cart
