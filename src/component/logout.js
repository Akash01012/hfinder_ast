import { GoogleLogout } from "react-google-login";
import { useNavigate } from "react-router-dom";
const clientID = "713497724686-adsqr18kc5kr48urt7eg5uv2opev68l1.apps.googleusercontent.com"
function Logout(){
   const nevigate = useNavigate();

   const onLogoutSuccess=(res)=>{
        console.log("Logout Successfully");
        nevigate('/');
    }

    return(
    <div id="signOutButton">
      <GoogleLogout
      clientId="clientID"
      buttonText="Logout"
      onLogoutSuccess={onLogoutSuccess}
      
      />
    </div>
    )

}

export default Logout;