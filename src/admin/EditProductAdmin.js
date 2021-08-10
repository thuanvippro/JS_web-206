import footer from "./layout/footer";
import header from "./layout/header";
import {$ , reRender, parseRequestUrl} from "../utils";
import CateApi from "../api/CateApi";
import ProductApi from "../api/ProductApi";
import ListProductAdmin from "./ListProductAdmin";
import firebase from "../firebase";

const EditProductAdmin = {
    async render() {

        const { id } = parseRequestUrl();
        const { data: product } = await ProductApi.get(id);
        const { data: categories } = await CateApi.getAll();
        const resultsCate = await categories.map((val, index) => {
            return /*html*/ `
                <option value="${val.id}" ${product.categoryId == val.id ? "selected" : ""}>${val.name}</option>
            `
        })

        return /*html*/ `
            <div class="container-fluid" style='background-color: #F1F2F7; width:100%;'>
                <div class="row">
                    ${await header.render()}
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
                                    <label class="label-home" for="">home / <span>Product</span></label>
                                </div>   
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="card">
                                <div class="card-header" style="line-height: 38px;" >
                                    <strong class="card-title" >Add new</strong>         
                                </div>
                                <div class="card-body">
                                    <form action="" id="form-add">
                                        <div class="row">
                                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                <div class="form-group">
                                                    <input id="namePd" type="text" value="${product.name}" class="form-control" placeholder="Your name"  >
                                                    <div class="form-ms"></div>
                                                </div>
                                                <div class="form-group">
                                                    <input id="pricePd" type="number" value="${product.price}" class="form-control" placeholder="Your Price"  >
                                                    <div class="form-message"></div>
                                                </div>
                                                <div class="form-group">
                                                    <input id="quantityPd" type="number" value="${product.quantity}" class="form-control" placeholder="Your quantity"  >
                                                    <div class="form-messageqtt"></div>
                                                </div>
                                                <div class="form-group">
                                                    <label for="">Category : </label>
                                                    <select class="form-select cate-pd" id="catePd" value="${product.categoryId == categories.id}" aria-label="select example">
                                                        <option value=""  style='color:gray;'> Chọn danh mục</option>

                                                        ${resultsCate}   
                                                            
                                                    </select>
                                                    <div class="form-messagedm"></div>
                                                </div>
                                                <div class="form-group">
                                                    <span for=""> Description :</span>
                                                </div>
                                                <input id="descriptionPd" type="text" class="form-control" placeholder="Your description" value="${product.description}" >
                                                <div class="form-messagedc"></div>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                <div class="form-group alert-up-pd">
                                                    <div class="file-upload">
                                                        <button class="file-upload-btn" onclick="$('.file-upload-input').trigger( 'click' )" type="button">Add Your Avatar</button>
                                                        <div style="width: 100%;">
                                                        <div class="img-av">
                                                            <img src="${product.image}" alt="">
                                                        </div>
                                                        <div class="image-upload-wrap" style="float: right;width: 50%;">
                                                            <input class="file-upload-input"  id="imagePd" type="file" onchange="readURL(this);" />
                                                            <div class="drag-text">
                                                                <h3><i class="fas fa-download fa-2x" ></i> <br> Drag and drop a file or select add Image</h3>
                                                            </div>
                                                            <div class="form-messageim"></div>
                                                        </div>
                                                        <div class="file-upload-content">
                                                            <img class="file-upload-image" type="file"  src="" alt="your image" />
                                                            <div class="image-title-wrap">
                                                                <button type="button" onclick="removeUpload()" class="remove-image">Remove <span class="image-title">Uploaded Image</span></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="payment-adress">
                                                    <center>
                                                        <button type="submit" id="btn-submit"  class="btn btn-primary btn-sbmt ">Submit</button>
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
        const { id } = parseRequestUrl();
        const { data: product } = await ProductApi.get(id);
        $("#form-add").addEventListener("submit",async function(e){
            e.preventDefault();
            const nameV = $("#namePd").value;
            const priceV = $("#pricePd").value;
            const quantityV = $("#quantityPd").value;
            const descriptionV = $("#descriptionPd").value;
            const cateV = $("#catePd").value;
            const imageV = $("#imagePd").files[0];
            if(nameV == ""){
                $(".form-ms").innerText = "bạn chưa nhập tên";
                $(".form-ms").style.color = "red";
            }else if(priceV ==""){
                $(".form-message").innerText = "bạn chưa nhập giá";
                $(".form-message").style.color = "red";
            }else if(quantityV ==""){
                $(".form-messageqtt").innerText = "bạn chưa nhập số lượng";
                $(".form-messageqtt").style.color = "red";
            }else if(cateV ==""){
                $(".form-messagedm").innerText = "bạn chưa chọn danh mục";
                $(".form-messagedm").style.color = "red";
            }else if(descriptionV ==""){
                $(".form-messagedc").innerText = "bạn chưa nhập mô tả";
                $(".form-messagedc").style.color = "red";
            }
            else if(imageV =="" && imageV == null){
                $(".form-messageim").innerText = "bạn chưa chọn ảnh";
                $(".form-messageim").style.color = "red";
            }else{
                console.log(imageV);
                if(imageV){
                    let storageRef = firebase.storage().ref(`image/${imageV.name}`);
                    storageRef.put(imageV).then(function () {
                        storageRef.getDownloadURL().then((url) => {
                            const data = {
                                name: nameV,
                                price: priceV,
                                quantity: quantityV,
                                description: descriptionV,
                                categoryId: cateV,
                                image: url,
                            };
                            ProductApi.update(id, data);
                            window.location.hash = "/listproductadmin";
                            setTimeout(function () {
                                location.reload();
                            },300);
                        })
                    });
                }else{
                    console.log("2")
                    const data = {
                        name: nameV,
                        price: priceV,
                        quantity: quantityV,
                        description: descriptionV,
                        categoryId: cateV,
                        image: product.image,
                    };
                    await ProductApi.update(id, data);
                    window.location.hash = "/listproductadmin";
                    setTimeout(function () {
                        location.reload();
                    },300);
                }
            }
        })
    }
};
export default EditProductAdmin;
