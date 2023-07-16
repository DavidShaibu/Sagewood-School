interface Dropdown {
    name: string;
    to: string;
}

interface Props {
    className: string;
    entries: Dropdown[];
    onClick: () => void;
}
const MenuIcon = ({ className, entries, onClick }:Props) => {
  return (
    <div className={className} onClick={onClick}>&#9776;</div>
  )
}

export default MenuIcon