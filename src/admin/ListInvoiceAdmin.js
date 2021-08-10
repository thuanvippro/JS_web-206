import footer from './layout/footer';
import header from './layout/header';
import { $, reRender } from "../utils.js";
import InvoiceApi from '../api/InvoiceApi';


const ListInvoiceAdmin = {
    async render(){
        try {
            const { data: invoices } = await InvoiceApi.getAll();
                // console.log(invoices.slice(0,2));
            const result = await invoices.map((invoices, index) => {
                return /*html */`
                    <tr>
                        <td>${index}</td>
                        <td>${invoices.name}</td> 
                        <td>${invoices.phone}</td>
                        <td>${invoices.email}</td>
                        <td style="width: 140px;">${invoices.address}</td>
                        <td style="width: 140px;">${invoices.note}</td>
                        <td>${invoices.cartPro}</td>
                        <td>${new Intl.NumberFormat('ja-JP').format(invoices.totalPrice)}</td>
                        <td>${invoices.payment == 1 ?'Cash':'Visit Card'}</td>
                        <td>${invoices.confirm == 1 ?' <button style="border-radius: 6px;" type="button" class="btn btn-danger"> chưa xác nhận </button>':'  <button style="border-radius: 6px;" type="button" class="btn btn-success"> đã xác nhận </button>'}</td>
                        <td>
                        <a href="/#/admineditinvoice/${invoices.id}"> <button style="border-radius: 6px;" type="button" class="btn btn-secondary"><i class="far fa-edit" ></i></button></a>
                        <button style="border-radius: 6px;" data-id="${invoices.id}" type="button" class="btn btn-danger btn-remove"> <i class="fas fa-trash-alt"></i></button>
                        </td>
                    </tr>
                `
            }).join("");


        return /*html*/`
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
                                <label class="label-home" for="">home / <span>Invoices</span></label>
                            </div>   
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-header" style="line-height: 38px;" >
                                <strong class="card-title" >Invoice Data Table</strong> 
                                <div style="float: right;  "> 
                                </div>
                            </div>
                            <div class="card-body">
                                <table id="bootstrap-data-table-export" class="table table-striped table-bordered">
                                    <thead>
                                        <tr>
                                            <th>No.</th>
                                            <th>Name</th>
                                            <th>Phone</th>
                                            <th>Email </th>
                                            <th>Address </th>
                                            <th>Product</th>
                                            <th>Note</th>
                                            <th>Total Price</th>
                                            <th>Payment</th>
                                            <th>Confirm</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                    <!-- .tr>td LIST-->
                                    ${result}
                                    <!-- .tr>td LIST -->


                                    </tbody>
                                </table>
                                <div class="btn-group me-2" role="group" aria-label="Second group">
                                    <button style="border-radius: 5px  0px 0px 5px ;"  type="button" class="btn btn-primary" id="button_prev"><</button>
                                    <button    class="btn btn-primary"  id="page_number">1 </button>
                                
                                    <button style="border-radius: 0px  5px 5px 0px ;"  type="button" class="btn btn-primary" id="button_next">></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <!-- .footer -->
    ${await  footer.render()}
            <!-- .footer -->
            </div>

            </div>

            </div>
            `
        }catch (error) {
            console.log(error);
        }
    },
}
export default ListInvoiceAdmin;