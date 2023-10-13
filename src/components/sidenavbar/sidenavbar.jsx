import "./sidenavbar.css"
import { BiLogOut, BiLogOutCircle, BiLogoReact } from 'react-icons/bi'
import { MdOutlineViewTimeline } from 'react-icons/md'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineProfile } from 'react-icons/ai'
import { AiOutlineMessage } from 'react-icons/ai'
import { useNavigate } from "react-router-dom"




const SideNavbar = () => {

    const navigate = useNavigate();

    // ! navbar button function
    const onHomeButton = () => {
        navigate("/timeline");
    }
    const onProfileButton = () => {
        // navigate("/somewhere");
    }
    const onMessageButton = () => {
        // navigate("/somewhere");
    }
    const onLogoutButton = () => {
        // navigate("/somewhere");
    }


    return <div id="sidenavbar-main">
        <div id="sidenavbar-content">
            <div id="sidenavbar-content-2">
                <div id="sidenavbar-button"> <center> <BiLogoReact size={35}/> LOGO </center> </div>
                <div id="sidenavbar-button"> <center> <AiOutlineHome size={23}/> Home </center> </div>
                <div id="sidenavbar-button"> <center> <AiOutlineProfile size={23}/> Profile </center> </div>
                <div id="sidenavbar-button"> <center> <AiOutlineMessage size={23}/> Message </center> </div>
                <div id="sidenavbar-button"> <center> <BiLogOut size={23}/> Logout </center> </div>
            </div>
        </div>
    </div>
}

export default SideNavbar;