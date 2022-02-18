import MenuDesktop from "../menus/MenuDesktop";
import MenuMobile from "../menus/MenuMobile";

function NavBar() {
    return (
      <div>
        <MenuDesktop />
        <MenuMobile />
      </div>
    );
  }
  
  export default NavBar;