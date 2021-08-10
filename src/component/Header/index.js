import React, { useState } from 'react';
import {
  BrowserRouter,
  Link
} from 'react-router-dom'
const Header = ({logout, user, cart, timkem}) => {
    const [search, setSearch]= useState("")
    const handleSearch = (e) => {
      timkem(search)
      e.preventDefault();
    }
    const handleChange = (e) => {
      setSearch(e.target.value)
    }
    
    return (
     
            <div className="header_bg">
              <div className="container">
                <div className="header">
                  <div className="head-t">
                    <div className="logo">
                      <Link href="#" to="/"><img src="images/logo.png" className="img-responsive" alt="" /> </Link>
                    </div>
                    {/* start header_right */}
                    <div className="header_right">
                      <div className="rgt-bottom">
                        <div className="log">
                          <div className="btnContainer">
                                    {user !="" ? (
                                        <>
                                        <button >
                                          <Link to="/logins" >login</Link>
                                        </button>
                                      </>
                                    ):(
                                      <>
                                        <button onClick={logout} >Logout</button>
                                      </>  
                                           
                                    )}
                                </div>
                        </div>
                        <div className="cart box_1">
                          <a href="checkout.html">
                            <h3> <Link to="/cart">(<span>{cart.length}</span> items)</Link></h3>
                          </a>
                          <div className="clearfix"> </div>
                        </div>
                        <div className="create_btn">
                          <Link to="/cart">CHECKOUT</Link>
                        </div>
                        <div className="clearfix"> </div>
                      </div>
                      <div className="search">
                        <form>
                          <input type="text"  
                          placeholder="search..." 
                          value={search}
                          onChange={handleChange}/>
                          <input type="submit" onClick={handleSearch} defaultValue/>
                        </form>
                      </div>
                      <div className="clearfix"> </div>
                    </div>
                    <div className="clearfix"> </div>
                  </div>
                  {/* start header menu */}
                  <ul className="megamenu skyblue">
                    <li className="active grid"><Link className="color1" to="/">Home</Link></li>
                    <li className="grid"><Link className="color2" to="/product">Product</Link></li>
                    {/* <li className="grid"><Link className="color2" to="/manager">Manager</Link></li> */}
                    <li className="grid"><Link className="color2" to="/admin">Admin</Link></li>
                    <li><a className="color4" href="#">TUXEDO</a></li>				
                    </ul> 
                </div>
              </div>
            </div>
      
    )
}

export default Header
