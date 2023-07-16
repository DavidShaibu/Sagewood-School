import ContactDetails from "./ContactDetails/ContactDetails"
import NavBar from "./Nav/NavBar"


const Header = () => {
  return (
    <header className="header">
        <ContactDetails />
        <NavBar />
    </header>
  )
}

export default Header