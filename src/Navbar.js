import NavbarMenu from "./NavbarMenu";
import ProfileCard from "./ProfileCard";

const Navbar = () => {
    return ( 
        <div className="navbar">

            <h1>Academia Logo</h1>
            <NavbarMenu/>
            <ProfileCard/>
        </div>
     );
}
 
export default Navbar;