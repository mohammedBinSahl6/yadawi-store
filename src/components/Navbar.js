import { Link } from "react-router-dom";
import whiteLogo from '../imgs/white-logo.svg'

export default function Navbar(){
    return(
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top" >
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img className="logo" src={whiteLogo} />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/about' className="nav-link">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/shop' className="nav-link">Shop</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/contact' className="nav-link">Contact</Link>
                    </li>
                    <li className="nav-item cart-nav">
                        <Link className="nav-link" to='/cart'><i className='bx bxs-shopping-bag-alt'></i></Link>
                    </li>
                </ul>
                </div>
            </div>
         
        </nav>
    )
}