import UserApi from '../../api/UserApi';
import { $ } from '../../utils';
import jwt_decode from "jwt-decode";

const Login = {
    async render() {
        return /*html*/ `
            <div class="container">

            <!-- Outer Row -->
                <div class="row justify-content-center">

                    <div class="col-xl-10 col-lg-12 col-md-9">

                        <div class="card o-hidden border-0 shadow-lg my-5">
                            <div class="card-body p-0">
                                <!-- Nested Row within Card Body -->
                                <div class="row">
                                    <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                                    <div class="col-lg-6">
                                        <div class="p-5">
                                            <div class="text-center">
                                                <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                            </div>
                                            <form class="user" id="form-login">
                                                <div class="form-group">
                                                    <input type="email" class="form-control form-control-user"
                                                        id="exampleInputEmail" aria-describedby="emailHelp"
                                                        value="aaa@gmail.com"
                                                        placeholder="Enter Email Address...">
                                                </div>
                                                <div class="form-group">
                                                    <input type="password" class="form-control form-control-user"
                                                        id="exampleInputPassword"
                                                        value="12345"
                                                        placeholder="Password">
                                                </div>
                                                <div class="form-group">
                                                    <div class="custom-control custom-checkbox small">
                                                        <input type="checkbox" class="custom-control-input" id="customCheck">
                                                        <label class="custom-control-label" for="customCheck">Remember
                                                            Me</label>
                                                    </div>
                                                </div>
                                                <div class="payment-adress">
                                                <center>
                                                    <button type="submit"  class="btn btn-primary btn-sbmt ">Login</button>
                                                </center>   
                                                </div>
                                        <hr>
                                                <hr>
                                                <a href="index.html" class="btn btn-google btn-user btn-block">
                                                    <i class="fab fa-google fa-fw"></i> Login with Google
                                                </a>
                                                <a href="index.html" class="btn btn-facebook btn-user btn-block">
                                                    <i class="fab fa-facebook-f fa-fw"></i> Login with Facebook
                                                </a>
                                            </form>
                                            <hr>
                                            <div class="text-center">
                                                <a class="small" href="#/">về trang chủ</a>
                                            </div>
                                            <div class="text-center">
                                                <a class="small" href="#/register">Create an Account!</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        `
    },
    afterRender() {
        $("#form-login").addEventListener("submit", async function(e){
            e.preventDefault();
            try {
                const email = $("#exampleInputEmail").value;
                const password = $("#exampleInputPassword").value;
                const data = {
                    email: email,
                    password: password,
                }
                
                const { data: access } = await UserApi.login(data);
                console.log(access.accessToken);
                const decode = jwt_decode(access.accessToken);
                localStorage.setItem("token", access.accessToken);
                localStorage.setItem("user", JSON.stringify(decode));
                alert("dang nhap thanh cong")
                setTimeout(function(){
                    window.location.hash = "/shop";
                    location.reload();
                },500)
            } catch (error) {
                console.log("tai khoan va mat khau khong dung");
            }
        })
    }
}
export default Login;