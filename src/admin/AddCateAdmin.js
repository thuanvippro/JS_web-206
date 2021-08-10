import footer from "./layout/footer";
import header from "./layout/header";
import CateApi from "../api/CateApi";
import ListCateAdmin from "./ListCateAdmin";
import { $, reRender } from "../utils.js";

const AddCateAdmin = {
    async render() {
        return /*html*/ `
            <div class="container-fluid" style='background-color: #F1F2F7; width:100%;'>
                <div class="row">
                    ${ await header.render()}
                    <div class="content mt-3" >
                        <div class="animated fadeIn">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="row row-search" >
                                        <div class="col-6"> 
                                            <form class="d-flex">
                                                <input style="border-radius: 20px; width: 243px; " class="form-control me-2" type="search" placeholder="Search" >
                                                <button class="btn btn-outline-secondary btn-search-admin " type="submit"><i class="fas fa-search"></i></button>
                                            </form>
                                        </div>
                                        <div class="col-6">
                                            <label class="label-home" for="">home / <span>Cate</span></label>
                                        </div>   
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="card">
                                        <div class="card-header" style="line-height: 38px;" >
                                            <strong class="card-title" >Add new</strong> 
                                        </div>
                                    <div class="card-body">
                                    <form id="form-add"  >
                                        <div class="row">
                                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                <div class="form-group ">
                                                    <input id="name" type="text" class="form-control" placeholder="Your name Cate" >
                                                    <div class="form-message">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="payment-adress">
                                                <center>
                                                    <button type="submit"  class="btn btn-primary btn-sbmt ">Submit</button>
                                                </center>   
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    ${ await footer.render()}
                </div>
            </div>
        `
   },
   async afterRender() {
       $("#form-add").addEventListener("submit", async function(e){
            e.preventDefault();
            const name = $("#name").value;
            if(name == ""){
                $(".form-message").innerText = "Bạn chưa nhập tên";
                $(".form-message").style.color = "red";
            }else{
                const data = {
                    id:Math.random().toString(36).substr(2,9),
                    name:name
                }
                await CateApi.add(data);
                // reRender(ListCateAdmin, "#root");
                setTimeout(function(){
                    window.location.hash = "/listcatetadmin";
                    location.reload();
                },500)
            }
       })
   }
};
export default AddCateAdmin;
