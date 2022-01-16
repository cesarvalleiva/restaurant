import { useContext, useEffect } from 'react'
import Hamburguesa2 from '../../assets/img/hamburguesa2.png'
import Hamburguesa3 from '../../assets/img/hamburguesa3.png'
import Hamburguesa4 from '../../assets/img/hamburguesa4.png'
import { Context } from '../../store/burgerContext'
import './Buscadas.css'

const Buscadas = () => {
    const {info, obtenerInfo} = useContext(Context)

    useEffect(() => {
        obtenerInfo('buscadas')
    }, [])

    return ( 
        <div className='containerOpciones'>
            <h2>Las más buscadas</h2>
            <div className='container contenedorOpciones'>
                {info.map(buscada => (
                    <div key={buscada.id} className="card shadow buscadas">
                        <img src="https://i.pinimg.com/originals/76/e6/e8/76e6e8253a7b5225f4d0ddfe37b0faaf.jpg" className="card-img-top imgOpciones" alt={buscada.nombre} />
                        <div className="card-body">
                            <h5 className="card-title h5Buscadas ">{buscada.nombre}</h5>
                            <div className="card-text">{buscada.ingredientes.map((ingre, idx) => (<p className='m-0' key={idx}>{`- ${ingre}`}</p>))}</div>
                            <div className='d-flex justify-content-between mt-4'>
                                <p className="precio">${buscada.precio}</p>
                                <a href="#" className="btn btn-warning">Ordenar</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default Buscadas;