import Logo from '../../assets/img/logo.png'
import Facebook from '../../assets/img/facebookNavbar.png'
import Instagram from '../../assets/img/instagramNavbar.png'
import './Navbar.css'

const Navbar = () => {
    return ( 
        <div className='contenedorNavbar'>
            <div className='container d-flex justify-content-between'>
                <div className='containerLogo'>
                    <img src={Logo} alt="Logo Bulldog" />
                    <h1>Bulldog</h1>
                </div>
                <div className='redesSocialesNavbar'>
                    <img src={Instagram} alt="Instagram" />
                    <img src={Facebook} alt="Facebook" />
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;