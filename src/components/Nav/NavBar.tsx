import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "./assets/sage.png";
import MenuIcon from "./MenuIcon";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const [mobileDisplay, setMobileDisplay] = useState(window.innerWidth < 800);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setDropdownVisible((prevState) => !prevState);
  };

  const closeDropdown = (event: MouseEvent) => {
    if (
      isDropdownVisible === false &&
      (!navRef.current?.contains(event.target as Node) ||
        (event.target as HTMLElement).tagName.toLowerCase() === "a")
    ) {
      setDropdownVisible(false);
    }
  };

  const routes = [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "About",
      to: "/about",
    },
    {
      name: "Gallery",
      to: "/gallery",
    },
    {
      name: "Contact Us",
      to: "/contact-us",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setMobileDisplay(screenWidth < 800);
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    document.addEventListener("click", closeDropdown);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("click", closeDropdown);
    };
  }, []);

  return (
    <>
      <nav className={styles.navContainer}>
        <div className={styles.logo}>
          <img src={logo} alt="A logo of sagewoods school" />
        </div>
        <div className="nav" ref={navRef} onClick={() => closeDropdown}>
          {mobileDisplay ? (
            <MenuIcon
              onClick={toggleDropdown}
              className={styles.menuIcon}
              entries={routes}
            />
          ) : (
            routes.map((route, index) => (
              <NavLink className="navLinks" key={index} to={route.to}>
                {route.name}
              </NavLink>
            ))
          )}
        </div>
      </nav>

      {mobileDisplay && isDropdownVisible && (
        <div className="dropdown">
          {routes.map((route, index) => (
            <NavLink className="dropdownLinks" key={index} to={route.to}>
              {route.name}
            </NavLink>
          ))}
        </div>
      )}
    </>
  );
};

export default NavBar;
