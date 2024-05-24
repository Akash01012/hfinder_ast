import { GoogleLogin } from 'react-google-login';
import './login.css'

const clientID = "713497724686-adsqr18kc5kr48urt7eg5uv2opev68l1.apps.googleusercontent.com"

function Login({onLogin}) {

     
    const handleGoogleLoginSuccess = (res) => {
        
        onLogin(res);
      };

      const handleGoogleLoginFailure = (error) => {
        
        console.log('Google login failed:', error);
      };

    return (
        <>


            <div class="container" id="container">

                {/* <div class="form-container sign-up">
                    <form>
                        <h1>Create Account</h1>
                        <div class="social-icons">
                            <a href="#" class="icon"><i class="fa-brands fa-google-plus-g"></i></a>
                            <a href="#" class="icon"><i class="fa-brands fa-facebook-f"></i></a>
                            <a href="#" class="icon"><i class="fa-brands fa-github"></i></a>
                            <a href="#" class="icon"><i class="fa-brands fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your email for registration</span>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button>Sign Up</button>
                    </form>
                </div> */}
                <div class="form-container sign-in">
                    <form>
                        <h1>Sign In</h1>
                        <div id='social' class="social-icons">
                            <a href="#" class="icon"><i class="fa-brands fa-google-plus-g"></i></a>
                            
                            <a href="#" class="icon"><i class="fa-brands fa-facebook-f"></i></a>
                            <a href="#" class="icon"><i class="fa-brands fa-github"></i></a>
                            <a href="#" class="icon"><i class="fa-brands fa-linkedin-in"></i></a>
                        </div>
                        <h5>or use your email password</h5>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <a href="#">Forget Your Password?</a>
                        <button>Sign In</button>
                        <div id="signInButton">
                                <GoogleLogin

                                    clientId={clientID}
                                    buttonText="Sign in with Google"
                                    onSuccess={handleGoogleLoginSuccess}
                                    onFailure={handleGoogleLoginFailure}
                                    cookiePolicy={'single_host_origin'}
                                    isSignedIn={true}
                                    className="google-login-button"
                                />
                            </div>
                    </form>
                    
                </div>
                {/* <div class="toggle-container">
                    <div class="toggle">
                        <div class="toggle-panel toggle-left">
                            <h1>Welcome Back!</h1>
                            <p>Enter your personal details to use all site features</p>
                            <button class="hidden" id="login">Sign In</button>

                        </div>
                        <div class="toggle-panel toggle-right">
                            <h1>Hello, Friend!</h1>
                            <p>Register with your personal details to use all site features</p>
                            <button class="hidden" id="register">Sign Up</button>
                        </div>
                    </div>
                </div> */}
            </div>

        </>
    )
}
export default Login;