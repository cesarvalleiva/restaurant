import Hamburguesa2 from '../../assets/img/hamburguesa2.png'
import Hamburguesa3 from '../../assets/img/hamburguesa3.png'
import Hamburguesa4 from '../../assets/img/hamburguesa4.png'
import './Opciones.css'

const Opciones = () => {
    return ( 
        <div className='containerOpciones'>
            <h2>Las más buscadas</h2>
            <div className='container contenedorOpciones'>
                <div className="card shadow buscadas">
                    <img src="https://i.pinimg.com/originals/76/e6/e8/76e6e8253a7b5225f4d0ddfe37b0faaf.jpg" className="card-img-top imgOpciones" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div className='d-flex justify-content-between'>
                            <p className="precio">$790</p>
                            <a href="#" className="btn btn-warning">Ordenar</a>
                        </div>
                    </div>
                </div>
                <div className="card shadow buscadas">
                    <img src={Hamburguesa2} className="card-img-top imgOpciones" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div className='d-flex justify-content-between'>
                            <p className="precio">$590</p>
                            <a href="#" className="btn btn-warning">Ordenar</a>
                        </div>
                    </div>
                </div>
                <div className="card shadow buscadas">
                    <img src={Hamburguesa3} className="card-img-top imgOpciones" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div className='d-flex justify-content-between'>
                            <p className="precio">$650</p>
                            <a href="#" className="btn btn-warning">Ordenar</a>
                        </div>
                    </div>
                </div>
                <div className="card shadow buscadas">
                    <img src={Hamburguesa4} className="card-img-top imgOpciones" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div className='d-flex justify-content-between'>
                            <p className="precio">$890</p>
                            <a href="#" className="btn btn-warning">Ordenar</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Opciones;