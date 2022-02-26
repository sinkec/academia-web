import "./NavbarMenu.css";

const NavbarMenu = () => {
  return (
    <div className="navbar-menu-middle">
      <ul>
        <li>
          <img src="img/SVG/home-outline.svg" alt="" />
        </li>
        <li>
          <a href="">Predmetnik</a>
        </li>
        <li>
          <a href="">CoLab</a>
        </li>
        <li>
          <a href="">Portfolio</a>
        </li>
        <li>
          <a href="">Študentje</a>
        </li>
      </ul>
    </div>
  );
};

export default NavbarMenu;
