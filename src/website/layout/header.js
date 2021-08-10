const header = {
    async render() {
        // let useProfile = localStorage.getItem("user");
        // const result = await Object.values(useProfile).map((val, index) => {
        //     return /*html*/ `
        //         <h4>${val.name}</h4>
        //     `
        // });
        return /*html*/`
        <div id="header">
            <header class="header">
                <div class="header__top">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 col-md-6">
                                <div class="header__top__left">
                                    <ul>
                                        <li><i class="fa fa-envelope"></i> hello@colorlib.com</li>
                                        <li>Free Shipping for all Order of $99</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <div class="header__top__right">
                                    <div class="header__top__right__social">
                                        <a href="#"><i class="fa fa-facebook"></i></a>
                                        <a href="#"><i class="fa fa-twitter"></i></a>
                                        <a href="#"><i class="fa fa-linkedin"></i></a>
                                        <a href="#"><i class="fa fa-pinterest-p"></i></a>
                                    </div>
                                    <div class="header__top__right__language">
                                        <img src="public/website/img/language.png" alt="">
                                        <div>English</div>
                                        <span class="arrow_carrot-down"></span>
                                        <ul>
                                            <li><a href="#">Spanis</a></li>
                                            <li><a href="#">English</a></li>
                                            <li><a href="#">Việt Nam</a></li>
                                        </ul>
                                    </div>
                                    <div class="header__top__right__auth">
                                        <a href="#/admin"><i class="fa fa-user"></i> admin</a>
                                    </div>
                                    <div class="header__top__right__auth">
                                        <a href="#/login"><i class="fa fa-user"></i> Login</a>
                                    </div>
                                    <div class="header__top__right__auth">
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3">
                            <div class="header__logo">
                                <a href="./index.html"><img src="public/website/img/logo.png" alt=""></a>
                            </div>
                        </div>
                    
                        <div class="col-lg-6">
                            <nav class="header__menu">
                                <ul>
                                    <li ><a href="#/">Home</a></li>
                                    <li><a href="#/shop">Shop</a></li>
                                    <li><a href="">Pages</a>
                                        <ul class="header__menu__dropdown">
                                            <li><a href="#/shopdetails">Shop Details</a></li>
                                            <li><a href="#/shopcart">Shoping Cart</a></li>
                                            <li><a href="#/checkout">Check Out</a></li>
                                            <li><a href="#/blogdetails">Blog Details</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#/blog">Blog</a></li>
                                    <li><a href="#/contact">Contact</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div class="col-lg-3">
                            <div class="header__cart">
                                <ul>
                                    <li><a href="#/shopcart"><i class="fa fa-heart"></i> <span>1</span></a></li>
                                    <li><a href="#/shopcart"><i class="fa fa-shopping-bag"></i> <span id="cartNumber"> 0</span></a></li>
                                </ul>
                                <div class="header__cart__price">item: <span>$150.00</span></div>
                            </div>
                        </div>
                    </div>
                    <div class="humberger__open">
                        <i class="fa fa-bars"></i>
                    </div>
                </div>
            </header>
        </div>
        `
    }
}
export default header;