import "./sidenavbar.css"
import { BiLogOut, BiLogOutCircle } from 'react-icons/bi'
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
        // navigate("/timeline");
    }
    const onMessageButton = () => {
        // navigate("/timeline");
    }
    const onLogoutButton = () => {
        // navigate("/timeline");
    }


    return <div id="sidenavbar-main">
        <div id="sidenavbar-content">
            <div id="sidenavbar-button"> <center> <BiLogOutCircle size={23}/> LOGO-example </center> </div>
            <div id="sidenavbar-button"> <center> <AiOutlineHome size={23}/> Home </center> </div>
            <div id="sidenavbar-button"> <center> <AiOutlineProfile size={23}/> Profile </center> </div>
            <div id="sidenavbar-button"> <center> <AiOutlineMessage size={23}/> Message </center> </div>
            <div id="sidenavbar-button"> <center> <BiLogOut size={23}/> Logout </center> </div>
        </div>
        
    </div>
}

export default SideNavbar;