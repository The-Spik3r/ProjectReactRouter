import { Link } from "react-router-dom";
import { styled } from "styled-components"

const Nav = styled.nav`
  width:15%;
  background-color: #fff;
` 

const Menu = () => {
    return (
      <Nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/opciones">Opciones</Link>
          </li>
        </ul>
      </Nav>
    );
};
export default Menu