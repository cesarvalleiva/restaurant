import Creacion from '../../components/Creacion/Creacion';
import Footer from '../../components/Footer';
import Buscadas from '../../components/Opciones/Buscadas';
import Portada from '../../components/Portada/Portada';
import Premium from '../../components/Premium';
import './Home.css'

const Home = () => {
    return ( 
        <>
            <Portada />
            <Buscadas />
            <Premium />
            <Creacion />
            <Footer />
        </>
     );
}
 
export default Home;