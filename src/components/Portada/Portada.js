import Hamburguesa from '../../assets/img/hamburguesaPortada.png';
import './Portada.css'

const Portada = () => {
    return ( 
        <div className='contenedorPortada'>
            <div className='container contenedorInfoPortada'>
                <div className='contenedorImagenPortada'>
                    <img src={Hamburguesa} alt="Hamburguesa" className='hamburguesaPortada mt-3' />
                </div>
                <div className='contenedorTextoPortada'>
                    <h1>Bulldog Restaurant</h1>
                    <h2>Vení a probar las mejores burgers</h2>
                </div>
            </div>
        </div>
     );
}
 
export default Portada;