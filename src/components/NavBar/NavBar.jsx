import { Link } from "react-router"

const NavBar = () => {

    return(
        <>
            <Link to='/'>Home</Link>
            <Link to='/mailboxes'>Mailboxes</Link>
            <Link to='/new-mailbox'>New Mailbox</Link>
        </>
    )
}

export default NavBar