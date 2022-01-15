import Creacion from '../../components/Creacion/Creacion';
import Footer from '../../components/Footer';
import Opciones from '../../components/Opciones/Opciones';
import Portada from '../../components/Portada/Portada';
import Premium from '../../components/Premium';
import Promos from '../../components/Promos/Promos';
import './Home.css'

const Home = () => {
    return ( 
        <>
            <Portada />
            <Opciones />
            <Premium />
            {/* <Promos /> */}
            <Creacion />
            <Footer />
        </>
     );
}
 
export default Home;