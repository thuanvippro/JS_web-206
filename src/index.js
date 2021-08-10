import Home from "./website/Home";
import HomeAdmin from "./admin/HomeAdmin"
import {$, parseRequestUrl} from "./utils";
import ListProductAdmin from "./admin/ListProductAdmin";
import ListCateAdmin from "./admin/ListCateAdmin";
import AddProductAdmin from "./admin/AddProductAdmin";
import AddCateAdmin from "./admin/AddCateAdmin";
import EditCateAdmin from "./admin/EditCateAdmin";
import EditProductAdmin from "./admin/EditProductAdmin";
import Error404Page from "./page/Error404Page";
import Shop from "./website/Shop";
import ShopDetails from "./website/ShopDetails";
import Category from "./website/Category";
import ShopCart from "./website/ShopCart";
import Login from "./website/auth/Login";
import Register from "./website/auth/Register";
import Checkout from "./website/Checkout";
import ListInvoiceAdmin from "./admin/ListInvoiceAdmin";
import ListUserAdmin from "./admin/ListUserAdmin";

// const admin = isAdmin();
const routes = {
  // if(admin){
    //website
    "/": Home,
    "/shop": Shop,
    "/shopdetails/:id": ShopDetails,
    "/category/:id": Category,
    "/shopcart":ShopCart,
    "/login": Login,
    "/register": Register,
    "/checkout": Checkout,

  // admin
    //Home
      "/admin": HomeAdmin,
    //cate
      "/listcateadmin": ListCateAdmin,
      "/adminaddcate": AddCateAdmin,
      "/admineditcate/:id": EditCateAdmin,
    //product
      "/listproductadmin": ListProductAdmin,
      "/adminaddproduct": AddProductAdmin,
      "/admineditproduct/:id": EditProductAdmin,
    //invoices
      "/listinvoice": ListInvoiceAdmin,
    //user
      "/listuser": ListUserAdmin,
  // }else{
  //website
    "/": Home,
    "/shop": Shop,
    "/shopdetails/:id": ShopDetails,
    "/category/:id": Category,
    "/shopcart":ShopCart,
    "/login": Login,
    "/register": Register,
    "/checkout": Checkout,

    // }
  };
const router = async () => {
    const { resource, id ,action} = parseRequestUrl();
    const parseURL = (resource ? `/${resource}` : "/") + (id ? `/:id` : "") + (action ? `/${action}` : "") ;
    // console.log(parseURL);
    const page = routes[parseURL] ? routes[parseURL] : Error404Page ;
    
    $("#root").innerHTML = await page.render();
    
    if( page.afterRender){
  
      await page.afterRender();
  
      }

    

  };
  
  
  window.addEventListener("DOMContentLoaded", router);
  
  window.addEventListener("hashchange", router);
  