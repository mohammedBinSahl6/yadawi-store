import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <nav className="navbar navbar-expand-sm navbar-dark fixed-top" >
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Logo</a>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">About</a>
                    </li>
                    <li className="nav-item">
                        <Link to='/shop' className="nav-link">Shop</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/cart'><i class='bx bxs-shopping-bag-alt'></i></Link>
                    </li>
                </ul>
            </div>
         
        </nav>
    )
}