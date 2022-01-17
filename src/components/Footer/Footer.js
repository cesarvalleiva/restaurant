import Facebook from '../../assets/img/facebook.png'
import Instagram from '../../assets/img/instagram.png'
import './Footer.css'

const Footer = () => {
    return ( 
        <div className='footer'>
            <div className='container d-flex justify-content-between'>
                <div className="d-flex">
                    <i className="bi bi-envelope me-2 align-items-center"></i>
                    <p>info@bulldogburgers.com</p>
                </div>
                <div className='redesSociales'>
                    <img src={Instagram} alt="Instagram" />
                    <img src={Facebook} alt="Facebook" />
                </div>
            </div>
        </div>
     );
}
 
export default Footer;