import logo from "../Assets/logo.svg"
import sampleAvatar from "../Assets/sampleAvatar.svg"

export default function NavBar(){
    return(
        <div id="navBar" className="flex flex-row spaceBetween">
                <div id="navbarLeft">
                    <img src={logo} alt="Clerky Logo Image" id="navbarLogoImage" />
                </div>
                <div id="navbarRight" className="flex flex-row center">
                    <div className="navButtons red">
                        <i className="fa-solid fa-lock"></i>
                    </div>
                    <div className="navButtons green">
                        <i className="fa-solid fa-expand"></i>
                    </div>
                    <div className="navButtons blue">
                        <i className="fa-solid fa-sun"></i>
                    </div>

                    <div id="profileLogo"></div>
                </div>
            </div>
    );
}