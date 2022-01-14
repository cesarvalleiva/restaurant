import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo4.png'
import './Navbar.css'

const Navbar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src={Logo} alt="Logo Restaurant" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active text-warning" aria-current="page" to="/">Greelow</Link>
                        </li>
                    </ul>
                    <span className="navbar-text text-warning">
                        Buscanos en Instagram
                    </span>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;