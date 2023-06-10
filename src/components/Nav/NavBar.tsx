import logo from "./assets/sage.png";
import styles from "./NavBar.module.css";


const NavBar = () => {
  return (
    <div className={styles.logo}>
        <img src={logo} alt="A logo of sagewoods school"/>
    </div>
  )
}

export default NavBar