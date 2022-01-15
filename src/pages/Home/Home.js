import Creacion from '../../components/Creacion/Creacion';
import Footer from '../../components/Footer';
import Opciones from '../../components/Opciones/Opciones';
import Portada from '../../components/Portada/Portada';
import Premium from '../../components/Premium';
import './Home.css'

const Home = () => {
    return ( 
        <>
            <Portada />
            <Opciones />
            <Premium />
            <Creacion />
            <Footer />
        </>
     );
}
 
export default Home;