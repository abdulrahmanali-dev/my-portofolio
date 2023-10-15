import React, { useEffect, useState } from "react";
import "./Header.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
function Header() {
  const [active, setActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);
  return (
    // <nav
    //   className={`p-4 navbar navbar-expand-lg navbar-light  ${
    //     active ? "sticky" : ""
    //   }`}
    // >
    //   <div className="container">
    //     <a className="navbar-brand hover_line" href="#">
    //       ABDO.
    //     </a>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarSupportedContent"
    //       aria-controls="navbarSupportedContent"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //       <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
    //         <li className="nav-item hover_line">
    //           <a data-section=".skills" className="nav-link" href="#skills">
    //             Skills
    //           </a>
    //         </li>
    //         <li className="nav-item hover_line">
    //           <a
    //             data-section=".projects"
    //             className="nav-link"
    //             aria-current="page"
    //             href="#projects"
    //           >
    //             Projects
    //           </a>
    //         </li>
    //         <li className="nav-item hover_line">
    //           <a data-section=".contact" className="nav-link" href="#contact">
    //             Contact
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
    <div>
      <Navbar
        container
        fixed="fixed"
        expand="lg"
        className={`p-4 ${active && "sticky"}`}
      >
        <NavbarBrand href="#" className="hover_line">
          ABDO.
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink className="hover_line" href="#skills">
                Skills
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="hover_line" href="#projects">
                Projects
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="hover_line" href="#contact">
                Contact
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
export default Header;
