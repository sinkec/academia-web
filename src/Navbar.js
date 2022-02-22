import './CSS/Navbar.css';
import NavbarMenu from "./NavbarMenu";
import ProfileCard from "./ProfileCard";

const Navbar = () => {
    return ( 
        <div className="navbar">

            <img src="img/SVG/Logo.svg" className="logo-left"></img>

            <NavbarMenu/>
            <ProfileCard/>
        </div>
     );
}
 
export default Navbar;