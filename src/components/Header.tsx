import ContactDetails from "./ContactDetails/ContactDetails"
import NavBar from "./Nav/NavBar"


const Header = () => {
  return (
    <div className="header">
        <ContactDetails />
        <NavBar />
    </div>
  )
}

export default Header