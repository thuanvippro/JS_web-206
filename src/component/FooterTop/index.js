import React from 'react'

const FooterTop = () => {
    return (
        <div className="foot-top">
              <div className="container">
                <div className="col-md-6 s-c">
                  <li>
                    <div className="fooll">
                      <h5>follow us on</h5>
                    </div>
                  </li>
                  <li>
                    <div className="social-ic">
                      <ul>
                        <li><a href="#"><i className="facebok"> </i></a></li>
                        <li><a href="#"><i className="twiter"> </i></a></li>
                        <li><a href="#"><i className="goog"> </i></a></li>
                        <li><a href="#"><i className="be"> </i></a></li>
                        <li><a href="#"><i className="pp"> </i></a></li>
                        <div className="clearfix" />	
                      </ul>
                    </div>
                  </li>
                  <div className="clearfix"> </div>
                </div>
                <div className="col-md-6 s-c">
                  <div className="stay">
                    <div className="stay-left">
                      <form>
                        <input type="text" placeholder="Enter your email to join our newsletter" required />
                      </form>
                    </div>
                    <div className="btn-1">
                      <form>
                        <input type="submit" defaultValue="join" />
                      </form>
                    </div>
                    <div className="clearfix"> </div>
                  </div>
                </div>
                <div className="clearfix"> </div>
              </div>
            </div>
            
    )
}

export default FooterTop
