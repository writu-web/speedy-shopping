import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <nav>
            <ul>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/cart">Cart</Link>
                <Link to="/products">Products</Link>
                <Link to="/users">Users</Link>
            </ul>
        </nav>
    )
}

export default Nav