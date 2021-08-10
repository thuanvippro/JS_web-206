import React from 'react'

const Footer = () => {
    return (
        <div className="footer">
              <div className="container">
                <div className="col-md-3 cust">
                  <h4>CUSTOMER CARE</h4>
                  <li><a href="#">Help Center</a></li>
                  <li><a href="#">FAQ</a></li>
                  <li><a href="buy.html">How To Buy</a></li>
                  <li><a href="#">Delivery</a></li>
                </div>
                <div className="col-md-2 abt">
                  <h4>ABOUT US</h4>
                  <li><a href="#">Our Stories</a></li>
                  <li><a href="#">Press</a></li>
                  <li><a href="#">Career</a></li>
                  <li><a href="contact.html">Contact</a></li>
                </div>
                <div className="col-md-2 myac">
                  <h4>MY ACCOUNT</h4>
                  <li><a href="register.html">Register</a></li>
                  <li><a href="#">My Cart</a></li>
                  <li><a href="#">Order History</a></li>
                  <li><a href="buy.html">Payment</a></li>
                </div>
                <div className="col-md-5 our-st">
                  <div className="our-left">
                    <h4>OUR STORES</h4>
                  </div>
                  <div className="our-left1">
                    <div className="cr_btn">
                      <a href="#">SOLO</a>
                    </div>
                  </div>
                  <div className="our-left1">
                    <div className="cr_btn1">
                      <a href="#">BOGOR</a>
                    </div>
                  </div>
                  <div className="clearfix"> </div>
                  <li><i className="add"> </i>Jl. Haji Muhidin, Blok G no.69</li>
                  <li><i className="phone"> </i>025-2839341</li>
                  <li><a href="mailto:info@example.com"><i className="mail"> </i>info@sitename.com </a></li>
                </div>
                <div className="clearfix"> </div>
                <p>Copyrights © 2015 Gretong. All rights reserved | Template by <a href="http://w3layouts.com/">W3layouts</a></p>
              </div>
            </div>
         
    )
}

export default Footer
