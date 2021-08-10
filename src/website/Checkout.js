import footer from "./layout/footer";
import header from "./layout/header";
import heroNormal from "./page/heroNormal";
import { $ } from "../utils.js";
import InvoiceApi from "../api/InvoiceApi";
const Checkout = {
    async render() {
        let cartItems = localStorage.getItem("cartItems");
        let totalPrice = localStorage.getItem("totalPrice");
        totalPrice = parseInt(totalPrice);
        cartItems = JSON.parse(cartItems);
        let resultCartTow = Object.values(cartItems).map((item) => {
            return /*html*/ `
                <li>
                    ${item.name} 
                    <span>
                        $${new Intl.NumberFormat("ja-JP").format(item.price)}</span><span style="margin-right:20px;"> x ${item.quantity} 
                    </span>
                </li>
            `
        }).join("");

        return /*html*/ `
            ${await header.render()}
            ${await heroNormal.render()}
            <section class="breadcrumb-section " style="background-image: url(&quot;public/website/img/breadcrumb.jpg&quot;);">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 text-center">
                            <div class="breadcrumb__text">
                                <h2>Checkout</h2>
                                <div class="breadcrumb__option">
                                    <a href="./index.html">Home</a>
                                    <span>Checkout</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Breadcrumb Section End -->

            <!-- Checkout Section Begin -->
            <section class="checkout spad">
            <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h6><span class="icon_tag_alt"></span> Have a coupon? <a href="#">Click here</a> to enter your code
                    </h6>
                </div>
            </div>
            <div class="checkout__form">
                <h4>Billing Details</h4>
                <form  id="add-cart">
                    <div class="row">
                        <div class="col-lg-8 col-md-6">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="checkout__input">
                                        <p>Your Name<span>*</span></p>
                                        <input type="text" id="nameI" >
                                        <span style="color:red;" class="errorN" > </span>
                                    </div>
                                </div>
                                </div>
                                <div class="row">
                                <div class="col-lg-6">
                                    <div class="checkout__input">
                                        <p>Phone<span>*</span></p>
                                        <input type="text" id="phoneI">
                                        <span style="color:red;"  class="errorP"> </span>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="checkout__input">
                                        <p>Email<span>*</span></p>
                                        <input type="text" id="emailI">
                                        <span style="color:red;"  class="errorE"> </span>
                                    </div>
                                </div>
                                </div>
                                <div class="checkout__input">
                                    <p>Address<span>*</span></p>
                                    <input type="text" placeholder="Street Address"  class="checkout__input__add" id="addressI">
                                    <span style="color:red;"  class="errorA"> </span>
                                </div>
                                <div class="checkout__input">
                                    <p>Order notes<span>*</span></p>
                                    <div class="checkout__input__checkbox">
                                    <label for="diff-acc">
                                        Ship to a different address?
                                        <input type="checkbox" id="diff-acc">
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                                <textarea style="border-color:#80808038;border-radius: 5px;" placeholder=" Your note"   cols="100" rows="5" id="noteI"></textarea>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="checkout__order">
                                <h4>Your Order</h4>
                                <div class="checkout__order__products">Products <span>Total</span></div>
                                <ul>

                                    ${resultCartTow}

                                </ul>
                                <div class="checkout__order__subtotal">Subtotal 
                                    <span>
                                        $${new Intl.NumberFormat("ja-JP").format(totalPrice)}
                                    </span>
                                </div>
                                <div class="checkout__order__subtotal">Shiping 
                                    <span>
                                        $35.000
                                    </span>
                                </div>
                                <div class="checkout__order__total">Total 
                                    <span>$
                                        ${new Intl.NumberFormat("ja-JP").format(totalPrice + 35000)}
                                    </span>
                                <input type="hidden" id="totalPriceI" value="${totalPrice}">
                                </div>
                                <div class="form-group row">
                                    <div  class="col-4 checkout__order__products" style="margin-top:5px;" > Payment  </div>
                                    <div class="col-8">
                                        <select id="payment"  class="" id="">
                                            <option value="1" >By Cash</option>
                                            <option value="2" >By Visit Cart</option>
                                        </select>
                                    </div>
                                </div>
                                <button type="submit" class="site-btn">PLACE ORDER</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            </div>
            </section>
            ${await footer.render()}
        `
    },  
    async afterRender() {
        let cartItems = JSON.parse(localStorage.getItem("cartItems"));
        const nameII = $("#nameI");
        const phoneII = $("#phoneI");
        const emailII = $("#emailI");
        const addressII = $("#addressI");
        const noteII = $("#noteI");
        const paymentI = $("#payment");
        const cartPro = cartItems;
       
    
        $("#add-cart").addEventListener("submit", (e) => {
    
            if(cartPro != null){
                if (nameII.value == "") {
                    $(".errorN").innerText = "bạn chưa nhập tên !";
                
                } else if(phoneII.value == ""){
                    $(".errorN").innerText = "";
                    $(".errorP").innerText = "bạn chưa nhập Số điện thoại !";
                }
                else if(emailII.value == ""){
                    $(".errorP").innerText = "";
                    $(".errorE").innerText = "bạn chưa nhập Email !";
                }else if(addressII.value == ""){
                    $(".errorE").innerText = "";
                    $(".errorA").innerText = "bạn chưa nhập Địa chỉ !";
                }else {
                    $(".errorA").innerText = "";
                    e.preventDefault();
                    const data = {
                        id: Math.random().toString(36).substr(2, 9),
                        name: $("#nameI").value,
                        phone: $("#phoneI").value,
                        email: $("#emailI").value,
                        address: $("#addressI").value,
                        totalPrice: $("#totalPriceI").value,
                        note: $("#noteI").value,
                        payment: $("#payment").value,
                        cartPro: cartItems,
                    };
                    InvoiceApi.add(data);
                    alert("dat hang thanh cong")
                    window.location.hash = "/shop";
                    
                }
            }else{
                alert("ban chua co san pham trong gio hang")
            }
        });
    },
};
export default Checkout;
