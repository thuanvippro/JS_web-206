import { $ } from '../../utils';
import UserApi from '../../api/UserApi';

const Register = {
    async render() {
        return /*html*/`
            <div class="container">

                <div class="card o-hidden border-0 shadow-lg my-5">
                    <div class="card-body p-0">
                        <!-- Nested Row within Card Body -->
                        <div class="row">
                            <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
                            <div class="col-lg-7">
                                <div class="p-5">
                                    <div class="text-center">
                                        <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
                                    </div>
                                    <form class="user" id="form-register">
                                        <div class="form-group row">
                                            <div class="col-sm-6 mb-3 mb-sm-0">
                                                <input type="text" class="form-control form-control-user" id="exampleFirstName"
                                                    placeholder="First Name">
                                            </div>
                                            <div class="col-sm-6">
                                                <input type="text" class="form-control form-control-user" id="exampleLastName"
                                                    placeholder="Last Name">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <input type="email" class="form-control form-control-user" id="exampleInputEmail"
                                                placeholder="Email Address">
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-sm-6 mb-3 mb-sm-0">
                                                <input type="password" class="form-control form-control-user"
                                                    id="exampleInputPassword" placeholder="Password">
                                            </div>
                                            <div class="col-sm-6">
                                                <input type="password" class="form-control form-control-user"
                                                    id="exampleRepeatPassword" placeholder="Repeat Password">
                                            </div>
                                        </div>
                                        <div class="payment-adress">
                                                <center>
                                                    <button type="submit"  class="btn btn-primary btn-sbmt ">Register</button>
                                                </center>   
                                                </div>
                                        <hr>
                                        <a href="index.html" class="btn btn-google btn-user btn-block">
                                            <i class="fab fa-google fa-fw"></i> Register with Google
                                        </a>
                                        <a href="index.html" class="btn btn-facebook btn-user btn-block">
                                            <i class="fab fa-facebook-f fa-fw"></i> Register with Facebook
                                        </a>
                                    </form>
                                    <hr>
                                    <div class="text-center">
                                        <a class="small" href="forgot-password.html">Forgot Password?</a>
                                    </div>
                                    <div class="text-center">
                                        <a class="small" href="#/login">Already have an account? Login!</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        `
    },
    async afterRender(){
        $("#form-register").addEventListener("submit",async function(e){
            
            console.log("ok");
            let name = $("#exampleFirstName").value;
            let ho = $("#exampleLastName").value;
            let emai = $("#exampleInputEmail").value;
            let pass = $("#exampleInputPassword").value;
            let ro = 1;
            
            // if( name == ""){
            //     $("#exampleFirstName1").border.color = "red";
            // }else if( ho == ""){
            //     $("#exampleLastName").style.color = "red";
            // }else if( emai == ""){
            //     $("#exampleInputEmail").style.color = "red";
            // }else if( pass == ""){
            //     $("#exampleInputPassword").style.color = "red";
            // }else{}
            e.preventDefault();
                const data = {
                    firstName: name,
                    lastName: ho,
                    email: emai,
                    password: pass,
                    role: ro,
                }
                console.log(data)
                await UserApi.add(data);
                alert("dang ki thanh cong")
                setTimeout(function(){
                    window.location.hash = "/login";
                    location.reload();
                },500)
        })
    }
}
export default Register;