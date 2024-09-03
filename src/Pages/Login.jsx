import "../App.css";
import Logo from "../Assets/logo.svg";

export default function Login(){
    return(
        <div id="loginContainer" className="Container flex flex-row">
            <div className="imageSection">
            </div>
            <div className="formSection flex flex-column spaceBetween">
                <button className="btn btnHalf black right">New to Clerky</button>
                <div id="logoBox" className="flex flex-column">
                    <img src={Logo} id="logoImg" />
                    <p className="titleText">Welcome to Clerky</p>
                    <p className="subText">Every Boss's Favourite</p>
                </div>
                <div id="formBox" className="flex flex-column">
                    <input type="text" placeholder="Email" ></input>
                    <input type="text" placeholder="Password" ></input>
                    <button className="btn blue">Login</button>             
                </div>
                <p className="subText center">Please Sign In to Continue</p>
            </div>
        </div>
    );
}