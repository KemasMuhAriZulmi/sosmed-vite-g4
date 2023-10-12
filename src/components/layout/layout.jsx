import SideNavbar from "../sidenavbar/sidenavbar";
import "./layout.css"

const LayoutPage = (props) => {

    return <div id="layoutpage-main">
        <SideNavbar></SideNavbar>

        <div id="layoutpage-children">
            {props.children}
        </div>

    </div>
    
}

export default LayoutPage;