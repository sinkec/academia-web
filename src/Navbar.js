import './CSS/Navbar.css';
import NavbarMenu from "./NavbarMenu";
import ProfileCard from "./ProfileCard";

const Navbar = () => {
    return ( 
        <div className="navbar">

            <div className="logo-left">
                LOGO
            </div>
            <NavbarMenu/>
            <ProfileCard/>
        </div>
     );
}
 
export default Navbar;